"use client"
import type React from "react"
import { useState } from "react"
import { Mail, ArrowRight } from "lucide-react"
import "./passwordReset.css"

interface ForgotPasswordProps {
  onEmailSubmit: (email: string) => void
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Simuler l'envoi d'email de réinitialisation
      // Remplacez par votre API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onEmailSubmit(email)
    } catch (err) {
      setError("Une erreur est survenue lors de l'envoi de l'email.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="password-reset-container">
      <div className="password-reset-card">
        <div className="password-reset-header">
          <div className="password-reset-icon">
            <Mail size={32} />
          </div>
          <h1 className="password-reset-title">Mot de passe oublié</h1>
          <p className="password-reset-subtitle">
            Entrez votre adresse email pour recevoir les instructions de réinitialisation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="password-reset-form">
          <div className="form-group-reset">
            <label className="form-label-reset">Adresse email</label>
            <div className="input-group-reset">
              <Mail className="input-icon-reset" size={20} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input-reset input-with-icon-reset"
                placeholder="votre.email@exemple.com"
                disabled={loading}
              />
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="password-reset-button" disabled={loading}>
            <ArrowRight size={20} />
            <span>{loading ? "Envoi en cours..." : "Envoyer"}</span>
          </button>
        </form>

        <div className="password-reset-note">
          <p>Vous recevrez un email avec un code de validation à 5 chiffres</p>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
