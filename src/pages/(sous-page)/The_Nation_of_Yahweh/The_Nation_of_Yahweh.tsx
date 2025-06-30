
import "./style/the_Nation_of_Yahweh.css";
import "./style/responsive.css";
import TheNationofYahweh from "./image/The_Nation_of_Yahweh.png";
import OurMottoLn from "./image/Our_Motto_Ln.png";
import FrenchVer from "./image/French_ver.png";
import SpanishVer from "./image/Spanish_ver.png";
import EnglishVer from "./image/English_ver.png";
import TheNationofYahwehInfo from "./image/The_Nation_of_Yahweh-info.png";

export function The_Nation_of_Yahweh() {
  return (
    <div className="nation-of-yahweh-page">
      <div id="pg-banner-nation" className=""></div>
      <div id="top-bar-gold-nation" className=""></div>
      <div id="The_Nation_of_Yahweh-nation" className="">
        <img
          // src="/public/The_Nation_of_Yahweh/image/The_Nation_of_Yahweh.png"
          src={TheNationofYahweh}
          alt="Ny Firenen'i Yahweh"
          className="width-nation"
        />
      </div>
      <div className="sec-bar-nation pg-top-pd-mod-nation"></div>
      <div className="sec-text-nation pg-text-fmt-nation">
        <p>
          <span className="pg-text-ltr-sp-nation">
            Ny Firenen'i <span className="David-nation">יהוה</span>
            &nbsp;dia mino fa Andriamanitra tokana,&nbsp;
            <span className="David-nation">יהוה</span>, Ray ny olombelona rehetra. 
            Fa ny Baiboly Masina sy{" "}
            <span className="David-nation">יהוה&nbsp;בּן&nbsp;יהוה</span>
            &nbsp;no Jiro Lehibe sy fitsipika ary torolalana ho an'ny finoana sy 
            ny fanarahana ny lalàn'i{" "}
            <span className="David-nation">יהוה</span>, ary izay mino Azy sy ny anarany 
            dia tsy ho faty. Ny toetra, ny fahamarinana, ary ny fitondrantena no 
            mamaritra ny hoavy. Ny fitiavan'ny olona manam-pitondrantena dia eo 
            anilan'ny fitiavan'i{" "}
            <span className="David-nation">יהוה</span>&nbsp;sy ny Zanany,{" "}
            <span className="David-nation">יהוה&nbsp;בּן&nbsp;יהוה</span>, 
            izay adidin'ny olona voalohany. Fa ny vavaka sy ny fifandraisana amin'i{" "}
            <span className="David-nation">יהוה</span> dia manampy.
          </span>
        </p>
        <p>
          Ny finoana sy ny fotopampianarana rehetra izay mamorona ny Firenen'i{" "}
          <span className="David-nation">יהוה</span> dia miorina amin'ny 
          Dikan'ny Baiboly amin'ny Mpanjaka James, ny Testamenta Taloha sy Vaovao. 
          Ny Firenen'i <span className="David-nation">יהוה</span> dia ny 
          fianakavian'i <span className="David-nation">יהוה</span> izay 
          ahitana vondron'olona mifandray amin'ny alalan'ny fifandraisana 
          avy amin'ny Razana iray, <span className="David-nation">יהוה</span>, 
          Andriamanitry ny Fanekena ny Isiraely.
        </p>
        <p>
          Miaiky isika fa ny olona rehetra manana saina ara-pitondrantena 
          izay manaiky hanaraka ny lalàn'i{" "}
          <span className="David-nation">יהוה</span> rehetra sy 
          ho mahatoky amin'ny Zanany, <span className="David-nation">יהוה&nbsp;בּן&nbsp;יהוה</span>, 
          dia afaka mampiditra ny Firenen'i <span className="David-nation">יהוה</span>. 
          Fantatsika fa eo ambany io fanekena io, isika rehetra dia zanakalahy sy 
          zanakavavin'i <span className="David-nation">יהוה</span> 
          ary mpandova miaraka amin'i{" "}
          <span className="David-nation">יהוה&nbsp;בּן&nbsp;יהוה</span>.
        </p>
      </div>
      <div className="sec-bar-nation pg-top-pd-mod-nation"></div>
      <div id="Our_Motto_is-nation">
        <img
          className="Motto_img-nation"
          // src="/public/The_Nation_of_Yahweh/image/Our_Motto_Ln.png"
          src={OurMottoLn}
          alt="NY TENINDRINTSIKA DIA: ANDRIAMANITRA TOKANA! SAINA TOKANA! FITIA TOKANA! SY ASA TOKANA!"
        />
      </div>
      <div className="pg-link-text-nation">
        <p>
          TSINDRIO ETO AMBANY HAHALALA BEBE KOKOA MOMBA
          <br />
          <span className="pg-link-text-ul-nation">
            NY FIRENEN'I <span className="David-lg-nation">יהוה</span>
          </span>
        </p>
      </div>
      <div id="pg-guides-nation">
        <div className="pg-guide-nation">
          <a
            href="/src/pages/(sous-page)/The_Nation_of_Yahweh/pdf/Who_Is_The_Nation_French_Web.pdf"
            target="_blank"
          >
            <img
              // src="/public/The_Nation_of_Yahweh/image/French_ver.png"
              src={FrenchVer}
              alt="Iza ny Firenen'i Yahweh PDF frantsay"
              className="width-guide-nation"
            />
          </a>
        </div>
        <div className="pg-guide-nation">
          <a href="pdf/Who_Is_The_Nation_Spanish_Web.pdf" target="_blank">
            <img
              // src="/public/The_Nation_of_Yahweh/image/Spanish_ver.png"
              src={SpanishVer}
              alt="Iza ny Firenen'i Yahweh PDF espaniola"
              className="width-guide-nation"
            />
          </a>
        </div>
        <div className="pg-guide-nation">
          <a href="pdf/Who_Is_The_Nation_English_Web.pdf" target="_blank">
            <img
              // src="/public/The_Nation_of_Yahweh/image/English_ver.png"
              src={EnglishVer}
              alt="Iza ny Firenen'i Yahweh PDF anglisy"
              className="width-guide-nation"
            />
          </a>
        </div>
      </div>
      <div className="clear-nation"></div>
      <div id="Nation-info-nation">
        <img
          className="book-img-nation"
          // src="/public/The_Nation_of_Yahweh/image/The_Nation_of_Yahweh-info.png"
          src={TheNationofYahwehInfo}
          alt="Toromarika momba ny Firenen'i Yahweh"
        />
      </div>
      <div id="top-bar-gold-nation"></div>
    </div>
  );
}
export default The_Nation_of_Yahweh;