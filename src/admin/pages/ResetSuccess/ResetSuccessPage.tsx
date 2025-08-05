"use client"
import type React from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle, ArrowLeft } from "lucide-react"
import "./resetSuccess.css"

const ResetSuccessPage: React.FC = () => {
  const navigate = useNavigate()

  const handleBackToLogin = () => {
    navigate("/admin/login")
  }

  return (
    <div className="reset-success-container">
      <div className="reset-success-card">
        <div className="reset-success-header">
          <div className="reset-success-icon">
            <CheckCircle size={32} />
          </div>
          <h1 className="reset-success-title">Mot de passe réinitialisé</h1>
          <p className="reset-success-subtitle">Votre mot de passe a été réinitialisé avec succès</p>
        </div>

        <button onClick={handleBackToLogin} className="reset-success-button">
          <ArrowLeft size={20} />
          <span>Retour à la connexion</span>
        </button>
      </div>
    </div>
  )
}

export default ResetSuccessPage
