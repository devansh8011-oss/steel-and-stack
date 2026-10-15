// Client-side rate limiting, word limit, and token estimation helpers

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds?: number;
  reason?: string;
}

export interface TextLimitResult {
  valid: boolean;
  wordCount: number;
  charCount: number;
  estimatedTokens: number;
  error?: string;
}

/**
 * Checks sliding window rate limit using localStorage.
 * @param actionKey unique identifier for the action (e.g. 'ai_chat', 'contact_form')
 * @param maxRequests maximum allowed requests within the time window
 * @param windowMs time window in milliseconds (e.g. 60_000 for 1 minute)
 */
export function checkRateLimit(
  actionKey: string,
  maxRequests: number = 8,
  windowMs: number = 60_000
): RateLimitResult {
  if (typeof window === 'undefined') {
    return { allowed: true };
  }

  const storageKey = `rate_limit_${actionKey}`;
  const now = Date.now();

  try {
    const raw = localStorage.getItem(storageKey);
    let timestamps: number[] = raw ? JSON.parse(raw) : [];

    // Filter out timestamps outside the active window
    timestamps = timestamps.filter((t) => now - t < windowMs);

    if (timestamps.length >= maxRequests) {
      const oldest = timestamps[0];
      const retryAfterSeconds = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
      return {
        allowed: false,
        retryAfterSeconds,
        reason: `Rate limit reached. Please wait ${retryAfterSeconds}s before sending another request.`,
      };
    }

    // Record this attempt
    timestamps.push(now);
    localStorage.setItem(storageKey, JSON.stringify(timestamps));
    return { allowed: true };
  } catch {
    // If localStorage fails or is disabled, allow the request
    return { allowed: true };
  }
}

/**
 * Validates word and character counts, and estimates token usage.
 * Average approximation: 1 word ≈ 1.33 tokens, or ~4 characters per token.
 */
export function validateTextLimits(
  text: string,
  options: {
    minWords?: number;
    maxWords?: number;
    maxTokens?: number;
    maxChars?: number;
  } = {}
): TextLimitResult {
  const { minWords = 1, maxWords = 400, maxTokens = 600, maxChars = 2500 } = options;
  const trimmed = text.trim();

  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  const charCount = trimmed.length;

  // Rule of thumb for LLM token count estimation
  const estimatedTokens = Math.ceil(Math.max(wordCount * 1.35, charCount / 3.8));

  if (wordCount < minWords) {
    return {
      valid: false,
      wordCount,
      charCount,
      estimatedTokens,
      error: `Please enter at least ${minWords} word${minWords > 1 ? 's' : ''}.`,
    };
  }

  if (wordCount > maxWords) {
    return {
      valid: false,
      wordCount,
      charCount,
      estimatedTokens,
      error: `Word limit exceeded (${wordCount}/${maxWords} words). Please shorten your message.`,
    };
  }

  if (charCount > maxChars) {
    return {
      valid: false,
      wordCount,
      charCount,
      estimatedTokens,
      error: `Character limit exceeded (${charCount}/${maxChars} characters).`,
    };
  }

  if (estimatedTokens > maxTokens) {
    return {
      valid: false,
      wordCount,
      charCount,
      estimatedTokens,
      error: `Token limit exceeded (~${estimatedTokens}/${maxTokens} estimated tokens). Please reduce message size.`,
    };
  }

  return {
    valid: true,
    wordCount,
    charCount,
    estimatedTokens,
  };
}
