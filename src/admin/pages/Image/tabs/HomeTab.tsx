
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Upload,
  Save,
  ImageIcon,
  ChevronUp,
  ChevronDown,
  Loader2,
} from "lucide-react";
import homeImagesData from "../../../../data/images-home.json";
import buttonsData from "../../../../data/bouton-img.json";
// import backgroundImagesData from "../../../../data/img/about-images.json";
import "./style/HomeTab.css";

interface ImageData {
  id?: number;
  path: string;
  alt: string;
}

// ****** From database *******//
interface BannerData {
  id: number;
  path: string;
  alt: string | null;
  position: number;
  created_at: string;
  updated_at: string;
}

interface SectionData {
  id: number;
  section_name: string | null;
  path: string;
  created_at: string;
  updated_at: string;
}

// Interface pour les images de galerie
interface GalleryImage {
  id: number;
  path: string;
  alt: string;
  created_at: string;
  updated_at: string;
}
// ****** Ending *******//

interface HomeImagesData {
  banners: ImageData[];
  bookOfTheMonth: ImageData;
  buttons: {
    readMore: ImageData;
    orderNow: ImageData;
  };
  videoPoster: {
    pageBanner: ImageData;
    goodNews: ImageData;
    eternalLife: ImageData;
  };
  breakingNews: ImageData;
}

interface ButtonData {
  id: number;
  path: string;
  alt: string;
}

// Fonction pour construire l'URL complète des images
const getImageUrl = (path: string): string => {
  if (!path) return "/placeholder.svg";
  // Si le path commence par http, c'est déjà une URL complète
  if (path.startsWith("http")) return path;
  // Sinon, ajouter l'URL du serveur backend
  return `http://localhost:5000${path}`;
};

const HomeTab: React.FC = () => {
  // États de chargement et d'erreur
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Données des banners depuis l'API
  const [banners, setBanners] = useState<BannerData[]>([]);
  const [sectionbg, setSectionBg] = useState<SectionData[]>([]);
  
  // État pour les images de galerie depuis l'API
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  // Chargement initial des images depuis le JSON (fallback)
  const [defaultImages, setDefaultImages] =
    useState<HomeImagesData>(homeImagesData);

  // États pour les images modifiables
  const [homeImages1, setHomeImages1] = useState<string[]>([]);
  const [homeImages2, setHomeImages2] = useState<string[]>(() =>
    buttonsData.boutons.map((bouton: ButtonData) => bouton.path)
  );
  const [homeImage3, setHomeImage3] = useState("");
  const [homeImage4, setHomeImage4] = useState("");

  // États pour les images de background
  const [booksImage, setBooksImage] = useState("");
  const [aboutYahwehImage, setAboutYahwehImage] = useState("");
  const [aboutYahwehBenImage, setAboutYahwehBenImage] = useState("");
  const [followersImage, setFollowersImage] = useState("");
  const [culturalImage, setCulturalImage] = useState("");

  // États pour les sections
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isBooksOpen, setIsBooksOpen] = useState(true);
  const [isAboutYahwehOpen, setIsAboutYahwehOpen] = useState(true);
  const [isAboutYahwehBenOpen, setIsAboutYahwehBenOpen] = useState(true);
  const [isFollowersOpen, setIsFollowersOpen] = useState(true);
  const [isCulturalOpen, setIsCulturalOpen] = useState(true);

  // Fonction pour récupérer les images de galerie depuis l'API
  const fetchGalleryImages = async () => {
    try {
      console.log("🖼️ Récupération des images de galerie...");
      
      const response = await fetch("http://localhost:5000/api/gallery", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data: GalleryImage[] = await response.json();
      console.log("📸 Images de galerie reçues:", data);
      console.log("🔢 Nombre d'images de galerie:", data.length);

      // Trier les images par ID pour avoir un ordre cohérent
      const sortedGallery = data.sort((a, b) => a.id - b.id);
      setGalleryImages(sortedGallery);

      // Mettre à jour homeImages2 avec les images de galerie
      const galleryPaths = sortedGallery.map(img => getImageUrl(img.path));
      
      // Compléter avec des images vides si moins de 12 images
      while (galleryPaths.length < 12) {
        galleryPaths.push("");
      }
      
      setHomeImages2(galleryPaths.slice(0, 12));
      
      console.log("✅ Images de galerie mises à jour:", galleryPaths);
    } catch (err) {
      console.error("❌ Erreur lors de la récupération des images de galerie:", err);
      // En cas d'erreur, garder les images par défaut du JSON
      setHomeImages2(buttonsData.boutons.map((bouton: ButtonData) => bouton.path));
    }
  };

  // Fonction pour récupérer les banners depuis l'API
  const fetchBanners = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("🚀 Début de la récupération des banners...");

      const response = await fetch("http://localhost:5000/api/home/banners", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data: BannerData[] = await response.json();
      setBanners(data);

      // Trier les banners par ID pour avoir un ordre cohérent
      const sortedBanners = data.sort((a, b) => a.id - b.id);

      // IDs 1, 2, 3 pour les bannières principales
      const mainBanners = sortedBanners
        .filter((banner) => [1, 2, 3].includes(banner.id))
        .sort((a, b) => a.id - b.id)
        .map((banner) => getImageUrl(banner.path));

      // Compléter avec des images par défaut si nécessaire
      while (mainBanners.length < 3) {
        mainBanners.push(defaultImages.banners[mainBanners.length]?.path || "");
      }

      setHomeImages1(mainBanners);

      // ID 4 pour le livre du mois
      const bookBanner = sortedBanners.find((banner) => banner.id === 4);
      if (bookBanner) {
        setHomeImage3(getImageUrl(bookBanner.path));
      } else {
        setHomeImage3(defaultImages.bookOfTheMonth.path);
      }

      // ID 5 pour breaking news
      const newsBanner = sortedBanners.find((banner) => banner.id === 5);
      if (newsBanner) {
        setHomeImage4(getImageUrl(newsBanner.path));
      } else {
        setHomeImage4(defaultImages.breakingNews.path);
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");

      // Utiliser les images par défaut en cas d'erreur
      setHomeImages1(
        defaultImages.banners.slice(0, 3).map((banner) => banner.path)
      );
      setHomeImage3(defaultImages.bookOfTheMonth.path);
      setHomeImage4(defaultImages.breakingNews.path);
    } finally {
      setLoading(false);
    }
  };

  // ************* SECTION BACKGROUND *****************//
  const fetchSectionBackground = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("🚀 Début de la récupération des sections...");

      const response = await fetch("http://localhost:5000/api/sections", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data: SectionData[] = await response.json();
      setSectionBg(data);

      // Trier les banners par ID pour avoir un ordre cohérent
      const sortedSectionbg = data.sort((a, b) => a.id - b.id);
      
      // ID 1 pour about_yahweh
      const about_yahweh = sortedSectionbg.find(
        (banner) => banner.id === 1 || banner.section_name === "about_yahweh"
      );
      if (about_yahweh) {
        setAboutYahwehImage(getImageUrl(about_yahweh.path));
      }
      
      // ID 2 pour about_yahweh_ben
      const about_yahweh_ben = sortedSectionbg.find(
        (banner) =>
          banner.id === 2 || banner.section_name === "about_yahweh_ben"
      );
      if (about_yahweh_ben) {
        setAboutYahwehBenImage(getImageUrl(about_yahweh_ben.path));
      }
      
      // ID 3 pour followers
      const followers = sortedSectionbg.find(
        (banner) => banner.id === 3 || banner.section_name === "followers"
      );
      if (followers) {
        setFollowersImage(getImageUrl(followers.path));
      }
      
      // ID 4 pour cultural
      const cultural = sortedSectionbg.find(
        (banner) => banner.id === 4 || banner.section_name === "cultural"
      );
      if (cultural) {
        setCulturalImage(getImageUrl(cultural.path));
      }

      // ID 5 pour books
      const books = sortedSectionbg.find(
        (banner) => banner.id === 5 || banner.section_name === "books"
      );
      if (books) {
        setBooksImage(getImageUrl(books.path));
      }

    } catch (err) {
      console.error("❌ Erreur lors de la récupération des sections:", err);
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };
  // ******** ENDING *************//

  // Effet pour charger les données au montage du composant
  useEffect(() => {
    console.log("🔄 useEffect déclenché - Chargement des données");
    fetchBanners();
    fetchSectionBackground();
    fetchGalleryImages(); // Ajouter le chargement des images de galerie
  }, []);

  // Gestion du téléchargement d'images
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
        if (setter === setHomeImages1 || setter === setHomeImages2) {
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

  // Ajouter une fonction pour convertir base64 en File
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

  // Fonction pour sauvegarder une image de galerie
  const saveGalleryImage = async (id: number, imageData: string, alt?: string) => {
    try {
      console.log(`💾 Début de la sauvegarde de l'image galerie ID ${id}`);

      let body: FormData | string;
      const headers: Record<string, string> = {};

      // Vérifier si c'est une image base64 (uploadée localement)
      if (imageData.startsWith("data:image/")) {
        console.log(
          `📤 Image base64 détectée pour ID ${id}, conversion en FormData`
        );

        // Convertir base64 en File
        const file = base64ToFile(imageData, `gallery-${id}.jpg`);

        // Créer FormData
        const formData = new FormData();
        formData.append("image", file);
        formData.append("alt", alt || "New Gallery Image");

        body = formData;
      } else {
        console.log(`📤 URL d'image existante pour ID ${id}, envoi en JSON`);
        // Image existante, envoyer en JSON
        headers["Content-Type"] = "application/json";
        body = JSON.stringify({
          path: imageData,
          alt: alt || "Updated Gallery Image",
        });
      }

      const response = await fetch(
        `http://localhost:5000/api/gallery/${id}`,
        {
          method: "PUT",
          headers: headers,
          body: body,
        }
      );

      console.log(`📡 Réponse de sauvegarde pour galerie ID ${id}:`, response);

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log(`✅ Image galerie ID ${id} sauvegardée avec succès:`, result);

      return result;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la sauvegarde de l'image galerie ID ${id}:`,
        error
      );
      throw error;
    }
  };

  // Fonction pour sauvegarder une bannière
  const saveBanner = async (id: number, imageData: string, alt?: string) => {
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
      } else {
        console.log(`📤 URL d'image existante pour ID ${id}, envoi en JSON`);
        // Image existante, envoyer en JSON
        headers["Content-Type"] = "application/json";
        body = JSON.stringify({
          path: imageData,
          alt: alt || "Updated Banner",
        });
      }

      const response = await fetch(
        `http://localhost:5000/api/home/banners/${id}`,
        {
          method: "PUT",
          headers: headers,
          body: body,
        }
      );

      console.log(`📡 Réponse de sauvegarde pour ID ${id}:`, response);

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log(`✅ Banner ID ${id} sauvegardée avec succès:`, result);

      return result;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la sauvegarde de la banner ID ${id}:`,
        error
      );
      throw error;
    }
  };

  // Fonction pour gérer la sauvegarde des images
  const handleSaveImage = async (
    imageData: string | string[],
    section: string,
    bannerId?: number,
    galleryIndex?: number
  ) => {
    try {
      console.log(`💾 Sauvegarde demandée pour ${section}:`, {
        imageData,
        bannerId,
        galleryIndex,
      });

      // Si c'est une image de galerie
      if (galleryIndex !== undefined && typeof imageData === "string") {
        const galleryId = galleryIndex + 1; // Les IDs de galerie commencent à 1
        await saveGalleryImage(galleryId, imageData);
        alert(`✅ Image galerie ${galleryId} sauvegardée avec succès!`);
        
        // Recharger les images de galerie
        await fetchGalleryImages();
      } else if (bannerId && typeof imageData === "string") {
        // Sauvegarder via l'API des bannières
        await saveBanner(bannerId, imageData);
        alert(`✅ Image ${section} sauvegardée avec succès!`);

        // Recharger les données pour avoir les dernières informations
        await fetchBanners();
      } else {
        // Ancienne logique pour les autres sections
        console.log(`Image sauvegardée pour ${section}:`, imageData);
        alert(`⚠️ Sauvegarde locale pour ${section} (pas d'API configurée)`);
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

  const saveSectionBG = async (id: number, imageDataBG: string, section_name?: string) => {
    try {
      console.log(`💾 Début de la sauvegarde de la section ID ${id}`);

      let body: FormData | string;
      const headers: Record<string, string> = {};

      // Vérifier si c'est une image base64 (uploadée localement)
      if (imageDataBG.startsWith("data:image/")) {
        console.log(
          `📤 Image base64 détectée pour ID ${id}, conversion en FormData`
        );

        // Convertir base64 en File
        const file = base64ToFile(imageDataBG, `section-${id}.jpg`);

        // Créer FormData
        const formData = new FormData();
        formData.append("image", file);
        formData.append("section_name", section_name || "Updated Section background");

        body = formData;
      } else {
        console.log(`📤 URL d'image existante pour ID ${id}, envoi en JSON`);
        // Image existante, envoyer en JSON
        headers["Content-Type"] = "application/json";
        body = JSON.stringify({
          path: imageDataBG,
          section_name: section_name,
        });
      }

      const response = await fetch(
        `http://localhost:5000/api/sections/id/${id}`,
        {
          method: "PUT",
          headers: headers,
          body: body,
        }
      );

      console.log(`📡 Réponse de sauvegarde pour ID ${id}:`, response);

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log(`✅ Section ID ${id} sauvegardée avec succès:`, result);

      return result;
    } catch (error) {
      console.error(
        `❌ Erreur lors de la sauvegarde de la section ID ${id}:`,
        error
      );
      throw error;
    }
  };

  // Fonction pour sauvegarder les sections background
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
        await saveSectionBG(bannerId, imageDataBG, section_name);
        alert(`✅ Image ${section_name} sauvegardée avec succès!`);

        // Recharger les données pour avoir les dernières informations
        await fetchSectionBackground();
      } else {
        // Ancienne logique pour les autres sections
        console.log(`Image sauvegardée pour ${section_name}:`, imageDataBG);
        alert(`⚠️ Sauvegarde locale pour ${section_name} (pas d'API configurée)`);
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

  // Fonction pour rafraîchir les données
  const handleRefresh = () => {
    fetchBanners();
    fetchSectionBackground();
    fetchGalleryImages();
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

  // Rendu du composant
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

      {/* Section Home */}
      <section className="home-section fade-in">
        <div
          className="section-header"
          onClick={() => setIsHomeOpen(!isHomeOpen)}
        >
          <h1 className="section-title">
            Home {banners.length > 0 && `(${banners.length} banners chargées)`}
          </h1>
          <button className="toggle-section">
            {isHomeOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isHomeOpen && (
          <div className="section-content">
            {/* 3 bannières principales */}
            <div className="image-group">
              <h3 className="image-group-title">
                Bannières principales (3) - IDs: 1, 2, 3
              </h3>
              <div className="images-row-3">
                {homeImages1.map((image, index) => {
                  const bannerId = index + 1;
                  const bannerData = banners.find((b) => b.id === bannerId);
                  return (
                    <div key={index} className="image-upload-container">
                      <div className="image-preview">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={bannerData?.alt || `Banner ${index + 1}`}
                          className="preview-image"
                        />
                        {bannerData && (
                          <div
                            className="image-info"
                            style={{
                              position: "absolute",
                              bottom: "4px",
                              left: "4px",
                              backgroundColor: "rgba(0,0,0,0.7)",
                              color: "white",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              fontSize: "12px",
                            }}
                          >
                            ID: {bannerData.id}
                          </div>
                        )}
                      </div>
                      <div className="image-controls">
                        <label className="upload-btn">
                          <Upload size={16} />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleImageUpload(e, setHomeImages1, index)
                            }
                            hidden
                          />
                        </label>
                        <button
                          onClick={() =>
                            handleSaveImage(
                              homeImages1[index],
                              `Banner-${index + 1}`,
                              bannerId
                            )
                          }
                          className="save-btn"
                          disabled={!image}
                        >
                          <Save size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 12 images galerie */}
            <div className="image-group">
              <h3 className="image-group-title">
                Galerie (12 images) - IDs: 1-12 {galleryImages.length > 0 && `(${galleryImages.length} images chargées)`}
              </h3>
              <div className="images-row-12">
                {homeImages2.slice(0, 12).map((image, index) => {
                  const galleryImage = galleryImages[index];
                  const galleryId = index + 1;
                  return (
                    <div
                      key={galleryId}
                      className="image-upload-container small"
                    >
                      <div className="image-preview">
                        {image ? (
                          <>
                            <img
                              src={image || "/placeholder.svg"}
                              alt={galleryImage?.alt || `Gallery ${galleryId}`}
                              className="preview-image"
                            />
                            <div 
                              className="image-info"
                              style={{
                                position: "absolute",
                                bottom: "2px",
                                left: "2px",
                                backgroundColor: "rgba(0,0,0,0.7)",
                                color: "white",
                                padding: "1px 4px",
                                borderRadius: "2px",
                                fontSize: "10px",
                              }}
                            >
                              ID: {galleryId}
                            </div>
                            <div className="image-alt-text" style={{ fontSize: "10px", marginTop: "2px" }}>
                              {galleryImage?.alt || `Gallery ${galleryId}`}
                            </div>
                          </>
                        ) : (
                          <div className="image-placeholder">
                            <ImageIcon size={20} />
                            <div style={{ fontSize: "10px", marginTop: "4px" }}>
                              Gallery {galleryId}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="image-controls">
                        <label className="upload-btn small">
                          <Upload size={12} />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              handleImageUpload(e, setHomeImages2, index);
                            }}
                            hidden
                          />
                        </label>
                        <button
                          onClick={() =>
                            handleSaveImage(
                              image, 
                              `Gallery-${galleryId}`, 
                              undefined, 
                              index
                            )
                          }
                          className="save-btn small"
                          disabled={!image}
                        >
                          <Save size={12} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Livre du mois */}
            <div className="image-group">
              <h3 className="image-group-title">Livre du mois - ID: 4</h3>
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={homeImage3 || "/placeholder.svg"}
                    alt={
                      banners.find((b) => b.id === 4)?.alt ||
                      "Book of the Month"
                    }
                    className="preview-image"
                  />
                  {banners.find((b) => b.id === 4) && (
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
                      ID: 4
                    </div>
                  )}
                </div>
                <div className="image-controls">
                  <label className="upload-btn">
                    <Upload size={16} />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, setHomeImage3)}
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImage(homeImage3, "Book-of-the-Month", 4)
                    }
                    className="save-btn"
                    disabled={!homeImage3}
                  >
                    <Save size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Breaking News */}
            <div className="image-group">
              <h3 className="image-group-title">Breaking News - ID: 5</h3>
              <div className="single-image-container">
                <div className="image-preview large">
                  <img
                    src={homeImage4 || "/placeholder.svg"}
                    alt={
                      banners.find((b) => b.id === 5)?.alt || "Breaking News"
                    }
                    className="preview-image"
                  />
                  {banners.find((b) => b.id === 5) && (
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
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, setHomeImage4)}
                      hidden
                    />
                  </label>
                  <button
                    onClick={() =>
                      handleSaveImage(homeImage4, "Breaking-News", 5)
                    }
                    className="save-btn"
                    disabled={!homeImage4}
                  >
                    <Save size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 2: Books for the Year */}
      <section className="home-section slide-in">
        <div
          className="section-header"
          onClick={() => setIsBooksOpen(!isBooksOpen)}
        >
          <h1 className="section-title">Books for the Year</h1>
          <button className="toggle-section">
            {isBooksOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isBooksOpen && (
          <div className="section-content">
            <div className="single-image-container">
              <div className="image-preview large">
                <img
                  src={booksImage || "/placeholder.svg"}
                  alt={
                    sectionbg.find((b) => b.id === 5)?.section_name || "books"
                  }
                  className="preview-image"
                />
                {sectionbg.find((b) => b.id === 5) && (
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
                    Section: books
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
                    onChange={(e) => handleImageUpload(e, setBooksImage)}
                    hidden
                  />
                </label>
                <button
                  onClick={() => handleSaveImageSecionBG(booksImage, "books", 5)}
                  className="save-btn"
                  disabled={!booksImage}
                >
                  <Save size={16} />
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 3: About Yahweh */}
      <section className="home-section fade-in">
        <div
          className="section-header"
          onClick={() => setIsAboutYahwehOpen(!isAboutYahwehOpen)}
        >
          <h1 className="section-title">About Yahweh</h1>
          <button className="toggle-section">
            {isAboutYahwehOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isAboutYahwehOpen && (
          <div className="section-content">
            <div className="single-image-container">
              <div className="image-preview large">
                <img
                  src={aboutYahwehImage || "/placeholder.svg"}
                  alt={
                    sectionbg.find((b) => b.id === 1)?.section_name ||
                    "about_yahweh"
                  }
                  className="preview-image"
                />
                {sectionbg.find((b) => b.id === 1) && (
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
                    Section: about yahweh
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
                    onChange={(e) => handleImageUpload(e, setAboutYahwehImage)}
                    hidden
                  />
                </label>
                <button
                  onClick={() =>
                    handleSaveImageSecionBG(aboutYahwehImage, "about_yahweh", 1)
                  }
                  className="save-btn"
                  disabled={!aboutYahwehImage}
                >
                  <Save size={16} />
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 4: About Yahweh Ben Yahweh */}
      <section className="home-section slide-in">
        <div
          className="section-header"
          onClick={() => setIsAboutYahwehBenOpen(!isAboutYahwehBenOpen)}
        >
          <h1 className="section-title">About Yahweh Ben Yahweh</h1>
          <button className="toggle-section">
            {isAboutYahwehBenOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isAboutYahwehBenOpen && (
          <div className="section-content">
            <div className="single-image-container">
              <div className="image-preview large">
                <img
                  src={aboutYahwehBenImage || "/placeholder.svg"}
                  alt={
                    sectionbg.find((b) => b.id === 2)?.section_name ||
                    "about_yahweh_ben"
                  }
                  className="preview-image"
                />
                {sectionbg.find((b) => b.id === 2) && (
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
                    Section: about Yahweh Ben
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
                      handleImageUpload(e, setAboutYahwehBenImage)
                    }
                    hidden
                  />
                </label>
                <button
                  onClick={() =>
                    handleSaveImageSecionBG(
                      aboutYahwehBenImage,
                      "about_yahweh_ben",
                      2
                    )
                  }
                  className="save-btn"
                  disabled={!aboutYahwehBenImage}
                >
                  <Save size={16} />
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 5: The Followers of Yahweh Ben Yahweh */}
      <section className="home-section fade-in">
        <div
          className="section-header"
          onClick={() => setIsFollowersOpen(!isFollowersOpen)}
        >
          <h1 className="section-title">The Followers of Yahweh Ben Yahweh</h1>
          <button className="toggle-section">
            {isFollowersOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isFollowersOpen && (
          <div className="section-content">
            <div className="single-image-container">
              <div className="image-preview large">
                <img
                  src={followersImage || "/placeholder.svg"}
                  alt={
                    sectionbg.find((b) => b.id === 3)?.section_name ||
                    "followers"
                  }
                  className="preview-image"
                />
                {sectionbg.find((b) => b.id === 3) && (
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
                    Section: followers
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
                    onChange={(e) => handleImageUpload(e, setFollowersImage)}
                    hidden
                  />
                </label>
                <button
                  onClick={() => handleSaveImageSecionBG(followersImage, "followers", 3)}
                  className="save-btn"
                  disabled={!followersImage}
                >
                  <Save size={16} />
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section 6: Cultural Attire */}
      <section className="home-section slide-in">
        <div
          className="section-header"
          onClick={() => setIsCulturalOpen(!isCulturalOpen)}
        >
          <h1 className="section-title">Cultural Attire</h1>
          <button className="toggle-section">
            {isCulturalOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isCulturalOpen && (
          <div className="section-content">
            <div className="single-image-container">
              <div className="image-preview large">
                <img
                  src={culturalImage || "/placeholder.svg"}
                  alt={
                    sectionbg.find((b) => b.id === 4)?.section_name ||
                    "cultural"
                  }
                  className="preview-image"
                />
                {sectionbg.find((b) => b.id === 4) && (
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
                    Section: cultural
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
                    onChange={(e) => handleImageUpload(e, setCulturalImage)}
                    hidden
                  />
                </label>
                <button
                  onClick={() =>
                    handleSaveImageSecionBG(culturalImage, "cultural", 4)
                  }
                  className="save-btn"
                  disabled={!culturalImage}
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

export default HomeTab;