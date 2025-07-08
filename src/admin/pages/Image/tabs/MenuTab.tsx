import { ChevronDown, ChevronUp, Loader2, Save, Upload } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./style/HomeTab.css";

interface SectionMenuData {
  id: number;
  section_name: string | null;
  path: string;
  created_at: string;
  updated_at: string;
}

// Fonction pour construire l'URL complète des images
const getImageUrl = (path: string): string => {
  if (!path) return "/placeholder.svg";
  // Si le path commence par http, c'est déjà une URL complète
  if (path.startsWith("http")) return path;
  // Sinon, ajouter l'URL du serveur backend
  return `http://localhost:5000${path}`;
};

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
  const [menuImagas1, setMenuImages1] = useState<string[]>([]);

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

      console.log("🚀 Début de la récupération des sections...");

      const response = await fetch("http://localhost:5000/api/menu", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("📡 Réponse de l'API:", response);
      console.log("📊 Status de la réponse:", response.status);
      console.log("✅ Réponse OK:", response.ok);

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data: SectionMenuData[] = await response.json();
      console.log("📦 Données brutes reçues:", data);
      console.log("🔢 Nombre de Section reçues:", data.length);

      setSectionMenuBg(data);

      // Trier les banners par ID pour avoir un ordre cohérent
      const sortedSectionbg = data.sort((a, b) => a.id - b.id);
      console.log("🔄 Sections triées par ID:", sortedSectionbg);
      // ID 4 pour le livre du mois
      const Tetragrammaton = sortedSectionbg.find(
        (banner) => banner.id === 1 || banner.section_name === "Tetragrammaton"
      );
      console.log("📚 Banner livre du mois (ID 1):", Tetragrammaton);
      if (Tetragrammaton) {
        console.log("📚 Path du livre du mois:", Tetragrammaton.path);
        setTetragrammatonImage(getImageUrl(Tetragrammaton.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(Tetragrammaton.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }
      const The_Nation_of_Yahweh = sortedSectionbg.find(
        (banner) =>
          banner.id === 2 || banner.section_name === "The_Nation_of_Yahweh"
      );
      console.log("📚 Banner livre du mois (ID 2):", The_Nation_of_Yahweh);
      if (The_Nation_of_Yahweh) {
        console.log("📚 Path du livre du mois:", The_Nation_of_Yahweh.path);
        setNationImage(getImageUrl(The_Nation_of_Yahweh.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(The_Nation_of_Yahweh.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }
      const The_Universe_of_Yahweh = sortedSectionbg.find(
        (banner) =>
          banner.id === 3 || banner.section_name === "The_Universe_of_Yahweh"
      );
      console.log("📚 Banner livre du mois (ID 3):", The_Universe_of_Yahweh);
      if (The_Universe_of_Yahweh) {
        console.log("📚 Path du livre du mois:", The_Universe_of_Yahweh.path);
        setUniverseImage(getImageUrl(The_Universe_of_Yahweh.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(The_Universe_of_Yahweh.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }
      const The_Feasts_of_Yahweh = sortedSectionbg.find(
        (banner) =>
          banner.id === 4 || banner.section_name === "The_Feasts_of_Yahweh"
      );
      console.log("📚 Banner livre du mois (ID 4):", The_Feasts_of_Yahweh);
      if (The_Feasts_of_Yahweh) {
        console.log("📚 Path du livre du mois:", The_Feasts_of_Yahweh.path);
        setFeastsImage(getImageUrl(The_Feasts_of_Yahweh.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(The_Feasts_of_Yahweh.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }

      const The_Good_News_of_Yahweh = sortedSectionbg.find(
        (banner) =>
          banner.id === 5 || banner.section_name === "The_Good_News_of_Yahweh"
      );
      console.log("📚 Banner livre du mois (ID 4):", The_Good_News_of_Yahweh);
      if (The_Good_News_of_Yahweh) {
        console.log("📚 Path du livre du mois:", The_Good_News_of_Yahweh.path);
        setGoodNewsImage(getImageUrl(The_Good_News_of_Yahweh.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(The_Good_News_of_Yahweh.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }

      const The_Crucifixion = sortedSectionbg.find(
        (banner) => banner.id === 5 || banner.section_name === "The_Crucifixion"
      );
      console.log("📚 Banner livre du mois (ID 4):", The_Crucifixion);
      if (The_Crucifixion) {
        console.log("📚 Path du livre du mois:", The_Crucifixion.path);
        setCrucifixionImage(getImageUrl(The_Crucifixion.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(The_Crucifixion.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }

      const Shocking_Revelations = sortedSectionbg.find(
        (banner) =>
          banner.id === 5 || banner.section_name === "Shocking_Revelations"
      );
      console.log("📚 Banner livre du mois (ID 4):", Shocking_Revelations);
      if (Shocking_Revelations) {
        console.log("📚 Path du livre du mois:", Shocking_Revelations.path);
        setRevelationsImage(getImageUrl(Shocking_Revelations.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(Shocking_Revelations.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }

      const The_Sabbath = sortedSectionbg.find(
        (banner) => banner.id === 5 || banner.section_name === "The_Sabbath"
      );
      console.log("📚 Banner livre du mois (ID 4):", The_Sabbath);
      if (The_Sabbath) {
        console.log("📚 Path du livre du mois:", The_Sabbath.path);
        setSabbathImage(getImageUrl(The_Sabbath.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(The_Sabbath.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }

      const Erosion_of_The_Constitution = sortedSectionbg.find(
        (banner) =>
          banner.id === 5 ||
          banner.section_name === "Erosion_of_The_Constitution"
      );
      console.log(
        "📚 Banner livre du mois (ID 4):",
        Erosion_of_The_Constitution
      );
      if (Erosion_of_The_Constitution) {
        console.log(
          "📚 Path du livre du mois:",
          Erosion_of_The_Constitution.path
        );
        setErosionImage(getImageUrl(Erosion_of_The_Constitution.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(Erosion_of_The_Constitution.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }

      const Operation_Word_War = sortedSectionbg.find(
        (banner) =>
          banner.id === 5 || banner.section_name === "Operation_Word_War"
      );
      console.log("📚 Banner livre du mois (ID 4):", Operation_Word_War);
      if (Operation_Word_War) {
        console.log("📚 Path du livre du mois:", Operation_Word_War.path);
        setOperationImage1(getImageUrl(Operation_Word_War.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(Operation_Word_War.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }

      const Operation_Word_War_2 = sortedSectionbg.find(
        (banner) =>
          banner.id === 5 || banner.section_name === "Operation_Word_War_2"
      );
      console.log("📚 Banner livre du mois (ID 4):", Operation_Word_War_2);
      if (Operation_Word_War_2) {
        console.log("📚 Path du livre du mois:", Operation_Word_War_2.path);
        setOperationImage2(getImageUrl(Operation_Word_War_2.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(Operation_Word_War_2.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }

      const Balance_Justice = sortedSectionbg.find(
        (banner) => banner.id === 5 || banner.section_name === "Balance_Justice"
      );
      console.log("📚 Banner livre du mois (ID 4):", Balance_Justice);
      if (Balance_Justice) {
        console.log("📚 Path du livre du mois:", Balance_Justice.path);
        setBalanceImage(getImageUrl(Balance_Justice.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(Balance_Justice.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }

      console.log("✅ Mise à jour des états terminée");
    } catch (err) {
      console.error("❌ Erreur lors de la récupération des banners:", err);
      setError(err instanceof Error ? err.message : "Erreur inconnue");

      // Utiliser les images par défaut en cas d'erreur
      console.log("🔄 Utilisation des images par défaut en cas d'erreur");
    } finally {
      setLoading(false);
      console.log("🏁 Fin de la récupération des banners");
    }
  };

  useEffect(() => {
    console.log("🔄 useEffect déclenché - Appel de fetchSectionBackground");
    fetchSectionBackground();
  }, []);

  // Fonction générique pour sauvegarder l'image
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
        if (setter === setMenuImages1) {
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
  const base64ToFile = (base64String: string, filename: string): File => {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const saveMenuImage = async (id: number, imageData: string, alt?: string) => {
    try {
      console.log(`💾 Début de la sauvegarde de la banner ID ${id}`);

      let body: FormData | string;
      const headers: Record<string, string> = {};

      // Vérifier si c'est une image base64 (uploadée localement)
      if (imageData.startsWith("data:image/")) {
        console.log(
          `📤 Image base64 détectée pour ID ${id}, conversion en FormData`
        );

        // Convertir base64 en File
        const file = base64ToFile(imageData, `banner-${id}.jpg`);

        // Créer FormData
        const formData = new FormData();
        formData.append("image", file);
        formData.append("alt", alt || "Updated Banner");

        body = formData;
        // Ne pas définir Content-Type pour FormData, le navigateur le fait automatiquement
      } else {
        console.log(`📤 URL d'image existante pour ID ${id}, envoi en JSON`);
        // Image existante, envoyer en JSON
        headers["Content-Type"] = "application/json";
        body = JSON.stringify({
          path: imageData,
          alt: alt || "Updated Banner",
        });
      }

      const response = await fetch(`http://localhost:5000/api/menu/id/${id}`, {
        method: "PUT",
        headers: headers,
        body: body,
      });

      console.log(`📡 Réponse de sauvegarde pour ID ${id}:`, response);

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log(`✅ Image  ID ${id} sauvegardée avec succès:`, result);

      return result;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la sauvegarde de la banner ID ${id}:`,
        error
      );
      throw error;
    }
  };

  const handleSaveImageSecionBG = async (
    imageDataBG: string | string[],
    section_name: string,
    bannerId?: number
  ) => {
    try {
      console.log(`💾 Sauvegarde demandée pour ${section_name}:`, {
        imageDataBG,
        bannerId,
      });

      if (bannerId && typeof imageDataBG === "string") {
        // Sauvegarder via l'API
        await saveMenuImage(bannerId, imageDataBG, section_name);
        alert(`✅ Image ${section_name} sauvegardée avec succès!`);

        // Recharger les données pour avoir les dernières informations
        await fetchSectionBackground();
      } else {
        // Ancienne logique pour les autres sections
        console.log(`Image sauvegardée pour ${section_name}:`, imageDataBG);
        alert(
          `⚠️ Sauvegarde locale pour ${section_name} (pas d'API configurée)`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      alert(
        `❌ Erreur lors de la sauvegarde: ${
          error instanceof Error ? error.message : "Erreur inconnue"
        }`
      );
    }
  };
  const handleRefresh = () => {
    fetchSectionBackground();
  };

  // Affichage du loader pendant le chargement
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
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsTetragrammatonOpen(!isTetragrammatonOpen)}
        >
          <h1 className="section-title">Tetragrammaton</h1>
          <button className="toggle-section">
            {isTetragrammatonOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isTetragrammatonOpen && (
          <div className="section-content">
            <div className="section-content">
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={tetragrammatonImage || "/placeholder.svg"}
                    alt={
                      sectionMenubg.find((b) => b.id === 1)?.section_name ||
                      "Tetragrammaton"
                    }
                    className="preview-image"
                  />
                  {sectionMenubg.find((b) => b.id === 1) && (
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
                      Section: Tetragrammaton
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
                        handleImageUpload(e, setTetragrammatonImage)
                      }
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImageSecionBG(
                        tetragrammatonImage,
                        "Tetragrammaton",
                        1
                      )
                    }
                    className="save-btn"
                    disabled={!tetragrammatonImage}
                  >
                    <Save size={16} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 2: The Nation of Yahweh */}
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
            <div className="section-content">
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={nationImage || "/placeholder.svg"}
                    alt={
                      sectionMenubg.find((b) => b.id === 2)?.section_name ||
                      "The_Nation_of_Yahweh"
                    }
                    className="preview-image"
                  />
                  {sectionMenubg.find((b) => b.id === 2) && (
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
                      Section: The Nation of Yahweh
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
                      onChange={(e) => handleImageUpload(e, setNationImage)}
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImageSecionBG(
                        nationImage,
                        "The_Nation_of_Yahweh",
                        2
                      )
                    }
                    className="save-btn"
                    disabled={!nationImage}
                  >
                    <Save size={16} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 3: The Universe of Yahweh */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsUniverseOpen(!isUniverseOpen)}
        >
          <h1 className="section-title">The Universe of Yahweh</h1>
          <button className="toggle-section">
            {isUniverseOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isUniverseOpen && (
          <div className="section-content">
            <div className="section-content">
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={universeImage || "/placeholder.svg"}
                    alt={
                      sectionMenubg.find((b) => b.id === 3)?.section_name ||
                      "The_Universe_of_Yahweh"
                    }
                    className="preview-image"
                  />
                  {sectionMenubg.find((b) => b.id === 3) && (
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
                      Section: The Universe of Yahweh
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
                      onChange={(e) => handleImageUpload(e, setUniverseImage)}
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImageSecionBG(
                        universeImage,
                        "The_Universe_of_Yahweh",
                        3
                      )
                    }
                    className="save-btn"
                    disabled={!universeImage}
                  >
                    <Save size={16} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 4: The Feasts of Yahweh */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsFeastsOpen(!isFeastsOpen)}
        >
          <h1 className="section-title">The Feasts of Yahweh</h1>
          <button className="toggle-section">
            {isFeastsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isFeastsOpen && (
          <div className="section-content">
            <div className="section-content">
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={feastsImage || "/placeholder.svg"}
                    alt={
                      sectionMenubg.find((b) => b.id === 4)?.section_name ||
                      "The_Feasts_of_Yahweh"
                    }
                    className="preview-image"
                  />
                  {sectionMenubg.find((b) => b.id === 4) && (
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
                      Section: The Feasts of Yahweh
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
                      onChange={(e) => handleImageUpload(e, setFeastsImage)}
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImageSecionBG(
                        feastsImage,
                        "The_Feasts_of_Yahweh",
                        4
                      )
                    }
                    className="save-btn"
                    disabled={!feastsImage}
                  >
                    <Save size={16} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 5: The Good News of Yahweh */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsGoodNewsOpen(!isGoodNewsOpen)}
        >
          <h1 className="section-title">The Good News of Yahweh</h1>
          <button className="toggle-section">
            {isGoodNewsOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isGoodNewsOpen && (
          <div className="section-content">
            <div className="section-content">
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={goodNewsImage || "/placeholder.svg"}
                    alt={
                      sectionMenubg.find((b) => b.id === 5)?.section_name ||
                      "The_Good_News_of_Yahweh"
                    }
                    className="preview-image"
                  />
                  {sectionMenubg.find((b) => b.id === 5) && (
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
                      Section: The Good News of Yahweh
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
                      onChange={(e) => handleImageUpload(e, setGoodNewsImage)}
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImageSecionBG(
                        goodNewsImage,
                        "The_Good_News_of_Yahweh",
                        5
                      )
                    }
                    className="save-btn"
                    disabled={!goodNewsImage}
                  >
                    <Save size={16} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 6: The Crucifixion */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsCrucifixionOpen(!isCrucifixionOpen)}
        >
          <h1 className="section-title">The Crucifixion</h1>
          <button className="toggle-section">
            {isCrucifixionOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isCrucifixionOpen && (
          <div className="section-content">
            <div className="section-content">
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={crucifixionImage || "/placeholder.svg"}
                    alt={
                      sectionMenubg.find((b) => b.id === 6)?.section_name ||
                      "The_Crucifixion"
                    }
                    className="preview-image"
                  />
                  {sectionMenubg.find((b) => b.id === 6) && (
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
                      Section: The Crucifixion
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
                        handleImageUpload(e, setCrucifixionImage)
                      }
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImageSecionBG(
                        crucifixionImage,
                        "The_Crucifixion",
                        6
                      )
                    }
                    className="save-btn"
                    disabled={!crucifixionImage}
                  >
                    <Save size={16} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 7: Shocking Revelations */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsRevelationsOpen(!isRevelationsOpen)}
        >
          <h1 className="section-title">Shocking Revelations</h1>
          <button className="toggle-section">
            {isRevelationsOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isRevelationsOpen && (
          <div className="section-content">
            <div className="section-content">
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={revelationsImage || "/placeholder.svg"}
                    alt={
                      sectionMenubg.find((b) => b.id === 7)?.section_name ||
                      "Shocking_Revelations"
                    }
                    className="preview-image"
                  />
                  {sectionMenubg.find((b) => b.id === 7) && (
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
                      Section: Shocking Revelations
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
                        handleImageUpload(e, setRevelationsImage)
                      }
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImageSecionBG(
                        revelationsImage,
                        "Shocking_Revelations",
                        7
                      )
                    }
                    className="save-btn"
                    disabled={!revelationsImage}
                  >
                    <Save size={16} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 8: The Sabbath */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsSabbathOpen(!isSabbathOpen)}
        >
          <h1 className="section-title">The Sabbath</h1>
          <button className="toggle-section">
            {isSabbathOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isSabbathOpen && (
          <div className="section-content">
            <div className="section-content">
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={sabbathImage || "/placeholder.svg"}
                    alt={
                      sectionMenubg.find((b) => b.id === 8)?.section_name ||
                      "The_Sabbath"
                    }
                    className="preview-image"
                  />
                  {sectionMenubg.find((b) => b.id === 8) && (
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
                      Section: The Sabbath
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
                      onChange={(e) => handleImageUpload(e, setSabbathImage)}
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImageSecionBG(sabbathImage, "The_Sabbath", 8)
                    }
                    className="save-btn"
                    disabled={!sabbathImage}
                  >
                    <Save size={16} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 9: Erosion of The Constitution */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsErosionOpen(!isErosionOpen)}
        >
          <h1 className="section-title">Erosion of The Constitution</h1>
          <button className="toggle-section">
            {isErosionOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isErosionOpen && (
          <div className="section-content">
            <div className="section-content">
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={erosionImage || "/placeholder.svg"}
                    alt={
                      sectionMenubg.find((b) => b.id === 9)?.section_name ||
                      "Erosion_of_The_Constitution"
                    }
                    className="preview-image"
                  />
                  {sectionMenubg.find((b) => b.id === 9) && (
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
                      Section: Erosion of The Constitution
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
                      onChange={(e) => handleImageUpload(e, setErosionImage)}
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImageSecionBG(
                        erosionImage,
                        "Erosion_of_The_Constitution",
                        9
                      )
                    }
                    className="save-btn"
                    disabled={!erosionImage}
                  >
                    <Save size={16} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 10: Operation Word War */}
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
                        handleSaveImageSecionBG(
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
                          handleImageUpload(e, setOperationImage2)
                        }
                        hidden
                      />
                    </label>
                    <button
                      onClick={() =>
                        handleSaveImageSecionBG(
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
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsBalanceOpen(!isBalanceOpen)}
        >
          <h1 className="section-title">Balance Justice</h1>
          <button className="toggle-section">
            {isBalanceOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isBalanceOpen && (
          <div className="section-content">
            <div className="section-content">
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={balanceImage || "/placeholder.svg"}
                    alt={
                      sectionMenubg.find((b) => b.id === 12)?.section_name ||
                      "Balance_Justice"
                    }
                    className="preview-image"
                  />
                  {sectionMenubg.find((b) => b.id === 12) && (
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
                      Section: Balance Justice
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
                      onChange={(e) => handleImageUpload(e, setBalanceImage)}
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImageSecionBG(
                        balanceImage,
                        "Balance_Justice",
                        12
                      )
                    }
                    className="save-btn"
                    disabled={!balanceImage}
                  >
                    <Save size={16} />
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
