import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load .env into process.env so the dev API handler can read RESEND_API_KEY
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      tailwindcss(),
      react(),
      devContactApi(),
    ],
  }
})

// ── Local dev handler for POST /api/contact ────────────────────────────────
function devContactApi() {
  return {
    name: 'dev-contact-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let raw = ''
        req.on('data', chunk => { raw += chunk })
        req.on('end', async () => {
          // Parse body
          let body
          try { body = JSON.parse(raw) } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Invalid JSON' }))
            return
          }

          const { name, email, subject, message } = body

          if (!name || !email || !subject || !message) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'All fields are required' }))
            return
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Invalid email address' }))
            return
          }

          // Dynamically import Resend to avoid top-level issues
          try {
            const { Resend } = await import('resend')
            const resend = new Resend(process.env.RESEND_API_KEY)

            const htmlBody = `
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Courier New',monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#111;border:1px solid #1f2d1f;border-radius:8px;overflow:hidden;">
        <tr><td style="background:#052010;padding:28px 32px;border-bottom:1px solid #1a3a1a;">
          <p style="margin:0 0 4px;font-size:11px;color:#4ade80;letter-spacing:4px;text-transform:uppercase;">&gt; incoming_message.portfolio</p>
          <h1 style="margin:0;font-family:Georgia,serif;font-size:22px;color:#f0fdf4;font-weight:700;">New Message from Portfolio</h1>
        </td></tr>
        <tr><td style="padding:32px;">
          <p style="margin:0 0 4px;font-size:9px;color:#4ade80;letter-spacing:3px;text-transform:uppercase;">From</p>
          <p style="margin:0 0 16px;font-family:Georgia,serif;font-size:15px;color:#f0fdf4;font-weight:700;">${name}</p>
          <p style="margin:0 0 4px;font-size:9px;color:#4ade80;letter-spacing:3px;text-transform:uppercase;">Reply To</p>
          <a href="mailto:${email}" style="font-size:13px;color:#34d399;text-decoration:none;">${email}</a>
          <div style="background:#0d1f0d;border-left:3px solid #4ade80;padding:14px 18px;margin:20px 0;border-radius:0 4px 4px 0;">
            <p style="margin:0 0 4px;font-size:9px;color:#4ade80;letter-spacing:3px;text-transform:uppercase;">Subject</p>
            <p style="margin:0;font-family:Georgia,serif;font-size:16px;color:#f0fdf4;font-weight:700;">${subject}</p>
          </div>
          <p style="margin:0 0 10px;font-size:9px;color:#4ade80;letter-spacing:3px;text-transform:uppercase;">Message</p>
          <div style="background:#0d1a0d;border:1px solid #1a3a1a;border-radius:6px;padding:20px;">
            <p style="margin:0;font-family:Georgia,serif;font-size:14px;color:#d4fde4;line-height:1.8;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
        </td></tr>
        <tr><td style="padding:0 32px 32px;">
          <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;background:#4ade80;color:#052010;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;padding:12px 24px;border-radius:4px;">
            Reply to ${name}
          </a>
        </td></tr>
        <tr><td style="padding:20px 32px;border-top:1px solid #1a3a1a;">
          <p style="margin:0;font-size:10px;color:#374d37;text-align:center;">
            Sent via dhayanithi.portfolio · ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`

            const data = await resend.emails.send({
              from: 'Portfolio Contact <onboarding@resend.dev>',
              to: ['dhayanithianandan@gmail.com'],
              replyTo: email,
              subject: `[Portfolio] ${subject} — from ${name}`,
              html: htmlBody,
            })

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true, id: data.data?.id }))
          } catch (err) {
            console.error('[dev-contact-api] Resend error:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Failed to send email' }))
          }
        })
      })
    },
  }
}
