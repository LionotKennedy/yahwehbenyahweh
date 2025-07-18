import "./style/about_Yahweh.css";
import "./style/responsive.css";

import Yahweh from "./image/Yahweh.png";
import bottomMedia from "./image/bottom-media.png";
import imagesData from "../../../data/img/about-images.json";


export function AboutYahweh() {
  return (
    <div className="about-yahweh-page">
      <div id="pg-banner-abouty" className="page-banner" style={{ backgroundImage: `url(${imagesData.backgroundImages.pageBanner_About_Yahweh})` }}></div>
      <div id="top-bar-gold-about" className=""></div>
      <div id="Yahweh_Ben_Yahweh" className="pg-btm-pd-mod-about">
        <img
          id="title-img-about"
          // src="/public/About_Yahweh/image/Yahweh.png"
          src={Yahweh}
          alt="Yahweh"
          className=""
        />
      </div>
      <div className="sec-bar-about"></div>
      <br />
      <div className="pg-link-text-about">
        <p className="pg-top-mrgn-mod-about">YAHWEH</p>
      </div>
      <div className="sec-text-about pg-text-fmt-about">
        <p className="">
          Ny hery mandrisika ny izao rehetra izao dia tsy hery mistery, fa olona
          tena izy mitondra ny anarana hoe{" "}
          <span className="David-about">יהוה</span>. Ny fitsidihana ny tobin'ny
          habakabaka iraisam-pirenena, sy ny fandinihana ara-tsiansa,
          anisan'izany ny sary nalaina avy any amin'ny planeta hafa, dia
          manaporofo fa ny habakabaka mahagaga sy goavana dia voarindra tsara.
          Tsy misy dikany ny manao fehin-kevitra fa izao tontolo goavana izao
          dia voarindra tsara nefa tsy misy hery iray mifehy. Ny lojika dia
          milaza fa tsy misy hery tsy manan-tsaina afaka hamorona izao karazana
          fiainana isan-karazany izao, na hanome ny fahendrena sy hery tsy
          manam-petra hita eny amin'ny izao tontolo izao.
        </p>
      </div>
      <div className="sec-bar-about"></div>
      <div className="sec-text-about pg-text-fmt-about">
        <p className="">
          Fa izao no lazain'i <span className="David-about">יהוה</span>, Ilay
          nahary ny lanitra; <span className="David-about">יהוה</span> formed
          the no namorona ny tany sy nanao izy, Nisy nanorenany izy, ary tsy ho
          an-tsininy no naha-nahary Azy (Isaia 45:18).
        </p>
      </div>
      <div className="sec-bar-about"></div>
      <div className="sec-text-about pg-text-fmt-about">
        <p className="">
          Misy fitsipika vaovao izay efa voaporofo tamin'ny alalan'ny arkeolojia
          manerantany. Ny mpahay arkeolojia dia miara-milaza tsy misy
          fisalasalana, fa ao ambadiky ny habakabaka goavana sy ny izao tontolo
          izao, misy fototra iray: ny finoana Andriamanitra tokana, ILAY
          ANDRIAMANITRA TOKANA, izay ny anarany hatramin'izao dia noforanina,
          nosaronina, nafenina, ary natahotra. Io anarana io,{" "}
          <span className="David-about">יהוה</span>, dia atao hoe "Ny
          Tsiambaratelo Lehibe Indrindra Etỳ An-Tany".
        </p>
      </div>
      <div className="sec-bar-about"></div>
      <div className="sec-text-about pg-text-fmt-about">
        <p className="">
          Ao amin'ny Ohabolana 30:4 dia misy fanontaniana maromaro momba ny
          Mpahary ny Lanitra, fa ny roa tonga lafatra indrindra dia: Iza no
          anarany, ary Iza no anaran'ny Zanany, raha hahay ny hilaza?
        </p>
      </div>
      <div className="sec-bar-about"></div>
      <div className="sec-text-about pg-text-fmt-about">
        <p>
          I Mosesy, talohan'ny fianjeran'i Egipta, dia nahafantatra fa
          zava-dehibe ny miantso an'Andriamanitra amin'ny anarany manokana
          (Eksodosy 3:13), ary io toe-javatra io mbola misy hatramin'izao.
          Talohan'ny fianjeran'i Babylona, ilay tanàna lehibe...{" "}
          <span className="David-about">יהוה&nbsp;בּן&nbsp;יהוה</span>, tIlay
          Zanak'i<span className="David-about">יהוה</span>, dia nahatakatra ny
          maha-zava-dehibe ny fiantsoana Azy amin'ny anarany manokana; fa tsy
          misy anarana hafa eo ambanin'ny lanitra omena ny olombelona, izay
          ahafahana voavonjy (Jaona 5:43; 1 Timoty 2:5-6; Asa 4:12).
        </p>
      </div>
      <div className="sec-bar-about"></div>
      <div className="sec-text-about pg-text-fmt-about pg-text-ltr-sp-6-about">
        <p>
          Amin'ny fototry ny zavatra rehetra, tsy azo atao ny hiditra amin'ny
          fifandraisana amin'i <span className="David-about">יהוה</span> raha
          tsy manaiky an'i <span className="David-about">יהוה בּן יהוה</span>,
          Ilay Zanany Tiana (Jaona 10:9, 30; Jaona 14:6; Jaona 17:11). Noho
          izany, ny fahafantarana an'i <span className="David-about">יהוה</span>{" "}
          dia mitovy amin'ny fahitana ny zava-misy amin'ny fahatokiana azo
          antoka sy ny famonjena. Ny fanambarana ny anarany sy ny anaran'ny
          Zanany no fanalahidy hahatakarana ny finoana ara-Baiboly.
        </p>
      </div>
      <div id="pg-btm-media-about" className="">
        <img
          className="bottom-media-img-about"
          // src="/public/About_Yahweh/image/bottom-media.png"
          src={bottomMedia}
          alt="Bottom Media"
        />
      </div>
    </div>
  );
}
export default AboutYahweh;
