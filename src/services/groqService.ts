export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const SYSTEM_PROMPT = `You are Cortex, the Steel & Stack AI Engineering Assistant, representing Steel & Stack—an elite engineering studio founded by Devansh Grover.
Your mission is to inform prospective clients about Steel & Stack's capabilities, engineering philosophy, and sprint roadmap.

ABOUT STEEL & STACK:
- Founder & Lead Engineer: Devansh Grover
- Official Tagline: "Engineering the Future of Tech"
- Website: https://steelandstack.vercel.app
- Direct Email: devansh8011@gmail.com
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
- MANDATORY CLOSING DIRECTIVE: At the end of EVERY response, explicitly invite the user to contact Devansh Grover directly at devansh8011@gmail.com or visit the contact section on the website to scope their project with our senior engineers.`;

// Strips out all markdown asterisks and stars, ensuring sanitized human text
export function sanitizeChatOutput(raw: string): string {
  if (!raw) return '';
  return raw
    // Strip bold/italic markdown asterisks while preserving the text inside
    .replace(/\*{3,}(.*?)\*{3,}/g, '$1')
    .replace(/\*{2}(.*?)\*{2}/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    // Turn bullet asterisks (* item) into clean dashes (- item)
    .replace(/^\s*\*+\s+/gm, '- ')
    // Remove any remaining stray asterisks
    .replace(/\*/g, '')
    // Clean up trailing whitespace on lines
    .replace(/[ \t]+$/gm, '')
    .trim();
}

// Local intelligent fallback when VITE_GROQ_API_KEY is not yet added in .env
function getLocalFallbackResponse(userPrompt: string): string {
  const query = userPrompt.toLowerCase();

  if (query.includes('founder') || query.includes('who started') || query.includes('who built') || query.includes('owner') || query.includes('devansh')) {
    return `Steel & Stack was founded by Devansh Grover. He leads the engineering studio specializing in high-performance web platforms (React 19), SaaS MVPs, and connected IoT hardware with sub-second performance and 100% IP ownership.\n\nTo discuss your project directly with Devansh, you can email devansh8011@gmail.com or submit a brief in the contact section of our website.`;
  }

  if (query.includes('price') || query.includes('cost') || query.includes('quote') || query.includes('rate') || query.includes('budget')) {
    return `We operate on transparent, fixed-price sprint roadmaps. We review your requirements and deliver a detailed scope and fixed quotation within 24 to 48 hours—ensuring zero unexpected scope creep and 100% code ownership.\n\nTo get a fixed-price quotation for your project within 24-48 hours, reach out directly at devansh8011@gmail.com or fill out our contact form below.`;
  }

  if (query.includes('hardware') || query.includes('iot') || query.includes('robot') || query.includes('esp32') || query.includes('firmware') || query.includes('pcb')) {
    return `Our Connected Hardware Lab engineers custom embedded devices, sensor telemetry systems, and robotics prototypes. We develop robust FreeRTOS C++ firmware on ESP32-S3 and Raspberry Pi, integrate TMC2209 silent stepper motor kinematics, 360° LiDAR SLAM, 9-DoF IMU fusion, and custom KiCad PCB designs with insured pan-India courier delivery.\n\nWould you like to review your hardware requirements? Contact our engineering team at devansh8011@gmail.com or use the website contact section.`;
  }

  if (query.includes('service') || query.includes('offer') || query.includes('web') || query.includes('do you do') || query.includes('stack')) {
    return `Steel & Stack provides three core engineering tracks:\n\n1. High-Converting Web Platforms: React 19 flagships with sub-0.8s LCP, zero layout shift, and automated lead routing.\n2. SaaS MVPs & Portals: Scalable full-stack apps with secure auth, PostgreSQL databases, and API integrations.\n3. Connected IoT & Hardware: Custom embedded C++ firmware, ESP32-S3 telemetry, robotics kinematics, and custom PCBs.\n\nTo consult directly with our senior engineers on your specific goals, email us at devansh8011@gmail.com or head to the contact section of the website!`;
  }

  if (query.includes('speed') || query.includes('performance') || query.includes('lcp') || query.includes('fast')) {
    return `Every web platform we engineer is optimized for sub-second Core Web Vitals (< 0.8s LCP, 0.00 CLS) and 100/100 Lighthouse performance using React 19, strict TypeScript, and mobile-first architectural principles.\n\nWant to audit or upgrade your platform's speed? Reach out to our senior engineers at devansh8011@gmail.com or connect through our contact form.`;
  }

  return `At Steel & Stack, we engineer high-performance web platforms, SaaS applications, and connected IoT hardware under the tagline "Engineering the Future of Tech". Founded by Devansh Grover, we deliver turnkey solutions with fixed 24-48h scoping, sub-second speeds, and 100% code ownership.\n\nTo consult with our senior engineers or request a project brief, please reach out directly at devansh8011@gmail.com or explore the contact section on our website.`;
}

// Prioritized fast and capable models available on Groq
const DEFAULT_CANDIDATE_MODELS = [
  'openai/gpt-oss-20b',
  'groq/compound-mini',
  'openai/gpt-oss-120b',
  'qwen/qwen3.8-27b',
  'llama-3.3-70b-versatile',
  'llama-3.1-8b-instant',
];

// In-memory cache of the working model for the current session to avoid redundant roundtrips
let cachedWorkingModel: string | null = null;

export async function sendChatMessage(messages: ChatMessage[]): Promise<string> {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY?.trim();
  const configuredModel = import.meta.env.VITE_GROQ_MODEL?.trim();

  // If no API key is provided, use the smart local business knowledge base
  if (!apiKey || apiKey === 'your_groq_api_key_here' || apiKey.length < 10) {
    const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
    await new Promise((res) => setTimeout(res, 450));
    return sanitizeChatOutput(getLocalFallbackResponse(lastUserMessage));
  }

  // Build unique prioritized list of models to try
  const modelsToTry: string[] = [];
  if (configuredModel) {
    modelsToTry.push(configuredModel);
  }
  if (cachedWorkingModel && !modelsToTry.includes(cachedWorkingModel)) {
    modelsToTry.push(cachedWorkingModel);
  }
  for (const m of DEFAULT_CANDIDATE_MODELS) {
    if (!modelsToTry.includes(m)) {
      modelsToTry.push(m);
    }
  }

  const basePayload = {
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.slice(-8), // Keep context concise for ultra-fast token turnaround
    ],
    temperature: 0.6,
    max_tokens: 500,
  };

  let lastErrorMessage = '';

  for (const model of modelsToTry) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          ...basePayload,
          model,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        let reply = data.choices?.[0]?.message?.content?.trim() || '';

        // Cache working model for subsequent requests
        cachedWorkingModel = model;

        // Guarantee the contact requirement is strictly present
        if (!reply.toLowerCase().includes('devansh8011@gmail.com') && !reply.toLowerCase().includes('contact section')) {
          reply += `\n\nFor direct consulting with our senior engineers, feel free to contact us at devansh8011@gmail.com or via the contact section on our website!`;
        }

        return sanitizeChatOutput(reply);
      }

      // Handle non-200 responses (e.g. 404 model_not_found, 400, 429)
      const errData = await response.json().catch(() => ({}));
      lastErrorMessage = errData.error?.message || `HTTP ${response.status} ${response.statusText}`;
      console.warn(`Groq model "${model}" failed (${response.status}): ${lastErrorMessage}. Trying next model...`);
    } catch (modelError: any) {
      lastErrorMessage = modelError?.message || 'Network error';
      console.warn(`Network error querying Groq model "${model}":`, modelError);
    }
  }

  // If all candidate models fail, gracefully fall back to local knowledge base
  console.warn(`All Groq candidate models failed. Last error: ${lastErrorMessage}. Falling back to knowledge base.`);
  const lastUserMsg = messages[messages.length - 1]?.content || '';
  return sanitizeChatOutput(getLocalFallbackResponse(lastUserMsg));
}

