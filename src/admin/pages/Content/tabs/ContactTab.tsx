
"use client";

import React, { useEffect, useState } from "react";
import { Save, Phone, Mail, FileText, Type } from "lucide-react";
import "./style/ContactTab.css";
import { contactApi } from "../../../api/api";

const ContactTab: React.FC = () => {
  // États pour les champs
  const [title, setTitle] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loadContactData = async () => {
      try {
        const contactData = await contactApi.get();
        if (contactData.success && contactData.data?.length > 0) {
          const data = contactData.data[0];
          setTitle(data.title || "");
          setDescription1(data.description1 || "");
          setDescription2(data.description2 || "");
          setPhone(data.phone || "");
          setEmail(data.email || "");
        }
      } catch (error) {
        console.error("Error loading contact data:", error);
      }
    };

    loadContactData();
  }, []);

  const handleSaveContact = async () => {
    try {
      const data = {
        title: title,
        description1: description1,
        description2: description2,
        phone: phone,
        email: email
      };
      await contactApi.update(1, data);
    } catch (error) {
      console.error("Error saving contacts:", error);
    }
  };

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
              onClick={handleSaveContact}
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
              onClick={handleSaveContact}
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
              onClick={handleSaveContact}
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
              onClick={handleSaveContact}
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
              onClick={handleSaveContact}
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