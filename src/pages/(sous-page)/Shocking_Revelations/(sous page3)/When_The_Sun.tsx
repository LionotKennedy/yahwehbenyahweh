import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function When_The_Sun() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">REHEFA NIJANONA NY MASOANDRO</p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Ampahany 1 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/When_The_Sun_Stood_Still_pt1.pdf"
                target="_blank"
              >
                Endrika Adobe PDF
              </a>
              &nbsp;<span className="shock-title-shock">***VAOVAO!***</span>
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
export default When_The_Sun;
