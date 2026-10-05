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

// Custom plugin to securely handle Cortex AI chat requests during dev & preview
function groqChatApiPlugin() {
  return {
    name: 'vite-groq-chat-api',
    configureServer(server: any) {
      server.middlewares.use('/api/chat', async (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
        const apiKey = (env.GROQ_API_KEY || env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY)?.trim();

        if (!apiKey) {
          res.statusCode = 503;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Missing GROQ_API_KEY in server environment' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            const { messages } = data;

            if (!Array.isArray(messages) || messages.length === 0) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Messages array is required' }));
              return;
            }

            const SYSTEM_PROMPT = `You are Cortex, the Steel & Stack AI Engineering Assistant, representing Steel & Stack—an elite engineering studio founded by Devansh Grover.
Your mission is to inform prospective clients about Steel & Stack's capabilities, engineering philosophy, and sprint roadmap.

ABOUT STEEL & STACK:
- Founder & Lead Engineer: Devansh Grover
- Official Tagline: "Engineering the Future of Tech"
- Website: https://steelandstack.vercel.app
- Direct Email: devansh8011@gmail.com
- Direct Phone & WhatsApp: +91 73031 77088
- Delivery Scope: Serving ambitious companies across Pan-India & Worldwide

CORE CAPABILITIES & DISCIPLINES:
1. High-Converting Web Platforms (React 19, sub-second LCP, 100/100 Lighthouse)
2. Custom Web Applications & SaaS MVPs (PostgreSQL, Supabase, role-based auth, zero lock-in)
3. Connected IoT & Hardware Lab (ESP32-S3, FreeRTOS C++, TMC2209 kinematics, LiDAR SLAM, custom PCBs)

COMMUNICATION & SANITIZATION GUIDELINES:
- CRITICAL: NEVER use asterisks or stars anywhere in your responses (no bold, italic, or bullet asterisks).
- Keep answers concise, authoritative, professional, and technical yet accessible.
- MANDATORY CLOSING DIRECTIVE: At the end of EVERY response, explicitly invite the user to contact Devansh Grover directly at devansh8011@gmail.com or visit the contact section on the website to scope their project with our senior engineers.`;

            const recentMessages = messages.slice(-8).map((m: any) => ({
              role: m.role === 'assistant' ? 'assistant' : 'user',
              content: String(m.content || '').slice(0, 3000),
            }));

            const candidateModels = [
              env.GROQ_MODEL || env.VITE_GROQ_MODEL || '',
              'openai/gpt-oss-20b',
              'groq/compound-mini',
              'openai/gpt-oss-120b',
              'qwen/qwen3.8-27b',
              'llama-3.3-70b-versatile',
              'llama-3.1-8b-instant',
            ].filter(Boolean);

            const uniqueModels = Array.from(new Set(candidateModels));
            let reply = '';
            let lastError = '';

            for (const model of uniqueModels) {
              try {
                const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                  },
                  body: JSON.stringify({
                    model,
                    messages: [
                      { role: 'system', content: SYSTEM_PROMPT },
                      ...recentMessages,
                    ],
                    temperature: 0.6,
                    max_tokens: 500,
                  }),
                });

                if (groqResponse.ok) {
                  const groqData = await groqResponse.json();
                  reply = groqData.choices?.[0]?.message?.content?.trim() || '';
                  if (reply) break;
                } else {
                  const errData = await groqResponse.json().catch(() => ({}));
                  lastError = errData?.error?.message || `Groq responded with ${groqResponse.status}`;
                }
              } catch (err: any) {
                lastError = err?.message || 'Error calling Groq';
              }
            }

            if (!reply) {
              res.statusCode = 502;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: lastError || 'Failed to get AI response' }));
              return;
            }

            if (!reply.toLowerCase().includes('devansh8011@gmail.com') && !reply.toLowerCase().includes('contact section')) {
              reply += `\n\nFor direct consulting with our senior engineers, feel free to contact us at devansh8011@gmail.com or via the contact section on our website!`;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ reply }));
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
  plugins: [react(), resendApiPlugin(), groqChatApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
