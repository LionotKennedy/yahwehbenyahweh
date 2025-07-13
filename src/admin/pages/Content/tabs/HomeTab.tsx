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

  // API base URL
  const API_BASE_URL = "http://localhost:5000/api/home-contenu"

  // Fetch data from API
  const fetchData = async (endpoint: string, setDataFunction: (data: any) => void) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      if (data.success && data.data && data.data.length > 0) {
        setDataFunction(data.data[0])
      }
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error)
    }
  }

  // Update data via API
  const updateData = async (endpoint: string, id: number, data: any) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      console.log(`Update successful for ${endpoint}:`, result)
      return result
    } catch (error) {
      console.error(`Error updating ${endpoint}:`, error)
      throw error
    }
  }

  useEffect(() => {
    // Load yahweh data
    fetchData("yahweh", (data) => {
      setYahwehTitle1(data.title1 || "")
      setYahwehTitle2(data.title2 || "")
      setYahwehDescription1(data.description1 || "")
      setYahwehDescription2(data.description2 || "")
      setYahwehDescription3(data.description3 || "")
      setYahwehDescription4(data.description4 || "")
      setYahwehDescription5(data.description5 || "")
      setYahwehDescription6(data.description6 || "")
    })

    // États pour la section Yahweh Ben Yahweh
    fetchData("yahweh-ben", (data) => {
      setYahwehBenTitle1(data.title1 || "")
      setYahwehBenTitle2(data.title2 || "")
      setYahwehBenDescription1(data.description1 || "")
      setYahwehBenDescription2(data.description2 || "")
      setYahwehBenDescription3(data.description3 || "")
      setYahwehBenDescription4(data.description4 || "")
      setYahwehBenDescription5(data.description5 || "")
      setYahwehBenDescription6(data.description6 || "")
      setYahwehBenDescription7(data.description7 || "")
      setYahwehBenDescription8(data.description8 || "")
      setYahwehBenDescription9(data.description9 || "")
    })

    fetchData("followers", (data) => {
      setFollowersTitle(data.title || "")
      setFollowersDescription1(data.description1 || "")
      setFollowersDescription2(data.description2 || "")
      setFollowersDescription3(data.description3 || "")
      setFollowersDescription4(data.description4 || "")
      setFollowersDescription5(data.description5 || "")
    })

    fetchData("cultural-attire", (data) => {
      setAttireTitle(data.title || "")
      setAttireDescription1(data.description1 || "")
      setAttireDescription2(data.description2 || "")
      setAttireDescription3(data.description3 || "")
      setAttireDescription4(data.description4 || "")
      setAttireDescription5(data.description5 || "")
    })

    fetchData("home", (data) => {
      setTitle(data.title || "")
      setDescription(data.description1 || "")
      setVideoLink1(data.src1 || "")
      setVideoLink2(data.src2 || "")
      setVideoLink3(data.src3 || "")
    })

    // fetchData("home-page-videos", (data) => {
    // })

  }, [])

  const handleSaveYahweh = async () => {
    try {
      const data = {
        title1: yahwehTitle1,
        title2: yahwehTitle2,
        description1: yahwehDescription1,
        description2: yahwehDescription2,
        description3: yahwehDescription3,
        description4: yahwehDescription4,
        description5: yahwehDescription5,
        description6: yahwehDescription6,
      }
      await updateData("yahweh", 1, data)
    } catch (error) {
      console.error("Error saving yahweh:", error)
    }
  }

  const handleSaveYahwehBen = async () => {
    try {
      const data = {
        title1: yahwehBenTitle1,
        title2: yahwehBenTitle2,
        description1: yahwehBenDescription1,
        description2: yahwehBenDescription2,
        description3: yahwehBenDescription3,
        description4: yahwehBenDescription4,
        description5: yahwehBenDescription5,
        description6: yahwehBenDescription6,
        description7: yahwehBenDescription7,
        description8: yahwehBenDescription8,
        description9: yahwehBenDescription9,
      }
      await updateData("yahweh-ben", 1, data)
    } catch (error) {
      console.error("Error saving yahweh ben:", error)
    }
  }

  const handleSaveFollowers = async () => {
    try {
      const data = {
        title: followersTitle,
        description1: followersDescription1,
        description2: followersDescription2,
        description3: followersDescription3,
        description4: followersDescription4,
        description5: followersDescription5,
      }
      await updateData("followers", 1, data)
    } catch (error) {
      console.error("Error saving followers:", error)
    }
  }

  const handleSaveCultural = async () => {
    try {
      const data = {
        title: attireTitle,
        description1: attireDescription1,
        description2: attireDescription2,
        description3: attireDescription3,
        description4: attireDescription4,
        description5: attireDescription5,
      }
      await updateData("followers", 1, data)
    } catch (error) {
      console.error("Error saving followers:", error)
    }
  }

  const handleSaveHome = async () => {
    try {
      const data = {
        src1: videoLink1,
        src2: videoLink2,
        src3: videoLink3,
        title: title,
        description1: description,
      }
      await updateData("home", 1, data)
    } catch (error) {
      console.error("Error saving home:", error)
    }
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
                    onClick={handleSaveHome}
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
                    onClick={handleSaveHome}
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
                    onClick={handleSaveHome}
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
                    onClick={handleSaveHome}
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
                    onClick={handleSaveHome}
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
                    onClick={handleSaveYahweh}
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
                    onClick={handleSaveYahweh}
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
                    onClick={handleSaveYahweh}
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
                    onClick={handleSaveYahweh}
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
                    onClick={handleSaveYahweh}
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
                    onClick={handleSaveYahweh}
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
                    onClick={handleSaveYahweh}
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
                    onClick={handleSaveYahweh}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveYahwehBen}
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
                    onClick={handleSaveFollowers}
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
                    onClick={handleSaveFollowers}
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
                    onClick={handleSaveFollowers}
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
                    onClick={handleSaveFollowers}
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
                    onClick={handleSaveFollowers}
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
                    onClick={handleSaveFollowers}
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
                    onClick={handleSaveCultural}
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
                    onClick={handleSaveCultural}
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
                    onClick={handleSaveCultural}
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
                    onClick={handleSaveCultural}
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
                    onClick={handleSaveCultural}
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
                    onClick={handleSaveCultural}
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