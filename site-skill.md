---
name: "site-skill"
description: "Complete documentation for the Dalil website - Arabic search software for Windows"
version: "1.0.0"
---

# Dalil Website - Site Skill

This skill contains comprehensive documentation for the **Dalil** website - a landing page for an Arabic desktop search application for Windows.

---

## Project Overview

**Dalil** (دليل) is a Windows desktop application that searches inside file contents (Word, Excel, PDF, text, Markdown) in Arabic, fully offline. Target audience: lawyers and law firms in Morocco.

- **Live URL**: https://dalil.calvis-software.workers.dev/
- **Repository**: https://github.com/yt-dev-sys/Dalil-Pub
- **Tech Stack**: Static HTML/CSS/JS deployed on Cloudflare Workers
- **Languages**: Arabic (RTL), French, English

---

## File Structure

```
dalil-site/
├── public/
│   ├── index.html          # Main landing page + modals
│   ├── js/main.js          # Configuration, translations, form, interactions
│   ├── css/style.css       # All styling
│   ├── assets/
│   │   ├── favicon.svg
│   │   └── og-image.jpg    # Open Graph image (1200x630)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _headers            # Cloudflare Workers headers config
├── src/worker.js           # Worker: static assets + /api/license-request
├── wrangler.jsonc          # Cloudflare Workers deployment config
├── .dev.vars.example       # Local Telegram secrets template
├── README.md
├── .gitignore
└── site-skill.md           # This file
```

---

## Key Features Implemented

### License Request Automation

- Header / FAQ **"طلب رخصة"** button opens a form modal (no Google Forms, no account).
- Fields: name, city, phone, email (optional), computer code (required, the code shown in the app's activation window), screenshot of search results (optional; used as proof of use for the founding offer).
- The browser compresses the screenshot, `POST`s it to `/api/license-request`.
- A Cloudflare Worker (`src/worker.js`) forwards it to the owner's **Telegram** chat as a photo with a caption containing all fields and a reference ID (`LR-…`); if no screenshot is attached it sends a text message instead.
- Telegram becomes the inbox/archive; the owner only has to issue the license.
- Each message starts with "طلب رخصة جديد" and a tracking reference like `LR-MWBPBD7W-K6MV` (not a licence key, only for search/records).
- Anti-spam: hidden honeypot field + minimum fill time. No database, no KV, no paid service.

### 1. Hero Section
- Headline: "ابحث عن أي كلمة داخل كل ملفاتك"
- Dual CTA: Single "Download Beta" button + "Request license" button
- Live demo window showing search results
- Meta badges: Windows 10/11, 64/32-bit, offline, pricing

### 2. Promo Section (Amber Background)
- Founding member offer: 150 MAD/year instead of 300 (first 50 active users)
- Animated seat counter (50 seats, counts down)
- "How to become active user" CTA linking to FAQ

### 3. Video Section
- YouTube embed (videoId: `apQj7ovwVSE`)
- Lazy-loads thumbnail, loads iframe on play
- "Watch on YouTube" fallback link

### 4. Features Grid (6 Features)
1. **Search inside files** - reads content not just names
2. **Arabic done right** - ignores diacritics, normalizes characters
3. **Instant results** - local index, results while typing
4. **Full privacy** - no cloud, no account, local only
5. **Scanned PDFs** - OCR with Windows Arabic language pack
6. **Three languages** - AR/FR/EN with RTL support

### 5. How It Works (3 Steps)
1. Choose folders
2. Dalil indexes
3. Type a word

### 6. Privacy Section
- Dark navy background
- Emphasizes offline/local-only operation

### 7. FAQ (7 Questions)
All in `<details>` elements for progressive disclosure:
- q0: How to get 150 MAD price (includes WhatsApp, Telegram, built-in licence request form links)
- q1: Pricing details
- q2: Windows SmartScreen warning
- q3: Scanned PDF support
- q4: Mac/mobile support (Windows only)
- q5: Data sent to internet? (No)
- q6: After 14-day trial?

### 8. Header
- Logo + "Dalil" text
- Navigation: Features, How it works, FAQ
- Language switcher (AR/FR/EN)
- **Download Beta** button (opens modal)
- **Request license** button (opens the licence request form modal)

### 9. Footer
- Developer contact: Telegram @Youssef_Touhami, WhatsApp +212 71 673 4889
- Copyright notice

### 10. Sticky WhatsApp FAB
- Fixed bottom-right
- Pre-filled message for beta testers

### 11. Beta Install Modal
- Triggered by "Download Beta" button (hero + header)
- Shows 64-bit and 32-bit options
- Uses direct `.exe` download links from GitHub Releases
- Accessible: focus trap, ESC to close, click overlay to close

### 12. License Request Modal
- Triggered by the header "طلب رخصة" button and the FAQ button
- Fields: name*, city*, phone*, email (optional), computer code*, screenshot (optional)
- Computer code is required and validated as `XXXXXX-XXXXXX-XXXXXX-XXXXXX`
- Screenshot is compressed in the browser and `POST`ed to `/api/license-request`
- Success and error messages are translated in AR/FR/EN
- No Google Form is used anywhere on the site

---

## Configuration (public/js/main.js)

### CONFIG Object
```javascript
{
  downloadUrl: "https://github.com/yt-dev-sys/Dalil-Pub/releases/tag/V1.0.0",
  dl64: "https://github.com/yt-dev-sys/Dalil-Pub/releases/download/V1.0.0/Dalil-Beta-v1.0.7-64bit.exe",
  dl32: "https://github.com/yt-dev-sys/Dalil-Pub/releases/download/V1.0.0/Dalil-Beta-v1.0.7-32bit.exe",
  promoTotal: 50,
  seatsLeft: 50,        // Change this to update remaining seats
  videoId: "apQj7ovwVSE"
}
```

### Translation System (T Object)
Three languages: `ar`, `fr`, `en`
- Keys: 80+ translation strings
- All UI text via `data-i` attributes
- Language persisted in `localStorage` (key: `dalil-lang`)
- HTML `lang` and `dir` attributes updated on switch

### Key Translation Keys
- `licBtn`, `licTitle`, `licDesc` - Licence request button and modal
- `fName`, `fCity`, `fPhone`, `fEmail`, `fMachine`, `fMachineHint`, `fShot` - Form labels and hint
- `licNote`, `licSend`, `licSending`, `licOk`, `licErr`, `licSize`, `licType` - Form notes and status messages
- `modalTitle`, `modalDesc`, `dl64`, `dl32`, `modalNote` - Install modal content
- Updated `promo_cta`, `q0`, `a0`, `q1`, `q6` - Modern Standard Arabic (no Darija)

---

## Styling (public/css/style.css)

### CSS Custom Properties (Root)
```css
--bg: #f6f4ee;        --bg2: #ece8dc;
--ink: #0d1a33;       --mute: #55607a;
--line: #d6d1c2;      --navy: #0d1a33;
--navy2: #16264a;     --amber: #e39a14;
--amber-ink: #8a5a00; --on-navy: #eef1f8;
--hl: #ffd98a;        --hdr: #f6f4ee;
```
Dark mode via `prefers-color-scheme` and `[data-theme="dark"]`

### Key Components
- `.btn` / `.btn.sm` / `.btn.ghost` - Button variants
- `.dl-row` - Download button row
- `.modal-overlay` / `.modal` - Modal styles with animations
- `.modal-form` / `.field` / `.field-row` / `.form-status` - Licence request form
- `.linkbtn` - Inline FAQ button that opens the request form
- `.register-btn` - Dark header request-licence button
- `.promo` / `.seats` / `.grid` - Promo section with animated seats
- `.video` / `.vplay` - Video player
- `.steps` - Numbered steps with CSS counters
- `.wa-fab` - WhatsApp floating action button
- Responsive breakpoints: 480px, 760px, 860px

---

## Deployment

### Cloudflare Workers (wrangler.jsonc)
```jsonc
{
  "name": "dalil",
  "main": "src/worker.js",
  "compatibility_date": "2026-11-01",
  "assets": {
    "directory": "./public",
    "binding": "ASSETS",
    "run_worker_first": ["/api/*"]
  }
}
```

One-time Telegram setup:
1. Create a bot with **@BotFather** and copy its token.
2. Send `/start` to the bot from your own Telegram account.
3. Get your numeric chat id (for example from **@userinfobot**).
4. Store both as Worker secrets:
```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
```
For local testing, copy `.dev.vars.example` to `.dev.vars` and fill the same two values.

Deploy: `npx wrangler deploy`

### License request endpoint
`POST /api/license-request` (multipart/form-data) sends a Telegram `sendPhoto`
(or `sendMessage` if no photo) with: name, city, phone, email, computer code,
reference id and UTC time. Limits: 6 MB upload, required name/city/phone and a
computer code matching `XXXXXX-XXXXXX-XXXXXX-XXXXXX` (hex). The screenshot is
optional and is marked in the message when absent.
Honeypot field `website` and a minimum 1.5 s fill time block casual bots.
If a real image is rejected by Telegram, the Worker falls back to a text-only
message so the request is never lost.

### Cache Busting
- CSS: `css/style.css?v=9`
- JS: `js/main.js?v=9`
- Update version numbers when deploying changes

---

## Recent Changes (November 2026)

1. **License request form**: Header/FAQ "طلب رخصة" button opens a modal; submissions go to Telegram via `src/worker.js`.
2. **Computer code required**: Form and Worker validate `XXXXXX-XXXXXX-XXXXXX-XXXXXX` (the code from the app's activation window).
3. **Screenshot optional**: Only needed as proof of use for the 150 MAD founding offer; the Telegram message notes when it is missing.
4. **Google Form removed**: The old form link, its translation keys (`register`, `regForm`) and all documentation references were deleted.
5. **Single Download Button + Modal**: Hero has one "حمّل النسخة التجريبية" button opening the 32/64-bit modal.
6. **Darija → MSA**: All Arabic text converted to Modern Standard Arabic.
7. **Removed Final CTA Section**: Deleted the "ثبّت دليل اليوم" section.
8. **Modal CSS Fix**: Added `.modal-overlay[hidden]{display:none}` to prevent auto-show.

---

## External Links

| Purpose | URL |
|---------|-----|
| GitHub Releases (downloads) | https://github.com/yt-dev-sys/Dalil-Pub/releases/tag/V1.0.0 |
| 64-bit Direct Download | https://github.com/yt-dev-sys/Dalil-Pub/releases/download/V1.0.0/Dalil-Beta-v1.0.7-64bit.exe |
| 32-bit Direct Download | https://github.com/yt-dev-sys/Dalil-Pub/releases/download/V1.0.0/Dalil-Beta-v1.0.7-32bit.exe |
| YouTube Demo | https://youtu.be/apQj7ovwVSE |
| WhatsApp Contact | https://wa.me/212716734889 |
| Telegram Contact | https://t.me/Youssef_Touhami |

---

## Common Tasks

### Change the Telegram destination
Run `npx wrangler secret put TELEGRAM_CHAT_ID` with the new id (and redeploy if needed).
The bot token and chat id are never in the repository.

### Add or remove license form fields
1. Add the input to `#licForm` in `public/index.html` (and its translation key in all three `T` objects).
2. Read it in `handleLicenseRequest()` in `src/worker.js` and add it to the `lines` array.
3. Bump `css/style.css?v=` / `js/main.js?v=` and deploy.

### Update Promo Seats
Edit `CONFIG.seatsLeft` in `public/js/main.js`

### Update Beta Version
1. Upload new `.exe` files to same GitHub release with same filenames
2. No code changes needed (URLs stay the same)

### Add New Language
1. Add new object to `T` in `main.js` with all keys
2. Add button in header `.lang` div
3. Update `setLang()` for new lang code

### Change Colors
Edit CSS custom properties in `:root` and dark mode sections

### Update Video
Change `CONFIG.videoId` in `main.js` (YouTube ID only)

---

## Browser Support
- Modern browsers (last 2 versions)
- RTL support for Arabic
- `prefers-reduced-motion` respected
- `prefers-color-scheme` for dark mode
- IntersectionObserver for seat counter animation (with fallback)

---

## Accessibility
- Semantic HTML5 (`header`, `main`, `section`, `footer`, `nav`, `details`)
- ARIA labels on icon-only buttons
- `aria-modal`, `aria-labelledby` on modal
- Focus management in modal (trap, restore)
- `hidden` attribute for modal visibility
- Sufficient color contrast
- Keyboard navigation throughout