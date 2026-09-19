import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Sparkles,
  Bot,
  RotateCcw,
  Mail,
  ArrowRight,
  User,
} from 'lucide-react';
import { sendChatMessage, sanitizeChatOutput, ChatMessage } from '../../services/groqService';

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        "Hello! I am Cortex, the Steel & Stack AI Engineering Assistant. We engineer high-converting web platforms (React 19), custom software & automation, and connected IoT hardware with sub-second speeds and 100% code ownership.\n\nHow can I help you today? You can ask about our tracks, sprint pricing, or technical stack!",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ prompt?: string }>;
      setIsOpen(true);
      if (customEvent.detail?.prompt) {
        const query = customEvent.detail.prompt;
        // Schedule send after drawer opens
        setTimeout(() => {
          handleSend(query);
        }, 150);
      }
    };

    window.addEventListener('open-ai-chat', handleOpenEvent);
    return () => window.removeEventListener('open-ai-chat', handleOpenEvent);
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMessage: ChatMessage = { role: 'user', content: query };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const replyContent = await sendChatMessage(updatedMessages);
      setMessages([...updatedMessages, { role: 'assistant', content: replyContent }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...updatedMessages,
        {
          role: 'assistant',
          content:
            "I ran into a temporary connection issue. Please feel free to email our engineers directly at devansh8011@gmail.com or submit your inquiry in our contact section below!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'assistant',
        content:
          "Chat reset! What project or technical challenge can we help you explore today?",
      },
    ]);
  };

  const scrollToContact = () => {
    setIsOpen(false);
    const el = document.getElementById('contact') || document.getElementById('quote-terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hasApiKey = Boolean(import.meta.env.VITE_GROQ_API_KEY?.trim());

  return (
    <>
      {/* Floating Circular Action Button + Cortex Speech Bubble */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
        {/* Floating Cortex Teaser Message Bubble */}
        <AnimatePresence>
          {!isOpen && showTeaser && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(true)}
              className="mb-2.5 max-w-[260px] sm:max-w-[285px] bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3 shadow-[0_12px_35px_-5px_rgba(15,23,42,0.18)] dark:shadow-[0_12px_35px_-5px_rgba(0,0,0,0.55)] relative cursor-pointer group hover:border-brand-orange-400 dark:hover:border-brand-orange-500/50 transition-all"
            >
              {/* Dismiss Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTeaser(false);
                }}
                className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-[10px] transition-colors shadow-xs"
                title="Dismiss message"
                aria-label="Dismiss message"
              >
                <X className="w-3 h-3" />
              </button>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-200 dark:border-brand-orange-800 text-brand-orange-600 dark:text-brand-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] font-black uppercase tracking-wider text-brand-orange-600 dark:text-brand-orange-400">
                      CORTEX AI
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-[11px] font-sans text-slate-800 dark:text-slate-200 font-medium leading-snug mt-0.5 group-hover:text-brand-orange-600 dark:group-hover:text-brand-orange-400 transition-colors">
                    Chat with <strong className="text-slate-950 dark:text-white font-bold">Cortex</strong> to discuss websites, automation &amp; IoT hardware →
                  </p>
                </div>
              </div>

              {/* Downward Speech Bubble Pointer Arrow */}
              <div className="absolute -bottom-1.5 right-5 sm:right-6 w-3 h-3 bg-white dark:bg-[#0D1322] border-r border-b border-slate-200/90 dark:border-slate-800 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            type="button"
            className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-brand-orange-600 via-brand-orange-500 to-amber-500 flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(234,88,12,0.55),0_0_15px_rgba(234,88,12,0.25)] hover:shadow-[0_14px_30px_-5px_rgba(234,88,12,0.7),0_0_22px_rgba(234,88,12,0.4)] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange-500/50"
            aria-label="Open Cortex AI Assistant"
            title="Chat with Cortex to discuss websites, automation & hardware"
          >
            {/* Center Sparkle Icon */}
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.2] group-hover:rotate-12 transition-transform duration-300 drop-shadow-xs" />

            {/* Overlapping Top-Right Green Online Status Badge (Matching Image Reference) */}
            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#10B981] border-[2.5px] border-slate-900 shadow-xs flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
            </div>
          </motion.button>
        )}
      </div>

      {/* Expandable Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[410px] h-[550px] max-h-[85vh] bg-white dark:bg-[#090D16] border border-slate-300/90 dark:border-slate-800 rounded-3xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.35),0_0_30px_rgba(234,88,12,0.15)] flex flex-col overflow-hidden select-none"
          >
            {/* Chat Top Header */}
            <div className="px-4 py-3.5 bg-slate-100/90 dark:bg-[#0D1322] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-2xl bg-brand-orange-500 flex items-center justify-center text-white shadow-xs flex-shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider truncate">
                      Cortex // Steel &amp; Stack AI
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block truncate">
                    Fast LLaMA 3.3 • Groq Powered
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors"
                  title="Reset conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors"
                  title="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Messages Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 font-sans text-xs bg-slate-50/50 dark:bg-[#090D16]">
              {messages.map((msg, idx) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="w-6 h-6 rounded-lg bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-300 dark:border-brand-orange-800 flex items-center justify-center text-brand-orange-600 flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed font-sans ${
                        isUser
                          ? 'bg-brand-orange-500 text-white shadow-xs rounded-tr-xs font-medium'
                          : 'bg-white dark:bg-[#0D1322] border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-xs rounded-tl-xs whitespace-pre-line'
                      }`}
                    >
                      {sanitizeChatOutput(msg.content)}

                      {/* Direct CTA Action Links on Bot Messages */}
                      {!isUser && idx > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                          <a
                            href="mailto:devansh8011@gmail.com"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-orange-50 dark:bg-brand-orange-950/60 text-brand-orange-700 dark:text-brand-orange-300 border border-brand-orange-200 dark:border-brand-orange-800/80 font-mono text-[10px] font-bold hover:border-brand-orange-400 transition-colors"
                          >
                            <Mail className="w-3 h-3" />
                            <span>devansh8011@gmail.com</span>
                          </a>
                          <button
                            type="button"
                            onClick={scrollToContact}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-[10px] font-bold hover:text-brand-orange-600 transition-colors"
                          >
                            <span>Scope a Project</span>
                            <ArrowRight className="w-3 h-3 text-brand-orange-500" />
                          </button>
                        </div>
                      )}
                    </div>
                    {isUser && (
                      <div className="w-6 h-6 rounded-lg bg-slate-900 text-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing Animated Indicator */}
              {loading && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-brand-orange-50 dark:bg-brand-orange-950/60 border border-brand-orange-300 dark:border-brand-orange-800 flex items-center justify-center text-brand-orange-600 flex-shrink-0">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <div className="bg-white dark:bg-[#0D1322] border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-xs px-3.5 py-2 text-slate-400 flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 animate-bounce [animation-delay:0.4s]" />
                    <span className="font-mono text-[10px] text-slate-400 ml-1">Groq generating...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Input Field */}
            <div className="p-3 bg-white dark:bg-[#0D1322] border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-[#090D16] rounded-full px-3 py-1.5 border border-slate-200 dark:border-slate-700/90 focus-within:border-brand-orange-500 focus-within:ring-2 focus-within:ring-brand-orange-500/20 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about web platforms, pricing, hardware..."
                  disabled={loading}
                  className="flex-1 bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none font-sans"
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={!input.trim() || loading}
                  className="w-7 h-7 rounded-full bg-brand-orange-500 hover:bg-brand-orange-600 disabled:opacity-40 disabled:hover:bg-brand-orange-500 flex items-center justify-center text-white transition-colors flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Discreet Footer Note */}
              <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-slate-500 dark:text-slate-400 px-1">
                <span>
                  Consult senior engineers:{' '}
                  <a
                    href="mailto:devansh8011@gmail.com"
                    className="text-brand-orange-600 font-bold hover:underline"
                  >
                    devansh8011@gmail.com
                  </a>
                </span>
                {!hasApiKey && (
                  <span className="text-amber-500" title="Add VITE_GROQ_API_KEY in .env">
                    • Knowledge mode
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
