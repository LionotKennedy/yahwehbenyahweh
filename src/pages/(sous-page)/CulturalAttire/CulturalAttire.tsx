import "./style/culturalAttire.css";
import "./style/responsive.css";
// import "../../../components/css/default.css";
import TheCulturalAttire from "./image/The_Cultural_Attire_of_Yahweh.png";
import bottomMedia from "./image/bottom-media.jpg";
import imagesData from "../../../data/img/about-images.json";

const CulturalAttire = () => {
  return (
    <div className="cultural-attire-page">
      <div id="pg-banner-cul" className=""  style={{ backgroundImage: `url(${imagesData.backgroundImages.pageBannerAbout_Cultural_Attire})` }}></div>
      <div id="top-bar-gold-cul" className=""></div>
      <div id="The_Cultural_Attire_of" className="">
        <img
          // src="/image/The_Cultural_Attire_of_Yahweh.png"
          // src="/public/CulturalAttire/image/The_Cultural_Attire_of_Yahweh.png"
          src={TheCulturalAttire}
          className="wid-cul"
          alt="The Cultural Attire of Yahweh"
        />
      </div>
      <div className="sec-bar-cul"></div>
      <div className="sec-text-cul pg-text-fmt-cul">
        <p className="">
          <span className="David-cul">יהוה בן יהוה</span> dia nandidy ny fomba
          tokony hitafianay sy ny antony manosika anizany.
          <i>
            <strong>
              <span className="">
                "Izay mandresy dia hakan-damba fotsy, ary tsy hofanako ny
                anarany ao amin’ny Bokin’ny Fiaina, fa hanaiko ny anarany eo
                anatrehan’ny Raiko, <span className="David-cul">יהוה</span>, sy
                eo anatrehan’ny anjely Neny" (Apokalipsy 3:5).
              </span>{" "}
            </strong>
          </i>
          Tenin'izany dia tena zava-dehibe ho an'ny famonjena sy ny fiainana
          mandrakizay. Raha mitovy fitafiana amin'ny hafa isika ka tsy maharesy
          ny fomba jentilisa, dia hofafana ny anarantsika ao amin'ny...
          <i>
            <strong>
              <span className="">"Ny Bokin’ny Fiaina."</span>
            </strong>
          </i>
          Mba ho voavonjy amin'ny faharavana dia tsy maintsy miverina amin'ny
          kolontsain'i <span className="David-cul">יהוה</span> isika.
        </p>
      </div>
      <div className="sec-bar-cul"></div>
      <div className="sec-text-cul pg-text-fmt-cul">
        <p className="">
          Inona no zava-dehibe momba ny akanjon’ny fotsy masina anao?
        </p>
      </div>
      <div className="sec-bar-cul pg-top-pd-mod-cul"></div>
      <div className="sec-text-cul pg-text-fmt-cul">
        <p className="pg-text-ltr-sp-3">
          Voalohany, izany dia kolontsain’Andriamanitra,{" "}
          <span className="David-cul">יהוה</span>, sy ny Zanak’Andriamanitra,{" "}
          <span className="David-cul">יהוה בן יהוה</span>. Ny Daniely 7:9 dia
          mamaritra an’i <span className="David-cul">יהוה</span>, Ilay Antitra
          andro, nitafy akanjo fotsy tahaka ny lane, ary milaza hoe:{" "}
          <span className="">
            <i>
              <strong>
                ‘Nahita aho mandra-pisy ny seza fiandrianana natao, ary Ilay
                Antitra andro nipetraka, izay nitafy akanjo fotsy tahaka ny
                lane, ary ny volony tahaka ny volonondry madio:…’
              </strong>
            </i>
          </span>{" "}
          Ny Apokalipsy 1:13-14 kosa dia mampiseho ny Zanak’i{" "}
          <span className="David-cul">יהוה</span> nitafy akanjo nisy hatramin’ny
          tongony, ary milaza amin’ny ampahany:{" "}
          <span className="">
            <i>
              <strong>
                ‘… olona mitovy amin’ny Zanak’olona, nitafy akanjo lava nisy
                hatramin’ny tongony, fehin’ny fehikibo volamena. Ny lohany sy ny
                volony dia fotsy tahaka ny volonondry, fotsy tahaka ny lane; ary
                ny masony tahaka ny lelafo afo’;
              </strong>
            </i>
          </span>
        </p>
      </div>
      <div className="sec-bar-cul"></div>
      <div className="sec-text-cul pg-text-fmt-cul">
        <p className="">
          Raha tsy fantatra amin'ny fomba hitafian'Andriamanitra ny olona iray,
          dia tsy hahafantatra Azy izy rehefa avy. Noho izany, mety tsy hihaino
          ny antsoiny izy ka very ny fitahian'ny lanitra.
        </p>
      </div>
      <div className="sec-bar-cul"></div>
      <div className="sec-text-cul pg-text-fmt-cul">
        <p className="">
          Ny fotsy dia mariky ny fahadiovana sy ny fitambarana. Ny fitafiana
          akanjo fotsy dia maneho fa misy dingana fanadiovana
          mitranga—fanesorana ny fahotana sy fiverenana amin'ny lalàn'ny
          fanekena. 'Na dia mena toy ny menamaso aza ny fahotanareo, dia ho
          fotsy toy ny lane izy' (Isaia 1:18). Ao amin'ny Fanjakan'i{" "}
          <span className="David-cul">יהוה</span>, ny fitafiana akanjo fotsy dia
          mandrakizaya, ara-batana sy ara-panahy (Mpitoriteny 9:8). Izany dia
          manambara ny fidiran'ny vanim-potoana vaovao, fenitra
          ara-pitondrantena vaovao, fanjakana tsara; ny Governemanta
          Teôkratikan'i <span className="David-cul">יהוה</span>.
        </p>
      </div>
      <div id="pg-btm-media-cul" className="">
        <img
          className="bottom-media-img-cul"
          // src="/public/CulturalAttire/image/bottom-media.jpg"
          src={bottomMedia}
          alt="Bottom Media"
        />
      </div>
    </div>
  );
};

export default CulturalAttire;
