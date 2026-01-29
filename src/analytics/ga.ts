const sessionId = crypto.randomUUID()

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function trackTotemEvent(data: Record<string, any>) {
  if (!window.gtag) return

  window.gtag('event', 'totem_action', {
    app: 'totem',
    session_id: sessionId,
    ...data,
  })
}
