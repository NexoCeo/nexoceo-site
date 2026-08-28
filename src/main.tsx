import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { ThemeProvider } from './context/ThemeContext';

import '@/styles/global.css'

const rootElement =
  document.getElementById('root')

if (!rootElement) {
  throw new Error(
    'Elemento #root não encontrado.',
  )
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)