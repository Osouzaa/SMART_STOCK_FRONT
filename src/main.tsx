import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './Routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
