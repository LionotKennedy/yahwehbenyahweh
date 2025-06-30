import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function Nebuchadnezzar() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">NEVOKADNEZARA: NY MPAJAKA BABYLONA</p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Fizarana 1 -{" "}
              <a href="pdf/nebuchadnezzar.pdf" target="_blank">
                Endrika PDF Adobe
              </a>
              <br />
              Fizarana 2 -{" "}
              <a href="pdf/nebuchadnezzar_pt2.pdf" target="_blank">
                Endrika PDF Adobe
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">
          NEVOKADNEZARA: BELSAZARA, NY ONDRY LAHY SY NY OSY LAHY
        </p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Fizarana 1 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/belshazzar_pt1-rev.pdf"
                target="_blank"
              >
                Endrika PDF Adobe
              </a>
              <br />
              Fizarana 2 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/belshazzar_pt2.pdf"
                target="_blank"
              >
                Endrika PDF Adobe
              </a>
              <br />
              Fizarana 3 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/belshazzar_pt3.pdf"
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
export default Nebuchadnezzar;
