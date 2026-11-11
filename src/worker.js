/**
 * Dalil site Worker.
 *
 * Serves the static site from ./public and handles the licence request form:
 *   POST /api/license-request  ->  sends a Telegram message/photo to the owner.
 *
 * Required secrets (set with `npx wrangler secret put NAME`):
 *   TELEGRAM_BOT_TOKEN  token from @BotFather
 *   TELEGRAM_CHAT_ID    your numeric chat id (send /start to the bot first)
 */

const MAX_UPLOAD = 6 * 1024 * 1024; // 6 MB, screenshots are compressed in the browser
const MIN_FILL_MS = 1500; // reject instant bot submissions
const MAX_CAPTION = 1000; // Telegram caption limit is 1024

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/license-request") {
      if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);
      return handleLicenseRequest(request, env);
    }

    if (url.pathname.startsWith("/api/")) return json({ error: "not_found" }, 404);

    return env.ASSETS.fetch(request);
  },
};

async function handleLicenseRequest(request, env) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return json({ error: "server_not_configured" }, 500);
  }

  const length = Number(request.headers.get("content-length") || 0);
  if (length > MAX_UPLOAD + 512 * 1024) return json({ error: "too_large" }, 413);

  let form;
  try {
    form = await request.formData();
  } catch (err) {
    return json({ error: "bad_request" }, 400);
  }

  // Honeypot: humans never see or fill this field.
  if (String(form.get("website") || "").trim() !== "") return json({ ok: true });

  const started = Number(form.get("ts") || 0);
  const age = Date.now() - started;
  // Only block instant submissions. A negative age means the client clock is
  // ahead, which is common; do not punish it.
  if (!started || (age >= 0 && age < MIN_FILL_MS)) return json({ error: "too_fast" }, 400);

  const name = clean(form.get("name"), 80);
  const city = clean(form.get("city"), 60);
  const phone = clean(form.get("phone"), 30);
  const email = clean(form.get("email"), 120);
  const machine = clean(form.get("machine"), 80);

  if (!name || !city || !phone) return json({ error: "missing_fields" }, 400);

  const shot = form.get("screenshot");
  const hasPhoto = shot && typeof shot === "object" && typeof shot.size === "number" && shot.size > 0;

  if (!hasPhoto) return json({ error: "missing_photo" }, 400);
  if (!String(shot.type || "").startsWith("image/")) {
    return json({ error: "bad_file_type" }, 400);
  }
  if (shot.size > MAX_UPLOAD) return json({ error: "too_large" }, 413);

  const id = "LR-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
  const lines = [
    "<b>طلب رخصة جديد</b>",
    "المرجع: <code>" + esc(id) + "</code>",
    "",
    "الاسم: " + esc(name),
    "المدينة: " + esc(city),
    "الهاتف: " + esc(phone),
  ];
  if (email) lines.push("البريد: " + esc(email));
  if (machine) lines.push("رمز الجهاز: " + esc(machine));
  lines.push("الوقت: " + new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC");

  const caption = lines.join("\n").slice(0, MAX_CAPTION);
  const api = "https://api.telegram.org/bot" + env.TELEGRAM_BOT_TOKEN + "/";

  let ok = false;
  if (hasPhoto) {
    try {
      const body = new FormData();
      body.append("chat_id", env.TELEGRAM_CHAT_ID);
      body.append("caption", caption);
      body.append("parse_mode", "HTML");
      body.append("photo", shot, safeName(shot.name));
      const res = await fetch(api + "sendPhoto", { method: "POST", body });
      ok = res.ok;
      if (!ok) console.error("sendPhoto failed", res.status, await res.text());
    } catch (err) {
      console.error("sendPhoto error", err);
    }
  }

  if (!ok) {
    // No photo, or Telegram rejected it: send the text on its own.
    try {
      const res = await fetch(api + "sendMessage", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text: caption + "\n\n⚠️ تعذّر إرفاق صورة الشاشة",
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      });
      ok = res.ok;
      if (!ok) console.error("sendMessage failed", res.status, await res.text());
    } catch (err) {
      console.error("sendMessage error", err);
    }
  }

  if (!ok) return json({ error: "notify_failed" }, 502);
  return json({ ok: true, id });
}

function clean(value, max) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function safeName(name) {
  const n = String(name || "").replace(/[^\w.\-]+/g, "_").slice(-64);
  return n || "screenshot.jpg";
}

function esc(value) {
  return String(value).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}
