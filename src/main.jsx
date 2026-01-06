import { createRoot } from 'react-dom/client'
// import Togglebtn from './components/Togglebtn'
import App from './App.jsx'
import React from 'react'
import './index.css'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
