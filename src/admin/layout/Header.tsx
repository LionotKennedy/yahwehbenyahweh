

"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LogOut, User, X } from "lucide-react"
import { logout } from "../api/apiAuth"
import "./style/Header.css"
import "./style/HeaderModal.css"

interface AdminUser {
  id: number
  email: string
  role: number
  first_name: string
  last_name: string
}

export function AdminNavbar() {
  const navigate = useNavigate()
  const [user, setUser] = useState<AdminUser | null>(null)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("adminUser")
    if (stored) setUser(JSON.parse(stored))
  }, [])

  const handleLogoutClick = () => {
    setShowLogoutModal(true)
  }

  const handleConfirmLogout = async () => {
    setIsLoggingOut(true)
    try {
      await logout()
      localStorage.removeItem("adminToken")
      localStorage.removeItem("adminUser")
      navigate("/admin/login")
    } catch (err) {
      console.error("Logout failed:", err)
    } finally {
      setIsLoggingOut(false)
      setShowLogoutModal(false)
    }
  }

  const handleCancelLogout = () => {
    setShowLogoutModal(false)
  }

  if (!user) return null

  return (
    <>
      <header className="admin-navbar">
        <div className="navbar-content">
          <h1>Administration</h1>
          <div className="navbar-actions">
            <div className="user-info">
              <User size={20} />
              <span>
                {user.first_name} {user.last_name}
              </span>
            </div>
            <button onClick={handleLogoutClick} className="logout-btn">
              <LogOut size={20} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </header>

      {/* Modal de confirmation */}
      {showLogoutModal && (
        <div className="modal-overlay" onClick={handleCancelLogout}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Confirmer la déconnexion</h3>
              <button className="modal-close-btn" onClick={handleCancelLogout} disabled={isLoggingOut}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
              <p className="modal-subtitle">Vous devrez vous reconnecter pour accéder à l'administration.</p>
            </div>

            <div className="modal-actions">
              <button className="btn-cancel" onClick={handleCancelLogout} disabled={isLoggingOut}>
                Annuler
              </button>
              <button className="btn-confirm" onClick={handleConfirmLogout} disabled={isLoggingOut}>
                {isLoggingOut ? (
                  <>
                    <div className="spinner"></div>
                    Déconnexion...
                  </>
                ) : (
                  <>
                    <LogOut size={16} />
                    Se déconnecter
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
