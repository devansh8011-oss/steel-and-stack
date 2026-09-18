import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { IncomingMessage, ServerResponse } from 'http';

// Custom plugin to handle Resend API email sending during dev & preview
function resendApiPlugin() {
  return {
    name: 'vite-resend-api',
    configureServer(server: any) {
      server.middlewares.use('/api/send-email', async (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
        const apiKey = env.RESEND_API_KEY || env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY;
        const targetEmail = env.NOTIFICATION_EMAIL || 'devansh8011@gmail.com';
        const fromEmail = env.FROM_EMAIL || 'onboarding@resend.dev';

        if (!apiKey) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Missing RESEND_API_KEY in environment' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            const { name, email, phone, projectType, budget, message } = data;

            const safePhone = phone || 'Direct Web Submission';
            const safeType = projectType || 'Technical & Engineering Inquiry';

            const htmlContent = `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
                <div style="background-color: #0f172a; padding: 24px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">Steel &amp; Stack</h1>
                  <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 12px; letter-spacing: 1px;">NEW QUOTE INQUIRY RECEIVED</p>
                </div>
                <div style="padding: 24px;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr>
                      <td style="padding: 10px 0; color: #64748b; width: 140px; font-weight: 600;">Client Name:</td>
                      <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${name}</td>
                    </tr>
                    <tr style="border-top: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email:</td>
                      <td style="padding: 10px 0; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr style="border-top: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone / WhatsApp:</td>
                      <td style="padding: 10px 0; color: #0f172a;">${safePhone}</td>
                    </tr>
                    <tr style="border-top: 1px solid #f1f5f9;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Inquiry Focus:</td>
                      <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${safeType}</td>
                    </tr>
                    ${
                      budget
                        ? `<tr style="border-top: 1px solid #f1f5f9;">
                            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Budget Estimate:</td>
                            <td style="padding: 10px 0; color: #059669; font-weight: 600;">${budget}</td>
                          </tr>`
                        : ''
                    }
                  </table>

                  <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;">
                    <strong style="display: block; color: #334155; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Project Requirements:</strong>
                    <p style="color: #1e293b; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                  </div>

                  <div style="margin-top: 24px; text-align: center;">
                    <a href="mailto:${email}?subject=Re:%20Quote%20Request%20for%20${encodeURIComponent(projectType)}%20-%20Steel%20%26%20Stack" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">
                      Reply Directly to Client
                    </a>
                  </div>
                </div>
                <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8;">
                  Steel &amp; Stack Online Engineering Studio • India-Wide Delivery
                </div>
              </div>
            `;

            const resendResponse = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: `Steel & Stack Inquiries <${fromEmail}>`,
                to: [targetEmail],
                reply_to: email,
                subject: `New ${projectType} Quote Request: ${name}`,
                html: htmlContent,
              }),
            });

            const resendResult = await resendResponse.json();

            if (!resendResponse.ok) {
              res.statusCode = resendResponse.status;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: resendResult.message || 'Failed to send email via Resend' }));
              return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, id: resendResult.id }));
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err?.message || 'Internal server error' }));
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), resendApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
