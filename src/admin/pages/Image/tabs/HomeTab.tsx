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

// interface BackgroundImages {
//   pageBanner_About_Yahweh: string;
//   pageBannerAbout_Yahweh_Ben_Yahweh: string;
//   pageBannerAbout_The_Followers: string;
//   pageBannerAbout_Cultural_Attire: string;
//   pageBannerAbout_Books_for_the_Year: string;
// }

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
  // const [booksImage, setBooksImage] = useState(
  //   backgroundImagesData.backgroundImages.pageBannerAbout_Books_for_the_Year
  // );
  const [aboutYahwehImage, setAboutYahwehImage] = useState("");
  // const [aboutYahwehImage, setAboutYahwehImage] = useState(
  //   backgroundImagesData.backgroundImages.pageBanner_About_Yahweh
  // );
  const [aboutYahwehBenImage, setAboutYahwehBenImage] = useState("");
  // const [aboutYahwehBenImage, setAboutYahwehBenImage] = useState(
  //   backgroundImagesData.backgroundImages.pageBannerAbout_Yahweh_Ben_Yahweh
  // );
  const [followersImage, setFollowersImage] = useState("");
  // const [followersImage, setFollowersImage] = useState(
  //   backgroundImagesData.backgroundImages.pageBannerAbout_The_Followers
  // );
  const [culturalImage, setCulturalImage] = useState("");
  // const [culturalImage, setCulturalImage] = useState(
  //   backgroundImagesData.backgroundImages.pageBannerAbout_Cultural_Attire
  // );

  // États pour les sections
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isBooksOpen, setIsBooksOpen] = useState(true);
  const [isAboutYahwehOpen, setIsAboutYahwehOpen] = useState(true);
  const [isAboutYahwehBenOpen, setIsAboutYahwehBenOpen] = useState(true);
  const [isFollowersOpen, setIsFollowersOpen] = useState(true);
  const [isCulturalOpen, setIsCulturalOpen] = useState(true);

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

      // console.log("📡 Réponse de l'API:", response)
      // console.log("📊 Status de la réponse:", response.status)
      // console.log("✅ Réponse OK:", response.ok)

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data: BannerData[] = await response.json();
      // console.log("📦 Données brutes reçues:", data)
      // console.log("🔢 Nombre de banners reçues:", data.length)

      setBanners(data);

      // Trier les banners par ID pour avoir un ordre cohérent
      const sortedBanners = data.sort((a, b) => a.id - b.id);
      // console.log("🔄 Banners triées par ID:", sortedBanners)

      // Mettre à jour les images selon les IDs
      // IDs 1, 2, 3 pour les bannières principales
      const mainBanners = sortedBanners
        .filter((banner) => [1, 2, 3].includes(banner.id))
        .sort((a, b) => a.id - b.id)
        .map((banner) => getImageUrl(banner.path));

      // console.log("🎯 Banners principales (IDs 1,2,3):", mainBanners)
      // console.log("🎯 URLs complètes des banners principales:", mainBanners)

      // Compléter avec des images par défaut si nécessaire
      while (mainBanners.length < 3) {
        mainBanners.push(defaultImages.banners[mainBanners.length]?.path || "");
      }

      // console.log("🎯 Banners principales finales:", mainBanners)
      setHomeImages1(mainBanners);

      // ID 4 pour le livre du mois
      const bookBanner = sortedBanners.find((banner) => banner.id === 4);
      console.log("📚 Banner livre du mois (ID 4):", bookBanner);
      if (bookBanner) {
        // console.log("📚 Path du livre du mois:", bookBanner.path)
        setHomeImage3(getImageUrl(bookBanner.path));
        // console.log("📚 URL complète du livre du mois:", getImageUrl(bookBanner.path))
      } else {
        // console.log("📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut")
        setHomeImage3(defaultImages.bookOfTheMonth.path);
      }

      // ID 5 pour breaking news
      const newsBanner = sortedBanners.find((banner) => banner.id === 5);
      // console.log("📰 Banner breaking news (ID 5):", newsBanner)
      if (newsBanner) {
        // console.log("📰 Path du breaking news:", newsBanner.path)
        setHomeImage4(getImageUrl(newsBanner.path));
        // console.log("📰 URL complète du breaking news:", getImageUrl(newsBanner.path))
      } else {
        // console.log("📰 Aucune banner ID 5 trouvée, utilisation de l'image par défaut")
        setHomeImage4(defaultImages.breakingNews.path);
      }

      // console.log("✅ Mise à jour des états terminée")
    } catch (err) {
      // console.error("❌ Erreur lors de la récupération des banners:", err)
      setError(err instanceof Error ? err.message : "Erreur inconnue");

      // Utiliser les images par défaut en cas d'erreur
      // console.log("🔄 Utilisation des images par défaut en cas d'erreur")
      setHomeImages1(
        defaultImages.banners.slice(0, 3).map((banner) => banner.path)
      );
      setHomeImage3(defaultImages.bookOfTheMonth.path);
      setHomeImage4(defaultImages.breakingNews.path);
    } finally {
      setLoading(false);
      // console.log("🏁 Fin de la récupération des banners")
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

      console.log("📡 Réponse de l'API:", response);
      console.log("📊 Status de la réponse:", response.status);
      console.log("✅ Réponse OK:", response.ok);

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data: SectionData[] = await response.json();
      console.log("📦 Données brutes reçues:", data);
      console.log("🔢 Nombre de Section reçues:", data.length);

      setSectionBg(data);

      // Trier les banners par ID pour avoir un ordre cohérent
      const sortedSectionbg = data.sort((a, b) => a.id - b.id);
      console.log("🔄 Sections triées par ID:", sortedSectionbg);
      // ID 4 pour le livre du mois
      const about_yahweh = sortedSectionbg.find(
        (banner) => banner.id === 1 || banner.section_name === "about_yahweh"
      );
      console.log("📚 Banner livre du mois (ID 1):", about_yahweh);
      if (about_yahweh) {
        console.log("📚 Path du livre du mois:", about_yahweh.path);
        setAboutYahwehImage(getImageUrl(about_yahweh.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(about_yahweh.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }
      const about_yahweh_ben = sortedSectionbg.find(
        (banner) =>
          banner.id === 2 || banner.section_name === "about_yahweh_ben"
      );
      console.log("📚 Banner livre du mois (ID 2):", about_yahweh_ben);
      if (about_yahweh_ben) {
        console.log("📚 Path du livre du mois:", about_yahweh_ben.path);
        setAboutYahwehBenImage(getImageUrl(about_yahweh_ben.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(about_yahweh_ben.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }
      const followers = sortedSectionbg.find(
        (banner) => banner.id === 3 || banner.section_name === "followers"
      );
      console.log("📚 Banner livre du mois (ID 3):", followers);
      if (followers) {
        console.log("📚 Path du livre du mois:", followers.path);
        setFollowersImage(getImageUrl(followers.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(followers.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }
      const cultural = sortedSectionbg.find(
        (banner) => banner.id === 4 || banner.section_name === "cultural"
      );
      console.log("📚 Banner livre du mois (ID 4):", cultural);
      if (cultural) {
        console.log("📚 Path du livre du mois:", cultural.path);
        setCulturalImage(getImageUrl(cultural.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(cultural.path)
        );
      } else {
        console.log(
          "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
        );
      }

      const books = sortedSectionbg.find(
        (banner) => banner.id === 5 || banner.section_name === "books"
      );
      console.log("📚 Banner livre du mois (ID 4):", books);
      if (books) {
        console.log("📚 Path du livre du mois:", books.path);
        setBooksImage(getImageUrl(books.path));
        console.log(
          "📚 URL complète du livre du mois:",
          getImageUrl(books.path)
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
      setHomeImages1(
        defaultImages.banners.slice(0, 3).map((banner) => banner.path)
      );
      setHomeImage3(defaultImages.bookOfTheMonth.path);
      setHomeImage4(defaultImages.breakingNews.path);
    } finally {
      setLoading(false);
      console.log("🏁 Fin de la récupération des banners");
    }
  };
  // ******** ENDING *************//

  // Effet pour charger les banners au montage du composant
  useEffect(() => {
    console.log("🔄 useEffect déclenché - Appel de fetchBanners");
    fetchBanners();
    console.log("🔄 useEffect déclenché - Appel de fetchSectionBackground");
    fetchSectionBackground();
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

  // Remplacer la fonction saveBanner existante
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

  // Remplacer la fonction handleSaveImage existante par cette nouvelle version
  const handleSaveImage = async (
    imageData: string | string[],
    section: string,
    bannerId?: number
  ) => {
    try {
      console.log(`💾 Sauvegarde demandée pour ${section}:`, {
        imageData,
        bannerId,
      });

      if (bannerId && typeof imageData === "string") {
        // Sauvegarder via l'API
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
      console.log(`💾 Début de la sauvegarde de la banner ID ${id}`);

      let body: FormData | string;
      const headers: Record<string, string> = {};

      // Vérifier si c'est une image base64 (uploadée localement)
      if (imageDataBG.startsWith("data:image/")) {
        console.log(
          `📤 Image base64 détectée pour ID ${id}, conversion en FormData`
        );

        // Convertir base64 en File
        const file = base64ToFile(imageDataBG, `banner-${id}.jpg`);

        // Créer FormData
        const formData = new FormData();
        formData.append("image", file);
        formData.append("section_name", section_name || "Updated Section background");

        body = formData;
        // Ne pas définir Content-Type pour FormData, le navigateur le fait automatiquement
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
  // Remplacer la fonction handleSaveImage existante par cette nouvelle version
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
  // ************* ENDING *****************//

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
              <h3 className="image-group-title">Galerie (12 images)</h3>
              <div className="images-row-12">
                {homeImages2.map((image, index) => {
                  const bouton = buttonsData.boutons[index];
                  return (
                    <div
                      key={bouton.id}
                      className="image-upload-container small"
                    >
                      <div className="image-preview">
                        {image ? (
                          <>
                            <img
                              src={image || "/placeholder.svg"}
                              alt={bouton.alt}
                              className="preview-image"
                            />
                            <div className="image-alt-text">{bouton.alt}</div>
                          </>
                        ) : (
                          <div className="image-placeholder">
                            <ImageIcon size={20} />
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
                            handleSaveImage(image, `Gallery-${bouton.id}`)
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
                    handleSaveImageSecionBG(culturalImage, "cultural", 5)
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
