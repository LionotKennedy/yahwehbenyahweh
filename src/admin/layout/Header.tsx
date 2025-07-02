
"use client"

import { useNavigate } from "react-router-dom"
import { LogOut, User } from "lucide-react"

export function AdminNavbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    navigate("/admin/login")
  }

  return (
    <header className="admin-navbar">
      <div className="navbar-content">
        <h1>Administration</h1>
        <div className="navbar-actions">
          <div className="user-info">
            <User size={20} />
            <span>Admin</span>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </div>
      </div>
    </header>
  )
}
