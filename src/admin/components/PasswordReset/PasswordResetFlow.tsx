"use client"
import type React from "react"
import { useState } from "react"
import ForgotPassword from "./ForgotPassword"
import ResetPassword from "./ResetPassword"
import { CheckCircle, ArrowLeft } from "lucide-react"
import "./passwordReset.css"

const PasswordResetFlow: React.FC = () => {
  const [step, setStep] = useState<"email" | "reset" | "success">("email")
  const [email, setEmail] = useState("")

  const handleEmailSubmit = (submittedEmail: string) => {
    setEmail(submittedEmail)
    setStep("reset")
  }

  const handlePasswordReset = () => {
    setStep("success")
  }

  const handleBackToLogin = () => {
    // Rediriger vers la page de connexion
    window.location.href = "/login"
  }

  if (step === "success") {
    return (
      <div className="password-reset-container">
        <div className="password-reset-card">
          <div className="password-reset-header">
            <div className="password-reset-icon success-icon">
              <CheckCircle size={32} />
            </div>
            <h1 className="password-reset-title">Mot de passe réinitialisé</h1>
            <p className="password-reset-subtitle">Votre mot de passe a été réinitialisé avec succès</p>
          </div>

          <button onClick={handleBackToLogin} className="password-reset-button">
            <ArrowLeft size={20} />
            <span>Retour à la connexion</span>
          </button>
        </div>
      </div>
    )
  }

  if (step === "reset") {
    return <ResetPassword email={email} onPasswordReset={handlePasswordReset} />
  }

  return <ForgotPassword onEmailSubmit={handleEmailSubmit} />
}

export default PasswordResetFlow
