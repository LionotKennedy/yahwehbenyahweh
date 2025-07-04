
      {/* Aperçu côté client */}
      {/* <div className="contact-preview">
        <h2>{title || "Titre de la page contact"}</h2>
        {description1 && <p className="contact-description">{description1}</p>}
        {description2 && <p className="contact-description">{description2}</p>}

        <div className="contact-info">
          {phone && (
            <div className="contact-info-item">
              <Phone size={18} />
              <span>{phone}</span>
            </div>
          )}
          {email && (
            <div className="contact-info-item">
              <Mail size={18} />
              <span>{email}</span>
            </div>
          )}
        </div>
      </div> */}



      

import React, { useEffect, useState } from "react";
import { Save, Phone, Mail, FileText, Type } from "lucide-react";
import "./style/ContactTab.css";
import contact_Data from "../../../../data/contact.json";

interface contactData {
  contact: {
    title: string;
    description1: string;
    description2: string;
    phone: string;
    email: string;
  };
}

const ContactTab: React.FC = () => {
  // États pour les champs
  const [title, setTitle] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadJsonData = async () => {
    try {
      setIsLoading(true);

      // Utilisation des données directement importées
      const data: contactData = contact_Data;

      // Charger les données dans les états
      if (data.contact) {
        // Section Home
        setTitle(data.contact.title || "");
        setDescription1(data.contact.description1 || "");
        setDescription2(data.contact.description2 || "");
        setPhone(data.contact.phone || "");
        setEmail(data.contact.email || "");
      }

      setError(null);
    } catch (err) {
      console.error("Erreur lors du traitement des données:", err);
      setError("Impossible de traiter les données.");
    } finally {
      setIsLoading(false);
    }
  };

  // Charger les données au montage du composant
  useEffect(() => {
    loadJsonData();
  }, []);

  // Fonction pour sauvegarder les données (à adapter selon votre backend)
  const saveDataToJson = async (
    section: string,
    field: string,
    value: string
  ) => {
    try {
      // Ici vous pouvez implémenter la logique pour sauvegarder dans votre backend
      console.log(`Sauvegarde: ${section}.${field} = ${value}`);

      // Exemple d'appel API pour sauvegarder
      // const response = await fetch('/api/save-content', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ section, field, value })
      // });

      alert(`${field} sauvegardé avec succès!`);
    } catch (err) {
      console.error("Erreur lors de la sauvegarde:", err);
      alert("Erreur lors de la sauvegarde");
    }
  };

  // Fonctions de sauvegarde
  const handleSaveTitle = () => {
    saveDataToJson("contact.","title", title);
  };

  const handleSaveDescription1 = () => {
     saveDataToJson("contact.","description1", description1);
  };

  const handleSaveDescription2 = () => {
    saveDataToJson("contact.","description2", description2);
  };

  const handleSavePhone = () => {
    saveDataToJson("contact.","phone", phone);
  };

  const handleSaveEmail = () => {
     saveDataToJson("contact.","email", email);
  };
  // Affichage du chargement
  if (isLoading) {
    return (
      <div className="home-tab fade-in">
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>Chargement des données...</p>
        </div>
      </div>
    );
  }

  // Affichage d'erreur
  if (error) {
    return (
      <div className="home-tab fade-in">
        <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
          <p>{error}</p>
          <button
            onClick={loadJsonData}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="contact-tab fade-in">
      <h1 className="contact-title">Page Contact</h1>

      <div className="contact-admin-controls">
        {/* Champ Titre */}
        <div className="contact-input-group">
          <label className="contact-input-label">
            <Type className="label-icon" size={16} />
            Titre de la page
          </label>
          <div className="contact-input-wrapper">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Entrez le titre de la page contact..."
              className="contact-input"
            />
            <button
              onClick={handleSaveTitle}
              className="contact-save-button"
              disabled={!title.trim()}
            >
              <Save size={14} />
              Sauvegarder
            </button>
          </div>
        </div>

        {/* Champ Description 1 */}
        <div className="contact-input-group">
          <label className="contact-input-label">
            <FileText className="label-icon" size={16} />
            Première description
          </label>
          <div className="contact-input-wrapper">
            <textarea
              value={description1}
              onChange={(e) => setDescription1(e.target.value)}
              placeholder="Entrez la première description..."
              className="contact-textarea"
              rows={3}
            />
            <button
              onClick={handleSaveDescription1}
              className="contact-save-button"
              disabled={!description1.trim()}
            >
              <Save size={14} />
              Sauvegarder
            </button>
          </div>
        </div>

        {/* Champ Description 2 */}
        <div className="contact-input-group">
          <label className="contact-input-label">
            <FileText className="label-icon" size={16} />
            Deuxième description
          </label>
          <div className="contact-input-wrapper">
            <textarea
              value={description2}
              onChange={(e) => setDescription2(e.target.value)}
              placeholder="Entrez la deuxième description..."
              className="contact-textarea"
              rows={3}
            />
            <button
              onClick={handleSaveDescription2}
              className="contact-save-button"
              disabled={!description2.trim()}
            >
              <Save size={14} />
              Sauvegarder
            </button>
          </div>
        </div>

        {/* Champ Téléphone */}
        <div className="contact-input-group">
          <label className="contact-input-label">
            <Phone className="label-icon" size={16} />
            Numéro de téléphone
          </label>
          <div className="contact-input-wrapper">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Entrez le numéro de téléphone..."
              className="contact-input"
            />
            <button
              onClick={handleSavePhone}
              className="contact-save-button"
              disabled={!phone.trim()}
            >
              <Save size={14} />
              Sauvegarder
            </button>
          </div>
        </div>

        {/* Champ Email */}
        <div className="contact-input-group">
          <label className="contact-input-label">
            <Mail className="label-icon" size={16} />
            Adresse email
          </label>
          <div className="contact-input-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez l'adresse email..."
              className="contact-input"
            />
            <button
              onClick={handleSaveEmail}
              className="contact-save-button"
              disabled={!email.trim()}
            >
              <Save size={14} />
              Sauvegarder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
