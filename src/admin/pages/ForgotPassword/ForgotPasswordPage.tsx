"use client"
import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Mail, ArrowRight, ArrowLeft } from "lucide-react"
import "./forgotPassword.css"
import { forgotPassword } from "../../api/apiAuth"

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   setError("")

  //   try {
  //     // Simuler l'envoi d'email de réinitialisation
  //     // Remplacez par votre API call
  //     await new Promise((resolve) => setTimeout(resolve, 1000))

  //     // Rediriger vers la page de réinitialisation avec l'email
  //     navigate("/admin/reset-password", { state: { email } })
  //   } catch (err) {
  //     setError("Une erreur est survenue lors de l'envoi de l'email.")
  //   } finally {
  //     setLoading(false)
  //   }
  // }


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  setError("")

  try {
    const { userId } = await forgotPassword(email)
    navigate("/admin/reset-password", { state: { email, userId } })
  } catch (err: any) {
    setError(err.message || "Erreur lors de l'envoi de l'email.")
  } finally {
    setLoading(false)
  }
}

  const handleBackToLogin = () => {
    navigate("/admin/login")
  }

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <div className="forgot-password-header">
          <div className="forgot-password-icon">
            <Mail size={32} />
          </div>
          <h1 className="forgot-password-title">Mot de passe oublié</h1>
          <p className="forgot-password-subtitle">
            Entrez votre adresse email pour recevoir les instructions de réinitialisation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="form-group-forgot">
            <label className="form-label-forgot">Adresse email</label>
            <div className="input-group-forgot">
              <Mail className="input-icon-forgot" size={20} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input-forgot input-with-icon-forgot"
                placeholder="votre.email@exemple.com"
                disabled={loading}
              />
            </div>
          </div>

          {error && <div className="error-message-forgot">{error}</div>}

          <button type="submit" className="forgot-password-button-submit" disabled={loading}>
            <ArrowRight size={20} />
            <span>{loading ? "Envoi en cours..." : "Envoyer"}</span>
          </button>
        </form>

        <div className="back-to-login">
          <button onClick={handleBackToLogin} className="back-to-login-button">
            <ArrowLeft size={16} />
            <span>Retour à la connexion</span>
          </button>
        </div>

        <div className="forgot-password-note">
          <p>Vous recevrez un email avec un code de validation à 5 chiffres</p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
