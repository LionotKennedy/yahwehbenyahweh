
"use client"
import type React from "react"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Lock, User, Key, Check, ArrowLeft } from "lucide-react"
import { resetPassword } from "../../api/apiAuth"
import "./resetPassword.css"

const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email || ""
  const userIdFromState = location.state?.userId || ""

  const [formData, setFormData] = useState({
    // userId: "",
    userId: String(userIdFromState),
    validationCode: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   setError("")

  //   // Validation
  //   if (formData.validationCode.length !== 5) {
  //     setError("Le code de validation doit contenir exactement 5 chiffres.")
  //     setLoading(false)
  //     return
  //   }

  //   if (formData.newPassword.length < 6) {
  //     setError("Le mot de passe doit contenir au moins 6 caractères.")
  //     setLoading(false)
  //     return
  //   }

  //   if (formData.newPassword !== formData.confirmPassword) {
  //     setError("Les mots de passe ne correspondent pas.")
  //     setLoading(false)
  //     return
  //   }

  //   try {
  //     // Simuler la réinitialisation du mot de passe
  //     // Remplacez par votre API call
  //     await new Promise((resolve) => setTimeout(resolve, 1000))

  //     // Rediriger vers la page de succès
  //     navigate("/admin/reset-success")
  //   } catch (err) {
  //     setError("Une erreur est survenue lors de la réinitialisation.")
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // Ajoute l'import

// Remplace la fonction handleSubmit par celle-ci

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  setError("")

  // Validation frontend uniquement
  if (formData.validationCode.length !== 5) {
    setError("Le code de validation doit contenir exactement 5 chiffres.")
    setLoading(false)
    return
  }

  // if (formData.newPassword.length < 6) {
  //   setError("Le mot de passe doit contenir au moins 6 caractères.")
  //   setLoading(false)
  //   return
  // }

  if (formData.newPassword !== formData.confirmPassword) {
    setError("Les mots de passe ne correspondent pas.")
    setLoading(false)
    return
  }

  try {
    await resetPassword({
      userId: Number(formData.userId),
      code: formData.validationCode,
      newPassword: formData.newPassword,
    })

    navigate("/admin/reset-success")
  } catch (err: any) {
    setError(err.message || "Erreur lors de la réinitialisation.")
  } finally {
    setLoading(false)
  }
}

  const handleValidationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 5)
    setFormData({ ...formData, validationCode: value })
  }

  const handleBackToForgot = () => {
    navigate("/admin/forgot-password")
  }

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <div className="reset-password-header">
          <div className="reset-password-icon">
            <Lock size={32} />
          </div>
          <h1 className="reset-password-title">Nouveau mot de passe</h1>
          <p className="reset-password-subtitle">
            Email: <strong>{email}</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="reset-password-form">
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
                disabled={!!userIdFromState || loading}
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
                // className="form-input-reset input-with-icon-reset"
                // placeholder="12345"
                placeholder="*****"
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

          {error && <div className="error-message-reset">{error}</div>}

          <button type="submit" className="reset-password-button-submit" disabled={loading}>
            <Check size={20} />
            <span>{loading ? "Réinitialisation..." : "Réinitialiser le mot de passe"}</span>
          </button>
        </form>

        <div className="back-to-forgot">
          <button onClick={handleBackToForgot} className="back-to-forgot-button">
            <ArrowLeft size={16} />
            <span>Retour</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage
