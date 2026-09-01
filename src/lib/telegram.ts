// ─── Telegram Visitor Tracker ────────────────────────────────────────────────
// Sends notifications to your Telegram on: new visits, section views, clicks.
// No location permission required — uses IP-based geo only.

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string
const CHAT_ID   = import.meta.env.VITE_TELEGRAM_CHAT_ID as string

// ─── Core sender ─────────────────────────────────────────────────────────────

async function sendMessage(text: string): Promise<void> {
  if (!BOT_TOKEN || !CHAT_ID) return
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_notification: false,
      }),
    })
  } catch {
    // Silently fail — never break the portfolio for the visitor
  }
}

// ─── IP geo (no permission prompt) ───────────────────────────────────────────

interface GeoInfo {
  city: string
  region: string
  country: string
  org: string
}

async function getGeo(): Promise<GeoInfo> {
  try {
    const res = await fetch('https://ipapi.co/json/')
    if (!res.ok) throw new Error()
    const d = await res.json()
    return {
      city: d.city ?? 'Unknown',
      region: d.region ?? '',
      country: d.country_name ?? 'Unknown',
      org: d.org ?? '',
    }
  } catch {
    return { city: 'Unknown', region: '', country: 'Unknown', org: '' }
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(d: Date) {
  return d.toLocaleString('en-GB', {
    timeZone: 'Europe/London',
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  }) + ' BST'
}

function deviceType(): string {
  const ua = navigator.userAgent
  if (/Mobi|Android/i.test(ua)) return '📱 Mobile'
  if (/Tablet|iPad/i.test(ua)) return '📟 Tablet'
  return '🖥️ Desktop'
}

function referrer(): string {
  const ref = document.referrer
  if (!ref) return 'Direct / unknown'
  try { return new URL(ref).hostname } catch { return ref }
}

// ─── Session guard ────────────────────────────────────────────────────────────

const SESSION_KEY = 'tg_visited'
const alreadyNotified = () => !!sessionStorage.getItem(SESSION_KEY)
const markNotified    = () => sessionStorage.setItem(SESSION_KEY, '1')

// ─── Public API ───────────────────────────────────────────────────────────────

/** Fire once per browser session on first load. */
export async function notifyVisit(): Promise<void> {
  if (alreadyNotified()) return
  markNotified()

  const geo = await getGeo()
  const location = [geo.city, geo.region, geo.country].filter(Boolean).join(', ')

  const msg = [
    '👀 <b>New visitor on your portfolio!</b>',
    '',
    `📍 <b>Location:</b> ${location}`,
    `🌐 <b>ISP:</b> ${geo.org || 'N/A'}`,
    `${deviceType()}`,
    `🔗 <b>Referrer:</b> ${referrer()}`,
    `🌍 <b>Browser lang:</b> ${navigator.language}`,
    `🕐 <b>Time:</b> ${fmt(new Date())}`,
    `📄 <b>Page:</b> ${window.location.href}`,
  ].join('\n')

  await sendMessage(msg)
}

/** Fire when a section scrolls into view (deduped per session). */
export function notifySectionView(sectionId: string): void {
  const key = `tg_sec_${sectionId}`
  if (sessionStorage.getItem(key)) return
  sessionStorage.setItem(key, '1')
  const label = sectionId.charAt(0).toUpperCase() + sectionId.slice(1)
  sendMessage(`📌 <b>Section viewed:</b> <code>${label}</code>\n🕐 ${fmt(new Date())}`)
}

/** Fire when any tracked link or button is clicked. */
export function notifyClick(label: string, href?: string): void {
  const dest = href ? `\n🔗 <b>Destination:</b> ${href}` : ''
  sendMessage(`🖱️ <b>Click:</b> <code>${label}</code>${dest}\n🕐 ${fmt(new Date())}`)
}
