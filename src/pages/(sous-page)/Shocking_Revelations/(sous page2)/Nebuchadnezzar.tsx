import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function Nebuchadnezzar() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">
          NEBUCHADNEZZAR: THE KING OF BABYLON
        </p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Part 1 -{" "}
              <a href="pdf/nebuchadnezzar.pdf" target="_blank">
                Adobe PDF Format
              </a>
              <br />
              Part 2 -{" "}
              <a href="pdf/nebuchadnezzar_pt2.pdf" target="_blank">
                Adobe PDF Format
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">
          NEBUCHADNEZZAR: BELSHAZZAR, THE RAM AND THE HE GOAT
        </p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Part 1 -{" "}
              <a href="pdf/belshazzar_pt1-rev.pdf" target="_blank">
                Adobe PDF Format
              </a>
              <br />
              Part 2 -{" "}
              <a href="pdf/belshazzar_pt2.pdf" target="_blank">
                Adobe PDF Format
              </a>
              <br />
              Part 3 -{" "}
              <a href="pdf/belshazzar_pt3.pdf" target="_blank">
                Adobe PDF Format
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-info-text-shock">
        <p className="p-info-text-shock">
          <br />
          <Link to="/Shocking_Revelations/2">
            <span className="lnk-info-text-shock">&lt; Back</span>
          </Link>
        </p>
      </div>
      <div id="top-bar-gold-shock"></div>
    </>
  );
}
export default Nebuchadnezzar;
