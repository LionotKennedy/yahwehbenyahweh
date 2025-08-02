import "./style/culturalAttire.css";
import "./style/responsive.css";
import bottomMedia from "./image/bottom-media.jpg";
import imagesData from "../../../data/img/about-images.json";
import { culturalAttireApi } from "../../../admin/api/api";
import { useEffect, useState } from "react";
import { SectionAPI, getImageUrl } from "../../../admin/api/homeImage2";

const CulturalAttire = () => {

  const [culturalTitle, setCulturalTitle] = useState("");
  const [culturalDescription1, setCulturalDescription1] = useState("");
  const [culturalDescription2, setCulturalDescription2] = useState("");
  const [culturalDescription3, setCulturalDescription3] = useState("");
  const [culturalDescription4, setCulturalDescription4] = useState("");
  const [culturalDescription5, setCulturalDescription5] = useState("");
  const [aboutYahwehBenBg, setAboutYahwehBenBg] = useState("");


  useEffect(() => {
    const loadYahwehData = async () => {
      try {
        const yahwehData = await culturalAttireApi.get();
        if (yahwehData.success && yahwehData.data?.length > 0) {
          const data = yahwehData.data[0];
          setCulturalTitle(data.title);
          setCulturalDescription1(data.description1);
          setCulturalDescription2(data.description2);
          setCulturalDescription3(data.description3);
          setCulturalDescription4(data.description4);
          setCulturalDescription5(data.description5);
          // console.log(data.title)
          // console.log(data)
        }
      } catch (error) {
        console.error("Error loading contact data:", error);
      }
    };

    loadYahwehData();
  }, []);

  useEffect(() => {
    const loadYahwehData = async () => {
      try {
        // Chargez les données textuelles
        const yahwehData = await culturalAttireApi.get();
        if (yahwehData.success && yahwehData.data?.length > 0) {
          const data = yahwehData.data[0];
          setCulturalTitle(data.title);
          // ... autres setters ...
        }

        // Chargez l'image de fond de la section
        const sectionResponse = await SectionAPI.fetchAll();
        if (sectionResponse.success) {
          // console.log("Toutes les sections:", sectionResponse.data);

          // Recherche de la section about_yahweh_ben
          interface Section {
            section: string;
            src: string;
            // section_name: string;
            // path: string;
            [key: string]: any;
          }


          const aboutYahwehBenSection: Section | undefined = (sectionResponse.data as Section[]).find(
            (section: Section) => section.section === "cultural"
            // (section: Section) => section.section_name === "cultural"
          );

          if (aboutYahwehBenSection) {
            // console.log("Section about_yahweh_ben trouvée:", aboutYahwehBenSection);
            const imageUrl = getImageUrl(aboutYahwehBenSection.src);
            // const imageUrl = getImageUrl(aboutYahwehBenSection.path);
            // console.log("URL complète de l'image:", imageUrl);
            setAboutYahwehBenBg(imageUrl);
          } else {
            // console.log(
            //   "Aucune section about_yahweh_ben trouvée - noms disponibles:",
            //   (sectionResponse.data as { section_name: string }[]).map((s: { section_name: string }) => s.section_name)
            // );
          }
        } else {
          console.error("Erreur API sections:", sectionResponse.message);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadYahwehData();
  }, [])

  return (
    <div className="cultural-attire-page">
      {/* <div id="pg-banner-cul" className="" style={{ backgroundImage: `url(${imagesData.backgroundImages.pageBannerAbout_Cultural_Attire})` }}></div> */}
      <div id="pg-banner-cul" className="" style={{ backgroundImage: `url(${aboutYahwehBenBg || imagesData.backgroundImages.pageBannerAbout_Yahweh_Ben_Yahweh})` }}></div>
      <div id="top-bar-gold-cul" className=""></div>
      <div id="The_Cultural_Attire_of" className="title-section-fol">
        {/* <img
          // src="/image/The_Cultural_Attire_of_Yahweh.png"
          // src="/public/CulturalAttire/image/The_Cultural_Attire_of_Yahweh.png"
          src={TheCulturalAttire}
          className="wid-cul"
          alt="The Cultural Attire of Yahweh"
        /> */}
        <h1 className="followers-title">{culturalTitle}</h1>
      </div>
      <div className="sec-bar-cul"></div>
      <div className="sec-text-cul pg-text-fmt-cul">
        <p className="">
          {culturalDescription1}
          {/* <span className="David-cul">יהוה בן יהוה</span> dia nandidy ny fomba
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
          kolontsain'i <span className="David-cul">יהוה</span> isika. */}
        </p>
      </div>
      <div className="sec-bar-cul"></div>
      <div className="sec-text-cul pg-text-fmt-cul">
        <p className="">
          {culturalDescription2}
          {/* Inona no zava-dehibe momba ny akanjon’ny fotsy masina anao? */}
        </p>
      </div>
      <div className="sec-bar-cul pg-top-pd-mod-cul"></div>
      <div className="sec-text-cul pg-text-fmt-cul">
        <p className="pg-text-ltr-sp-3">
          {/* Voalohany, izany dia kolontsain’Andriamanitra,{" "}
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
          </span> */}
          {culturalDescription3}
        </p>
      </div>
      <div className="sec-bar-cul"></div>
      <div className="sec-text-cul pg-text-fmt-cul">
        <p className="">
          {culturalDescription4}
          {/* Raha tsy fantatra amin'ny fomba hitafian'Andriamanitra ny olona iray,
          dia tsy hahafantatra Azy izy rehefa avy. Noho izany, mety tsy hihaino
          ny antsoiny izy ka very ny fitahian'ny lanitra. */}
        </p>
      </div>
      <div className="sec-bar-cul"></div>
      <div className="sec-text-cul pg-text-fmt-cul">
        <p className="">
          {culturalDescription5}
          {/* Ny fotsy dia mariky ny fahadiovana sy ny fitambarana. Ny fitafiana
          akanjo fotsy dia maneho fa misy dingana fanadiovana
          mitranga—fanesorana ny fahotana sy fiverenana amin'ny lalàn'ny
          fanekena. 'Na dia mena toy ny menamaso aza ny fahotanareo, dia ho
          fotsy toy ny lane izy' (Isaia 1:18). Ao amin'ny Fanjakan'i{" "}
          <span className="David-cul">יהוה</span>, ny fitafiana akanjo fotsy dia
          mandrakizaya, ara-batana sy ara-panahy (Mpitoriteny 9:8). Izany dia
          manambara ny fidiran'ny vanim-potoana vaovao, fenitra
          ara-pitondrantena vaovao, fanjakana tsara; ny Governemanta
          Teôkratikan'i <span className="David-cul">יהוה</span>. */}
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
