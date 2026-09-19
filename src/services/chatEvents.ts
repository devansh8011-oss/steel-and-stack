export function openAIChat(prompt?: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-ai-chat', { detail: { prompt } }));
  }
}
