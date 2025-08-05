
import { useState, useEffect } from 'react';
import { VideoPlayer } from "../../../components/VideoPlayer";
import "../UniverseOfYahweh/style/universeOfYahweh.css";
import bottomMedia from "./image/bottom-media.jpg";
import { fetchData_2 } from "../../../admin/api/api";
import { MenuAPI, getImageUrl } from "../../../admin/api/menuImage";

interface SectionMenuData {
  id: number;
  section: string | null;
  src: string;
  created_at: string;
  updated_at: string;
}

const UniverseOfYahweh = () => {
  const [currentVideo, setCurrentVideo] = useState<string>('180');
  const [currentResolution, setCurrentResolution] = useState<string>('480');
  const [descriptionUniverse1, setDescriptionUniverse1] = useState("");
  const [descriptionUniverse2, setDescriptionUniverse2] = useState("");
  const [descriptionUniverse3, setDescriptionUniverse3] = useState("");
  const [descriptionUniverse4, setDescriptionUniverse4] = useState("");
  const [videoLinkUniverse, setVideoLinkUniverse] = useState('');
  const [universeImage, setUniverseImage] = useState("");

  const fetchSectionBackground = async () => {
    try {
      const { success, data } = await MenuAPI.fetchAll();
      // console.log("Données de MenuAPI.fetchAll():", { success, data });
      if (success && data) {
        const sortedSectionbg = data.sort((a: SectionMenuData, b: SectionMenuData) => a.id - b.id);
        // console.log("Données triées (sortedSectionbg):", sortedSectionbg);
        const sections = [
          { id: 1, name: "Tetragrammaton", setter: setUniverseImage }
        ];
        sections.forEach(section => {
          const banner: SectionMenuData | undefined = sortedSectionbg.find(
            (b: SectionMenuData) =>
              b.id === section.id || b.section === section.name
          );
          if (banner) {
            // console.log(`Image trouvée pour la section ${section.name}:`, banner);
            section.setter(getImageUrl(banner.src));
          } else {
            // console.log(`Aucune image trouvée pour la section ${section.name}`);
          }
        });
      } else {
        // console.log("Aucune donnée valide reçue de MenuAPI.fetchAll()");
      }
    } catch (err) {
      // console.error("Erreur lors de la récupération des sections:", err);
    }
  };

  useEffect(() => {
    fetchSectionBackground();
  }, []);

  const changeResolution = (res: string): void => {
    setCurrentResolution(res);
  };

  const changeVideo = (videoNumber: string): void => {
    setCurrentVideo(videoNumber);
  };

  // Base URL par défaut si videolinkuniverse est vide ou invalide
  const baseVideoUrl = videoLinkUniverse && videoLinkUniverse.trim() !== ''
    ? videoLinkUniverse.endsWith('/') 
      ? videoLinkUniverse.slice(0, -1) // Supprime le '/' final si présent
      : videoLinkUniverse
    : 'https://ms.yahwehbenyahweh.com/video';
  
  const videoSrc = `${baseVideoUrl}/${currentResolution}/${currentVideo}_${currentResolution}p.mp4`;

  useEffect(() => {
    fetchData_2("universe").then((d) => {
      // console.log("Données de fetchData_2('universe'):", d);
      setDescriptionUniverse1(d?.descriptionuniverse1 || "");
      setDescriptionUniverse2(d?.descriptionuniverse2 || "");
      setDescriptionUniverse3(d?.descriptionuniverse3 || "");
      setDescriptionUniverse4(d?.descriptionuniverse4 || "");
      setVideoLinkUniverse(d?.videolinkuniverse || "");
      // console.log("URL vidéo générée:", `${baseVideoUrl}/${currentResolution}/${currentVideo}_${currentResolution}p.mp4`);
    }).catch((err) => {
      console.error("Erreur lors de la récupération des données de fetchData_2:", err);
    });
  }, [currentResolution, currentVideo]); // Dépendances mises à jour pour re-générer l'URL si nécessaire

  return (
    <div className="universe-of-yahweh-pages">
      <div
        id="pg-banner-u"
        className="page-banner bg-cover bg-center h-48"
        style={{ backgroundImage: `url(${universeImage})` }}
      ></div>
      <div id="top-bar-gold-u" className="sec-bar-u"></div>
      <div className="Body_Text p-6 max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          {descriptionUniverse1}
        </p>
      </div>
      <div className="sec-bar pg-top-pd-mod"></div>
      <div className="Body_Text">
        <p className="_italic">
          {descriptionUniverse2}
        </p>
      </div>
      <div className="sec-bar pg-top-pd-mod"></div>
      <div className="Body_Text">
        <p className="_italic">
          {descriptionUniverse3}
        </p>
      </div>
      <div className="sec-bar pg-top-pd-mod"></div>
      <div className="Body_Text">
        <p className="">
          {descriptionUniverse4}
        </p>
      </div>
      <div className="sec-bar pg-top-pd-mod"></div>
      <div className="Universe_Video">
        <p>
          <strong>
            <u>AHOAHO NY FAMPISEHOANA HIJERENA IZAO</u>
          </strong>
          <br />
          <span id="title">Ny Tontolon'i Yahweh - Fampisehoana #{currentVideo}</span>
        </p>
        <VideoPlayer src={videoSrc} />
        <div className="resolution-buttons">
          <button
            id="lRes"
            type="button"
            onClick={() => changeResolution('480')}
            className={`res-button ${currentResolution === '480' ? 'active' : ''}`}
          >
            Sary Ambany
          </button>
          <button
            id="mRes"
            type="button"
            onClick={() => changeResolution('720')}
            className={`res-button ${currentResolution === '720' ? 'active' : ''}`}
          >
            Sary Antonio
          </button>
          <button
            id="hRes"
            type="button"
            onClick={() => changeResolution('1080')}
            className={`res-button ${currentResolution === '1080' ? 'active' : ''}`}
          >
            Sary Avony
          </button>
        </div>
        <form action="#">
          <select
            name="videoSelect"
            id="videoSelect"
            value={currentVideo}
            onChange={(e) => changeVideo(e.target.value)}
          >
            {Array.from({ length: 93 }, (_, i) => i + 180).map((num) => (
              <option key={num} value={num}>
                Ny Tontolon'i Yahweh - Fampisehoana #{num}
              </option>
            ))}
          </select>
        </form>
      </div>
      <br />
      <div className="py-8">
        <img
          className="bottom-media-img-U"
          src={bottomMedia}
          alt="Bottom Media"
        />
      </div>
    </div>
  );
};

export default UniverseOfYahweh;