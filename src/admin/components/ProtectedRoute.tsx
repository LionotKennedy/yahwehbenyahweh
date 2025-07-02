"use client"

import type React from "react"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiresAuth?: boolean
}

// Hook simple pour vérifier l'authentification (à adapter selon vos besoins)
const useAuth = () => {
  // Remplacez par votre logique d'authentification
  const isAuthenticated = localStorage.getItem("adminToken") !== null
  return { isAuthenticated }
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiresAuth = false }) => {
  const { isAuthenticated } = useAuth()

  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return <>{children}</>
}


