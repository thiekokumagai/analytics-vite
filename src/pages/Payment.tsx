import { analytics } from '../analytics/events'

export function Payment() {
  return (
    <>
      <h2>Pagamento</h2>

      <button onClick={analytics.paymentAccessed}>
        Acessar pagamento
      </button>

      <button onClick={() => analytics.paymentMethod('pix')}>
        PIX
      </button>

      <button onClick={() => analytics.paymentMethod('boleto')}>
        Boleto
      </button>

      <button onClick={() => analytics.paymentMethod('cartao')}>
        Cartão
      </button>

      <button onClick={analytics.qrCodeViewed}>
        Ver QR Code
      </button>
    </>
  )
}
