import posthog from 'posthog-js'

export const analytics = {
  serviceAccessed(serviceId: string) {
    posthog.capture('service_accessed', { service_id: serviceId })
  },

  serviceFinished(serviceId: string, status: 'success' | 'error') {
    posthog.capture('service_finished', {
      service_id: serviceId,
      status,
    })
  },

  serviceExited(serviceId: string, duration: number) {
    posthog.capture('service_exited', {
      service_id: serviceId,
      duration_seconds: duration,
    })
  },

  profileAccessed() {
    posthog.capture('profile_accessed')
  },

  paymentAccessed() {
    posthog.capture('payment_accessed')
  },

  paymentMethod(method: 'pix' | 'boleto' | 'cartao') {
    posthog.capture('payment_method_selected', { method })
  },

  qrCodeViewed() {
    posthog.capture('qr_code_viewed')
  },
}
