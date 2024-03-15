import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModalProvider } from './context/modal.jsx'
import { AlertProvider } from './context/alert.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalProvider>
    <AlertProvider>
      <App />
    </AlertProvider>
  </ModalProvider>
)
