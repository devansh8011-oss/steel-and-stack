export const SITE_CONFIG = {
  name: "Steel & Stack",
  shortName: "Steel & Stack",
  tagline: "Fast, Modern Websites & Custom Digital Solutions",
  subTagline: "Website & Product Studio • Serving Clients Across India & Worldwide",
  description:
    "We create beautiful, high-speed websites, custom business software, and smart hardware products. You get clear fixed pricing, fast delivery, and 100% complete ownership of your project.",
  email: "contact@steelandstack.com",
  coverage: "Serving Ambitious Companies Pan-India & Worldwide",
  hours: "Mon – Sat: 9:00 AM – 8:00 PM IST",
  
  formspreeFormId: "YOUR_FORMSPREE_FORM_ID",

  navLinks: [
    { label: "What We Build", href: "#capabilities" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
    { label: "How It Works", href: "#process" },
    { label: "Get a Quote", href: "#contact" },
  ],

  trustedOrganisations: [
    { name: "Hygea", industry: "Australia's Home Service Platform", short: "Hygea" },
    { name: "Shipmate Logistics", industry: "Logistics & Supply Chain", short: "Shipmate" },
    { name: "IIT Jodhpur", industry: "Premier Research & Tech", short: "IIT Jodhpur" },
    { name: "Delhi Public School", industry: "Education & Academics", short: "DPS" },
    { name: "Orange Future Tech", industry: "Enterprise IT & Automation", short: "Orange Tech" },
    { name: "Cocoadotts", industry: "D2C Brand & Retail", short: "Cocoadotts" },
  ],

  pricing: {
    packages: [
      {
        id: "starter",
        name: "Starter Website",
        price: "₹9,999",
        period: "one-time",
        tagline: "Fast, mobile-friendly website for small businesses, startups, and creators.",
        popular: false,
        features: [
          "Up to 5 pages, mobile-friendly",
          "Direct contact & inquiry forms",
          "Basic Google SEO setup",
          "Sub-1s instant loading speed",
          "2 rounds of revisions",
          "100% complete ownership & code handover",
        ],
        cta: "Choose Starter",
      },
      {
        id: "smart-ai",
        name: "Smart Website + AI",
        price: "₹14,999",
        period: "one-time",
        tagline: "High-converting modern website with an AI assistant trained on your business.",
        popular: true,
        badge: "RECOMMENDED",
        features: [
          "Everything in Starter included",
          "Custom AI chat assistant answering customers 24/7",
          "Trained on your business, services & FAQs",
          "Customer enquiries sent straight to email or WhatsApp",
          "Conversion-focused layout to maximize inquiries",
          "Priority 24-48h project onboarding",
        ],
        cta: "Get Smart Website + AI",
      },
    ],
    customProjects: [
      {
        title: "AI Automation & Agents",
        description: "Workflows that automatically connect your email, WhatsApp, CRM, and calendar.",
        pricing: "Custom quote",
      },
      {
        title: "Robotics & Hardware Prototyping",
        description: "Custom robots, embedded systems (Arduino, ESP32, Raspberry Pi), and computer vision.",
        pricing: "Custom quote",
      },
    ],
    carePlan: {
      name: "Care Plan",
      price: "₹1,000",
      period: "/ month",
      billingNote: "Billed monthly. Example: 2 months = ₹2,000.",
      features: [
        "Website hosting & high-speed CDN",
        "Security updates & automated backups",
        "Small text & image updates on demand",
        "AI assistant usage within the plan limit",
      ],
      domainSetup: {
        title: "Your domain, your ownership",
        description:
          "You buy your domain (e.g. yourbusiness.com) in your own name and pay its yearly renewal. We connect it to your website.",
        price: "₹1,500 one-time",
      },
    },
  },

  reviews: [
    {
      id: "review-1",
      name: "Rohit Verma",
      role: "Founder & CEO",
      company: "Shipmate Logistics",
      image: "/reviews/rohit.jpg",
      rating: 5,
      content:
        "Steel & Stack built our platform in record time. The website opens instantly on any phone, and our customer quote inquiries jumped over 40% in the first month. Working directly with Devansh without middle-agency telephone games was super refreshing.",
      project: "Smart Website + Logistics Portal",
    },
    {
      id: "review-2",
      name: "Rashika Jindal",
      role: "Founder",
      company: "Cocoadotts",
      image: "/reviews/rashika.jpg",
      rating: 5,
      content:
        "Working with Devansh on developing cocoadotts.com was an absolute pleasure. He is incredibly knowledgeable, professional, and patient, taking the time to truly understand my vision and bring it to life flawlessly. No matter the changes or requests, he was always accommodating and ready with the perfect solution. His dedication, clear communication, and client-first attitude make him a standout developer—I cannot recommend him highly enough!",
      project: "cocoadotts.com Website Development",
    },
    {
      id: "review-3",
      name: "Shashank Jangid",
      role: "Founder",
      company: "Orange Future Tech",
      image: "/reviews/shashank.jpg",
      rating: 5,
      content:
        "Devansh did an outstanding job developing our website, orangefuturetech.com, and collaborating with us on the IIT Jodhpur smart ID card generation software. He grasps complex technical requirements effortlessly, brings smart, practical solutions to the table, and executes every task with impressive precision. His clear communication, proactive attitude, and focus on delivering high-quality results make him a pleasure to work with. I highly recommend Devansh for both web development and software engineering projects.",
      project: "orangefuturetech.com & Smart ID Software",
    },
    {
      id: "review-4",
      name: "Priya Deshmukh",
      role: "Academic Coordinator",
      company: "Delhi Public School Network",
      image: "/reviews/priya.jpg",
      rating: 5,
      content:
        "Transparent pricing, committed timelines, and prompt communication. Parents love how fast the portal loads on mobile, and the monthly care plan gives our administration team complete peace of mind.",
      project: "Web Portal & Monthly Care Plan",
    },
  ],

  services: [
    {
      id: "web",
      title: "Fast, High-Converting Websites",
      badge: "Modern Websites",
      shortDesc:
        "Stunning, easy-to-use websites designed to impress your visitors, look flawless on mobile, and turn clicks into paying customers.",
      description:
        "Your website is your 24/7 storefront. We design clean, lightning-fast websites that make your brand look world-class. They load in the blink of an eye, rank higher on Google search, and make it effortless for your clients to reach out or buy.",
      capabilities: [
        "Modern company websites & online portfolios",
        "Landing pages designed to capture leads & boost sales",
        "Loads in under 1 second on mobile and desktop",
        "Looks great on all screen sizes with zero glitches",
        "Built-in Google search visibility (SEO) so people can find you",
        "Instant customer inquiry alerts straight to your inbox",
      ],
      deliverables: [
        "100% complete, ready-to-launch website with full ownership",
        "Live hosting setup on your custom domain with free security (SSL)",
        "Google search & visitor analytics setup",
        "Zero monthly lock-in fees — you own everything",
      ],
    },
    {
      id: "saas",
      title: "Custom Web Portals & Business Software",
      badge: "Custom Software",
      shortDesc:
        "Custom client portals, booking platforms, and automated tools tailored to run your unique business smoothly.",
      description:
        "Tired of messy spreadsheets and repetitive manual work? We build custom web apps, customer accounts, and internal management tools tailored exactly to how your business runs.",
      capabilities: [
        "Custom web applications built for your specific workflow",
        "Interactive customer portals & team management dashboards",
        "Secure user logins & protected accounts",
        "Online payment collection (Credit Cards, UPI, Stripe) & instant receipts",
        "Secure cloud data storage with automated daily backups",
        "Clean, simple interfaces that anyone on your team can use easily",
      ],
      deliverables: [
        "Complete production software with 100% IP ownership",
        "Secure database setup & user account system",
        "Thorough testing to guarantee a bug-free experience",
        "Friendly launch assistance and ongoing peace-of-mind support",
      ],
    },
    {
      id: "hardware",
      title: "Smart Hardware & Connected Devices",
      badge: "Hardware & IoT",
      shortDesc:
        "We turn your physical product ideas, smart machines, and automated prototypes into working reality.",
      description:
        "Have an idea for a physical gadget, smart device, or automated machine? We design the electronics, program the internal brains, and connect them to smartphone or web controls.",
      capabilities: [
        "Smart device prototypes with Wi-Fi & Bluetooth controls",
        "Phone & web dashboards to monitor devices remotely",
        "Smooth motorized movements, smart sensors & cameras",
        "Custom circuit board design & neat physical assembly",
        "Live testing and fine-tuning before final delivery",
        "Safe, insured courier delivery across India",
      ],
      deliverables: [
        "Fully assembled, working physical hardware prototype",
        "Complete circuit diagrams & program files (100% yours)",
        "Clear list of all components and where to order them",
        "Simple, step-by-step user guide and wiring manual",
      ],
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Tell Us What You Need",
      desc: "Share your goals, ideas, or problems. We analyze your requirements and send you a clear plan, fixed timeline, and transparent quote within 24–48 hours.",
    },
    {
      step: "02",
      title: "We Build & Share Weekly Demos",
      desc: "We get to work immediately. Every week, you receive a private live link to test the progress, see real features in action, and share your feedback.",
    },
    {
      step: "03",
      title: "Speed, Quality & Security Testing",
      desc: "Before launching, we test everything across phones, tablets, and laptops to ensure instant loading speed, zero errors, and airtight security.",
    },
    {
      step: "04",
      title: "Live Launch & 100% Handover",
      desc: "We launch your project on your custom domain and hand over 100% of all files, passwords, code, and guides. Zero vendor lock-in.",
    },
  ],

  stats: [
    { label: "Loading Speed", value: "< 1 Sec", subtext: "Instant page loads keep visitors engaged" },
    { label: "Your Ownership", value: "100%", subtext: "You own all files, code, and accounts completely" },
    { label: "Fast Quote", value: "24-48h", subtext: "Clear scope & fixed price with no hidden surprises" },
    { label: "Delivery & Reach", value: "Pan-India", subtext: "Direct communication & insured prototype shipping" },
  ],
};
