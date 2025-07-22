import "./style/the_Followers_of_Yahweh_Ben_Yahweh.css";
import "./style/responsive.css";
// import Followers from "./image/The_Followers_of_Yahweh_Ben_Yahweh.png";
import bottomMedia from "./image/bottom-media.jpg";
import imagesData from "../../../data/img/about-images.json";
import { followersApi } from "../../../admin/api/api";
import { useEffect, useState } from "react";
import { SectionAPI, getImageUrl } from "../../../admin/api/homeImage2";



export function The_Followers_of_Yahweh_Ben_Yahweh() {
  const [followersTitle, setFollowersTitle] = useState("");
  const [followersDescription1, setFollowersDescription1] = useState("");
  const [followersDescription2, setFollowersDescription2] = useState("");
  const [followersDescription3, setFollowersDescription3] = useState("");
  const [followersDescription4, setFollowersDescription4] = useState("");
  const [followersDescription5, setFollowersDescription5] = useState("");
  // const [followersDescription6, setFollowersDescription6] = useState("");
  const [aboutYahwehBenBg, setAboutYahwehBenBg] = useState("");

  useEffect(() => {
    const loadYahwehData = async () => {
      try {
        const yahwehData = await followersApi.get();
        if (yahwehData.success && yahwehData.data?.length > 0) {
          const data = yahwehData.data[0];
          setFollowersTitle(data.title);
          setFollowersDescription1(data.description1);
          setFollowersDescription2(data.description2);
          setFollowersDescription3(data.description3);
          setFollowersDescription4(data.description4);
          setFollowersDescription5(data.description5);
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
        const yahwehData = await followersApi.get();
        if (yahwehData.success && yahwehData.data?.length > 0) {
          const data = yahwehData.data[0];
          setFollowersTitle(data.title);
          // ... autres setters ...
        }

        // Chargez l'image de fond de la section
        const sectionResponse = await SectionAPI.fetchAll();
        if (sectionResponse.success) {
          // console.log("Toutes les sections:", sectionResponse.data);

          // Recherche de la section about_yahweh_ben
          interface Section {
            section_name: string;
            path: string;
            [key: string]: any;
          }

          // Remove SectionResponse interface, use the actual response type from SectionAPI.fetchAll()
          // and handle optional data property

          const sectionResponse = await SectionAPI.fetchAll();
          const aboutYahwehBenSection: Section | undefined = sectionResponse.data?.find(
            (section: Section) => section.section_name === "followers"
          );

          if (aboutYahwehBenSection) {
            // console.log("Section about_yahweh_ben trouvée:", aboutYahwehBenSection);
            const imageUrl = getImageUrl(aboutYahwehBenSection.path);
            // console.log("URL complète de l'image:", imageUrl);
            setAboutYahwehBenBg(imageUrl);
          } else {
            // console.log("Aucune section about_yahweh_ben trouvée - noms disponibles:",
            //   sectionResponse.data?.map(s => s.section_name));
          }
        } else {
          // console.error("Erreur API sections:", sectionResponse.message);
        }
      } catch (error) {
        // console.error("Error loading data:", error);
      }
    };

    loadYahwehData();
  }, [])

  return (
    <div className="followers-page">
      <div id="pg-banner-fol" className="" style={{ backgroundImage: `url(${aboutYahwehBenBg || imagesData.backgroundImages.pageBannerAbout_Yahweh_Ben_Yahweh})` }}></div>
      <div id="top-bar-gold-fol" className=""></div>
      <div id="The_Followers_of_Yahweh_Ben_Yahweh" className="title-section-fol">
        {/* <img
          className="img-size-fol"
          // src="/public/The_Followers_of_Yahweh_Ben_Yahweh/image/The_Followers_of_Yahweh_Ben_Yahweh.png"
          src={Followers}
          alt="The Followers of Yahweh Ben Yahweh"
        /> */}
        <h1 className="followers-title">{followersTitle}</h1>
      </div>
      <div className="sec-bar-fol"></div>
      <div className="sec-text-fol pg-text-fmt-fol">
        <p>
          {followersDescription1}
          {/* Ny mpanaraka an’i <span className="David-fol">יהוה בן יהוה</span> dia
          anisan’ny vondrona manokana sy voafidy. Nosafidin’i{" "}
          <span className="David-fol">יהוה</span> izy ireo ho voavonjy sy hahazo
          fiainana mandrakizay. Amin’izao fotoana izao dia iray amin’ny
          fanokanana azy ireo eo amin’ny toerana fanapahana izay tokony ho azy. */}
        </p>
      </div>
      <div className="sec-bar-fol"></div>
      <div className="sec-text-fol pg-text-fmt-fol">
        <p className="pg-text-ltr-sp-2-fol">
          {followersDescription2}
          {/* Ny mpanaraka an’i <span className="David-fol">יהוה בן יהוה</span> dia
          mahazo famonjena, fitiavana, ary fiarovana avy amin’i{" "}
          <span className="David-fol">יהוה בן יהוה</span>, Andriamanitry ny
          mpanaraka Azy sy ny Zanany,{" "}
          <span className="David-fol">יהוה בן יהוה</span> (Ohabolana 18:10). */}
        </p>
      </div>
      <div className="sec-bar-fol"></div>
      <div className="sec-text-fol pg-text-fmt-fol">
        <p className="">
          {followersDescription3}
          {/* Ny mpanaraka an'i <span className="David-fol">יהוה בן יהוה</span> dia
          olombelona izay mampiasa sy mampihetsika ny heriny ara-tsaina hanao
          eritreritra ary hanova ireo eritreritra ireo ho atao voalamina, izay
          mahatonga vokatra hita maso. Tsy miadana sy tsy mitandrina izy ireo.
          Maro no afaka mijoro ho vavolombelona fa ny mpanaraka an'i{" "}
          <span className="David-fol">יהוה בן יהוה</span> dia mpianatra,
          manam-pahaizana, ary mpianatra ny fitsipika ara-Baiboly. Izy ireo dia
          mpikambana, namana, mpiara-dia, ary mpanohana an'i{" "}
          <span className="David-fol">יהוה</span> sy ny lalàny. Izy ireo no
          mahafeno ny fepetra takina amin'ny olombelona amin'ny alalan'ny
          fanatanterahany ny fanapahan-kevitra ara-drariny sy ara-tsaina. */}
        </p>
      </div>
      <div className="sec-bar-fol"></div>
      <div className="sec-text-fol pg-text-fmt-fol">
        <p className="">
          {followersDescription4}
          {/* Ny mpanaraka marina an’i{" "}
          <span className="David-fol">יהוה בן יהוה</span> dia mifikitra amin’ny
          hafatr’Andriamanitra momba ny famonjena, izay manehy finoana tsara ho
          an’ny olona tsara fanahy rehetra, tsy misy hosoka, fitaka, na
          famadihana; ka mahatonga izay rehetra mino sy manara-dalàna ny
          fitondrantena ho ara-dalàna, ara-drariny, mahitsy, miharihary, mahitsy
          fo, tsara fitondrana, mahitsy toetra, ara-pitondrantena, ary manana
          fitsipika. Rehefa misy ireo toetra manokana ireo ao amin’ny toetran’ny
          olona iray, dia lasa tahaka ny soratra masina na dika mitovy amin’ny
          maha-Andriamanitra izy, ary maneho ny endr’an’i{" "}
          <span className="David-fol">יהוה</span> sy ny Zanany,{" "}
          <span className="David-fol">יהוה בן יהוה</span>. */}
        </p>
      </div>
      <div className="sec-bar-fol"></div>
      <div className="sec-text-fol pg-text-fmt-fol">
        <p className="pg-text-ltr-sp-9-fol">
          {followersDescription5}
          {/* Raha fintinina, ny mpanaraka an'i{" "}
          <span className="David-fol">יהוה בן יהוה</span> dia manezo fitiavana
          mafana sy firaiketam-po amin'ny olona na vondrona rehetra manaraka
          fitsipika ara-moraly. Manana fangoraham-po sy firahalahiana izy ireo,
          izay tokony ho an'ny olon-drehetra. Marina tokoa fa manana fiahiana
          lalina ny soa iraisany. Izy ireo no maha-olona feno fangoraham-po ao
          amin'ny fiarahamonina: ireo mpandray anjara mavitrika sy mahalala
          fomba amin'ny fanorenana ny... */}
        </p>
        <p className="pg-text-fmt-cnt-fol">
          Fanjakani'<span className="David-fol">יהוה</span> – ny Lanitra.
        </p>
      </div>
      <div id="pg-btm-media-fol">
        <img
          className="bottom-media-img-fol"
          // src="/public/The_Followers_of_Yahweh_Ben_Yahweh/image/bottom-media.jpg"
          src={bottomMedia}
          alt="Bottom Media"
        />
      </div>
    </div>
  );
}
export default The_Followers_of_Yahweh_Ben_Yahweh;
