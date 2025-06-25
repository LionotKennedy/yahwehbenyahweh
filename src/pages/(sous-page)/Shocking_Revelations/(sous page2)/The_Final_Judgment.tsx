import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function The_Final_Judgment() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">THE FINAL JUDGMENT</p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Part 1 -{" "}
              <a href="pdf/final_judgment_p1.pdf" target="_blank">
                Adobe PDF Format
              </a>
              <br />
              Part 2 -{" "}
              <a href="pdf/final_judgment_p2.pdf" target="_blank">
                Adobe PDF Format
              </a>
              <br />
              Part 3 -{" "}
              <a href="pdf/final_judgment_p3.pdf" target="_blank">
                Adobe PDF Format
              </a>
              <br />
              Part 4 -{" "}
              <a href="pdf/The_Final_Judge_P4.pdf" target="_blank">
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
export default The_Final_Judgment;
