import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './components/Profile/Profile.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>

    <Profile/>
    </App>
    
  </StrictMode>,
)
