import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BiRocket } from 'react-icons/bi'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Pages/CartContext.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'



createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <CartProvider>
    <BrowserRouter  basename='/coffee shop website'>
    <StrictMode>
        
    <App />

    </StrictMode>
    </BrowserRouter >
    </CartProvider>
    </AuthProvider>
)
