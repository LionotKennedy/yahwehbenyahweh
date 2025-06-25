import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function YBY_The_Only_Door() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">
          יהוה בּן יהוה THE ONLY DOOR TO THE SHEEPFOLD
        </p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Part 1 -{" "}
              <a href="pdf/The_Only_Door_to_The_Sheepfold.pdf" target="_blank">
                Adobe PDF Format
              </a>
              <br />
              Part 2 -{" "}
              <a
                href="pdf/The_Only_Door_to_The_Sheepfold_part2.pdf"
                target="_blank"
              >
                Adobe PDF Format
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-info-text-shock">
        <p className="p-info-text-shock">
          <br />
          <Link to="/Shocking_Revelations/3">
            <span className="lnk-info-text-shock">&lt; Back</span>
          </Link>
        </p>
      </div>
      <div id="top-bar-gold-shock"></div>
    </>
  );
}
export default YBY_The_Only_Door;
