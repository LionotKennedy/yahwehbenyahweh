import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function An_Uprising_In_The_Camp() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">FIKOMIANA AO ANATIN'NY TOBY</p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Ampahany 1 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/an_uprising_camp_pt1.pdf"
                target="_blank"
              >
                Endrika Adobe PDF
              </a>
              <br />
              Ampahany 2 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/an_uprising_camp_pt2.pdf"
                target="_blank"
              >
                Endrika Adobe PDF
              </a>
              <br />
              Ampahany 3 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/an_uprising_camp_pt3.pdf"
                target="_blank"
              >
                Endrika Adobe PDF
              </a>
              <br />
              Ampahany 4 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/an_uprising_camp_pt4.pdf"
                target="_blank"
              >
                Endrika Adobe PDF
              </a>
              <br />
              Ampahany 5 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/an_uprising_camp_pt5.pdf"
                target="_blank"
              >
                Endrika Adobe PDF
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="pg-info-text-shock">
        <p className="p-info-text-shock">
          <br />
          <Link to="/Shocking_Revelations">
            <span className="lnk-info-text-shock">&lt; Miverina</span>
          </Link>
        </p>
      </div>
      <div id="top-bar-gold-shock"></div>
    </>
  );
}
export default An_Uprising_In_The_Camp;
