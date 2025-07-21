import "./style/erosion_of_The_Constitution.css";
import "./style/reponsive.css";

// Importation des images
import TruthImage from "./image/truth.png";
import BottomMediaImage from "./image/bottom-media.jpg";
import GoldBarImage from "./image/Gold_Bar_1216.jpg";
import { fetchData_2 } from "../../../admin/api/api";
import { useEffect, useState } from "react";
import { MenuAPI, getImageUrl } from "../../../admin/api/menuImage";

interface SectionMenuData {
  id: number;
  section_name: string | null;
  path: string;
  created_at: string;
  updated_at: string;
}


export function Erosion_of_The_Constitution() {
  const [descriptionErosion, setDescriptionErosion] = useState("")
  const [erosionImage, setErosionImage] = useState("");
  const [, setSectionMenuBg] = useState<SectionMenuData[]>([]);


  const fetchSectionBackground = async () => {
    try {
      // setLoading(true);
      // setError(null);
      const { success, data } = await MenuAPI.fetchAll();

      if (success && data) {
        setSectionMenuBg(data);
        const sortedSectionbg = data.sort((a: SectionMenuData, b: SectionMenuData) => a.id - b.id);

        // Mise à jour des images pour chaque section
        const sections = [
          { id: 9, name: "Erosion_of_The_Constitution", setter: setErosionImage }
        ];

        sections.forEach(section => {

          const banner: SectionMenuData | undefined = sortedSectionbg.find(
            (b: SectionMenuData) =>
              b.id === section.id || b.section_name === section.name
          );
          if (banner) {
            section.setter(getImageUrl(banner.path));
          }
        });
      } else {
        // if (message) toast.error(message);
      }
    } catch (err) {
      console.error("Erreur lors de la récupération des sections:", err);
      // setError(err instanceof Error ? err.message : "Erreur inconnue");
      // toast.error("Erreur lors du chargement des sections");
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchSectionBackground();
  }, []);


  useEffect(() => {
    fetchData_2("erosion").then((d) => setDescriptionErosion(d?.descriptionerosion || ""))
  }, []);
  return (
    <>
      <div id="pg-banner-ero" className="" style={{ backgroundImage: `url(${erosionImage})` }}></div>
      <div id="top-bar-gold-ero"></div>

      <div className="sec-text-ero pg-text-ttl-fmt-ero">
        <p>
          {descriptionErosion}
          {/* <i>"Ny Fahasimban'ny Lalàmpanorenana"</i> - dia faminaniana nataon'ity
          Tranonkala ity mihoatra ny roapolo taona lasa izay, miorina amin'ny
          zava-nitranga sy ny fijaliana tena izay niainan'ny Mesia antsika,{" "}
          <span className="David-ero">יהוה&nbsp;בּן&nbsp;יהוה</span>. */}
        </p>
      </div>

      <div className="sec-text-ero pg-text-ttl-fmt-ero">
        <p>
          Amin'izao fotoana izao, <strong>Amerika</strong> dia manana{" "}
          <strong>Karazana Polony telo:</strong>
        </p>
      </div>

      <div className="sec-text-ero pg-text-ttl-fmt-sm-ero p-list-pos-ero">
        <ol type="1" className="list-decimal-ero">
          <li>
            <p className="p-list-margin">
              <span className="pg-link-text-ul">
                Ny Sampana Politika - izay tsy voatery hanaraka lalàna;
              </span>
            </p>
          </li>
          <li>
            <p className="p-list-margin">
              <span className="pg-link-text-ul">
                Ny Mpanankarena - izay tsy voatery hanaraka lalàna raha afaka
                mandoa kolikoly ny Sampana Politika;
              </span>
            </p>
          </li>
          <li>
            <p className="p-list-margin">
              <span className="pg-link-text-ul">
                Ny sisa aminay izay tsy manana zo intsony - fa adidy fotsiny.
              </span>
            </p>
          </li>
        </ol>
      </div>

      <div className="clear-both-ero"></div>

      <div className="sec-text-ero pg-text-ttl-fmt-ctr-ero">
        <p className="p-list-margin-ero">
          Ny tantaran'ny Fahasimban-dalàna dia toromarika momba ny fomba sy
          fanaovana tsara indrindra an'ny Governemanta, amin'ny fanandevozana
          indray
          <br />
          <span className="pg-link-text-ul-ero">"ny sisa aminay!"</span>
        </p>
      </div>

      <div id="Truth">
        <a
          href="pdf/Erosion_of_The_Constitution_Web.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-size-ero"
            src={TruthImage}
            alt="Rakitra momba ny Fahasimban'ny Lalàmpanorenana"
          />
        </a>
      </div>

      <div>
        <img
          className="bottom-media-img-ero"
          src={BottomMediaImage}
          alt="Sary fanampiny momba ny lalàmpanorenana"
        />
      </div>

      <div>
        <img
          className="bottom-media-img-ero"
          src={GoldBarImage}
          alt="Tsipika volamena fanampiny"
        />
      </div>
    </>
  );
}

export default Erosion_of_The_Constitution;
