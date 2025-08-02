
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
import { toast } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import homeImagesData from "../../../../data/images-home.json";
import buttonsData from "../../../../data/bouton-img.json";
import {
  getImageUrl,
  BannerAPI,
  SectionAPI,
  GalleryAPI
} from "../../../api/homeImage2";
import "./style/HomeTab.css";
// Another
import "../../Content/tabs/style/HomeTab.css";
import "../../Content/tabs/style/HomeTab3.css";
import "../../Content/tabs/style/HomeTab5.css";

interface ImageData {
  id?: number;
  // path: string;
  src: string;
  alt: string;
}

interface BannerData {
  id: number;
  // path: string;
  src: string;
  alt: string | null;
  sort: number;
  // position: number;
  created_at: string;
  updated_at: string;
}

interface SectionData {
  id: number;
  section: string | null;
  src: string;
  // section_name: string | null;
  // path: string;
  created_at: string;
  updated_at: string;
}

interface GalleryImage {
  id: number;
  src: string;
  // path: string;
  alt: string;
  created_at: string;
  updated_at: string;
}

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
  src: string;
  alt: string;
  // path: string;
}

const HomeTab: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [banners, setBanners] = useState<BannerData[]>([]);
  const [sectionbg, setSectionBg] = useState<SectionData[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [defaultImages] = useState<HomeImagesData>(homeImagesData);
  const [homeImages1, setHomeImages1] = useState<string[]>([]);
  const [homeImages2, setHomeImages2] = useState<string[]>(() =>
    buttonsData.boutons.map((bouton: ButtonData) => bouton.src)
    // buttonsData.boutons.map((bouton: ButtonData) => bouton.path)
  );
  const [homeImage3, setHomeImage3] = useState("");
  const [homeImage4, setHomeImage4] = useState("");
  const [booksImage, setBooksImage] = useState("");
  const [aboutYahwehImage, setAboutYahwehImage] = useState("");
  const [aboutYahwehBenImage, setAboutYahwehBenImage] = useState("");
  const [followersImage, setFollowersImage] = useState("");
  const [culturalImage, setCulturalImage] = useState("");
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isBooksOpen, setIsBooksOpen] = useState(true);
  const [isAboutYahwehOpen, setIsAboutYahwehOpen] = useState(true);
  const [isAboutYahwehBenOpen, setIsAboutYahwehBenOpen] = useState(true);
  const [isFollowersOpen, setIsFollowersOpen] = useState(true);
  const [isCulturalOpen, setIsCulturalOpen] = useState(true);

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      const { success, data, message } = await GalleryAPI.fetchAll();
      
      if (success && data) {
        const sortedGallery = data.sort((a: GalleryImage, b: GalleryImage) => a.id - b.id);
        setGalleryImages(sortedGallery);
        const galleryPaths: string[] = sortedGallery.map((img: GalleryImage) => getImageUrl(img.src));
        // const galleryPaths: string[] = sortedGallery.map((img: GalleryImage) => getImageUrl(img.path));
        
        while (galleryPaths.length < 12) {
          galleryPaths.push("");
        }
        
        setHomeImages2(galleryPaths.slice(0, 12));
      } else {
        setHomeImages2(buttonsData.boutons.map((bouton: ButtonData) => bouton.src));
        // setHomeImages2(buttonsData.boutons.map((bouton: ButtonData) => bouton.path));
        if (message) toast.error(message);
      }
    } catch (err) {
      console.error("Erreur lors de la récupération des images de galerie:", err);
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };
 
  const fetchBanners = async () => {
    try {
      setLoading(true);
      setError(null);
      const { success, data, message } = await BannerAPI.fetchAll();
      
      if (success && data) {
        setBanners(data);
        const sortedBanners = data.sort((a: BannerData, b: BannerData) => a.id - b.id);
        interface MainBanner extends BannerData {}

        const mainBanners: string[] = sortedBanners
          .filter((banner: MainBanner) => [1, 2, 3].includes(banner.id))
          .sort((a: MainBanner, b: MainBanner) => a.id - b.id)
          .map((banner: MainBanner) => getImageUrl(banner.src));
          // .map((banner: MainBanner) => getImageUrl(banner.path));

        while (mainBanners.length < 3) {
          mainBanners.push(defaultImages.banners[mainBanners.length]?.src || "");
          // mainBanners.push(defaultImages.banners[mainBanners.length]?.path || "");
        }

        setHomeImages1(mainBanners);

        const bookBanner: BannerData | undefined = sortedBanners.find((banner: BannerData) => banner.id === 4);
        setHomeImage3(bookBanner ? getImageUrl(bookBanner.src) : defaultImages.bookOfTheMonth.src);
        // setHomeImage3(bookBanner ? getImageUrl(bookBanner.path) : defaultImages.bookOfTheMonth.path);

        const newsBanner: BannerData | undefined = sortedBanners.find((banner: BannerData) => banner.id === 5);
        setHomeImage4(newsBanner ? getImageUrl(newsBanner.src) : defaultImages.breakingNews.src);
        // setHomeImage4(newsBanner ? getImageUrl(newsBanner.path) : defaultImages.breakingNews.path);
      } else {
        setHomeImages1(defaultImages.banners.slice(0, 3).map((banner) => banner.src));
        // setHomeImages1(defaultImages.banners.slice(0, 3).map((banner) => banner.path));
        setHomeImage3(defaultImages.bookOfTheMonth.src);
        // setHomeImage3(defaultImages.bookOfTheMonth.path);
        setHomeImage4(defaultImages.breakingNews.src);
        // setHomeImage4(defaultImages.breakingNews.path);
        if (message) toast(message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  const fetchSectionBackground = async () => {
    try {
      setLoading(true);
      setError(null);
      const { success, data, message } = await SectionAPI.fetchAll();
      
      if (success && data) {
        setSectionBg(data);
        const sortedSectionbg = data.sort((a: SectionData, b: SectionData) => a.id - b.id); 
        
        const about_yahweh: SectionData | undefined = sortedSectionbg.find(
          (banner: SectionData) => banner.id === 1 || banner.section === "about_yahweh"
          // (banner: SectionData) => banner.id === 1 || banner.section_name === "about_yahweh"
        );
        if (about_yahweh) setAboutYahwehImage(getImageUrl(about_yahweh.src));
        // if (about_yahweh) setAboutYahwehImage(getImageUrl(about_yahweh.path));
        
        const about_yahweh_ben: SectionData | undefined = sortedSectionbg.find(
          (banner: SectionData) => banner.id === 2 || banner.section === "about_yahweh_ben"
          // (banner: SectionData) => banner.id === 2 || banner.section_name === "about_yahweh_ben"
        );
        if (about_yahweh_ben) setAboutYahwehBenImage(getImageUrl(about_yahweh_ben.src));
        // if (about_yahweh_ben) setAboutYahwehBenImage(getImageUrl(about_yahweh_ben.path));
        
        interface FollowersSection extends SectionData {}

        const followers: FollowersSection | undefined = sortedSectionbg.find(
          // (banner: SectionData) => banner.id === 3 || banner.section_name === "followers"
          (banner: SectionData) => banner.id === 3 || banner.section === "followers"
        );
        // if (followers) setFollowersImage(getImageUrl(followers.path));
        if (followers) setFollowersImage(getImageUrl(followers.src));
        
        const cultural: SectionData | undefined = sortedSectionbg.find(
          (banner: SectionData) => banner.id === 4 || banner.section === "cultural"
          // (banner: SectionData) => banner.id === 4 || banner.section_name === "cultural"
        );
        if (cultural) setCulturalImage(getImageUrl(cultural.src));
        // if (cultural) setCulturalImage(getImageUrl(cultural.path));

        const books: SectionData | undefined = sortedSectionbg.find(
          // (banner: SectionData) => banner.id === 5 || banner.section_name === "books"
          (banner: SectionData) => banner.id === 5 || banner.section === "books"
        );
        // if (books) setBooksImage(getImageUrl(books.path));
        if (books) setBooksImage(getImageUrl(books.src));
      } else {
        if (message) toast(message);
      }
    } catch (err) {
      console.error("Erreur lors de la récupération des sections:", err);
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
    fetchSectionBackground();
    fetchGalleryImages();
  }, []);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<string[]>>,
    index?: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (index !== undefined) {
        if (setter === setHomeImages1 || setter === setHomeImages2) {
          setter((prev: string[]) => {
            const newImages = [...prev];
            newImages[index] = result;
            return newImages;
          });
        }
      } else {
        if (typeof setter === "function") {
          (setter as React.Dispatch<React.SetStateAction<string>>)(result);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveImage = async (
    imageData: string | string[],
    section: string,
    bannerId?: number,
    galleryIndex?: number
  ) => {
    try {
      if (galleryIndex !== undefined && typeof imageData === "string") {
        const galleryId = galleryIndex + 1;
        await GalleryAPI.update(galleryId, imageData);
        await fetchGalleryImages();
      } else if (bannerId && typeof imageData === "string") {
        await BannerAPI.update(bannerId, imageData);
        await fetchBanners();
      } else {
        toast(`Sauvegarde locale pour ${section} (pas d'API configurée)`);
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
    }
  };

  const handleSaveImageSecionBG = async (
    imageDataBG: string | string[],
    section_name: string,
    bannerId?: number
  ) => {
    try {
      if (bannerId && typeof imageDataBG === "string") {
        await SectionAPI.update(bannerId, imageDataBG, section_name);
        await fetchSectionBackground();
      } else {
        toast(`Sauvegarde locale pour ${section_name} (pas d'API configurée)`);
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
    }
  };

  const handleRefresh = () => {
    fetchBanners();
    fetchSectionBackground();
    fetchGalleryImages();
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

  return (
    <div className="home-container">
      <ToastContainer position="bottom-right" autoClose={3000} />
      
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
                    sectionbg.find((b) => b.id === 5)?.section || "books"
                    // sectionbg.find((b) => b.id === 5)?.section_name || "books"
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
                    // sectionbg.find((b) => b.id === 1)?.section_name ||
                    sectionbg.find((b) => b.id === 1)?.section ||
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
                    // sectionbg.find((b) => b.id === 2)?.section_name ||
                    sectionbg.find((b) => b.id === 2)?.section ||
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
                    sectionbg.find((b) => b.id === 3)?.section ||
                    // sectionbg.find((b) => b.id === 3)?.section_name ||
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
                    sectionbg.find((b) => b.id === 4)?.section ||
                    // sectionbg.find((b) => b.id === 4)?.section_name ||
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