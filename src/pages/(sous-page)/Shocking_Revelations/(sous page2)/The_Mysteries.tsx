import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function The_Mysteries() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">NY MISTERIN'NY SARIN'OLONA LEHIBE</p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Ampahany 1 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/mysteries_of_the_great_image_pt1.pdf"
                target="_blank"
              >
                Endrika Adobe PDF
              </a>
              <br />
              Ampahany 2 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/mysteries_of_the_great_image_pt2.pdf"
                target="_blank"
              >
                Endrika Adobe PDF
              </a>
              <br />
              Ampahany 3 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/mysteries_of_the_great_image_pt3.pdf"
                target="_blank"
              >
                Endrika Adobe PDF
              </a>
              <br />
              Ampahany 4 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/mysteries_of_the_great_image_pt4.pdf"
                target="_blank"
              >
                Endrika Adobe PDF
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-info-text-shock">
        <p className="p-info-text-shock">
          <br />
          <Link to="/Shocking_Revelations/2">
            <span className="lnk-info-text-shock">&lt; Miverina</span>
          </Link>
        </p>
      </div>
      <div id="top-bar-gold-shock"></div>
    </>
  );
}
export default The_Mysteries;
