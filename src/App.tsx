import { useState } from 'react'
import * as Sentry from '@sentry/react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleErrorClick = () => {
    // Contexto extra (opcional, mas recomendado)
    Sentry.setTag('screen', 'home')
    Sentry.setContext('test', {
      action: 'simulate_real_error',
    })

    // 💥 ERRO REAL DE RUNTIME
    const user: any = undefined
    console.log(user.name)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React + Sentry</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button
          style={{ marginLeft: 12, backgroundColor: '#e63946', color: '#fff' }}
          onClick={handleErrorClick}
        >
          💥 Simular erro real
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Clique no botão vermelho para gerar um erro real e enviar ao Sentry
      </p>
    </>
  )
}

export default App
