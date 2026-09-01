import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.tsx'
import { notifyVisit } from './lib/telegram'

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
if (gaId) {
  ReactGA.initialize(gaId)
}

// Notify on first visit — once per browser session
notifyVisit()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
