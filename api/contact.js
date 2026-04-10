// api/contact.js — Vercel serverless function (project root /api/)
// Requires: npm install resend

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Courier New',monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#111111;border:1px solid #1f2d1f;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background:#052010;padding:28px 32px;border-bottom:1px solid #1a3a1a;">
              <p style="margin:0 0 4px;font-family:'Courier New',monospace;font-size:11px;color:#4ade80;letter-spacing:4px;text-transform:uppercase;">&gt; incoming_message.portfolio</p>
              <h1 style="margin:0;font-family:Georgia,serif;font-size:22px;color:#f0fdf4;font-weight:700;">New Message from Portfolio</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td width="50%" style="padding-right:12px;padding-bottom:16px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-family:'Courier New',monospace;font-size:9px;color:#4ade80;letter-spacing:3px;text-transform:uppercase;">From</p>
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#f0fdf4;font-weight:700;">${name}</p>
                  </td>
                  <td width="50%" style="padding-left:12px;padding-bottom:16px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-family:'Courier New',monospace;font-size:9px;color:#4ade80;letter-spacing:3px;text-transform:uppercase;">Reply To</p>
                    <a href="mailto:${email}" style="font-family:'Courier New',monospace;font-size:13px;color:#34d399;text-decoration:none;">${email}</a>
                  </td>
                </tr>
              </table>
              <div style="background:#0d1f0d;border-left:3px solid #4ade80;padding:14px 18px;margin-bottom:24px;border-radius:0 4px 4px 0;">
                <p style="margin:0 0 4px;font-family:'Courier New',monospace;font-size:9px;color:#4ade80;letter-spacing:3px;text-transform:uppercase;">Subject</p>
                <p style="margin:0;font-family:Georgia,serif;font-size:16px;color:#f0fdf4;font-weight:700;">${subject}</p>
              </div>
              <div>
                <p style="margin:0 0 10px;font-family:'Courier New',monospace;font-size:9px;color:#4ade80;letter-spacing:3px;text-transform:uppercase;">Message</p>
                <div style="background:#0d1a0d;border:1px solid #1a3a1a;border-radius:6px;padding:20px;">
                  <p style="margin:0;font-family:Georgia,serif;font-size:14px;color:#d4fde4;line-height:1.8;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;background:#4ade80;color:#052010;font-family:'Courier New',monospace;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;padding:12px 24px;border-radius:4px;">
                Reply to ${name}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;border-top:1px solid #1a3a1a;">
              <p style="margin:0;font-family:'Courier New',monospace;font-size:10px;color:#374d37;text-align:center;">
                Sent via dhayanithi.portfolio · ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['dhayanithianandan@gmail.com'],
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: htmlBody,
    });
    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
