"use client";

import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, User, Lock } from "lucide-react";
import "./login.css";

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/admin");

    // Logique de connexion simple (à remplacer par votre API)
    // if (credentials.email === "admin" && credentials.password === "password") {
    //   localStorage.setItem("adminToken", "your-token-here");
    //   navigate("/admin");
    // } else {
    //   setError("Identifiants incorrects");
    // }
  };

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
        </form>

        <div className="login-note">
          <p>
            Utilisez n'importe quel email et mot de passe pour vous connecter
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
