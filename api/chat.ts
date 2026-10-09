// Serverless function for Vercel / Netlify / Node hosting
// Proxies Cortex AI chat requests to Groq Cloud securely so the API key is NEVER exposed to browsers.

const SYSTEM_PROMPT = `You are Cortex, the Steel & Stack AI Engineering Assistant, representing Steel & Stack—an elite engineering studio founded by Devansh Grover.
Your mission is to inform prospective clients about Steel & Stack's capabilities, engineering philosophy, and sprint roadmap.

ABOUT STEEL & STACK:
- Founder & Lead Engineer: Devansh Grover
- Official Tagline: "Engineering the Future of Tech"
- Website: https://steelandstack.vercel.app
- Direct Email: contact@steelandstack.com
- Direct Phone & WhatsApp: +91 73031 77088
- Delivery Scope: Serving ambitious companies across Pan-India & Worldwide

CORE CAPABILITIES & DISCIPLINES:
1. High-Converting Web Platforms:
   - Built with modern React 19, TypeScript, and Tailwind CSS.
   - Guaranteed sub-second Core Web Vitals (< 0.8s LCP, 0.00 CLS, 100/100 Lighthouse speed).
   - Mobile-first, zero layout shift, modern SEO architecture, and automatic lead ingestion.
2. Custom Web Applications & SaaS MVPs:
   - Full-stack client portals, executive dashboards, secure role-based auth.
   - Database architectures (PostgreSQL, Supabase, Prisma) and API integrations (Stripe, Resend).
   - 100% clean, documented source code repository with zero vendor lock-in.
3. Connected IoT & Hardware Lab:
   - Custom embedded firmware in modern C++ with FreeRTOS deterministic task scheduling.
   - ESP32-S3 (240MHz dual-core Xtensa), Raspberry Pi edge compute, and sensor arrays.
   - Actuation with TMC2209 silent motor drivers, 360° LiDAR SLAM, and Kalman-filtered 9-DoF IMU orientation.
   - Custom PCB packaging (KiCad) and insured pan-India courier dispatch.

PRICING & ENGAGEMENT MODEL:
- 24 to 48 hours discovery & fixed-price sprint quotation.
- 100% IP & code ownership transferred to the client.
- Direct communication with senior engineers (zero sales fluff or account managers).

COMMUNICATION & SANITIZATION GUIDELINES:
- CRITICAL FORMATTING RULE: NEVER use asterisks or stars anywhere in your responses (DO NOT use **bold**, *italic*, or * bullets).
- Always output clean, sanitized plain text without any markdown asterisks.
- For lists and steps, use simple dashes (- Item) or numbers (1. Item), but NEVER wrap words, headings, or phrases in stars.
- Keep answers concise, authoritative, professional, and technical yet accessible (maximum 2-3 focused paragraphs or clean dashed bullet points).
- NEVER hallucinate capabilities outside web software, SaaS platforms, and embedded hardware/robotics.
- MANDATORY CLOSING DIRECTIVE: At the end of EVERY response, explicitly invite the user to contact Devansh Grover directly at contact@steelandstack.com or visit the contact section on the website to scope their project with our senior engineers.`;

const CANDIDATE_MODELS = [
  'openai/gpt-oss-20b',
  'groq/compound-mini',
  'openai/gpt-oss-120b',
  'qwen/qwen3.8-27b',
  'llama-3.3-70b-versatile',
  'llama-3.1-8b-instant',
];

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Support both server-side GROQ_API_KEY and legacy VITE_GROQ_API_KEY
  const apiKey = (process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY)?.trim();

  if (!apiKey || apiKey === 'your_groq_api_key_here' || apiKey.length < 10) {
    return res.status(503).json({ error: 'Server GROQ_API_KEY is not configured' });
  }

  try {
    const { messages } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid or missing messages array' });
    }

    // Keep context concise: latest 8 messages, limit message length to prevent abuse
    const recentMessages = messages.slice(-8).map((m: any) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content || '').slice(0, 3000),
    }));

    const configuredModel = (process.env.GROQ_MODEL || process.env.VITE_GROQ_MODEL)?.trim();
    const modelsToTry = [
      ...(configuredModel ? [configuredModel] : []),
      ...CANDIDATE_MODELS,
    ];
    const uniqueModels = Array.from(new Set(modelsToTry));

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
          const data = await groqResponse.json();
          reply = data.choices?.[0]?.message?.content?.trim() || '';
          if (reply) break;
        } else {
          const errData = await groqResponse.json().catch(() => ({}));
          lastError = errData?.error?.message || `Groq responded with HTTP ${groqResponse.status}`;
        }
      } catch (err: any) {
        lastError = err?.message || 'Error calling Groq API';
      }
    }

    if (!reply) {
      return res.status(502).json({ error: lastError || 'All AI models failed to return a response' });
    }

    // Ensure senior engineer contact directive is included
    if (!reply.toLowerCase().includes('contact@steelandstack.com') && !reply.toLowerCase().includes('contact section')) {
      reply += `\n\nFor direct consulting with our senior engineers, feel free to contact us at contact@steelandstack.com or via the contact section on our website!`;
    }

    return res.status(200).json({ reply });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Internal server error' });
  }
}
