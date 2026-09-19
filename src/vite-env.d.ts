/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GROQ_API_KEY?: string;
  readonly VITE_GROQ_MODEL?: string;
  readonly VITE_RESEND_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'framer-motion' {
  import * as React from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export const motion: {
    div: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & MotionProps>;
    h1: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & MotionProps>;
    h2: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & MotionProps>;
    p: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & MotionProps>;
    span: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & MotionProps>;
    section: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & MotionProps>;
    [key: string]: any;
  };

  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    mode?: 'sync' | 'popLayout' | 'wait';
    initial?: boolean;
    onExitComplete?: () => void;
  }>;
}
