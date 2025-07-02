// import React from 'react';

// const ContactTab: React.FC = () => {
//   return (
//     <div className="tab-content fade-in">
//       <h2>Bienvenue sur notre site Contact</h2>
//       <p>Ceci est la page d'accueil. Vous trouverez ici les dernières actualités.</p>
//     </div>
//   );
// };

// export default ContactTab;






























import React, { useState } from 'react';
import { Save, Phone, Mail, FileText, Type } from 'lucide-react';
import './style/ContactTab.css';

const ContactTab: React.FC = () => {
  // États pour les champs
  const [title, setTitle] = useState('');
  const [description1, setDescription1] = useState('');
  const [description2, setDescription2] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Fonctions de sauvegarde
  const handleSaveTitle = () => {
    console.log('Titre sauvegardé:', title);
  };

  const handleSaveDescription1 = () => {
    console.log('Description 1 sauvegardée:', description1);
  };

  const handleSaveDescription2 = () => {
    console.log('Description 2 sauvegardée:', description2);
  };

  const handleSavePhone = () => {
    console.log('Téléphone sauvegardé:', phone);
  };

  const handleSaveEmail = () => {
    console.log('Email sauvegardé:', email);
  };

  return (
    <div className="contact-tab">
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

      {/* Aperçu côté client */}
      <div className="contact-preview">
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
      </div>
    </div>
  );
};

export default ContactTab;