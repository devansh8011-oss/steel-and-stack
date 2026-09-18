# Steel & Stack — Web Platforms & Connected Tech Studio

A high-performance, conversion-focused website for **Steel & Stack**, an India-based engineering studio specializing in high-speed web platforms, modern digital interfaces, and connected robotics hardware across India.

---

## ⚡ Tech Stack

- **React 19**: Powered by React 19 Actions API (`useActionState`, `useFormStatus`) for seamless, zero-page-reload form submission.
- **Vite 6**: Fast development build tool with instant Hot Module Replacement (HMR).
- **React Router v7**: Client-side multi-page routing with smooth scroll-to-top behavior.
- **Tailwind CSS**: Custom crisp industrial design system configured for a bright, professional light theme.
- **Framer Motion**: Satisfying, sanitized micro-interactions, continuous running laser perimeter, and transitions.
- **Lucide React**: Clean technical iconography.
- **Resend API Integration**: Direct email delivery to `devansh8011@gmail.com`.

---

## 🚀 Quick Start

### 1. Install Dependencies
Make sure Node.js (v18+ or v20+) is installed. Run:

```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be output to `dist/`.

---

## 📬 Email Delivery Setup (Resend Integration)

The site is configured to deliver quote inquiries directly to `devansh8011@gmail.com` using **Resend**.

### 1. Environment Variables (`.env`)
The API key is securely stored in `.env` (ignored by Git):
```env
RESEND_API_KEY=your_resend_api_key_here
VITE_RESEND_API_KEY=your_resend_api_key_here
NOTIFICATION_EMAIL=devansh8011@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

### 2. How it works:
- **Local Dev & Preview (`npm run dev`)**: Vite middleware automatically intercepts `/api/send-email`, formats an HTML lead notification email, and sends it via Resend API using the credentials in `.env`.
- **Production Hosting (Vercel / Netlify / Node)**: The serverless endpoint [`api/send-email.ts`](file:///C:/Users/Devansh%20Grover/.gemini/antigravity/scratch/steel-and-stack/api/send-email.ts) handles production requests with the same `.env` variables.
- **Client Form**: Powered by React 19 Actions (`useActionState`, `useFormStatus`) with client validation and honeypot spam protection.

---

## 📁 Project Structure

```
steel-and-stack/
├── public/
│   ├── favicon.png         # 'S' monogram favicon
│   ├── logo-mark.png       # Transparent 'S' monogram
│   ├── logo.png            # Full Steel & Stack brand logo (transparent)
│   └── logo-white-bg.png   # Full Steel & Stack brand logo
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   └── QuoteForm.tsx  # React 19 Action form with useActionState & useFormStatus
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Sticky top navbar with mobile drawer
│   │   │   ├── Footer.tsx     # Content-rich multi-column footer
│   │   │   └── Layout.tsx     # Route shell & scroll restoration
│   │   ├── seo/
│   │   │   └── MetaTags.tsx   # Per-route title & meta management
│   │   └── ui/
│   │       ├── Badge.tsx      # Hardware/tech badges
│   │       ├── Button.tsx     # Primary metallic, secondary, outline buttons
│   │       ├── Card.tsx       # Standard card container
│   │       ├── FormField.tsx  # Form input & validation label wrapper
│   │       └── Section.tsx    # Alternating white/steel section bands
│   ├── config/
│   │   └── site.ts            # Studio contact, email, phone, Formspree config
│   ├── pages/
│   │   ├── Home.tsx           # Hero, What We Do, Why Us, Project Preview, CTA
│   │   ├── Services.tsx       # Custom Robotics, Web Dev, 4-step process
│   │   ├── Work.tsx           # Filterable portfolio showcase (Robotics, Web, IoT)
│   │   └── Contact.tsx        # Lead generation quote form & studio contact info
│   ├── App.tsx                # React Router v7 configuration
│   ├── index.css              # Tailwind base & custom utilities
│   └── main.tsx               # App entrypoint
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Design System Notes

- **Theme**: Pure light theme with high content density and alternating white and pale steel (`#f8fafc` / `#f1f5f9`) bands.
- **Palette**: Steel greys and charcoal (`#0f172a`, `#334155`) with metallic blue-grey accents (`#2563eb`).
- **Typography**: Wide-tracked headings (`tracking-widest`, `tracking-super-wide`) echoing the `STEEL & STACK` monogram aesthetic.
- **Contact Details**:
  - Email: [devansh8011@gmail.com](mailto:devansh8011@gmail.com)
  - Phone: +91 73031 77088
  - Coverage: Serving all 28 Indian States & UTs online.
