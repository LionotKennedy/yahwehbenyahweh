// function ContactTab() {
//   return (
//     <div className="container">
//         fory 1
//     </div>
//   );
// }

// export default ContactTab;











































import { ChevronDown, ChevronUp, Upload, Save } from "lucide-react";
import React, { useState } from "react";
import './style/HomeTab.css';

const ContactTab: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(true);
  const [contactImage, setContactImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setContactImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    if (contactImage) {
      console.log('Image de contact sauvegardée:', contactImage);
    }
  };

  return (
    <div className="home-container">
      {/* Section Contact */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsContactOpen(!isContactOpen)}
        >
          <h1 className="section-title">Contact</h1>
          <button className="toggle-section">
            {isContactOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isContactOpen && (
          <div className="section-content">
            <div className="single-image-container">
              <div className="image-preview large">
                {contactImage ? (
                  <img
                    src={contactImage}
                    alt="Contact preview"
                    className="preview-image"
                  />
                ) : (
                  <div className="image-placeholder">
                    <Upload size={32} />
                    <span>Cliquez pour ajouter une image</span>
                  </div>
                )}
              </div>
              <div className="image-controls">
                <label className="upload-btn">
                  <Upload size={16} />
                  Choisir une image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </label>
                <button
                  onClick={handleSaveImage}
                  className="save-btn"
                  disabled={!contactImage}
                >
                  <Save size={16} />
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ContactTab;
