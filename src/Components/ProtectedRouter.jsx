import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

function ProtectedRouter({children}) {
    const {user} = useAuth()
  const location = useLocation()
  

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  return children;
}

export default ProtectedRouter