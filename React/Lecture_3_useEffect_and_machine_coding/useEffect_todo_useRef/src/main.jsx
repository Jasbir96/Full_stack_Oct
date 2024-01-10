import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // in dev mode -> useEffect will called twice in the strict mode 
    <App />
  ,
)
