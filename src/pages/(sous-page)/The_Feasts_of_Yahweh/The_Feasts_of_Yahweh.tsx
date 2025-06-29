
import "./style/the_Feasts_of_Yahweh.css";
import "./style/responsive.css";
import TheFeastsofYahweh from "./image/The_Feasts_of_Yahweh.png";
import FeastTheme from "./image/Feast_Theme.png";
import pkgpdfrd from "./image/dl-feast-pkg-pdf-rd.png";
import pkghtmrd from "./image/dl-feast-pkg-htm-rd.png";
import trsbkg1 from "./image/feasts-trs-bkg-1.png";
import pkgpdfgr from "./image/dl-feast-pkg-pdf-gr.png";
import pkghtmgr from "./image/dl-feast-pkg-htm-gr.png";
import trsbkg2 from "./image/feasts-trs-bkg-2.png";
import MEMORIAL_BLOWING_FEAST_PAGE_CLIP from "./image/ATONEMENT_FEAST_PAGE_CLIP.jpg";
import feaststrsbkgAa from "./image/feasts-trs-bkg-A-a.png";
import ATONEMENT_FEAST_PAGE_CLIP from "./image/ATONEMENT_FEAST_PAGE_CLIP.jpg";
import bookLinks from "./image/book-links.jpg";
import feaststrsbkg3 from "./image/feasts-trs-bkg-3.png";


export function The_Feasts_of_Yahweh() {
  return (
    <div className="feasts-of-yahweh-page">
      <div id="pg-banner-feast"></div>
      <div id="top-bar-gold-feast"></div>
      <div id="The_Feasts_of_Yahweh-feast">
        <img
          className="img-size-feast"
          // src="/public/The_Feasts_of_Yahweh/image/The_Feasts_of_Yahweh.png"
          src={TheFeastsofYahweh}
          alt="Ny Fetin'i Yahweh"
        />
      </div>
      <div className="pg-text-fmt-sm-feast">
        <p>Ny fankalazana rehetra dia manomboka amin'ny filentehan'ny masoandro amin'ny daty voalaza.</p>
      </div>
      <div className="wrapper-feast">
        <div id="feasts-trs-ctn-1">
          <p className="p-mrg">
            <span className="ctn-text-fmt-feast ctn-text-fmt-rd-feast">
              Ny Paska sy ny Fetin'ny Mofo Tsy Misamy Lava-bolany
            </span>
            <br />
            <span className="font-feast">1 - 8 Aprily 2025</span>
            <br />
          </p>
          <div>
            <img
              // src="/public/The_Feasts_of_Yahweh/image/Feast_Theme.png"
              src={FeastTheme}
              className="width-feast"
            />
          </div>
          <p className="p-mrg-feast">
            <span className="David-feast">יהוה&nbsp;בּן&nbsp;יהוה</span>
            <span className="p-text-fmt-lg-feast">
              {" "}
              Mahery, Izy no hanafaka antsika
            </span>
            <span className="font-feast"> (Zefania 3:17)</span>
          </p>
          <div className="">
            <a href="pdf/Passover_Feast_Pkg_2025_Web.pdf" target="_blank">
              <img
                className="img-mrg-feast"
                // src="/public/The_Feasts_of_Yahweh/image/dl-feast-pkg-pdf-rd.png"
                src={pkgpdfrd}
                alt="Ampidino ny fonosana fety PDF"
              />
            </a>
            <a href="/public/The_Feasts_of_Yahweh/html/FOP_2025.html" target="_blank">
              <img
                className="img-mrg-feast"
                // src="/public/The_Feasts_of_Yahweh/image/dl-feast-pkg-htm-rd.png"
                src={pkghtmrd}
                alt="Fonosana fety HTML"
              />
            </a>
          </div>
        </div>
        <div id="feasts-trs-bkg-1-feast">
          <img
            className="feast-bk-img-sz-1"
            // src="/public/The_Feasts_of_Yahweh/image/feasts-trs-bkg-1.png"
            src={trsbkg1}
          />
        </div>
      </div>
      <div className="pg-text-fmt-sm-feast">
        <p className="p-txt-size-28-m-feast">
          Tsindrio eto ambany raha fomba fisoratana anarana fotsiny no tadiavinao:
        </p>
        <div className="convention-regs-feast">
          <div className="convention-regs1-feast">
            <div className="convention-reg-feast">
              <a
                href="pdf/Passover_Convention_Registration_Form_2025.pdf"
                target="_blank"
              >
                <span className="lnk-text-fmt-feast">
                  <span className="lnk-text-fmt-cap-feast">F</span>isoratana <span className="lnk-text-fmt-cap-feast">A</span>narana
                </span>
              </a>
            </div>
            <div className="convention-reg1-feast">
              <a
                href="pdf/Passover_Nightly_Performance_Form_2025.pdf"
                target="_blank"
              >
                <span className="lnk-text-fmt-feast">
                  <span className="lnk-text-fmt-cap-feast">F</span>ametrahana <span className="lnk-text-fmt-cap-feast">F</span>ampisehoana
                </span>
              </a>
            </div>
            <div className="convention-reg2-feast">
              <a
                href="pdf/Passover_Single_Parent_with_Children_Form_2025.pdf"
                target="_blank"
              >
                <span className="lnk-text-fmt-feast">
                  <span className="lnk-text-fmt-cap-feast">R</span>ay aman-<span className="lnk-text-fmt-cap-feast">D</span>reny <span className="lnk-text-fmt-cap-feast">T</span>okana <span className="lnk-text-fmt-cap-feast">M</span>iaraka <span className="lnk-text-fmt-cap-feast">A</span>min'ny <span className="lnk-text-fmt-cap-feast">Z</span>anaka
                </span>
              </a>
            </div>
            <div className="clear-feast"></div>
          </div>
        </div>
      </div>
      <div className="wrapper-feast-2">
        <div id="feasts-trs-ctn-2">
          <div className="wrapper-txt-2">
            <p className="p-mrg-feast">
              <span className="ctn-text-fmt-feast ctn-text-fmt-gr-feast p-text-fmt-nr-1-feast">
                Fetin'ny Herinandro
              </span>
              <br />
              <span className="font-feast">28 Mey - 3 Jona 2025</span>
              <br />
            </p>
            <div>
              <img
                // src="/public/The_Feasts_of_Yahweh/image/Feast_Theme.png"
                 src={FeastTheme}
                className="width-feast"
              />
            </div>
            <p className="p-mrg-feast">
              <span className="David-feast">יהוה</span>
              <span className="p-text-fmt-lg-feast">
                {" "}
                Mahatonga ny fahamarinana hitombo
                <span className="font-feast"> (Isaia 61:11)</span>
              </span>
            </p>
            <div className="">
              <a href="pdf/Feast_of_Weeks_2025_Pkg_Web.pdf" target="_blank">
                <img
                  className="img-mrg-feast"
                  // src="/public/The_Feasts_of_Yahweh/image/dl-feast-pkg-pdf-gr.png"
                  src={pkgpdfgr}
                  alt="Ampidino ny fonosana fety PDF"
                />
              </a>
              <a href="/public/The_Feasts_of_Yahweh/html/FOW_2025.html" target="_blank">
                <img
                  className="img-mrg-feast"
                  // src="/public/The_Feasts_of_Yahweh/image/dl-feast-pkg-htm-gr.png"
                  src={pkghtmgr}
                  alt="Fonosana fety HTML"
                />
              </a>
            </div>
          </div>
        </div>
        <div id="feasts-trs-bkg-2-feast">
          <img
            className="feast-bk-img-sz-2"
            // src="/public/The_Feasts_of_Yahweh/image/feasts-trs-bkg-2.png"
            src={trsbkg2}
          />
        </div>
      </div>
      <div className="pg-text-fmt-sm-feast">
        <p className="p-txt-size-28-m-feast">
          Tsindrio eto ambany raha fomba fisoratana anarana fotsiny no tadiavinao:
        </p>
        <div className="convention-regs-feast">
          <div className="convention-regs1-feast">
            <div className="convention-reg-feast">
              <a
                href="pdf/Feast_of_Weeks_Convention_Registration_Form_2025.pdf"
                target="_blank"
              >
                <span className="lnk-text-fmt-feast">
                  <span className="lnk-text-fmt-cap-feast">F</span>isoratana <span className="lnk-text-fmt-cap-feast">A</span>narana
                </span>
              </a>
            </div>
            <div className="convention-reg1-feast">
              <a
                href="pdf/Feast_of_Weeks_Nightly_Performance_Form_2025.pdf"
                target="_blank"
              >
                <span className="lnk-text-fmt-feast">
                  <span className="lnk-text-fmt-cap-feast">F</span>ametrahana <span className="lnk-text-fmt-cap-feast">F</span>ampisehoana
                </span>
              </a>
            </div>
            <div className="convention-reg2-feast">
              <a
                href="pdf/Feast_of_Weeks_Single_Parent_With_Children_Registration_Form_2025.pdf"
                target="_blank"
              >
                <span className="lnk-text-fmt-feast">
                  <span className="lnk-text-fmt-cap-feast">R</span>ay aman-<span className="lnk-text-fmt-cap-feast">D</span>reny <span className="lnk-text-fmt-cap-feast">T</span>okana <span className="lnk-text-fmt-cap-feast">M</span>iaraka <span className="lnk-text-fmt-cap-feast">A</span>min'ny <span className="lnk-text-fmt-cap-feast">Z</span>anaka
                </span>
              </a>
            </div>
            <div className="clear-feast"></div>
          </div>
        </div>
      </div>
      <div className="clear-feast"></div>
      <div className="wrapper-cnt-feast">
        <div className="wrappers-cnt-feast">
          <div className="wrapper-4-feast">
            <div id="feasts-trs-bkg-4-a">
              <div className="p-txt-align-feast">
                <p className="p-mrg-feast-2 p-mrg-0-feast">
                  <span className="ctn-text-fmt-feast-2 ctn-text-fmt-br-lt-feast-2">
                    Ny Fahatsiarovana ny Fampangonan'ny Trompetra
                  </span>
                  <br></br>
                  <span>15 Septambra 2025</span>
                </p>
                <p className="p-txt-size-28-feast">
                  ...Amin'ny volana fahafito, amin'ny andro voalohany amin'ny volana,
                  dia hisy Sabata ho anareo, fahatsiarovana amin'ny fanangonana trompetra,
                  fivoriana masina.
                  <span className="">(Levitikosy 23:24)</span>
                </p>
                <br></br>
              </div>
              <div>
                <div className="vidPos1" id="video">
                  <video
                    className="video-width"
                    controls
                    // poster="/public/The_Feasts_of_Yahweh/image/MEMORIAL_BLOWING_FEAST_PAGE_CLIP.jpg"
                    poster={MEMORIAL_BLOWING_FEAST_PAGE_CLIP}
                  >
                    <source
                      src="https://ms.yahwehbenyahweh.com/video/720/MEMORIAL_BLOWING_FEAST_PAGE_CLIP.mp4"
                      type="video/mp4"
                    />
                    Mampiasà navigateur manohana, ohatra (Microsoft Explorer 8 na ambony kokoa,
                    Google Chrome, Apple Safari.
                  </video>
                </div>
              </div>
            </div>
            <div className="feasts-trs-bkg-4-1">
              <img
                className="feast-bk-img-sz-4"
                // src="/public/The_Feasts_of_Yahweh/image/feasts-trs-bkg-A-a.png"
                src={feaststrsbkgAa}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper-5-feast">
            <div id="feasts-trs-bkg-5-a">
              <div className="p-txt-align-feast">
                <p className="p-mrg-feast-2 p-mrg-0-feast">
                  <span className="ctn-text-fmt-feast-2 ctn-text-fmt-br-feast-2">
                    Ny Andron'ny Fanavotana
                  </span>
                  <br />
                  <span className="">24 Septambra 2025</span>
                  <br />
                </p>
                <p className="p-txt-size-28-feast p-mrg-20-feast">
                  Ary amin'ny andro fahafolo amin'ity volana fahafito ity dia hisy
                  andro fanavotana: ho fivoriana masina ho anareo izany; ary hiondrehana
                  ny fanahinareo...
                  <br />
                  (Levitikosy 23:27)
                </p>
              </div>
              <div>
                <div className="vidPos2" id="video">
                  <video
                    controls
                    // poster="/public/The_Feasts_of_Yahweh/image/ATONEMENT_FEAST_PAGE_CLIP.jpg"
                    poster={ATONEMENT_FEAST_PAGE_CLIP}
                    className="video-width"
                  >
                    <source
                      src="https://ms.yahwehbenyahweh.com/video/720/ATONEMENT_FEAST_PAGE_CLIP.mp4"
                      type="video/mp4"
                    />
                    Mampiasà navigateur manohana, ohatra (Microsoft Explorer 8 na ambony kokoa,
                    Google Chrome, Apple Safari.
                  </video>
                </div>
              </div>
            </div>
            <div className="feasts-trs-bkg-4-1">
              <img
                alt=""
                className="feast-bk-img-sz-4"
                // src="/public/The_Feasts_of_Yahweh/image/feasts-trs-bkg-A-a.png"
                src={feaststrsbkgAa}
              />
            </div>
          </div>
        </div>
      </div>
      <figure id="book-links-feast">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1186 419"
          preserveAspectRatio="xMinYMin meet"
        >
          <image
            className="book-feast-img1"
            // href="/public/The_Feasts_of_Yahweh/image/book-links.jpg"
            href={bookLinks}
            target="_blank"
          />

          <a
            href="https://shop.yahwehbenyahweh.com/index.php/the-memorial-of-blowing-of-trumpets-459.html"
            target="_blank"
          >
            <rect
              x="14.5"
              y="75.5"
              fill="#fff"
              opacity="0"
              width="210"
              height="324"
            ></rect>
          </a>
          <a
            href="https://shop.yahwehbenyahweh.com/index.php/the-memorial-of-blowing-of-trumpets-dvd.html"
            target="_blank"
          >
            <rect
              x="229.5"
              y="67.5"
              fill="#fff"
              opacity="0"
              width="163"
              height="229"
            ></rect>
          </a>
          <a
            href="https://shop.yahwehbenyahweh.com/index.php/the-universal-ruling-family-of-yahweh-transcripts.html"
            target="_blank"
          >
            <rect
              x="404.5"
              y="75.5"
              fill="#fff"
              opacity="0"
              width="208"
              height="330"
            ></rect>
          </a>
          <a
            href="https://shop.yahwehbenyahweh.com/index.php/the-universal-ruling-family-of-yahweh-dvd.html"
            target="_blank"
          >
            <rect
              x="619.5"
              y="67.5"
              fill="#fff"
              opacity="0"
              width="158"
              height="235"
            ></rect>
          </a>
          <a
            href="https://shop.yahwehbenyahweh.com/index.php/the-day-of-atonement transcript 1.html"
            target="_blank"
          >
            <rect
              x="787.5"
              y="75.5"
              fill="#fff"
              opacity="0"
              width="213"
              height="324"
            ></rect>
          </a>
          <a
            href="https://shop.yahwehbenyahweh.com/index.php/the-day-of-atonement-359.html"
            target="_blank"
          >
            <rect
              x="1006.5"
              y="67.5"
              fill="#fff"
              opacity="0"
              width="168"
              height="240"
            ></rect>
          </a>
        </svg>
      </figure>
      <div className="wrapper-3-feast">
        <div id="feasts-trs-ctn-3-feast">
          <div className="wrapper-txt-1-feast">
            <p className="p-mrg-feast-5">
              <span className="ctn-text-fmt-feast-5 ctn-text-fmt-bl p-text-fmt-nr-1">
                Fetin'ny Tabernakely sy ny Fivoriana Masina
              </span>
              <br />
              <span className="font-date-5">
                29 Septambra - 6 Oktobra 2025
              </span>
            </p>
            <div>
              <img
                // src="/public/The_Feasts_of_Yahweh/image/Feast_Theme.png"
                src={FeastTheme}
                className="width-feast"
              />
            </div>
            <p className="p-mrg-feast-5">
              <span className="p-text-fmt-lg-feast-5">
                Mifalia ry Firenena miaraka amin'ny Olon'i<span className="David"> יהוה</span>
                <br />
                <span className="font-feast">(Deoteronomia 32:43)</span>
              </span>
            </p>
            <span className="p-text-fmt-lg-feast-5">
              FONOSANA FISORATANA ANARANA
              AVAILABLE JULY 2025
            </span>
          </div>
        </div>
        <div id="feasts-trs-bkg-1">
          <img
            // src="/public/The_Feasts_of_Yahweh/image/feasts-trs-bkg-3.png"
            src={feaststrsbkg3}
            alt=""
            className="feast-bk-img-sz-3"
          />
        </div>
      </div>
      <div id="top-bar-gold-feast"></div>
    </div>
  );
}
export default The_Feasts_of_Yahweh;