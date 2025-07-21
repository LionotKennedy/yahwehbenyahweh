
import "./style/shocking_Revelations.css";
import "./style/responsive.css";
import { Link } from "react-router-dom";

// Importation de toutes les images
import GreciaImg from "./image/The_Stirring_Up_of_Grecia.jpg";
import UprisingImg from "./image/An_Uprising_In_The_Camp.jpg";
import WhiteCloudImg from "./image/Behold_A_White_Cloud.jpg";
import ReadethImg from "./image/Let_Him_That_Readeth_Understand.jpg";
import FalseProphetsImg from "./image/Many_False_Prophets_Shall_Rise.jpg";
import AbominationImg from "./image/The_Abomination_of_Desolation.jpg";
import SevenSealsImg from "./image/The_Seven_Seals_of_The_Apocalypse.jpg";
import BeastSeaImg from "./image/The_Rising_of_The Beast_Out_of_The_Sea.jpg";
import BeastEarthImg from "./image/Another_Beast_Coming_Up_Out_of_The_Earth.jpg";
import LeopardImg from "./image/The_Beast_Like_Unto_A_Leopard.jpg";
import SevenPlaguesImg from "./image/The_Seven_Last_Plagues.jpg";
import SevenTrumpetsImg from "./image/The_Sign_of_The_Times_The_Seven_Trumpets.jpg";
import { MenuAPI, getImageUrl } from "../../../admin/api/menuImage";
import { useEffect, useState } from "react";

interface SectionMenuData {
  id: number;
  section_name: string | null;
  path: string;
  created_at: string;
  updated_at: string;
}

export function Shocking_Revelations() {
  const [revelationsImage, setRevelationsImage] = useState("");
  const [sectionMenubg, setSectionMenuBg] = useState<SectionMenuData[]>([]);
  const fetchSectionBackground = async () => {
    try {
      // setLoading(true);
      // setError(null);
      const { success, data, message } = await MenuAPI.fetchAll();

      if (success && data) {
        setSectionMenuBg(data);
        const sortedSectionbg = data.sort((a: SectionMenuData, b: SectionMenuData) => a.id - b.id);

        // Mise à jour des images pour chaque section
        const sections = [
          { id: 7, name: "Shocking_Revelations", setter: setRevelationsImage },
        ];

        sections.forEach(section => {
          const banner = sortedSectionbg.find(b =>
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
  return (
    <>
      <div id="pg-banner-shock" style={{ backgroundImage: `url(${revelationsImage})` }}></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">TATITRA SEMINARA</p>
      </div>
      <div className="book-line-shock">
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/The_Stirring_Up_of_Grecia">
                <img
                  className="img-size-shock"
                  src={GreciaImg}
                  alt="The Stirring Up of Grecia"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/An_Uprising_In_The_Camp">
                <img
                  className="img-size-shock"
                  src={UprisingImg}
                  alt="An Uprising In The Camp"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/Behold_A_White_Cloud">
                <img
                  className="img-size-shock"
                  src={WhiteCloudImg}
                  alt="Behold A White Cloud"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-line-break-shock"></div>
      <div className="book-line-shock">
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/Let_Him_That_Readeth_Understand">
                <img
                  className="img-size-shock"
                  src={ReadethImg}
                  alt="Let Him That 'Readeth' Understand"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/Many_False_Prophets_Shall_Rise">
                <img
                  className="img-size-shock"
                  src={FalseProphetsImg}
                  alt="And Many 'False' Prophets Shall Rise, And Shall..."
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/The_Abomination_of_Desolation">
                <img
                  className="img-size-shock"
                  src={AbominationImg}
                  alt="The Abomination of Desolation"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-line-break-shock"></div>
      <div className="book-line-shock">
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/The_Seven_Seals_of_The_Apocalypse">
                <img
                  className="img-size-shock"
                  src={SevenSealsImg}
                  alt="The Seven Seals of The Apocalypse"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/The_Rising_of_The">
                <img
                  className="img-size-shock"
                  src={BeastSeaImg}
                  alt="The Rising of The Beast Out of The Sea"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/Another_Beast_Coming">
                <img
                  className="img-size-shock"
                  src={BeastEarthImg}
                  alt="Another Beast Coming Up Out of The Earth"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-line-break-shock"></div>
      <div className="book-line-shock">
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/The_Beast_Like">
                <img
                  className="img-size-shock"
                  src={LeopardImg}
                  alt="The Beast Like Unto A Leopard"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/The_Seven_Last_Plagues">
                <img
                  className="img-size-shock"
                  src={SevenPlaguesImg}
                  alt="The Seven Last Plagues"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="book-cnt-shock">
          <div className="book-guide-shock">
            <div>
              <Link to="/Shocking_Revelations/The_Sign_of_The_Times">
                <img
                  className="img-size-shock"
                  src={SevenTrumpetsImg}
                  alt="The Sign of The Times: The Seven Trumpets"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-info-text-shock">
        <p className="p-info-text-shock">
          <br />
          <span className="lnk-info-text-no-ln-shock"> 1 </span>
          <Link to="/Shocking_Revelations/2">
            <span className="lnk-info-text-shock"> 2 </span>
          </Link>
          <Link to="/Shocking_Revelations/3">
            <span className="lnk-info-text-shock"> 3 </span>
          </Link>
        </p>
      </div>
      <div id="top-bar-gold-shock"></div>
    </>
  );
}

export default Shocking_Revelations;