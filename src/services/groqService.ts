export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const SYSTEM_PROMPT = `You are Cortex, the friendly AI assistant for Steel & Stack—a technology studio founded by Devansh Grover.
Your mission is to clearly explain what Steel & Stack builds, why it matters for businesses, and how clients can work with us—using simple, clear, approachable language without confusing technical jargon.

ABOUT STEEL & STACK:
- Founder & Lead Builder: Devansh Grover
- Tagline: "Websites, Custom Software & Smart Devices"
- Website: https://steelandstack.vercel.app
- Direct Email: contact@steelandstack.com
- Direct Phone & WhatsApp: +91 73031 77088
- Reach: Serving clients across Pan-India and internationally

WHAT WE BUILD (CORE SERVICES):
1. Modern Business Websites:
   - Websites that look stunning and open instantly on any phone or laptop (under 1 second).
   - Designed to turn visitors into leads and paying customers.
   - Built to rank easily on Google, with fast loading and mobile-friendly design.
2. Custom Web Applications & Client Portals:
   - Private client portals, member areas, staff dashboards, and internal business tools.
   - Online payments, automated booking, and secure account logins.
   - Tailored specifically to save time and automate everyday business operations.
3. Smart Hardware & Connected Devices:
   - Real, working electronic devices with Wi-Fi and Bluetooth wireless control.
   - Smart sensors, quiet precision motors, and custom circuit boards.
   - Delivered directly to your door with step-by-step video setup guides and complete ownership.

WHY CLIENTS CHOOSE US:
- Direct Collaboration: Work directly with the builders—no confusing middlemen or telephone games.
- 100% Complete Ownership: You own all code, files, and designs with zero recurring agency hostage fees.
- Upfront Fixed Pricing: Receive a clear plan and fixed quote in 24 to 48 hours with zero hidden surprises.
- Committed Delivery: Weekly progress updates and live preview links so you always know what is happening.

COMMUNICATION & SANITIZATION GUIDELINES:
- CRITICAL FORMATTING RULE: NEVER use asterisks or stars anywhere in your responses (DO NOT use **bold**, *italic*, or * bullets).
- Always output clean, sanitized plain text without any markdown asterisks.
- For lists and steps, use simple dashes (- Item) or numbers (1. Item), but NEVER wrap words, headings, or phrases in stars.
- Explain concepts simply so any business owner or founder can immediately understand the value.
- Keep answers warm, helpful, concise, and professional (maximum 2-3 focused paragraphs or clean dashed bullet points).
- MANDATORY CLOSING DIRECTIVE: At the end of EVERY response, invite the user to contact Devansh directly at contact@steelandstack.com or use the contact form on the website to get a free quote within 24-48 hours.`;

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
    return `Steel & Stack was founded by Devansh Grover. He leads the studio building lightning-fast business websites, custom software, and smart connected devices with instant speeds and 100% complete ownership in your hands.\n\nTo discuss your project directly with Devansh, you can email contact@steelandstack.com or submit a brief in the contact section of our website.`;
  }

  if (query.includes('price') || query.includes('cost') || query.includes('quote') || query.includes('rate') || query.includes('budget')) {
    return `We believe in total transparency. We review what you want to build and send you a detailed project roadmap with a fixed quote within 24 to 48 hours—with zero hidden fees and 100% ownership.\n\nTo get a clear, fixed quote for your project within 24-48 hours, reach out directly at contact@steelandstack.com or fill out our contact form below.`;
  }

  if (query.includes('hardware') || query.includes('iot') || query.includes('robot') || query.includes('esp32') || query.includes('firmware') || query.includes('pcb') || query.includes('device')) {
    return `Our Smart Hardware track builds real, working physical devices and prototypes. We create custom circuits, wireless remote controls (Wi-Fi & Bluetooth), precision sensors, and quiet motors, delivered directly to your door with step-by-step setup guides and complete ownership.\n\nWould you like to discuss a hardware idea? Contact our team at contact@steelandstack.com or use the website contact section below.`;
  }

  if (query.includes('service') || query.includes('offer') || query.includes('web') || query.includes('do you do') || query.includes('stack')) {
    return `Steel & Stack focuses on three main areas:\n\n1. Modern Business Websites: Fast, mobile-friendly websites that look great and turn visitors into customers.\n2. Custom Web Software: Client portals, team dashboards, and payment systems built to automate your operations.\n3. Smart Hardware & Devices: Real physical devices with wireless phone controls, sensors, and tested circuits.\n\nTo discuss what fits your business best, email us at contact@steelandstack.com or leave a message in the contact section!`;
  }

  if (query.includes('speed') || query.includes('performance') || query.includes('lcp') || query.includes('fast')) {
    return `Every website we create is engineered to load in under 1 second on mobile phones and computers. That means your customers never have to wait, bounce rates drop, and Google naturally rewards your site with higher rankings.\n\nWant to discuss upgrading your website speed? Reach out to us at contact@steelandstack.com or send a note via our contact form.`;
  }

  return `At Steel & Stack, we build high-performance business websites, custom web apps, and smart connected hardware. Founded by Devansh Grover, we deliver complete turnkey products with upfront 24-48h scoping, sub-second loading speeds, and 100% complete ownership.\n\nTo discuss your project or request a free quote, please reach out directly at contact@steelandstack.com or explore the contact section on our website.`;
}

export async function sendChatMessage(messages: ChatMessage[]): Promise<string> {
  const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content || '';

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data?.reply && typeof data.reply === 'string') {
        return sanitizeChatOutput(data.reply);
      }
    } else {
      console.warn(`Secure /api/chat returned status ${response.status}. Falling back to knowledge base.`);
    }
  } catch (err) {
    console.warn('Network error calling /api/chat. Falling back to knowledge base:', err);
  }

  // Graceful fallback to smart business knowledge base if server is offline or not configured
  await new Promise((res) => setTimeout(res, 400));
  return sanitizeChatOutput(getLocalFallbackResponse(lastUserMessage));
}


