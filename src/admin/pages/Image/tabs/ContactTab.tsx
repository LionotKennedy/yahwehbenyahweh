import { ChevronDown, ChevronUp, Upload, Save } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./style/HomeTab.css";

interface ContactData {
  id: number;
  path: string;
  alt: string | null;
  created_at: string;
  updated_at: string;
}

const getImageUrl = (path: string): string => {
  if (!path) return "/placeholder.svg";
  // Si le path commence par http, c'est déjà une URL complète
  if (path.startsWith("http")) return path;
  // Sinon, ajouter l'URL du serveur backend
  return `http://localhost:5000${path}`;
};

const ContactTab: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(true);
  const [contactImage, setContactImage] = useState<ContactData[]>([]);
  const [contactsImages, setContactsImages] = useState("");
  const [contactImagas1, setContactImages1] = useState<string[]>([]);
  const fetchContact = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("🚀 Début de la récupération des banners...");

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data: ContactData[] = await response.json();

      setContactImage(data);

      // Trier les banners par ID pour avoir un ordre cohérent
      const sortedContact = data.sort((a, b) => a.id - b.id);
      console.log("🔄 Sections triées par ID:", sortedContact);

      const about_contact = sortedContact.find((contact) => contact.id === 1);
      console.log("📚 Banner livre du mois (ID 1):", about_contact);
      if (about_contact) {
        setContactsImages(getImageUrl(about_contact.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(about_contact.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
      // setContactsImages(
      //   defaultImages.banners.slice(0, 3).map((contact) => contact.path)
      // );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("🔄 useEffect déclenché - Appel de fetchContact");
    fetchContact();
  }, []);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter:
      | React.Dispatch<React.SetStateAction<string>>
      | React.Dispatch<React.SetStateAction<string[]>>,
    index?: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (index !== undefined) {
        // Cas des tableaux (homeImages1 et homeImages2)
        if (setter === setContactImages1) {
          setter((prev: string[]) => {
            const newImages = [...prev];
            newImages[index] = result;
            return newImages;
          });
        }
      } else {
        // Cas des images uniques
        if (typeof setter === "function") {
          (setter as React.Dispatch<React.SetStateAction<string>>)(result);
        }
      }
    };
    reader.readAsDataURL(file);
  };
  const handleSaveImage = () => {
    if (contactImage) {
      console.log("Image de contact sauvegardée:", contactImage);
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
            {isContactOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isContactOpen && (
          <div className="section-content">
            <div className="single-image-container">
              <div className="image-preview large">
                <img
                  src={contactsImages || "/placeholder.svg"}
                  alt={contactImage.find((b) => b.id === 1)?.alt || ""}
                  className="preview-image"
                />
                {contactImage.find((b) => b.id === 5) && (
                  <div
                    className="image-info"
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      left: "8px",
                      backgroundColor: "rgba(0,0,0,0.7)",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "14px",
                    }}
                  >
                    ID: 5
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
                    onChange={(e) => handleImageUpload(e, setContactsImages)}
                    hidden
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
