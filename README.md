# 3MG brand website

A static brand and product showcase, built with React and Vinext. All product
images are included in `public/images`; a Shopify subscription is not required
to serve the website.

## Local development

Use Node.js 22.19.0 (minimum 22.13.0):

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

`next.config.ts` enables static export. The deployable website is generated in
`dist/client`, including HTML for the home page, catalog, contact page, and
each product. Cloudflare Pages serves the generated HTML at the corresponding
clean URLs, including direct visits and refreshes on nested product pages.
Internal links use normal browser navigation so they work without a server-side
router; interactive controls still run in the browser.

Only deploy `dist/client`. Do not upload `dist/server`, source code, or
`node_modules` as website assets.

To preview the exported files locally, including clean URLs and the 404 page:

```bash
npm run preview
```

Open `http://127.0.0.1:4173`. This uses a local static server, not a Worker or
Shopify connection. `npm start` runs the same preview.

## Cloudflare Pages

Create a Pages project connected to this GitHub repository with these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist/client` |
| Root directory | Repository root (leave blank) |
| Environment variable | `NODE_VERSION=22.19.0` |

Use the generated `pages.dev` URL to check the website before binding
`3mg.online` in the Pages project's **Custom domains** settings. Binding the
root domain requires Cloudflare to manage the domain's authoritative DNS.

Push updates to `main` to trigger a new build and deployment. Product content
is in `lib/products.ts`; put additional images in `public/images`.

The checkout includes Sites build integration for local compatibility, but
Cloudflare Pages only needs the exported static assets. No Pages Functions,
database, R2 bucket, or paid Workers plan is required.

## Current functionality

The site is a display-only frontend. Product search, category filters, and quantity
controls run in the browser. Cart buttons, contact forms, and newsletter forms
show local notices; they do not create orders, deliver messages, or store
subscriptions. Hosting the site does not enable these services automatically.
