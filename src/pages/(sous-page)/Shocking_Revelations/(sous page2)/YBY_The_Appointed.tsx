import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function YBY_The_Appointed() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">NY MPIAINDRY VOATENDRA</p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Fizarana 1 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/appointed_watchman_pI.pdf"
                target="_blank"
              >
                Endrika PDF Adobe
              </a>
              <br />
              Fizarana 2 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/appointed_watchman_pII.pdf"
                target="_blank"
              >
                Endrika PDF Adobe
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
export default YBY_The_Appointed;
