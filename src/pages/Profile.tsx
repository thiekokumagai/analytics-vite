import { useEffect } from 'react'
import { trackStepEnter } from '../analytics/events'

export function Profile() {
  const flow = 'consulta_cpf'

  useEffect(() => {
    trackStepEnter(flow, 'profile')
  }, [])

  return <h2>Perfil</h2>
}
