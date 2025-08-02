
import "./style/the_Feasts_of_Yahweh.css";
import "./style/responsive.css";
// import TheFeastsofYahweh from "./image/The_Feasts_of_Yahweh.png";
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
// import FOP_2025 from "./html/FOP_2025.html";
import { useState, useEffect } from 'react';
import { fetchData_2 } from "../../../admin/api/api";
import { MenuAPI, getImageUrl } from "../../../admin/api/menuImage";

interface SectionMenuData {
  id: number;
  section: string | null;
  src: string;
  // section_name: string | null;
  // path: string;
  created_at: string;
  updated_at: string;
}



export function The_Feasts_of_Yahweh() {
  const [titleFeasts, setTitleFeasts] = useState("")
  const [titleFeasts2, setTitleFeasts2] = useState("")
  const [fieldFeasts2, setFieldFeasts2] = useState("")
  const [titleFeasts3, setTitleFeasts3] = useState("")
  const [fieldFeasts3, setFieldFeasts3] = useState("")
  const [titleFeasts4, setTitleFeasts4] = useState("")
  const [fieldFeasts4, setFieldFeasts4] = useState("")
  const [descriptionFeasts4, setDescriptionFeasts4] = useState("")
  const [videoFeasts4, setVideoFeasts4] = useState("")
  const [titleFeasts5, setTitleFeasts5] = useState("")
  const [fieldFeasts5, setFieldFeasts5] = useState("")
  const [descriptionFeasts5, setDescriptionFeasts5] = useState("")
  const [videoFeasts5, setVideoFeasts5] = useState("")
  const [titleFeasts6, setTitleFeasts6] = useState("")
  const [fieldFeasts6a, setFieldFeasts6a] = useState("")
  const [fieldFeasts6b, setFieldFeasts6b] = useState("")
  const [feastsImage, setFeastsImage] = useState("");
  const [, setSectionMenuBg] = useState<SectionMenuData[]>([]);

  const fetchSectionBackground = async () => {
    try {
      // setLoading(true);
      // setError(null);
      const { success, data } = await MenuAPI.fetchAll();

      if (success && data) {
        setSectionMenuBg(data);
        const sortedSectionbg = data.sort((a: SectionMenuData, b: SectionMenuData) => a.id - b.id);

        // Mise à jour des images pour chaque section
        const sections = [
          { id: 4, name: "The_Feasts_of_Yahweh", setter: setFeastsImage }
        ];

        sections.forEach(section => {
          interface SectionBg extends SectionMenuData { }

          const banner: SectionBg | undefined = sortedSectionbg.find(
            (b: SectionBg) =>
              b.id === section.id || b.section === section.name
              // b.id === section.id || b.section_name === section.name
          );
          if (banner) {
            // section.setter(getImageUrl(banner.path));
            section.setter(getImageUrl(banner.src));
          }
        });
      } else {
        // if (message) toast.error(message);
      }
    } catch (err) {
      console.error("Erreur lors de la récupération des sections:", err);
      // setError(err instanceof Error ? err.message : "Erreur inconnue");
      // toast.error("Erreur lors du chargement des sections");
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchSectionBackground();
  }, []);

  useEffect(() => {
    fetchData_2("feasts").then((d) => {
      setTitleFeasts(d?.titlefeasts || "")
      setTitleFeasts2(d?.titlefeasts2 || "")
      setFieldFeasts2(d?.fieldfeasts2 || "")
      setTitleFeasts3(d?.titlefeasts3 || "")
      setFieldFeasts3(d?.fieldfeasts3 || "")
      setTitleFeasts4(d?.titlefeasts4 || "")
      setFieldFeasts4(d?.fieldfeasts4 || "")
      setDescriptionFeasts4(d?.descriptionfeasts4 || "")
      setVideoFeasts4(d?.videofeasts4 || "")
      setTitleFeasts5(d?.titlefeasts5 || "")
      setFieldFeasts5(d?.fieldfeasts5 || "")
      setDescriptionFeasts5(d?.descriptionfeasts5 || "")
      setVideoFeasts5(d?.videofeasts5 || "")
      setTitleFeasts6(d?.titlefeasts6 || "")
      setFieldFeasts6a(d?.fieldfeasts6a || "")
      setFieldFeasts6b(d?.fieldfeasts6b || "")
    })
  }, []);
  return (
    <div className="feasts-of-yahweh-page">
      <div id="pg-banner-feast" style={{ backgroundImage: `url(${feastsImage})` }}></div>
      <div id="top-bar-gold-feast"></div>
      <div id="The_Feasts_of_Yahweh-feast" className="title-section-fol">
        <h1 className="te-title">{titleFeasts}</h1>
        {/* <img
          className="img-size-feast"
          // src="/public/The_Feasts_of_Yahweh/image/The_Feasts_of_Yahweh.png"
          src={TheFeastsofYahweh}
          alt="Ny Fetin'i Yahweh"
        /> */}
      </div>
      <div className="pg-text-fmt-sm-feast">
        <p>Ny fankalazana rehetra dia manomboka amin'ny filentehan'ny masoandro amin'ny daty voalaza.</p>
      </div>
      <div className="wrapper-feast">
        <div id="feasts-trs-ctn-1">
          <p className="p-mrg">
            <span className="ctn-text-fmt-feast ctn-text-fmt-rd-feast">
              {/* Ny Paska sy ny Fetin'ny Mofo Tsy Misamy Lava-bolany */}
              {titleFeasts2}
            </span>
            <br />
            {/* <span className="font-feast">1 - 8 Aprily 2025</span> */}
            <span className="font-feast">{fieldFeasts2}</span>
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
                {/* Fetin'ny Herinandro */}
                {titleFeasts3}
              </span>
              <br />
              {/* <span className="font-feast">28 Mey - 3 Jona 2025</span> */}
              <span className="font-feast">{fieldFeasts3}</span>
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
                    {/* Ny Fahatsiarovana ny Fampangonan'ny Trompetra */}
                    {titleFeasts4}
                  </span>
                  <br></br>
                  {/* <span>15 Septambra 2025</span> */}
                  <span>{fieldFeasts4}</span>
                </p>
                <p className="p-txt-size-28-feast">
                  {descriptionFeasts4}
                  {/* ...Amin'ny volana fahafito, amin'ny andro voalohany amin'ny volana,
                  dia hisy Sabata ho anareo, fahatsiarovana amin'ny fanangonana trompetra,
                  fivoriana masina.
                  <span className="">(Levitikosy 23:24)</span> */}
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
                  // poster={videoFeasts4}
                  >
                    <source
                      // src="https://ms.yahwehbenyahweh.com/video/720/MEMORIAL_BLOWING_FEAST_PAGE_CLIP.mp4"
                      src={videoFeasts4}
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
                    {/* Ny Andron'ny Fanavotana */}
                    {titleFeasts5}
                  </span>
                  <br />
                  {/* <span className="">24 Septambra 2025</span> */}
                  <span className="">{fieldFeasts5}</span>
                  <br />
                </p>
                <p className="p-txt-size-28-feast p-mrg-20-feast">
                  {descriptionFeasts5}
                  {/* Ary amin'ny andro fahafolo amin'ity volana fahafito ity dia hisy
                  andro fanavotana: ho fivoriana masina ho anareo izany; ary hiondrehana
                  ny fanahinareo...
                  <br />
                  (Levitikosy 23:27) */}
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
                      // src="https://ms.yahwehbenyahweh.com/video/720/ATONEMENT_FEAST_PAGE_CLIP.mp4"
                      src={videoFeasts5}
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
                {/* Fetin'ny Tabernakely sy ny Fivoriana Masina */}
                {titleFeasts6}
              </span>
              <br />
              <span className="font-date-5">
                {/* 29 Septambra - 6 Oktobra 2025 */}
                {fieldFeasts6a}
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
              {/* FONOSANA FISORATANA ANARANA
              AVAILABLE JULY 2025 */}
              {fieldFeasts6b}
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