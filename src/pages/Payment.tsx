import { useEffect } from 'react'
import { trackStepEnter, trackSelect } from '../analytics/events'

export function Payment() {
  const flow = 'consulta_cpf'

  useEffect(() => {
    trackStepEnter(flow, 'payment')
  }, [])

  return (
    <>
      <h2>Pagamento</h2>

      <button onClick={() => trackSelect(flow, 'payment', 'pix')}>
        PIX
      </button>

      <button onClick={() => trackSelect(flow, 'payment', 'boleto')}>
        Boleto
      </button>

      <button onClick={() => trackSelect(flow, 'payment', 'cartao')}>
        Cartão
      </button>
    </>
  )
}
