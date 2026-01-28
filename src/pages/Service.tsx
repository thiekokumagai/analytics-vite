import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { analytics } from '../analytics/events'

export function Service() {
  const serviceId = 'consulta_cpf'
  const navigate = useNavigate()

  useEffect(() => {
    const start = Date.now()
    analytics.serviceAccessed(serviceId)

    return () => {
      const duration = Math.floor((Date.now() - start) / 1000)
      analytics.serviceExited(serviceId, duration)
    }
  }, [])

  function handleSearch() {
    try {
      analytics.serviceFinished(serviceId, 'success')
      navigate('/perfil')
    } catch {
      analytics.serviceFinished(serviceId, 'error')
    }
  }

  return (
    <>
      <h2>Consulta CPF</h2>
      <button onClick={handleSearch}>Realizar consulta</button>
    </>
  )
}
