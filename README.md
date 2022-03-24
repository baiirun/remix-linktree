# Remix-Linktree

`remix-linktree` is a quick proof of concept for showing how easy it is to create a LinkTree-like product using Remix.

## Development

This repo uses Cloudflare Pages, which can be a little confusing. Cloudflare Pages is composed of two parts:

1. A Cloudflare Worker
2. Static asset server for serving files in the `public` directory.

Remix uses both of these mechanisms to handle server + client functionality.

#### Adding Tailwind

Remix does not have task running built out of the box, so we need to manually wire it up in our `npm scripts` or create separate scripts for running dev tasks. For now tailwind is set up in `package.json` for you.

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
pnpm dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.
