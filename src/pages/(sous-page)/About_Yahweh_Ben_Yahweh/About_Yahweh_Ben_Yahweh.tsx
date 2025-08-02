import "./style/about_Yahweh_Ben_Yahweh.css";
import "./style/responsive.css";
import YahwehImg from "./image/Yahweh_Ben_Yahweh.png";
import HisMission from "./image/His_Mission.png";
import bottomMedia from "./image/bottom-media.png";
import imagesData from "../../../data/img/about-images.json";
import { yahwehBenApi } from "../../../admin/api/api";
import { useEffect, useState } from "react";
import { SectionAPI, getImageUrl } from "../../../admin/api/homeImage2";

export function AboutYahwehBenYahweh() {

  // const [yahwehTitle1, setYahwehTitle1] = useState("");
  const [yahwehTitle2, setYahwehTitle2] = useState("");
  const [yahwehDescription1, setYahwehDescription1] = useState("");
  const [yahwehDescription2, setYahwehDescription2] = useState("");
  const [yahwehDescription3, setYahwehDescription3] = useState("");
  const [yahwehDescription4, setYahwehDescription4] = useState("");
  const [yahwehDescription5, setYahwehDescription5] = useState("");
  const [yahwehDescription6, setYahwehDescription6] = useState("");
  const [yahwehDescription7, setYahwehDescription7] = useState("");
  const [yahwehDescription8, setYahwehDescription8] = useState("");
  const [yahwehDescription9, setYahwehDescription9] = useState("");
  const [aboutYahwehBenBg, setAboutYahwehBenBg] = useState("");

  useEffect(() => {
    const loadYahwehData = async () => {
      try {
        const yahwehData = await yahwehBenApi.get();
        if (yahwehData.success && yahwehData.data?.length > 0) {
          const data = yahwehData.data[0];
          // setYahwehTitle1(data.title1);
          setYahwehTitle2(data.title2);
          setYahwehDescription1(data.description1);
          setYahwehDescription2(data.description2);
          setYahwehDescription3(data.description3);
          setYahwehDescription4(data.description4);
          setYahwehDescription5(data.description5);
          setYahwehDescription6(data.description6);
          setYahwehDescription7(data.description7);
          setYahwehDescription8(data.description8);
          setYahwehDescription9(data.description9);
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
        const yahwehData = await yahwehBenApi.get();
        if (yahwehData.success && yahwehData.data?.length > 0) {
          const data = yahwehData.data[0];
          setYahwehTitle2(data.title2);
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
            // Add other fields if needed
          }


          const aboutYahwehBenSection = (sectionResponse.data as Section[]).find((section: Section) =>
            section.section === "about_yahweh_ben"
            // section.section_name === "about_yahweh_ben"
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
            //   (sectionResponse.data as Section[]).map((s: Section) => s.section_name)
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
    <div className="about-yahweh-ben-yahweh-page">
      {/* <div id="pg-banner-about-y" className="page-banner" style={{ backgroundImage: `url(${imagesData.backgroundImages.pageBannerAbout_Yahweh_Ben_Yahweh})` }}></div> */}
      <div id="pg-banner-about-y" className="page-banner" style={{ backgroundImage: `url(${aboutYahwehBenBg || imagesData.backgroundImages.pageBannerAbout_Yahweh_Ben_Yahweh})` }}></div>
      <div id="top-bar-gold-about-y" className=""></div>
      <div id="Yahweh_Ben_Yahweh-y" className="pg-btm-pd-mod-y">
        <img
          // src="/public/About_Yahweh_Ben_Yahweh/image/Yahweh_Ben_Yahweh.png"
          src={YahwehImg}
          alt="Yahweh Ben Yahweh"
          className="style-width-y"
        />
      </div>
      <div className="sec-bar-y pg-btm-pd-mod-y pg-top-pd-mod-y"></div>
      <div className="pg-link-text-y">
        {/* <p className="pg-top-mrgn-mod-y">YAHWEH BEN YAHWEH</p> */}
        <p className="pg-top-mrgn-mod-y">{yahwehTitle2}</p>
      </div>
      <div className="sec-text-y pg-text-fmt-y">
        <p className="">
          {yahwehDescription1}
          {/* <span className="David-y">יהוה</span> no Andriamanitry ny
          andriamanitra. <span className="David-y">יהוה</span> no Andriamanitry
          ny fanekena amin'i Israely. Izy no Andriamanitr'i Abrahama, Isaka, ary
          Jakoba. <span className="David-y">יהוה בן יהוה</span> no Zanak'
          <span className="David-y">יהוה</span>. */}
        </p>
        <p className="">
          {/* <span className="David-y">יהוה בן יהוה</span> no Tompon’ny Efiombonana
          Any an-Danitra, Mpamorona ny Izao Tontolo Izao, ary Ilay Mpanjaka
          Masina sy Irery. Izy eto mba hamahatra ny voafonja sy hampitsangana
          mahitsy eo amin’ny kianja ny marina izay voafehy. Fa, indro! Misy
          lehibe noho i Solomona eto! */}
          {yahwehDescription2}
        </p>
      </div>
      <div className="pg-title-break-y">
        <img
          // src="/About_Yahweh_Ben_Yahweh/image/His_Mission.png"
          src={HisMission}
          alt="His Mission"
          className="style-width-y"
        />
      </div>
      <div className="sec-text-y pg-text-fmt-y">
        <p className="">
          {yahwehDescription3}
          {/* Tamin’ny 1979, <span className="David-y">יהוה בן יהוה</span> dia tonga
          tany Miami ka lasa Mpitarika Ara-Panahy sy Mpanorina ny Firenen’i{" "}
          <span className="David-y">יהוה</span>. Na dia nanao voady fahantrana
          aza Izy, tamin’ny fito taona Izy nitarika ny Firenena hanangona
          fanjakana sarobidy 250 tapitrisa dolara. Eo ambany fitarihany, ny
          Firenen’i <span className="David-y">יהוה</span> dia nitombo
          hatramin’ny nahatratra mpianatra, mpanaraka, ary mpanohana mihoatra ny
          tanàna 1,300 any Etazonia sy firenena 16 any ivelany. */}
        </p>
        <p>
          {/* Ny asany dia hanangona aloha ny ondry very ao amin’ny tranon’i
          Israely, ary avy eo ny olona manana fitondrantena eto an-tany.{" "}
          <span className="David-y">יהוה בּן יהוה</span> dia eto mba hametraka ny
          fandriampahalemana sy ny sitrapo tsara ho an’ny rehetra tia
          an’Andriamanitra. Izy eto mba hanorina ny governemanta teôkratikan’i{" "}
          <span className="David-y">יהוה</span> amin’ny alalan’ny
          fanatanterahana ny lalàna, ny fitsipika, ny fitsarana, ary ny didin’i{" "}
          <span className="David-y">יהוה</span>. */}
          {yahwehDescription4}
        </p>
        <p>
          {/* <span className="David-y">יהוה בּן יהוה</span> dia manova ny fiainan’ny
          olona tsirairay, ary manome ny tany ireo lakile hahombiazana amin’ny
          fiaina: Ara-Politika Ara-Toekarena Ara-Panabeazana Ara-Piarahamonina
          Ary Ara-Panahy. */}
          {yahwehDescription5}
        </p>
      </div>
      <div className="pg-title-break-y">
        <img
          // src="/src/pages/(sous-page)/About_Yahweh_Ben_Yahweh/image/His_Mission.png"
          // src="/About_Yahweh_Ben_Yahweh/image/His_Mission.png"
          src={HisMission}
          alt="His Mission"
          className="style-width-y"
        />
      </div>
      <div className="sec-text-y pg-text-fmt-y">
        <p>
          {yahwehDescription6}
          {/* <span className="David-y">יהוה בּן יהוה</span> mampianatra ny mpianany
          sy ny mpanaraka azy hanao fiantrana sy hatsaram-panahy, hiaro ny
          fahadiovam-pitondrantena, hanaja ny fifamatorana ara-pianakaviana sy
          namana, hanaraka ny fitsipika sy hankahala ny lalàn'i{" "}
          <span className="David-y">יהוה</span>, hanampy ny lempona,
          hitari-dalana sy hanokatra ny mason'ny jamba, hanasitrana ny sofina'ny
          marenina, hampitsangana ny voahosotra sy voatendry, hialoka ny
          mpitondratena sy ny kamboty, hikarakara ny alitara ni{" "}
          <span className="David-y">יהוה</span>, hanohana ny governemantan'i{" "}
          <span className="David-y">יהוה</span>, hampianatra fitondrantena,
          hampahery ny fianarana, hankafy ny olona manam-pitondrantena,
          hatahotra an'i <span className="David-y">יהוה</span>, hiangavy ny
          fahasoavany, hiasa ho an'ny fifaliana, ary hiomana. */}
        </p>
      </div>
      <div className="pg-title-break-y">
        <img
          // src="/src/pages/(sous-page)/About_Yahweh_Ben_Yahweh/image/His_Mission.png"
          // src="/public/About_Yahweh_Ben_Yahweh/image/His_Mission.png"
          src={HisMission}
          alt="His Mission"
          className="style-width-y"
        />
      </div>
      <div className="sec-text-y pg-text-fmt-y">
        <p>
          <i>
            <strong>
              {yahwehDescription7}
              {/* Ny alatsinainy, 7 Mey 2007 tamin’ny 7:55 hariva, ny Mpanorina sy
              Mpanavotra antsika, <span className="David-y">יהוה בּן יהוה</span>,
              dia nahavitra ny dia voalohany nataony teto an-tany ary niakatra
              hijoro eo anilan’ny Rainy, <span className="David-y">יהוה</span>,
              any an-danitra. */}
            </strong>
          </i>
        </p>
        <p className="pg-text-ltr-sp-8">
          {yahwehDescription8}
          {/* Izany no anton’ny Fitiavan’ny Raiko,{" "}
          <span className="David-y">יהוה</span> tamiko (
          <span className="David-y">יהוה בּן יהוה</span>), satria natolotro ny
          Aiko mba hahazoako azy indray. Tsy misy olona maka izany Ahy, fa Izaho
          no manolotra azy irery. Manana fahefana hanolotra ny Ahy aho, ary
          manana fahefana hahazo azy indray. Io didy io no nalovako tamin’ny
          Raiko, <span className="David-y">יהוה</span> (Jaona 10:17-18). Tsy
          misy fitiavana lehibe noho izany: ny manolotra ny ainy ho an’ny namany
          (Jaona 15:13). Ny asa ataoko amin’ny anaran’ny Raiko no mijoro ho
          vavolombelona momba Ahy (Jaona 10:25). */}
        </p>
        <p className="pg-text-ltr-sp-9">
          {yahwehDescription9}
          {/* Ary nalefa tamiko ny fahefana, ny voninahitra, ary ny Fanjakan’ny
          Andriamanitra, mba hanompoan’ny firenena sy ny vahoaka rehetra, na
          inona na inona ny fiteniny: Ny fahefaniko dia fahefana mandrakizay,
          tsy hiova, ary ny Fanjakako dia tsy ho ringana (Daniely 7:14). Ary ny
          Fanjakako sy ny fahefaniko, ary ny hanjakan’ny Fanjakako eran’ny tany
          rehetra, dia homena ny olon’ny olo-masin’ny Avo Indrindra, izay manana
          Fanjakan’ny mandrakizay, ary ny fahefana rehetra dia hanompo sy
          hankatò Ahy (Daniely 7:27). Ho an’i{" "}
          <span className="David-y">יהוה בּן יהוה</span> ny voninahitra sy ny
          fahefana mandrakizay. Amena (1 Petera 5:11). */}
        </p>
      </div>
      <div id="pg-btm-media-y" className="">
        {/* <div id="pg-btm-media-about" className=""> */}
        <img
          // className="bottom-media-img mx-auto"
          className="bottom-media-img-y"
          // src="/src/pages/(sous-page)/About_Yahweh_Ben_Yahweh/image/bottom-media.png"
          // src="/public/About_Yahweh_Ben_Yahweh/image/bottom-media.png"
          src={bottomMedia}
          alt="Bottom Media"
        />
      </div>
    </div>
  );
}
export default AboutYahwehBenYahweh;
