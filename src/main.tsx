import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppProviders from './assets/components/AppProviders/AppProviders.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
    <App />
    </AppProviders>
  </StrictMode>,
)
