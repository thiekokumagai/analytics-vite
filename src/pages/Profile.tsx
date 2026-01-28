import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { analytics } from '../analytics/events'

export function Profile() {
  const navigate = useNavigate()

  useEffect(() => {
    analytics.profileAccessed()
  }, [])

  function goToPayment() {
    navigate('/pagamento')
  }

  return (
    <>
      <h2>Perfil</h2>
      <button onClick={goToPayment}>
        Ir para pagamento
      </button>
    </>
  )
}
