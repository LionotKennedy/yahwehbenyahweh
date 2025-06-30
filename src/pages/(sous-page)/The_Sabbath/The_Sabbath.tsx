
import "./style/the_Sabbath.css";
import "./style/responsive.css";

// Importation des images
// import SabbathRemember from "../imSabbath_Remember.png"; 
import SabbathRemember from "./image/Sabbath_Remember.png";
import FrenchVer from "./image/French_ver.png";
import SpanishVer from "./image/Spanish_ver.png";
import EnglishVer from "./image/English_ver.png";
import SabbathBooks from "./image/Sabbath_Remember_Books.png";
import BottomMedia from "./image/bottom-media.jpg";

export function The_Sabbath() {
  return (
    <>
      <div id="pg-banner-sab"></div>
      <div id="top-bar-gold-sab"></div>
      
      <div id="Sabbath_Remember">
        <img
          className="img-title-sab"
          src={SabbathRemember}
          alt="Tsarovy ny ANDRO SABATA mba hohajaina"
        />
      </div>
      
      <div className="sec-text-sab Sabbath-text">
        <p>
          <span className="David-sab">יהוה</span>, Andriamanitry ny Baiboly, dia
          nahary ny lanitra sy ny tany tamin'ny enina andro, ary rehefa vita
          ny lanitra sy ny tany sy ny zavatra rehetra ao aminy,{" "}
          <span className="David-sab">יהוה</span> dia nandidy an'i Adama, ny
          taranany, ary ny fianakaviana rehetra eto an-tany hanaraka, hankato,
          ary hifanaraka amin'izany, ho LALÀNA, ny fahatsiarovana ny{" "}
          <strong>ANDRO FAHAROA</strong> ho andro FIORENANA hohajaina sy
          hanomezam-boninahitra Azy noho NY "ASA" REHETRA NATRANY - NY
          ZAVATRA NOHARARAINY - izay Izy,{" "}
          <span className="David-sab">יהוה</span>, no nahary sy nanao.
        </p>
      </div>
      
      <div className="sec-bar-sab pg-top-pd-mod"></div>
      
      <div className="sec-text-sab Sabbath-text">
        <p>
          Mba hitandremana ny lalàn'ny <strong>SABATA</strong>, tsy maintsy
          tandremintsika izany araka ny ANDRO nandidian'i{" "}
          <span className="David-sab">יהוה</span>, Andriamanitry ny Baiboly. Ny
          ANDRONY dia aseho amin'ny alalan'ny MASOANDRO - hatramin'ny
          filentehan'ny masoandro ka hatramin'ny filentehany (Genesisy 1:5).
        </p>
      </div>
      
      <div className="sec-bar-sab pg-top-pd-mod"></div>
      
      <div className="sec-text-sab Sabbath-text">
        <p>
          Ao amin'ny Genesisy 2:2-3, <span className="David-sab">יהוה</span> dia
          nitahy ny <strong>ANDRO FAHAROA</strong>. Ny <strong>"FAHAROA" ANDRO</strong> dia
          ny <strong>SABATA</strong> an'i{" "}
          <span className="David-sab">יהוה</span>. Ary amin'izany andro izany,
          ny Sabata, TSY MISY olona tokony hanao "asa" (Eksodosy 20:8-10). Andro
          "MASINA" izany, natokana ho an'ny fijerena sy fanomezam-boninahitra
          "MANOKANA" an'i{" "}
          <span className="David-sab">יהוה</span>.
        </p>
      </div>
      
      <div className="sec-bar-sab pg-top-pd-mod"></div>
      
      <div className="sec-text-sab Sabbath-text">
        <p>
          Ny fahatsiarovana ny SABATA dia "mari-pamantarana" mivantana ho an'i{" "}
          <span className="David-sab">יהוה</span> fa mahatsiaro Azy isika noho
          ny hatsaran'ny ASA REHETRA nataony. Ny fitandremana ny{" "}
          <strong>SABATA</strong> koa dia "fisehoana" mivantana ho an'i{" "}
          <span className="David-sab">יהוה</span> fa mijery Azy isika noho ny
          fahagagana sy ny fahamendrehan'ny zavatra rehetra noforoniny sy
          namboariny.
        </p>
      </div>
      
      <div className="sec-bar-sab pg-top-pd-mod"></div>
      
      <div className="sec-text-sab Sabbath-text">
        <p>
          Ny <strong>SABATA</strong> dia "FAMANTARANA" eo amin'i{" "}
          <span className="David-sab">יהוה</span> sy ianao irery. Ary ny
          fitandremana azy dia fijoroana ho vavolombelona ho an'i{" "}
          <span className="David-sab">יהוה</span> fa manome voninahitra Azy
          isika noho ny hatsaran'ny ZAVATRA REHETRA nataony. Ny fahatsiarovantsika
          io andro io dia porofo ho an'i{" "}
          <span className="David-sab">יהוה</span> fa manaja Azy isika noho ny
          fifandanjana mahagaga nomeny ny rehetra.
        </p>
      </div>
      
      <div className="Sabbath-link-text">
        <p>
          TSINDRIO ETO AMBANY ROHY VAOVAO MOMBA
          <br />
          <span className="Sabbath-link-text-ul">NY SABATA</span>
        </p>
      </div>
      
      <div id="Sabbath-guides">
        <div className="Sabbath-guide">
          <a
            href="pdf/Shabbath_Home_Study_Guide_French_Web.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="75%"
              src={FrenchVer}
              alt="Torolalana famakiana ny Sabata amin'ny teny frantsay PDF"
            />
          </a>
        </div>
        <div className="Sabbath-guide">
          <a
            href="pdf/Shabbath_Home_Study_Guide_Spanish_Web.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="75%"
              src={SpanishVer}
              alt="Torolalana famakiana ny Sabata amin'ny teny espaniola PDF"
            />
          </a>
        </div>
        <div className="Sabbath-guide">
          <a
            href="pdf/Shabbath_Home_Study_Guide_English_Web.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="75%"
              src={EnglishVer}
              alt="Torolalana famakiana ny Sabata amin'ny teny anglisy PDF"
            />
          </a>
        </div>
      </div>
      
      <div className="clear-sab"></div>
      
      <div id="Sabbath_Books">
        <img
          className="books_img_size"
          src={SabbathBooks}
          alt="Torolalana famakiana ny Sabata"
        />
      </div>
      
      <div>
        <img
          className="bottom-media-img-sab"
          src={BottomMedia}
          alt="Media footer pour la page Sabata"
        />
      </div>
    </>
  );
}

export default The_Sabbath;