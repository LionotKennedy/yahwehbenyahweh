"use client"
import type React from "react"
import { useState } from "react"
import { Lock, User, Key, Check } from "lucide-react"
import "./passwordReset.css"

interface ResetPasswordProps {
  email: string
  onPasswordReset: () => void
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ email, onPasswordReset }) => {
  const [formData, setFormData] = useState({
    userId: "",
    validationCode: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Validation
    if (formData.validationCode.length !== 5) {
      setError("Le code de validation doit contenir exactement 5 chiffres.")
      setLoading(false)
      return
    }

    if (formData.newPassword.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.")
      setLoading(false)
      return
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.")
      setLoading(false)
      return
    }

    try {
      // Simuler la réinitialisation du mot de passe
      // Remplacez par votre API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onPasswordReset()
    } catch (err) {
      setError("Une erreur est survenue lors de la réinitialisation.")
    } finally {
      setLoading(false)
    }
  }

  const handleValidationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 5)
    setFormData({ ...formData, validationCode: value })
  }

  return (
    <div className="password-reset-container">
      <div className="password-reset-card">
        <div className="password-reset-header">
          <div className="password-reset-icon">
            <Lock size={32} />
          </div>
          <h1 className="password-reset-title">Nouveau mot de passe</h1>
          <p className="password-reset-subtitle">
            Email: <strong>{email}</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="password-reset-form">
          <div className="form-group-reset">
            <label className="form-label-reset">ID Utilisateur</label>
            <div className="input-group-reset">
              <User className="input-icon-reset" size={20} />
              <input
                type="text"
                required
                value={formData.userId}
                onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                className="form-input-reset input-with-icon-reset"
                placeholder="Votre ID utilisateur"
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group-reset">
            <label className="form-label-reset">Code de validation (5 chiffres)</label>
            <div className="input-group-reset">
              <Key className="input-icon-reset" size={20} />
              <input
                type="text"
                required
                value={formData.validationCode}
                onChange={handleValidationCodeChange}
                className="form-input-reset input-with-icon-reset validation-code-input"
                placeholder="12345"
                maxLength={5}
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group-reset">
            <label className="form-label-reset">Nouveau mot de passe</label>
            <div className="input-group-reset">
              <Lock className="input-icon-reset" size={20} />
              <input
                type="password"
                required
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className="form-input-reset input-with-icon-reset"
                placeholder="••••••••"
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group-reset">
            <label className="form-label-reset">Confirmer le mot de passe</label>
            <div className="input-group-reset">
              <Lock className="input-icon-reset" size={20} />
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="form-input-reset input-with-icon-reset"
                placeholder="••••••••"
                disabled={loading}
              />
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="password-reset-button" disabled={loading}>
            <Check size={20} />
            <span>{loading ? "Réinitialisation..." : "Réinitialiser le mot de passe"}</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
