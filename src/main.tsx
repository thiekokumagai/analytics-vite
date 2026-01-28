import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,

  integrations: [
    Sentry.browserTracingIntegration(),
  ],

  tracesSampleRate: 1.0, // produção: 0.2 ~ 0.5
  environment: import.meta.env.MODE,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
