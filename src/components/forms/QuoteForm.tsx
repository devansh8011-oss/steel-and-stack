import React, { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { FormField } from '../ui/FormField';
import { SITE_CONFIG } from '../../config/site';
import { CheckCircle, AlertTriangle, Send, Sparkles, RefreshCw, Cpu, Globe, Layers, Wrench, ShieldCheck } from 'lucide-react';

interface FormState {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
  submittedData?: {
    name: string;
    email: string;
    projectType: string;
    budget?: string;
  };
}

const initialState: FormState = {
  success: false,
};

// React 19 Submit Button using useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 px-6 bg-brand-orange-500 hover:bg-brand-orange-600 active:bg-brand-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-orange-md hover:shadow-orange-lg hover:-translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-2.5 font-mono"
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
          <span>TRANSMITTING SPECIFICATIONS...</span>
        </>
      ) : (
        <>
          <Send className="w-4 h-4" />
          <span>TRANSMIT QUOTE REQUEST</span>
        </>
      )}
    </button>
  );
}

// React 19 Form Action Handler
async function submitQuoteAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot spam defense
  const honeypot = formData.get('_gotcha') as string;
  if (honeypot) {
    return {
      success: true,
      message: 'Inquiry received.',
    };
  }

  const name = (formData.get('name') as string)?.trim() || '';
  const email = (formData.get('email') as string)?.trim() || '';
  const phone = (formData.get('phone') as string)?.trim() || '';
  const projectType = (formData.get('projectType') as string)?.trim() || '';
  const budget = (formData.get('budget') as string)?.trim() || '';
  const message = (formData.get('message') as string)?.trim() || '';

  const errors: Record<string, string> = {};

  if (!name || name.length < 2) {
    errors.name = 'Please provide your full name or company name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!phone || phone.replace(/\D/g, '').length < 8) {
    errors.phone = 'Please provide a valid contact number (at least 8–10 digits).';
  }

  if (!projectType) {
    errors.projectType = 'Please select a project type.';
  }

  if (!message || message.length < 10) {
    errors.message = 'Please provide some brief details about your requirements (at least 10 characters).';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
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
        phone,
        projectType,
        budget,
        message,
      }),
    });

    const result = await response.json().catch(() => null);

    if (response.ok && result?.success) {
      return {
        success: true,
        message:
          'Your project specifications have been transmitted straight to Devansh. Our engineering team is reviewing your requirements and will reach out with an itemized BOM, timeline, and quote within 24 hours.',
        submittedData: { name, email, projectType, budget },
      };
    } else {
      // Fallback check if Formspree is configured
      const formId = SITE_CONFIG.formspreeFormId;
      if (formId && formId !== 'YOUR_FORMSPREE_FORM_ID') {
        const fsResponse = await fetch(`https://formspree.io/f/${formId}`, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (fsResponse.ok) {
          return {
            success: true,
            message:
              'Thank you! Your quote request has been transmitted straight to our engineering team. We will get back to you within 24 hours.',
            submittedData: { name, email, projectType, budget },
          };
        }
      }

      return {
        success: false,
        message:
          result?.error ||
          'Unable to deliver request. Please email us directly at devansh8011@gmail.com or WhatsApp +91 73031 77088.',
      };
    }
  } catch {
    return {
      success: false,
      message:
        'Network error while submitting. Please reach out directly to devansh8011@gmail.com or WhatsApp +91 73031 77088.',
    };
  }
}

interface QuoteFormProps {
  defaultType?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ defaultType = 'Custom Robotics' }) => {
  const [selectedType, setSelectedType] = useState<string>(defaultType);
  const [state, formAction] = useActionState(submitQuoteAction, initialState);

  if (state.success) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-hover-card animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle className="w-8 h-8" />
        </div>
        <span className="text-xs uppercase tracking-super-wide text-brand-orange-600 font-mono font-bold block mb-1">
          Specification Received
        </span>
        <h3 className="text-2xl font-black text-slate-900 font-display mb-2">
          Thank you{state.submittedData?.name ? `, ${state.submittedData.name}` : ''}!
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
          {state.message}
        </p>

        <div className="bg-slate-50 rounded-xl p-5 max-w-sm mx-auto text-left text-xs font-mono border border-slate-200 mb-6 space-y-2">
          <div className="flex justify-between text-slate-600">
            <span>Discipline:</span>
            <span className="font-bold text-slate-900">{state.submittedData?.projectType}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Destination Email:</span>
            <span className="font-bold text-brand-orange-600">{SITE_CONFIG.email}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Turnaround:</span>
            <span className="font-bold text-emerald-700">Within 24 Hours</span>
          </div>
        </div>

        <button
          onClick={() => window.location.reload()}
          type="button"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-600 hover:text-brand-orange-600 underline underline-offset-4 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Submit another inquiry
        </button>
      </div>
    );
  }

  const projectTypes = [
    { id: 'Custom Robotics', label: 'Custom Robotics', icon: <Cpu className="w-4 h-4" /> },
    { id: 'Website Development', label: 'Web Platform', icon: <Globe className="w-4 h-4" /> },
    { id: 'Hardware + Web Dashboard', label: 'Hardware + Web', icon: <Layers className="w-4 h-4" /> },
    { id: 'Custom Prototyping', label: 'Other Prototype', icon: <Wrench className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-subtle-card relative overflow-hidden">
      <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-600 block mb-1">
            Online Quote Terminal
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight font-display">
            Configure Your Project Request
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200">
          <Sparkles className="w-3.5 h-3.5 text-brand-orange-500" />
          <span>24h Fast Review</span>
        </div>
      </div>

      {state.message && !state.success && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <span>{state.message}</span>
        </div>
      )}

      {/* Form using React 19 Action */}
      <form action={formAction} className="space-y-5">
        {/* Spam Honeypot */}
        <div className="hidden" aria-hidden="true">
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Interactive Discipline Selector */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase block">
            Select Discipline / Scope <span className="text-brand-orange-600">*</span>
          </label>
          <input type="hidden" name="projectType" value={selectedType} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {projectTypes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedType(t.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-2.5 ${
                  selectedType === t.id
                    ? 'bg-brand-orange-50 border-brand-orange-500 text-slate-900 shadow-orange-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className={selectedType === t.id ? 'text-brand-orange-600' : 'text-slate-400'}>
                  {t.icon}
                </div>
                <div>
                  <div className="text-xs font-bold font-mono leading-tight">{t.label}</div>
                </div>
              </button>
            ))}
          </div>
          {state.errors?.projectType && (
            <p className="text-xs text-red-600 font-mono mt-1">{state.errors.projectType}</p>
          )}
        </div>

        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Client / Organization Name"
            id="name"
            required
            error={state.errors?.name}
          >
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Vikram Sharma"
              className={`w-full px-4 py-3 text-sm bg-slate-50/60 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500/20 focus:border-brand-orange-500 transition-all font-mono ${
                state.errors?.name ? 'border-red-400' : 'border-slate-300'
              }`}
            />
          </FormField>

          <FormField
            label="Email Address"
            id="email"
            required
            error={state.errors?.email}
          >
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="e.g. vikram@example.com"
              className={`w-full px-4 py-3 text-sm bg-slate-50/60 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500/20 focus:border-brand-orange-500 transition-all font-mono ${
                state.errors?.email ? 'border-red-400' : 'border-slate-300'
              }`}
            />
          </FormField>
        </div>

        {/* Phone and Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Phone / WhatsApp"
            id="phone"
            required
            error={state.errors?.phone}
          >
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3 text-sm bg-slate-50/60 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500/20 focus:border-brand-orange-500 transition-all font-mono ${
                state.errors?.phone ? 'border-red-400' : 'border-slate-300'
              }`}
            />
          </FormField>

          <FormField
            label="Target Budget"
            id="budget"
          >
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="w-full px-4 py-3 text-sm bg-slate-50/60 border border-slate-300 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500/20 focus:border-brand-orange-500 transition-all font-mono"
            >
              <option value="" className="text-slate-500">Select an approximate budget (INR)</option>
              <option value="Under ₹15,000">Under ₹15,000 (Rapid prototype / Small site)</option>
              <option value="₹15,000 - ₹40,000">₹15,000 – ₹40,000 (Custom robot / Pro site)</option>
              <option value="₹40,000 - ₹1,00,000">₹40,00,000 – ₹1,00,000 (Complex automation / Web app)</option>
              <option value="₹1,00,000+">₹1,00,000+ (Industrial / Enterprise system)</option>
            </select>
          </FormField>
        </div>

        {/* Message */}
        <FormField
          label="Project Requirements & Specifications"
          id="message"
          required
          error={state.errors?.message}
        >
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Outline your hardware requirements (motors, sensors, power) or website goals..."
            className={`w-full px-4 py-3 text-sm bg-slate-50/60 border rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange-500/20 focus:border-brand-orange-500 transition-all font-mono ${
              state.errors?.message ? 'border-red-400' : 'border-slate-300'
            }`}
          />
        </FormField>

        {/* Trust info */}
        <div className="text-[11px] font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-1 pt-1">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-orange-500" />
            <span>Encrypted transmission to: <strong className="text-slate-800">{SITE_CONFIG.email}</strong></span>
          </span>
          <span className="text-brand-orange-600 font-bold">Guaranteed 24h Turnaround</span>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
