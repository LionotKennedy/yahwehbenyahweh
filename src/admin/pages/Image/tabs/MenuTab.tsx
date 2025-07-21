
"use client";

import { ChevronDown, ChevronUp, Loader2, Save, Upload } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
// import { MenuAPI, getImageUrl } from "./api/menuApi";
import { MenuAPI, getImageUrl } from "../../../api/menuImage";
import "./style/HomeTab.css";

interface SectionMenuData {
  id: number;
  section_name: string | null;
  path: string;
  created_at: string;
  updated_at: string;
}

const MenuTab: React.FC = () => {
  // États de chargement et d'erreur
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // États pour les sections
  const [isTetragrammatonOpen, setIsTetragrammatonOpen] = useState(true);
  const [isNationOpen, setIsNationOpen] = useState(true);
  const [isUniverseOpen, setIsUniverseOpen] = useState(true);
  const [isFeastsOpen, setIsFeastsOpen] = useState(true);
  const [isGoodNewsOpen, setIsGoodNewsOpen] = useState(true);
  const [isCrucifixionOpen, setIsCrucifixionOpen] = useState(true);
  const [isRevelationsOpen, setIsRevelationsOpen] = useState(true);
  const [isSabbathOpen, setIsSabbathOpen] = useState(true);
  const [isErosionOpen, setIsErosionOpen] = useState(true);
  const [isOperationOpen, setIsOperationOpen] = useState(true);
  const [isBalanceOpen, setIsBalanceOpen] = useState(true);

  // Données des menu image depuis l'API
  const [sectionMenubg, setSectionMenuBg] = useState<SectionMenuData[]>([]);
  const [] = useState<string[]>([]);

  // États pour les images
  const [tetragrammatonImage, setTetragrammatonImage] = useState("");
  const [nationImage, setNationImage] = useState("");
  const [universeImage, setUniverseImage] = useState("");
  const [feastsImage, setFeastsImage] = useState("");
  const [goodNewsImage, setGoodNewsImage] = useState("");
  const [crucifixionImage, setCrucifixionImage] = useState("");
  const [revelationsImage, setRevelationsImage] = useState("");
  const [sabbathImage, setSabbathImage] = useState("");
  const [erosionImage, setErosionImage] = useState("");
  const [operationImage1, setOperationImage1] = useState("");
  const [operationImage2, setOperationImage2] = useState("");
  const [balanceImage, setBalanceImage] = useState("");

  const fetchSectionBackground = async () => {
    try {
      setLoading(true);
      setError(null);
      const { success, data, message } = await MenuAPI.fetchAll();

      if (success && data) {
        setSectionMenuBg(data);
        const sortedSectionbg = data.sort((a: SectionMenuData, b: SectionMenuData) => a.id - b.id);

        // Mise à jour des images pour chaque section
        const sections = [
          { id: 1, name: "Tetragrammaton", setter: setTetragrammatonImage },
          { id: 2, name: "The_Nation_of_Yahweh", setter: setNationImage },
          { id: 3, name: "The_Universe_of_Yahweh", setter: setUniverseImage },
          { id: 4, name: "The_Feasts_of_Yahweh", setter: setFeastsImage },
          { id: 5, name: "The_Good_News_of_Yahweh", setter: setGoodNewsImage },
          { id: 6, name: "The_Crucifixion", setter: setCrucifixionImage },
          { id: 7, name: "Shocking_Revelations", setter: setRevelationsImage },
          { id: 8, name: "The_Sabbath", setter: setSabbathImage },
          { id: 9, name: "Erosion_of_The_Constitution", setter: setErosionImage },
          { id: 10, name: "Operation_Word_War", setter: setOperationImage1 },
          { id: 11, name: "Operation_Word_War_2", setter: setOperationImage2 },
          { id: 12, name: "Balance_Justice", setter: setBalanceImage }
        ];

        sections.forEach(section => {
          const banner = sortedSectionbg.find((b: SectionMenuData) =>
            b.id === section.id || b.section_name === section.name
          );
          if (banner) {
            section.setter(getImageUrl(banner.path));
          }
        });
      } else {
        if (message) toast.error(message);
      }
    } catch (err) {
      console.error("Erreur lors de la récupération des sections:", err);
      setError(err instanceof Error ? err.message : "Erreur inconnue");
      toast.error("Erreur lors du chargement des sections");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSectionBackground();
  }, []);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setter(result);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveImage = async (
    imageData: string,
    section_name: string,
    bannerId: number
  ) => {
    const toastId = toast.loading(`Sauvegarde de ${section_name}...`);
    try {
      await MenuAPI.update(bannerId, imageData, section_name);
      await fetchSectionBackground();
      toast.success(`${section_name} sauvegardée avec succès!`, { id: toastId });
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      toast.error(`Échec de la sauvegarde de ${section_name}`, { id: toastId });
    }
  };

  const handleRefresh = () => {
    fetchSectionBackground();
  };

  if (loading) {
    return (
      <div className="home-container">
        <div
          className="loading-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Loader2 className="animate-spin" size={32} />
          <p>Chargement des images...</p>
        </div>
      </div>
    );
  }

  // Fonction pour rendre une section d'image
  const renderImageSection = (
    title: string,
    image: string,
    setImage: React.Dispatch<React.SetStateAction<string>>,
    sectionName: string,
    bannerId: number,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const sectionData = sectionMenubg.find(b =>
      b.id === bannerId || b.section_name === sectionName
    );

    return (
      <section className="home-section">
        <div className="section-header" onClick={() => setIsOpen(!isOpen)}>
          <h1 className="section-title">{title}</h1>
          <button className="toggle-section">
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="section-content">
            <div className="single-image-container">
              <div className="image-preview large">
                <img
                  src={image || "/placeholder.svg"}
                  alt={sectionData?.section_name || title}
                  className="preview-image"
                />
                {sectionData && (
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
                    Section: {title}
                  </div>
                )}
              </div>
              <div className="image-controls">
                <label className="upload-btn">
                  <Upload size={16} />
                  Télécharger
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setImage)}
                    hidden
                  />
                </label>
                <button
                  onClick={() => handleSaveImage(image, sectionName, bannerId)}
                  className="save-btn"
                  disabled={!image}
                >
                  <Save size={16} />
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="home-container">
      {/* Affichage d'erreur si nécessaire */}
      {error && (
        <div
          className="error-container"
          style={{
            backgroundColor: "#fee2e2",
            border: "1px solid #fecaca",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "16px",
            color: "#dc2626",
          }}
        >
          <p>Erreur lors du chargement: {error}</p>
          <button
            onClick={handleRefresh}
            style={{
              marginTop: "8px",
              padding: "4px 8px",
              backgroundColor: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
        </div>
      )}

      {/* Section 1: Tetragrammaton */}
      {renderImageSection(
        "Tetragrammaton",
        tetragrammatonImage,
        setTetragrammatonImage,
        "Tetragrammaton",
        1,
        isTetragrammatonOpen,
        setIsTetragrammatonOpen
      )}

      {/* Section 2: The Nation of Yahweh */}
      {renderImageSection(
        "The Nation of Yahweh",
        nationImage,
        setNationImage,
        "The_Nation_of_Yahweh",
        2,
        isNationOpen,
        setIsNationOpen
      )}

      {/* Section 3: The Universe of Yahweh */}
      {renderImageSection(
        "The Universe of Yahweh",
        universeImage,
        setUniverseImage,
        "The_Universe_of_Yahweh",
        3,
        isUniverseOpen,
        setIsUniverseOpen
      )}

      {/* Section 4: The Feasts of Yahweh */}
      {renderImageSection(
        "The Feasts of Yahweh",
        feastsImage,
        setFeastsImage,
        "The_Feasts_of_Yahweh",
        4,
        isFeastsOpen,
        setIsFeastsOpen
      )}

      {/* Section 5: The Good News of Yahweh */}
      {renderImageSection(
        "The Good News of Yahweh",
        goodNewsImage,
        setGoodNewsImage,
        "The_Good_News_of_Yahweh",
        5,
        isGoodNewsOpen,
        setIsGoodNewsOpen
      )}

      {/* Section 6: The Crucifixion */}
      {renderImageSection(
        "The Crucifixion",
        crucifixionImage,
        setCrucifixionImage,
        "The_Crucifixion",
        6,
        isCrucifixionOpen,
        setIsCrucifixionOpen
      )}

      {/* Section 7: Shocking Revelations */}
      {renderImageSection(
        "Shocking Revelations",
        revelationsImage,
        setRevelationsImage,
        "Shocking_Revelations",
        7,
        isRevelationsOpen,
        setIsRevelationsOpen
      )}

      {/* Section 8: The Sabbath */}
      {renderImageSection(
        "The Sabbath",
        sabbathImage,
        setSabbathImage,
        "The_Sabbath",
        8,
        isSabbathOpen,
        setIsSabbathOpen
      )}

      {/* Section 9: Erosion of The Constitution */}
      {renderImageSection(
        "Erosion of The Constitution",
        erosionImage,
        setErosionImage,
        "Erosion_of_The_Constitution",
        9,
        isErosionOpen,
        setIsErosionOpen
      )}

      {/* Section 10: Operation Word War (2 images) */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsOperationOpen(!isOperationOpen)}
        >
          <h1 className="section-title">Operation Word War</h1>
          <button className="toggle-section">
            {isOperationOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isOperationOpen && (
          <div className="section-content">
            <div
              className="images-row-3"
              style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              {/* Operation Word War 1 */}
              <div className="section-content">
                <div className="single-image-container">
                  <div className="image-preview large">
                    <img
                      src={operationImage1 || "/placeholder.svg"}
                      alt={
                        sectionMenubg.find((b) => b.id === 10)?.section_name ||
                        "Operation_Word_War"
                      }
                      className="preview-image"
                    />
                    {sectionMenubg.find((b) => b.id === 10) && (
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
                        Section: Operation Word War
                      </div>
                    )}
                  </div>
                  <div className="image-controls">
                    <label className="upload-btn">
                      <Upload size={16} />
                      Télécharger
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageUpload(e, setOperationImage1)
                        }
                        hidden
                      />
                    </label>
                    <button
                      onClick={() =>
                        handleSaveImage(
                          operationImage1,
                          "Operation_Word_War",
                          10
                        )
                      }
                      className="save-btn"
                      disabled={!operationImage1}
                    >
                      <Save size={16} />
                      Sauvegarder
                    </button>
                  </div>
                </div>
              </div>

              {/* Operation Word War 2 */}
              <div className="section-content">
                <div className="single-image-container">
                  <div className="image-preview large">
                    <img
                      src={operationImage2 || "/placeholder.svg"}
                      alt={
                        sectionMenubg.find((b) => b.id === 11)?.section_name ||
                        "Operation_Word_War_2"
                      }
                      className="preview-image"
                    />
                    {sectionMenubg.find((b) => b.id === 11) && (
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
                        Section: Operation Word War 2
                      </div>
                    )}
                  </div>
                  <div className="image-controls">
                    <label className="upload-btn">
                      <Upload size={16} />
                      Télécharger
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageUpload(e, setOperationImage2)
                        }
                        hidden
                      />
                    </label>
                    <button
                      onClick={() =>
                        handleSaveImage(
                          operationImage2,
                          "Operation_Word_War_2",
                          11
                        )
                      }
                      className="save-btn"
                      disabled={!operationImage2}
                    >
                      <Save size={16} />
                      Sauvegarder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 11: Balance Justice */}
      {renderImageSection(
        "Balance Justice",
        balanceImage,
        setBalanceImage,
        "Balance_Justice",
        12,
        isBalanceOpen,
        setIsBalanceOpen
      )}
    </div>
  );
};

export default MenuTab;