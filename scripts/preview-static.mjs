import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../dist/client');
const port = Number(process.env.PORT || 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.rsc': 'text/x-component; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

async function findFile(pathname) {
  const base = resolve(root, `.${pathname}`);
  if (base !== root && !base.startsWith(root + sep)) return null;
  for (const file of [base, `${base}.html`, join(base, 'index.html')]) {
    try {
      const info = await stat(file);
      if (info.isFile()) return { file, size: info.size };
    } catch (error) {
      if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') throw error;
    }
  }
  return null;
}

if (!(await findFile('/index.html'))) {
  throw new Error('Static output is missing. Run npm run build first.');
}

createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const match = await findFile(pathname);
    const asset = match || (await findFile('/404.html'));
    if (!asset) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }
    response.writeHead(match ? 200 : 404, {
      'Content-Type': types[extname(asset.file)] || 'application/octet-stream',
      'Content-Length': asset.size,
      'Cache-Control': 'no-store',
    });
    if (request.method === 'HEAD') response.end();
    else createReadStream(asset.file).pipe(response);
  } catch {
    response.writeHead(400);
    response.end('Bad request');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Static preview: http://127.0.0.1:${port}`);
});
