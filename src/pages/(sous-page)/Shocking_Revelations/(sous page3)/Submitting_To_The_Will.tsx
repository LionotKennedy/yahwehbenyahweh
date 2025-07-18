import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function Submitting_To_The_Will() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">
          FANOLORAN-TENA AMIN'NY SITRAK' I יהוה בּן יהוה
        </p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Ampahany 16 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/submitting_to_the_will_pt16.pdf"
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
          <Link to="/Shocking_Revelations/3">
            <span className="lnk-info-text-shock">&lt; Miverina</span>
          </Link>
        </p>
      </div>
      <div id="top-bar-gold-shock"></div>
    </>
  );
}
export default Submitting_To_The_Will;
