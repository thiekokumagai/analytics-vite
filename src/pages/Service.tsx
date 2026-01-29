import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  trackStepEnter,
  trackStepExit,
  trackSubmit,
} from '../analytics/events'

export function Service() {
  const flow = 'consulta_cpf'
  const navigate = useNavigate()

  useEffect(() => {
    const start = Date.now()
    trackStepEnter(flow, 'service')

    return () => {
      trackStepExit(flow, 'service', Date.now() - start)
    }
  }, [])

  function handleSearch() {
    try {
      // chamada da API aqui
      trackSubmit(flow, 'service', 'success')
      navigate('/perfil')
    } catch {
      trackSubmit(flow, 'service', 'error', 'API_ERROR')
    }
  }

  return (
    <>
      <h2>Consulta CPF</h2>
      <button onClick={handleSearch}>Realizar consulta</button>
    </>
  )
}
