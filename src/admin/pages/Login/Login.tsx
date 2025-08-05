
"use client";
import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, User, Lock } from "lucide-react";
import { login } from "../../api/apiAuth"; // Import the login function
import "./login.css";



const AdminLogin: React.FC = () => {
 
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const { token, user } = await login(credentials.email, credentials.password);
    if (user.role === 1) {
      localStorage.setItem("adminToken", token);
      localStorage.setItem("adminUser", JSON.stringify(user)); // ✅ Ajout
      navigate("/admin");
    } else {
      setError("Accès refusé : Vous n'avez pas les droits d'administrateur.");
    }
  } catch (err) {
    setError(err instanceof Error ? err.message : "Une erreur est survenue.");
  }
};

  const handleForgotPassword = () => {
    navigate("/admin/forgot-password")
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <LogIn size={32} />
          </div>
          <h1 className="login-title">Back Office</h1>
          <p className="login-subtitle">
            Connectez-vous à votre panneau d'administration
          </p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group-login">
            <label className="form-label-login">Email</label>
            <div className="input-group">
              <User className="input-icon" size={20} />
              <input
                type="email"
                required
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                className="form-input input-with-icon"
                placeholder="votre.email@exemple.com"
              />
            </div>
          </div>
          <div className="form-group-login">
            <label className="form-label-login">Mot de passe</label>
            <div className="input-group">
              <Lock className="input-icon" size={20} />
              <input
                type="password"
                required
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="form-input input-with-icon"
                placeholder="••••••••"
              />
            </div>
          </div>
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
          <button type="submit" className="login-button">
            <LogIn size={20} />
            <span>Se connecter</span>
          </button>

          <div className="forgot-password-link">
          <button type="button" onClick={handleForgotPassword} className="forgot-password-button">
            Mot de passe oublié ?
          </button>
        </div>
        </form>
        <div className="login-note">
          <p>
            Utilisez votre email et mot de passe administrateur pour vous connecter
          </p>
        </div>
        {/* Oublier mot de passe ?{" "} */}
      </div>
    </div>
  );
};

export default AdminLogin;