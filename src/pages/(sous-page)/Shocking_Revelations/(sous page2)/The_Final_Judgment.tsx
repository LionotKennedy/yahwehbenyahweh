import "../style/shocking_Revelations.css";
import "../style/responsive.css";
import { Link } from "react-router-dom";

export function The_Final_Judgment() {
  return (
    <>
      <div id="pg-banner-shock"></div>
      <div id="top-bar-gold-shock"></div>
      <div className="pg-title-text-shock">
        <p className="p-title-text-shock">NY FITSARANA FARANY</p>
      </div>
      <div className="book-line-shock">
        <div>
          <div>
            <div className="book-guide-shock">
              Fizarana 1 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/final_judgment_p1.pdf"
                target="_blank"
              >
                Endrika PDF Adobe
              </a>
              <br />
              Fizarana 2 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/final_judgment_p2.pdf"
                target="_blank"
              >
                Endrika PDF Adobe
              </a>
              <br />
              Fizarana 3 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/final_judgment_p3.pdf"
                target="_blank"
              >
                Endrika PDF Adobe
              </a>
              <br />
              Fizarana 4 -{" "}
              <a
                href="/src/pages/(sous-page)/Shocking_Revelations/pdf/The_Final_Judge_P4.pdf"
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
export default The_Final_Judgment;
