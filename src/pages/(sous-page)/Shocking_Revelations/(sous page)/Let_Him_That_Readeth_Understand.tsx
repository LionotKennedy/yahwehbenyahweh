import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function Let_Him_That_Readeth_Understand() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">IZAY MAHAY MAMAKY AOKA HAHAY</p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Ampahany 1 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/Let_Him_That_Readth_Understand.pdf"
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
          <Link to="/Shocking_Revelations">
            <span className="lnk-info-text-shock">&lt; Miverina</span>
          </Link>
        </p>
      </div>
      <div id="top-bar-gold-shock"></div>
    </>
  );
}
export default Let_Him_That_Readeth_Understand;
