import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/home/base.css'
import './styles/interactions.css'
import App from './App.jsx'
import { takeOverScrollRestoration } from './utils/router.js'

// Take over scroll restoration before router is created
takeOverScrollRestoration()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
