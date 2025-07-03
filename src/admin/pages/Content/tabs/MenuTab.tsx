import { ChevronDown, ChevronUp, FileText, Save, Type } from "lucide-react";
import React, { useState } from "react";

const MenuTab: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [description2, setDescription2] = useState("");

  // Nation
  const [titleNation, setTitleNation] = useState("");
  const [descriptionNation, setDescriptionNation] = useState("");
  const [descriptionNation2, setDescriptionNation2] = useState("");
  const [descriptionNation3, setDescriptionNation3] = useState("");
  const handleSaveTitle = () => {
    console.log("Titre sauvegardé:", title);
  };
  const handleSaveDescription = () => {
    console.log("Description saved:", description);
    // Logique de sauvegarde ici
  };
  const handleSaveDescription2 = () => {
    console.log("Description saved:", description2);
    // Logique de sauvegarde ici
  };

  // Nation
  const handleSaveTitleNation = () => {
    console.log("Titre sauvegardé:", titleNation);
  };
  const handleSaveDescriptionNation = () => {
    console.log("Description saved:", descriptionNation);
    // Logique de sauvegarde ici
  };
  const handleSaveDescriptionNation2 = () => {
    console.log("Description saved:", descriptionNation2);
    // Logique de sauvegarde ici
  };

  const handleSaveDescriptionNation3 = () => {
    console.log("Description saved:", descriptionNation3);
    // Logique de sauvegarde ici
  };

  const [isTetragramaOpen, setIsTetragramaOpen] = useState(true);
  const [isNationOpen, setIsNationOpen] = useState(true);
  return (
    <div className="tab-content fade-in">
      {/* Section Tetragrama */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsTetragramaOpen(!isTetragramaOpen)}
        >
          <h1 className="section-title">Tetragrama</h1>
          <button className="toggle-section">
            {isTetragramaOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isTetragramaOpen && (
          <div className="section-content">
            <p>
              Welcome to the official website of the Yahweh Ben Yahweh
              community.
            </p>
            <p>
              This platform serves as a resource for spiritual growth and
              community connection.
            </p>

            {/* Champs d'édition personnalisés */}
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>

              {/* ... keep existing code (Video Links and Title/Description fields) */}

              {/* Champ Titre */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Entrez le titre..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveTitle}
                    className="save-button title-save"
                    disabled={!title.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Champ Description */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveDescription}
                    className="save-button description-save"
                    disabled={!description.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* Champ Description  2 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 2
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={description2}
                    onChange={(e) => setDescription2(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveDescription2}
                    className="save-button description-save"
                    disabled={!description2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section Nation */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsNationOpen(!isNationOpen)}
        >
          <h1 className="section-title">The Nation of Yahweh</h1>
          <button className="toggle-section">
            {isNationOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isNationOpen && (
          <div className="section-content">
            <p>
              Welcome to the official website of the Yahweh Ben Yahweh
              community.
            </p>
            <p>
              This platform serves as a resource for spiritual growth and
              community connection.
            </p>

            {/* Champs d'édition personnalisés */}
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>

              {/* ... keep existing code (Video Links and Title/Description fields) */}

              {/* Champ Titre */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleNation}
                    onChange={(e) => setTitleNation(e.target.value)}
                    placeholder="Entrez le titre..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveTitleNation}
                    className="save-button title-save"
                    disabled={!titleNation.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Champ Description */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={descriptionNation}
                    onChange={(e) => setDescriptionNation(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveDescriptionNation}
                    className="save-button description-save"
                    disabled={!descriptionNation.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* Champ Description  2 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 2
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={descriptionNation2}
                    onChange={(e) => setDescriptionNation2(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveDescriptionNation2}
                    className="save-button description-save"
                    disabled={!descriptionNation2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* Champ Description  2 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 3
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={descriptionNation3}
                    onChange={(e) => setDescriptionNation3(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveDescriptionNation3}
                    className="save-button description-save"
                    disabled={!descriptionNation3.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default MenuTab;
