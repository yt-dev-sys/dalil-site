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
- Download links: `CONFIG` at the top of `public/js/main.js` — `downloadUrl` (release page, used by every `data-dl` button), `dl64` and `dl32` (direct files).
- Contact: footer of `index.html`.

## Download links (keep them stable)
The site points at a release tagged **`beta`** with fixed asset names:

```
https://github.com/yt-dev-sys/Dalil-Pub/releases/tag/beta
https://github.com/yt-dev-sys/Dalil-Pub/releases/download/beta/Dalil-Beta-64bit.exe
https://github.com/yt-dev-sys/Dalil-Pub/releases/download/beta/Dalil-Beta-32bit.exe
```

For every new beta build: delete the old `beta` release, create a new pre-release with the **same tag `beta`**, upload the two exes **renamed to `Dalil-Beta-64bit.exe` / `Dalil-Beta-32bit.exe`** plus `checksums.txt`. The site never needs editing again.

## Offer shown on the site
- Free trial: **14 days** from first launch (beta build).
- Standard price: **300 MAD/year**.
- Founding price: **150 MAD/year**, locked for life while the licence is renewed without a break.
- Eligibility: **active users only** — installed, indexed at least one folder, ran one search, sent the result screenshot with name/city/phone. Registration alone does not count.
- Seats: **50**. `seatsLeft` must be decremented manually the day a lawyer is verified.


## Update the site with git (lazygit)
1. Edit a file (for example `seatsLeft` in `public/js/main.js`).
2. Open `lazygit`, press `space` on the files to stage, `c` to commit, `P` (capital) to push.
3. If the repo is connected to Cloudflare, it redeploys automatically after the push.

## Update the promo seats
Edit `seatsLeft` at the top of `public/js/main.js`, commit and push. Cloudflare redeploys automatically when the repo is connected.
