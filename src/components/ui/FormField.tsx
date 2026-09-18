import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  error,
  required = false,
  hint,
  children,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase flex items-center gap-1"
        >
          {label}
          {required && <span className="text-brand-orange-600">*</span>}
        </label>
        {hint && <span className="text-[11px] font-mono text-slate-500">{hint}</span>}
      </div>
      {children}
      {error && (
        <p className="text-xs text-red-600 font-mono flex items-center gap-1.5 mt-1 animate-fadeIn">
          <svg
            className="w-3.5 h-3.5 flex-shrink-0 text-red-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};
