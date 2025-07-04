import "./style/books_for_the_Year.css";
import "./style/responsive.css";
import ScheduleImage from "./image/12-MONTH_BOOK_READING_SCHEDULE.png";
import PrinterImage from "./image/Printer.png";
import BottomMediaImage from "./image/bottom-media.jpg";
// Import des images des livres
import MessiahGenesis from "./image/2025/132_YBY_The_Messiah_of_Genesis.png";
import JudgmentShallSit from "./image/2025/167_Judgment_Shall_Sit.png";
import WidowsSon from "./image/2025/102_The_Widows_Son_Raisied.png";
import StrongFoundation from "./image/2025/151_Building_A_Strong_Foundation.png";
import Thyatira from "./image/2025/182_Thyatira.png";
import Smyrna from "./image/2025/179_Smyrna.png";
import ConcentrationCamps from "./image/2025/134_Concentration_Camps.png";
import PersecutionV1 from "./image/2025/128_Persecution_V1.png";
import PersecutionV2 from "./image/2025/128_Persecution_V2.png";
import Crucifixion from "./image/2025/155_The_Crucifixion_Of_The_Messiah.png";
import LambYahweh from "./image/2025/168_YBY_The_Lamb_of_Yahweh.png";
import SignsWonders from "./image/2025/171_The_Signs_Wonders.png";

import imagesData from "../../../data/img/about-images.json";

export function Books_for_the_Year() {
  return (
    <>
      <div id="pg-banner-year"  style={{ backgroundImage: `url(${imagesData.backgroundImages.pageBannerAbout_Books_for_the_Year})` }}></div>
      <div id="top-bar-gold-year"></div>
      <div id="MONTH_BOOK_READING_SCHEDULE">
        <img
          className="img-size-12-year"
          src={ScheduleImage}
          alt="Fandaharam-pamakiana boky isam-bolana 12"
        />
      </div>
      <div id="printer_offine-year">
        <a
          href="pdf/BOTM_6028-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-size-po-year"
            src={PrinterImage}
            alt="Printy an-tserasera"
          />
        </a>
      </div>

      {/* Ligne 1 */}
      <div className="book-line-year">
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/yahweh-ben-yahweh-the-messiah-of-genesis.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-size-year"
                  src={MessiahGenesis}
                  alt="Yahweh Ben Yahweh: Ny Mesia ao amin'ny Genesisy"
                />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/yahweh-ben-yahweh-the-messiah-of-genesis.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abib Marsa
              </a>
            </p>
          </div>
        </div>
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/judgment-shall-sit.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-size-year"
                  src={JudgmentShallSit}
                  alt="Hipetraka ny Fitsarana"
                />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/judgment-shall-sit.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Avrily
              </a>
            </p>
          </div>
        </div>
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/the-widow-s-son-raised.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-size-year"
                  src={WidowsSon}
                  alt="Ny Zanak'ampela Maty Natsangana"
                />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/the-widow-s-son-raised.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mey
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="pg-line-break-year"></div>

      {/* Ligne 2 */}
      <div className="book-line-year">
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/building-a-strong-foundation.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-size-year"
                  src={StrongFoundation}
                  alt="Manorina Fototra Mahery"
                />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/building-a-strong-foundation.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jona
              </a>
            </p>
          </div>
        </div>
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/thyatira.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-size-year" src={Thyatira} alt="Thyatira" />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/thyatira.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jolay
              </a>
            </p>
          </div>
        </div>
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/smyrna-370.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-size-year" src={Smyrna} alt="Smyrna" />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/smyrna-370.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aogositra
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="pg-line-break-year"></div>

      {/* Ligne 3 */}
      <div className="book-line-year">
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/concentration-camps.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-size-year"
                  src={ConcentrationCamps}
                  alt="Toeram-pamonoana olona"
                />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/concentration-camps.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Septambra
              </a>
            </p>
          </div>
        </div>
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/the-true-meaning-of-shalom-347.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-size-year"
                  src={PersecutionV1}
                  alt="Ny Fahoriana natrehin'i Yahweh Ben Yahweh: Volume 1"
                />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/the-true-meaning-of-shalom-347.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oktobra
              </a>
            </p>
          </div>
        </div>
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/the-true-meaning-of-shalom-347.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-size-year"
                  src={PersecutionV2}
                  alt="Ny Fahoriana natrehin'i Yahweh Ben Yahweh: Volume 2"
                />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/the-true-meaning-of-shalom-347.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Novambra
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="pg-line-break-year"></div>

      {/* Ligne 4 */}
      <div className="book-line-year">
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/the-crucifixion-of-the-messiah.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-size-year"
                  src={Crucifixion}
                  alt="Ny Fanomboana ny Mesia"
                />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/the-crucifixion-of-the-messiah.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Desambra
              </a>
            </p>
          </div>
        </div>
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/yahweh-ben-yahweh-the-lamb-of-yahweh.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-size-year"
                  src={LambYahweh}
                  alt="Yahweh Ben Yahweh: Ny Zanak'ondrin'i Yahweh"
                />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/yahweh-ben-yahweh-the-lamb-of-yahweh.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Janoary
              </a>
            </p>
          </div>
        </div>
        <div className="book-cnt-year">
          <div className="book-guide-year">
            <div className="book-size-contain-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/the-signs-wonders-and-mighty-hand-of-yahweh.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-size-year"
                  src={SignsWonders}
                  alt="Ny Famantarana, ny Fahagagana, sy ny Tanany Maherin'i Yahweh"
                />
              </a>
            </div>
            <p className="lnk-info-text-year">
              <a
                href="https://shop.yahwehbenyahweh.com/index.php/the-signs-wonders-and-mighty-hand-of-yahweh.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Febroary
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="pg-line-break-end-year"></div>
      <div>
        <img
          className="bottom-media-img-year"
          src={BottomMediaImage}
          alt="Media bottom"
        />
      </div>
    </>
  );
}

export default Books_for_the_Year;
