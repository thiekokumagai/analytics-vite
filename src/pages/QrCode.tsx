import { useEffect } from 'react'
import { trackView } from '../analytics/events'

export function QrCode() {
  const flow = 'consulta_cpf'

  useEffect(() => {
    trackView(flow, 'qr_code')
  }, [])

  return <h2>QR Code</h2>
}
