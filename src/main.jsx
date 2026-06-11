import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  ThemeProvider,
}
  from "./context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>

      <App />

      {/* <div className="w-[95%] mx-auto">
        <App />
      </div> */}

    </ThemeProvider>
  </StrictMode>,
)
