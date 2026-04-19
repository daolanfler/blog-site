<https://blog.daolanfler.workers.dev>

## Deploy

This site is deployed as a static Astro site on Cloudflare Workers.

- Production URL: `https://blog.daolanfler.workers.dev`
- Build command: `pnpm build`
- Build output directory: `dist`
- Deploy command: `npx wrangler@latest deploy`
- Production branch: `main`
- Recommended Cloudflare Pages env vars:
  - `NODE_VERSION=22`
  - `PNPM_VERSION=10.16.1`

The Cloudflare deployment is explicitly configured in `wrangler.jsonc` so the static asset directory does not rely on framework auto-detection.
