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

## Download links (verified 9 Nov 2026)
The site points at the **pre-release tagged `V1.0.0`** (case-sensitive). Both files return HTTP 200 and their SHA-256 matches the release's `checksums.txt`:

```
page    https://github.com/yt-dev-sys/Dalil-Pub/releases/tag/V1.0.0
64-bit  https://github.com/yt-dev-sys/Dalil-Pub/releases/download/V1.0.0/Dalil-Beta-v1.0.7-64bit.exe
32-bit  https://github.com/yt-dev-sys/Dalil-Pub/releases/download/V1.0.0/Dalil-Beta-v1.0.7-32bit.exe
```

| File | Size | SHA-256 |
|---|---|---|
| 64-bit | 61 440 008 | `c3e853408a16a53abe429510dd50af157d4e90f8bd60b1a652673d6973716891` |
| 32-bit | 57 569 297 | `15f737b8bad612eb1b51c839a14dadc7040005af1e70c3b9f272ab0ffb257a8e` |

Every one of these URLs is a **direct download**: GitHub answers `302` and the browser saves the `.exe` without opening a GitHub page. The header and footer buttons still open the release page, where the checksums live.

**To ship a new build without editing the site:** edit the existing `V1.0.0` release and upload the new exes under the **same two filenames** (`Dalil-Beta-v1.0.7-64bit.exe` / `-32bit.exe`), plus a fresh `checksums.txt`. The links keep working. Do **not** turn this release into a normal release — keeping it a pre-release is what keeps `/releases/latest` pointing at paid `v1.0.8` for the paid updater.

The `beta` tag mentioned in older notes does not exist; these three URLs above are the live ones.

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
