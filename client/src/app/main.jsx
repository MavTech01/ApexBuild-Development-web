import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/app/index.css'
import '@/shared/styles/base.css'
import '@/shared/styles/interactions.css'
import App from '@/app/App.jsx'
import { takeOverScrollRestoration } from '@/shared/utils/router.js'
import { enablePerfLite } from '@/shared/utils/device.js'

// Flatten decorative effects on low-end hardware before first paint.
enablePerfLite()

// Take over scroll restoration before router is created
takeOverScrollRestoration()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
