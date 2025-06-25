import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function A_Message_For() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">
          THE BLOOD OF THE LAMB: A NARRATIVE OF JUDGMENT
        </p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Part 1 -{" "}
              <a href="pdf/message_for_law_keepers_pt8.pdf" target="_blank">
                Adobe PDF Format
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">
          A MESSAGE FOR LAW KEEPERS, PREPARING FOR RULESHIP
        </p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Part 4 -{" "}
              <a href="pdf/message_for_law_keepers_pt4.pdf" target="_blank">
                Adobe PDF Format
              </a>
              <br />
              Part 5 -{" "}
              <a href="pdf/message_for_law_keepers_pt5.pdf" target="_blank">
                Adobe PDF Format
              </a>
              <br />
              Part 6 -{" "}
              <a href="pdf/message_for_law_keepers_pt6.pdf" target="_blank">
                Adobe PDF Format
              </a>
              <br />
              Part 7 -{" "}
              <a href="pdf/message_for_law_keepers_pt7.pdf" target="_blank">
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
export default A_Message_For;
