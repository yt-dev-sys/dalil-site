# Dalil website

Static site (no build step). Everything to deploy is inside `public/`.

```
dalil-site/
├── README.md
├── wrangler.jsonc     (Cloudflare Worker config: serves ./public)
├── .gitignore
├── wrangler.jsonc     (Cloudflare: Worker name + assets folder)
├── .gitignore
└── public/            <- deploy this folder
    ├── index.html
    ├── css/style.css
    ├── js/main.js     (AR / FR / EN texts + language switcher)
    ├── assets/favicon.svg
    ├── _headers       (Cloudflare security + cache headers)
    └── robots.txt
```

## Deploy on Cloudflare Pages

**Dashboard (Git or upload):**
- Framework preset: `None`
- Build command: leave empty
- Build output directory: `public`

**Direct upload from the terminal:**
```
npx wrangler pages deploy public --project-name dalil
```

## Edit
- Texts and translations: `public/js/main.js` (the `T` object). The Arabic text is also written in `index.html` so search engines see it.
- Colors: variables at the top of `public/css/style.css`.
- Download link: search `Dalil-Pub/releases` in `index.html`.
- Contact: footer of `index.html`.

## Update the site with git (lazygit)
1. Edit a file (for example `seatsLeft` in `public/js/main.js`).
2. Open `lazygit`, press `space` on the files to stage, `c` to commit, `P` (capital) to push.
3. If the repo is connected to Cloudflare, it redeploys automatically after the push.

## Update the promo seats
Edit `seatsLeft` at the top of `public/js/main.js`, commit and push. Cloudflare redeploys automatically when the repo is connected.
