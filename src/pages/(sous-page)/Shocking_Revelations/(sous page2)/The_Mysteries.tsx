import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function The_Mysteries() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">THE MYSTERIES OF THE GREAT IMAGE</p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide">
              Part 1 -{" "}
              <a
                href="pdf/mysteries_of_the_great_image_pt1.pdf"
                target="_blank"
              >
                Adobe PDF Format
              </a>
              <br />
              Part 2 -{" "}
              <a
                href="pdf/mysteries_of_the_great_image_pt2.pdf"
                target="_blank"
              >
                Adobe PDF Format
              </a>
              <br />
              Part 3 -{" "}
              <a
                href="pdf/mysteries_of_the_great_image_pt3.pdf"
                target="_blank"
              >
                Adobe PDF Format
              </a>
              <br />
              Part 4 -{" "}
              <a
                href="pdf/mysteries_of_the_great_image_pt4.pdf"
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
          <Link to="/Shocking_Revelations/2">
            <span className="lnk-info-text-shock">&lt; Back</span>
          </Link>
        </p>
      </div>
      <div id="top-bar-gold-shock"></div>
    </>
  );
}
export default The_Mysteries;
