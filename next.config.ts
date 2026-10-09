import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Emit every page as static files for Cloudflare Pages.
  output: 'export',
};

export default nextConfig;
