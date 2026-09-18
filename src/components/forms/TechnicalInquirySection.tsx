import React, { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Mail, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

interface FormState {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
}

const initialState: FormState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 hover:from-brand-orange-600 hover:to-brand-orange-700 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_10px_25px_-5px_rgba(234,88,12,0.4)] hover:shadow-[0_14px_28px_-5px_rgba(234,88,12,0.5)] transition-all"
    >
      {pending ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Submitting Project Brief...</span>
        </>
      ) : (
        <>
          <span>Submit Project Brief</span>
          <Send className="w-4 h-4 ml-1" />
        </>
      )}
    </button>
  );
}

async function submitInquiryAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const honeypot = formData.get('_gotcha') as string;
  if (honeypot) {
    return { success: true, message: 'Message received.' };
  }

  const name = (formData.get('name') as string)?.trim() || '';
  const email = (formData.get('email') as string)?.trim() || '';
  const message = (formData.get('message') as string)?.trim() || '';

  const errors: Record<string, string> = {};

  if (!name || name.length < 2) {
    errors.name = 'Please provide your full name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please provide a valid work email address.';
  }

  if (!message || message.length < 5) {
    errors.message = 'Please describe your project requirements.';
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: 'Direct Inquiry Form',
        projectType: 'Engineering & Technical Support Brief',
        budget: 'Open for evaluation',
        message,
      }),
    });

    const result = await response.json().catch(() => null);

    if (response.ok && result?.success) {
      return {
        success: true,
        message: 'Your inquiry has been delivered directly to our engineering team. We will review your specifications and respond within 24 hours.',
      };
    } else {
      return {
        success: false,
        message: result?.error || 'Failed to transmit message. Please email devansh8011@gmail.com directly.',
      };
    }
  } catch (err: any) {
    return {
      success: false,
      message: err?.message || 'Network error transmitting message.',
    };
  }
}

export const TechnicalInquirySection: React.FC = () => {
  const [state, formAction] = useActionState(submitInquiryAction, initialState);
  const [resetKey, setResetKey] = useState(0);

  return (
    <div className="w-full relative py-8 select-none">
      {/* Subtle floating ambient dust dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange-400/30" />
        <div className="absolute top-24 right-1/3 w-2 h-2 rounded-full bg-sky-400/20" />
        <div className="absolute bottom-16 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange-500/25" />
        <div className="absolute top-1/2 left-12 w-2 h-2 rounded-full bg-slate-400/20" />
      </div>

      {/* Top Title */}
      <div className="text-center mb-8 relative z-10">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 block mb-1">
          Initiate Engagement
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 font-display tracking-tight">
          Let's build something exceptional.
        </h2>
        <p className="text-sm text-slate-500 font-mono mt-1.5">
          Direct communication with senior engineers. Fixed timelines, zero sales fluff.
        </p>
      </div>

      {/* 2 Side-by-Side Rounded Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch relative z-10 px-4">
        {/* Left Card: Engineering & Technical Support */}
        <div className="bg-white border border-slate-200/90 rounded-[28px] p-7 sm:p-10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
                Direct Project Scoping
              </h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed font-sans">
                Tell us about your objectives. We will review your requirements and provide an itemized sprint roadmap and fixed price within 24 hours.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Direct Email Block */}
              <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4 flex items-center gap-4 transition-all hover:border-slate-300">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-brand-orange-500 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block">
                    DIRECT EMAIL
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm sm:text-base font-mono font-bold text-brand-orange-600 hover:text-brand-orange-700 transition-colors truncate block"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4 flex items-center gap-4 transition-all hover:border-slate-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block">
                    RESPONSE COMMITMENT
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-slate-900 block">
                    Within 24 Hours Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Security / Scope Badge */}
          <div className="pt-8 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>100% IP Handover • NDA Protected • Pan-India &amp; Global</span>
          </div>
        </div>

        {/* Right Card: Technical Inquiry Form */}
        <div className="bg-white border border-slate-200/90 rounded-[28px] p-7 sm:p-10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          {state.success ? (
            <div className="my-auto py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 font-display">
                Message Transmitted
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto font-sans leading-relaxed">
                {state.message}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setResetKey((k) => k + 1)}
                  className="py-2.5 px-6 rounded-full border border-slate-300 hover:border-brand-orange-500 text-xs font-mono uppercase tracking-wider text-slate-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form key={resetKey} action={formAction} className="space-y-5 flex-1 flex flex-col justify-between">
              {/* Spam Honeypot */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                style={{ display: 'none' }}
              />

              <div className="space-y-4">
                {/* Field 1: YOUR NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-mono font-bold text-slate-800 uppercase tracking-widest mb-1.5"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g., Alex Mercer"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all font-sans"
                  />
                  {state.errors?.name && (
                    <p className="text-xs text-rose-600 mt-1 font-mono">{state.errors.name}</p>
                  )}
                </div>

                {/* Field 2: WORK EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-mono font-bold text-slate-800 uppercase tracking-widest mb-1.5"
                  >
                    WORK EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500 transition-all font-sans"
                  />
                  {state.errors?.email && (
                    <p className="text-xs text-rose-600 mt-1 font-mono">{state.errors.email}</p>
                  )}
                </div>

                {/* Field 3: PROJECT REQUIREMENTS / BRIEF */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono font-bold text-slate-800 uppercase tracking-widest mb-1.5"
                  >
                    PROJECT REQUIREMENTS / BRIEF
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your software, PCB design, or IoT requirements..."
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-brand-orange-400/90 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange-500 focus:ring-2 focus:ring-brand-orange-500/20 transition-all font-sans resize-none"
                  />
                  {state.errors?.message && (
                    <p className="text-xs text-rose-600 mt-1 font-mono">{state.errors.message}</p>
                  )}
                </div>
              </div>

              {state.message && !state.success && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-mono">
                  {state.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <SubmitButton />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
