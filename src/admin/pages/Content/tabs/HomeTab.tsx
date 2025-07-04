"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Save,
  Video,
  Type,
  FileText,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import "./style/HomeTab.css";
import "./style/HomeTab3.css";
import "./style/HomeTab5.css";
import contentData from "../../../../data/home.json";
import YahweData from "../../../../data/yahweh.json";
import YahwehBenYahweh_Data from "../../../../data/yahweh-ben-yahweh.json";
import CulturalAttire_Data from "../../../../data/followers.json";
import Followers_Data from "../../../../data/cultural-attire.json";

// Interfaces pour typer les données JSON
interface HomePageData {
  homePage: {
    videoSection: {
      title: string;
      content: string;
    };
    videos: Array<{
      src: string;
      poster: string;
    }>;
  };
}

interface YahwehData {
  yahweh: {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
    description6: string;
  };
}

interface YahwehBenYahwehData {
  yahwehBenYahweh: {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
    description6: string;
    description7: string;
    description8: string;
    description9: string;
  };
}

interface FollowersData {
  followers: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
  };
}

interface CulturalAttireData {
  culturalAttire: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
  };
}

const HomeTab: React.FC = () => {
  // États pour la section Home
  const [videoLink1, setVideoLink1] = useState("");
  const [videoLink2, setVideoLink2] = useState("");
  const [videoLink3, setVideoLink3] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // États pour la section Yahweh
  const [yahwehTitle1, setYahwehTitle1] = useState("");
  const [yahwehTitle2, setYahwehTitle2] = useState("");
  const [yahwehDescription1, setYahwehDescription1] = useState("");
  const [yahwehDescription2, setYahwehDescription2] = useState("");
  const [yahwehDescription3, setYahwehDescription3] = useState("");
  const [yahwehDescription4, setYahwehDescription4] = useState("");
  const [yahwehDescription5, setYahwehDescription5] = useState("");
  const [yahwehDescription6, setYahwehDescription6] = useState("");

  // États pour la section Yahweh Ben Yahweh
  const [yahwehBenTitle1, setYahwehBenTitle1] = useState("");
  const [yahwehBenTitle2, setYahwehBenTitle2] = useState("");
  const [yahwehBenDescription1, setYahwehBenDescription1] = useState("");
  const [yahwehBenDescription2, setYahwehBenDescription2] = useState("");
  const [yahwehBenDescription3, setYahwehBenDescription3] = useState("");
  const [yahwehBenDescription4, setYahwehBenDescription4] = useState("");
  const [yahwehBenDescription5, setYahwehBenDescription5] = useState("");
  const [yahwehBenDescription6, setYahwehBenDescription6] = useState("");
  const [yahwehBenDescription7, setYahwehBenDescription7] = useState("");
  const [yahwehBenDescription8, setYahwehBenDescription8] = useState("");
  const [yahwehBenDescription9, setYahwehBenDescription9] = useState("");

  // États pour la section Followers
  const [followersTitle, setFollowersTitle] = useState("");
  const [followersDescription1, setFollowersDescription1] = useState("");
  const [followersDescription2, setFollowersDescription2] = useState("");
  const [followersDescription3, setFollowersDescription3] = useState("");
  const [followersDescription4, setFollowersDescription4] = useState("");
  const [followersDescription5, setFollowersDescription5] = useState("");

  // États pour la section Cultural Attire
  const [attireTitle, setAttireTitle] = useState("");
  const [attireDescription1, setAttireDescription1] = useState("");
  const [attireDescription2, setAttireDescription2] = useState("");
  const [attireDescription3, setAttireDescription3] = useState("");
  const [attireDescription4, setAttireDescription4] = useState("");
  const [attireDescription5, setAttireDescription5] = useState("");

  // États pour gérer l'ouverture/fermeture des sections
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isYahwehOpen, setIsYahwehOpen] = useState(true);
  const [isYahwehBenOpen, setIsYahwehBenOpen] = useState(true);
  const [isFollowersOpen, setIsFollowersOpen] = useState(true);
  const [isAttireOpen, setIsAttireOpen] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour charger tous les fichiers JSON
  const loadAllJsonData = async () => {
    try {
      setIsLoading(true);

      // Charger tous les fichiers JSON en parallèle
      const [
        homeResponse,
        yahwehResponse,
        yahwehBenResponse,
        followersResponse,
        attireResponse,
      ] = [
        contentData,
        YahweData,
        YahwehBenYahweh_Data,
        CulturalAttire_Data,
        Followers_Data,
      ];

      // Vérifier que toutes les requêtes ont réussi
      if (
        !homeResponse.homePage ||
        !yahwehResponse.yahweh ||
        !yahwehBenResponse.yahwehBenYahweh ||
        !followersResponse.followers ||
        !attireResponse.culturalAttire
      ) {
        throw new Error(
          "Erreur lors du chargement d'un ou plusieurs fichiers JSON"
        );
      }

      // Parser les données JSON
      const homeData: HomePageData = homeResponse;
      const yahwehData: YahwehData = yahwehResponse;
      const yahwehBenData: YahwehBenYahwehData = yahwehBenResponse;
      const followersData: FollowersData = followersResponse;
      const attireData: CulturalAttireData = attireResponse;

      // Charger les données Home
      if (homeData.homePage) {
        setTitle(homeData.homePage.videoSection.title || "");
        setDescription(homeData.homePage.videoSection.content || "");
        if (homeData.homePage.videos && homeData.homePage.videos.length > 0) {
          setVideoLink1(homeData.homePage.videos[0]?.src || "");
          setVideoLink2(homeData.homePage.videos[1]?.src || "");
          setVideoLink3(homeData.homePage.videos[2]?.src || "");
        }
      }

      // Charger les données Yahweh
      if (yahwehData.yahweh) {
        setYahwehTitle1(yahwehData.yahweh.title1 || "");
        setYahwehTitle2(yahwehData.yahweh.title2 || "");
        setYahwehDescription1(yahwehData.yahweh.description1 || "");
        setYahwehDescription2(yahwehData.yahweh.description2 || "");
        setYahwehDescription3(yahwehData.yahweh.description3 || "");
        setYahwehDescription4(yahwehData.yahweh.description4 || "");
        setYahwehDescription5(yahwehData.yahweh.description5 || "");
        setYahwehDescription6(yahwehData.yahweh.description6 || "");
      }

      // Charger les données Yahweh Ben Yahweh
      if (yahwehBenData.yahwehBenYahweh) {
        setYahwehBenTitle1(yahwehBenData.yahwehBenYahweh.title1 || "");
        setYahwehBenTitle2(yahwehBenData.yahwehBenYahweh.title2 || "");
        setYahwehBenDescription1(
          yahwehBenData.yahwehBenYahweh.description1 || ""
        );
        setYahwehBenDescription2(
          yahwehBenData.yahwehBenYahweh.description2 || ""
        );
        setYahwehBenDescription3(
          yahwehBenData.yahwehBenYahweh.description3 || ""
        );
        setYahwehBenDescription4(
          yahwehBenData.yahwehBenYahweh.description4 || ""
        );
        setYahwehBenDescription5(
          yahwehBenData.yahwehBenYahweh.description5 || ""
        );
        setYahwehBenDescription6(
          yahwehBenData.yahwehBenYahweh.description6 || ""
        );
        setYahwehBenDescription7(
          yahwehBenData.yahwehBenYahweh.description7 || ""
        );
        setYahwehBenDescription8(
          yahwehBenData.yahwehBenYahweh.description8 || ""
        );
        setYahwehBenDescription9(
          yahwehBenData.yahwehBenYahweh.description9 || ""
        );
      }

      // Charger les données Followers
      if (followersData.followers) {
        setFollowersTitle(followersData.followers.title || "");
        setFollowersDescription1(followersData.followers.description1 || "");
        setFollowersDescription2(followersData.followers.description2 || "");
        setFollowersDescription3(followersData.followers.description3 || "");
        setFollowersDescription4(followersData.followers.description4 || "");
        setFollowersDescription5(followersData.followers.description5 || "");
      }

      // Charger les données Cultural Attire
      if (attireData.culturalAttire) {
        setAttireTitle(attireData.culturalAttire.title || "");
        setAttireDescription1(attireData.culturalAttire.description1 || "");
        setAttireDescription2(attireData.culturalAttire.description2 || "");
        setAttireDescription3(attireData.culturalAttire.description3 || "");
        setAttireDescription4(attireData.culturalAttire.description4 || "");
        setAttireDescription5(attireData.culturalAttire.description5 || "");
      }

      setError(null);
    } catch (err) {
      console.error("Erreur lors du chargement des données:", err);
      setError(
        "Impossible de charger les données. Vérifiez que tous les fichiers JSON existent."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Charger les données au montage du composant
  useEffect(() => {
    loadAllJsonData();
  }, []);

  // Fonction pour sauvegarder les données
  const saveDataToJson = async (
    section: string,
    field: string,
    value: string
  ) => {
    try {
      console.log(`Sauvegarde: ${section}.${field} = ${value}`);
      // Ici vous pouvez implémenter la logique pour sauvegarder dans votre backend
      alert(`${field} sauvegardé avec succès!`);
    } catch (err) {
      console.error("Erreur lors de la sauvegarde:", err);
      alert("Erreur lors de la sauvegarde");
    }
  };

  // Fonctions de sauvegarde pour Home
  const handleSaveVideoLink1 = () =>
    saveDataToJson("homePage.videos[0]", "src", videoLink1);
  const handleSaveVideoLink2 = () =>
    saveDataToJson("homePage.videos[1]", "src", videoLink2);
  const handleSaveVideoLink3 = () =>
    saveDataToJson("homePage.videos[2]", "src", videoLink3);
  const handleSaveTitle = () =>
    saveDataToJson("homePage.videoSection", "title", title);
  const handleSaveDescription = () =>
    saveDataToJson("homePage.videoSection", "content", description);

  // Fonctions de sauvegarde pour Yahweh
  const handleSaveYahwehTitle1 = () =>
    saveDataToJson("yahweh", "title1", yahwehTitle1);
  const handleSaveYahwehTitle2 = () =>
    saveDataToJson("yahweh", "title2", yahwehTitle2);
  const handleSaveYahwehDescription1 = () =>
    saveDataToJson("yahweh", "description1", yahwehDescription1);
  const handleSaveYahwehDescription2 = () =>
    saveDataToJson("yahweh", "description2", yahwehDescription2);
  const handleSaveYahwehDescription3 = () =>
    saveDataToJson("yahweh", "description3", yahwehDescription3);
  const handleSaveYahwehDescription4 = () =>
    saveDataToJson("yahweh", "description4", yahwehDescription4);
  const handleSaveYahwehDescription5 = () =>
    saveDataToJson("yahweh", "description5", yahwehDescription5);
  const handleSaveYahwehDescription6 = () =>
    saveDataToJson("yahweh", "description6", yahwehDescription6);

  // Fonctions de sauvegarde pour Yahweh Ben Yahweh
  const handleSaveYahwehBenTitle1 = () =>
    saveDataToJson("yahwehBenYahweh", "title1", yahwehBenTitle1);
  const handleSaveYahwehBenTitle2 = () =>
    saveDataToJson("yahwehBenYahweh", "title2", yahwehBenTitle2);
  const handleSaveYahwehBenDescription1 = () =>
    saveDataToJson("yahwehBenYahweh", "description1", yahwehBenDescription1);
  const handleSaveYahwehBenDescription2 = () =>
    saveDataToJson("yahwehBenYahweh", "description2", yahwehBenDescription2);
  const handleSaveYahwehBenDescription3 = () =>
    saveDataToJson("yahwehBenYahweh", "description3", yahwehBenDescription3);
  const handleSaveYahwehBenDescription4 = () =>
    saveDataToJson("yahwehBenYahweh", "description4", yahwehBenDescription4);
  const handleSaveYahwehBenDescription5 = () =>
    saveDataToJson("yahwehBenYahweh", "description5", yahwehBenDescription5);
  const handleSaveYahwehBenDescription6 = () =>
    saveDataToJson("yahwehBenYahweh", "description6", yahwehBenDescription6);
  const handleSaveYahwehBenDescription7 = () =>
    saveDataToJson("yahwehBenYahweh", "description7", yahwehBenDescription7);
  const handleSaveYahwehBenDescription8 = () =>
    saveDataToJson("yahwehBenYahweh", "description8", yahwehBenDescription8);
  const handleSaveYahwehBenDescription9 = () =>
    saveDataToJson("yahwehBenYahweh", "description9", yahwehBenDescription9);

  // Fonctions de sauvegarde pour Followers
  const handleSaveFollowersTitle = () =>
    saveDataToJson("followers", "title", followersTitle);
  const handleSaveFollowersDescription1 = () =>
    saveDataToJson("followers", "description1", followersDescription1);
  const handleSaveFollowersDescription2 = () =>
    saveDataToJson("followers", "description2", followersDescription2);
  const handleSaveFollowersDescription3 = () =>
    saveDataToJson("followers", "description3", followersDescription3);
  const handleSaveFollowersDescription4 = () =>
    saveDataToJson("followers", "description4", followersDescription4);
  const handleSaveFollowersDescription5 = () =>
    saveDataToJson("followers", "description5", followersDescription5);

  // Fonctions de sauvegarde pour Cultural Attire
  const handleSaveAttireTitle = () =>
    saveDataToJson("culturalAttire", "title", attireTitle);
  const handleSaveAttireDescription1 = () =>
    saveDataToJson("culturalAttire", "description1", attireDescription1);
  const handleSaveAttireDescription2 = () =>
    saveDataToJson("culturalAttire", "description2", attireDescription2);
  const handleSaveAttireDescription3 = () =>
    saveDataToJson("culturalAttire", "description3", attireDescription3);
  const handleSaveAttireDescription4 = () =>
    saveDataToJson("culturalAttire", "description4", attireDescription4);
  const handleSaveAttireDescription5 = () =>
    saveDataToJson("culturalAttire", "description5", attireDescription5);

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
            onClick={loadAllJsonData}
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
    <div className="home-tab fade-in">
      {/* Section Home */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsHomeOpen(!isHomeOpen)}
        >
          <h1 className="section-title">Home</h1>
          <button className="toggle-section">
            {isHomeOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isHomeOpen && (
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

              {/* Champ Lien Vidéo 1 */}
              <div className="input-group">
                <label className="input-label">
                  <Video className="label-icon" size={16} />
                  Lien vidéo 1
                </label>
                <div className="input-wrapper">
                  <input
                    type="url"
                    value={videoLink1}
                    onChange={(e) => setVideoLink1(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveVideoLink1}
                    className="save-button video-save"
                    disabled={!videoLink1.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Champ Lien Vidéo 2 */}
              <div className="input-group">
                <label className="input-label">
                  <Video className="label-icon" size={16} />
                  Lien vidéo 2
                </label>
                <div className="input-wrapper">
                  <input
                    type="url"
                    value={videoLink2}
                    onChange={(e) => setVideoLink2(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveVideoLink2}
                    className="save-button video-save"
                    disabled={!videoLink2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Champ Lien Vidéo 3 */}
              <div className="input-group">
                <label className="input-label">
                  <Video className="label-icon" size={16} />
                  Lien vidéo 3
                </label>
                <div className="input-wrapper">
                  <input
                    type="url"
                    value={videoLink3}
                    onChange={(e) => setVideoLink3(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveVideoLink3}
                    className="save-button video-save"
                    disabled={!videoLink3.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

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
            </div>
          </div>
        )}
      </section>

      {/* ... keep existing code (Section Yahweh and Yahweh Ben Yahweh with all their fields) */}

      {/* Section Yahweh */}
      {/* Section Yahweh */}
      <section className="yahweh-section">
        <div
          className="section-header"
          onClick={() => setIsYahwehOpen(!isYahwehOpen)}
        >
          <h1 className="section-title">Yahweh</h1>
          <button className="toggle-section">
            {isYahwehOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>

        {isYahwehOpen && (
          <div className="section-content">
            <p>Yahweh is the sacred name of the Almighty Creator.</p>
            <p>We honor and worship Yahweh as the one true God.</p>

            <div className="admin-controls">
              <h3 className="admin-title">Administration Yahweh</h3>

              {/* Titre 1 */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre 1
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={yahwehTitle1}
                    onChange={(e) => setYahwehTitle1(e.target.value)}
                    placeholder="Entrez le titre 1..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveYahwehTitle1}
                    className="save-button title-save"
                    disabled={!yahwehTitle1.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Titre 2 */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre 2
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={yahwehTitle2}
                    onChange={(e) => setYahwehTitle2(e.target.value)}
                    placeholder="Entrez le titre 2..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveYahwehTitle2}
                    className="save-button title-save"
                    disabled={!yahwehTitle2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 1 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 1
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehDescription1}
                    onChange={(e) => setYahwehDescription1(e.target.value)}
                    placeholder="Entrez la description 1..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehDescription1}
                    className="save-button description-save"
                    disabled={!yahwehDescription1.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 2 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 2
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehDescription2}
                    onChange={(e) => setYahwehDescription2(e.target.value)}
                    placeholder="Entrez la description 2..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehDescription2}
                    className="save-button description-save"
                    disabled={!yahwehDescription2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 3 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 3
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehDescription3}
                    onChange={(e) => setYahwehDescription3(e.target.value)}
                    placeholder="Entrez la description 3..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehDescription3}
                    className="save-button description-save"
                    disabled={!yahwehDescription3.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 4 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 4
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehDescription4}
                    onChange={(e) => setYahwehDescription4(e.target.value)}
                    placeholder="Entrez la description 4..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehDescription4}
                    className="save-button description-save"
                    disabled={!yahwehDescription4.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 5 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 5
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehDescription5}
                    onChange={(e) => setYahwehDescription5(e.target.value)}
                    placeholder="Entrez la description 5..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehDescription5}
                    className="save-button description-save"
                    disabled={!yahwehDescription5.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 6 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 6
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehDescription6}
                    onChange={(e) => setYahwehDescription6(e.target.value)}
                    placeholder="Entrez la description 6..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehDescription6}
                    className="save-button description-save"
                    disabled={!yahwehDescription6.trim()}
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

      {/* Section Yahweh Ben Yahweh */}
      <section className="yahweh-ben-section">
        <div
          className="section-header"
          onClick={() => setIsYahwehBenOpen(!isYahwehBenOpen)}
        >
          <h1 className="section-title">Yahweh Ben Yahweh</h1>
          <button className="toggle-section">
            {isYahwehBenOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isYahwehBenOpen && (
          <div className="section-content">
            <p>
              Yahweh Ben Yahweh, meaning "The Son of God," is our spiritual
              leader.
            </p>
            <p>
              His teachings guide us in the path of righteousness and truth.
            </p>

            {/* Champs d'édition pour la section Yahweh Ben Yahweh */}
            <div className="admin-controls">
              <h3 className="admin-title">Administration Yahweh Ben Yahweh</h3>

              {/* Titre 1 */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre 1
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={yahwehBenTitle1}
                    onChange={(e) => setYahwehBenTitle1(e.target.value)}
                    placeholder="Entrez le titre 1..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveYahwehBenTitle1}
                    className="save-button title-save"
                    disabled={!yahwehBenTitle1.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Titre 2 */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre 2
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={yahwehBenTitle2}
                    onChange={(e) => setYahwehBenTitle2(e.target.value)}
                    placeholder="Entrez le titre 2..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveYahwehBenTitle2}
                    className="save-button title-save"
                    disabled={!yahwehBenTitle2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 1 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 1
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehBenDescription1}
                    onChange={(e) => setYahwehBenDescription1(e.target.value)}
                    placeholder="Entrez la description 1..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehBenDescription1}
                    className="save-button description-save"
                    disabled={!yahwehBenDescription1.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 2 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 2
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehBenDescription2}
                    onChange={(e) => setYahwehBenDescription2(e.target.value)}
                    placeholder="Entrez la description 2..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehBenDescription2}
                    className="save-button description-save"
                    disabled={!yahwehBenDescription2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 3 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 3
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehBenDescription3}
                    onChange={(e) => setYahwehBenDescription3(e.target.value)}
                    placeholder="Entrez la description 3..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehBenDescription3}
                    className="save-button description-save"
                    disabled={!yahwehBenDescription3.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 4 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 4
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehBenDescription4}
                    onChange={(e) => setYahwehBenDescription4(e.target.value)}
                    placeholder="Entrez la description 4..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehBenDescription4}
                    className="save-button description-save"
                    disabled={!yahwehBenDescription4.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 5 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 5
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehBenDescription5}
                    onChange={(e) => setYahwehBenDescription5(e.target.value)}
                    placeholder="Entrez la description 5..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehBenDescription5}
                    className="save-button description-save"
                    disabled={!yahwehBenDescription5.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 6 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 6
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehBenDescription6}
                    onChange={(e) => setYahwehBenDescription6(e.target.value)}
                    placeholder="Entrez la description 6..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehBenDescription6}
                    className="save-button description-save"
                    disabled={!yahwehBenDescription6.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 7 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 7
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehBenDescription7}
                    onChange={(e) => setYahwehBenDescription7(e.target.value)}
                    placeholder="Entrez la description 7..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehBenDescription7}
                    className="save-button description-save"
                    disabled={!yahwehBenDescription7.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 8 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 8
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehBenDescription8}
                    onChange={(e) => setYahwehBenDescription8(e.target.value)}
                    placeholder="Entrez la description 8..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehBenDescription8}
                    className="save-button description-save"
                    disabled={!yahwehBenDescription8.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 9 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 9
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={yahwehBenDescription9}
                    onChange={(e) => setYahwehBenDescription9(e.target.value)}
                    placeholder="Entrez la description 9..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveYahwehBenDescription9}
                    className="save-button description-save"
                    disabled={!yahwehBenDescription9.trim()}
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

      {/* Section Followers */}
      <section className="followers-section">
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
            <p>
              We are a community dedicated to living according to divine
              principles.
            </p>
            <p>
              Our fellowship is based on love, respect, and spiritual growth.
            </p>

            {/* Champs d'édition pour la section Followers */}
            <div className="admin-controls">
              <h3 className="admin-title">Administration Followers</h3>

              {/* Titre */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={followersTitle}
                    onChange={(e) => setFollowersTitle(e.target.value)}
                    placeholder="Entrez le titre..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveFollowersTitle}
                    className="save-button title-save"
                    disabled={!followersTitle.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 1 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 1
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={followersDescription1}
                    onChange={(e) => setFollowersDescription1(e.target.value)}
                    placeholder="Entrez la description 1..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveFollowersDescription1}
                    className="save-button description-save"
                    disabled={!followersDescription1.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 2 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 2
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={followersDescription2}
                    onChange={(e) => setFollowersDescription2(e.target.value)}
                    placeholder="Entrez la description 2..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveFollowersDescription2}
                    className="save-button description-save"
                    disabled={!followersDescription2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 3 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 3
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={followersDescription3}
                    onChange={(e) => setFollowersDescription3(e.target.value)}
                    placeholder="Entrez la description 3..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveFollowersDescription3}
                    className="save-button description-save"
                    disabled={!followersDescription3.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 4 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 4
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={followersDescription4}
                    onChange={(e) => setFollowersDescription4(e.target.value)}
                    placeholder="Entrez la description 4..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveFollowersDescription4}
                    className="save-button description-save"
                    disabled={!followersDescription4.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 5 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 5
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={followersDescription5}
                    onChange={(e) => setFollowersDescription5(e.target.value)}
                    placeholder="Entrez la description 5..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveFollowersDescription5}
                    className="save-button description-save"
                    disabled={!followersDescription5.trim()}
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

      {/* Section Cultural Attire */}
      <section className="attire-section">
        <div
          className="section-header"
          onClick={() => setIsAttireOpen(!isAttireOpen)}
        >
          <h1 className="section-title">Cultural Attire</h1>
          <button className="toggle-section">
            {isAttireOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isAttireOpen && (
          <div className="section-content">
            <p>
              Our traditional garments reflect our spiritual identity and
              heritage.
            </p>
            <p>
              The attire symbolizes purity, dignity, and connection to our
              roots.
            </p>

            {/* Champs d'édition pour la section Cultural Attire */}
            <div className="admin-controls">
              <h3 className="admin-title">Administration Cultural Attire</h3>

              {/* Titre */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={attireTitle}
                    onChange={(e) => setAttireTitle(e.target.value)}
                    placeholder="Entrez le titre..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveAttireTitle}
                    className="save-button title-save"
                    disabled={!attireTitle.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 1 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 1
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={attireDescription1}
                    onChange={(e) => setAttireDescription1(e.target.value)}
                    placeholder="Entrez la description 1..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveAttireDescription1}
                    className="save-button description-save"
                    disabled={!attireDescription1.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 2 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 2
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={attireDescription2}
                    onChange={(e) => setAttireDescription2(e.target.value)}
                    placeholder="Entrez la description 2..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveAttireDescription2}
                    className="save-button description-save"
                    disabled={!attireDescription2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 3 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 3
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={attireDescription3}
                    onChange={(e) => setAttireDescription3(e.target.value)}
                    placeholder="Entrez la description 3..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveAttireDescription3}
                    className="save-button description-save"
                    disabled={!attireDescription3.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 4 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 4
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={attireDescription4}
                    onChange={(e) => setAttireDescription4(e.target.value)}
                    placeholder="Entrez la description 4..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveAttireDescription4}
                    className="save-button description-save"
                    disabled={!attireDescription4.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>

              {/* Description 5 */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 5
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={attireDescription5}
                    onChange={(e) => setAttireDescription5(e.target.value)}
                    placeholder="Entrez la description 5..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveAttireDescription5}
                    className="save-button description-save"
                    disabled={!attireDescription5.trim()}
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

export default HomeTab;
