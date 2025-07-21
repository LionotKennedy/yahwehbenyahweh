import "./style/about_Yahweh.css";
import "./style/responsive.css";

import Yahweh from "./image/Yahweh.png";
import bottomMedia from "./image/bottom-media.png";
import imagesData from "../../../data/img/about-images.json";
import { yahwehApi } from "../../../admin/api/api";
import { useEffect, useState } from "react";
import { SectionAPI, getImageUrl } from "../../../admin/api/homeImage2";



export function AboutYahweh() {
  // const [yahwehTitle1, setYahwehTitle1] = useState("");
  const [yahwehTitle2, setYahwehTitle2] = useState("");
  const [yahwehDescription1, setYahwehDescription1] = useState("");
  const [yahwehDescription2, setYahwehDescription2] = useState("");
  const [yahwehDescription3, setYahwehDescription3] = useState("");
  const [yahwehDescription4, setYahwehDescription4] = useState("");
  const [yahwehDescription5, setYahwehDescription5] = useState("");
  const [yahwehDescription6, setYahwehDescription6] = useState("");
  const [aboutYahwehBg, setAboutYahwehBg] = useState("");

  useEffect(() => {
    const loadYahwehData = async () => {
      try {
        const yahwehData = await yahwehApi.get();
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
        const yahwehData = await yahwehApi.get();
        if (yahwehData.success && yahwehData.data?.length > 0) {
          const data = yahwehData.data[0];
          setYahwehTitle2(data.title2);
          // ... autres setters ...
        }

        // Chargez l'image de fond de la section
        const sectionResponse = await SectionAPI.fetchAll();
        if (sectionResponse.success) {
          // console.log("Toutes les sections:", sectionResponse.data); // Affiche toutes les sections

          interface Section {
            section_name: string;
            path: string;
            // Add other properties if needed
          }

          interface SectionResponse {
            success: boolean;
            data?: Section[];
            message?: string;
          }

          const sectionResponse: SectionResponse = await SectionAPI.fetchAll();
          const aboutSection: Section | undefined = sectionResponse.data?.find((section: Section) =>
            section.section_name === "about_yahweh"
          );

          console.log("Section About_Yahweh trouvée:", aboutSection); // Affiche spécifiquement la section

          if (aboutSection) {
            const imageUrl = getImageUrl(aboutSection.path);
            // console.log("URL complète de l'image:", imageUrl); // Affiche l'URL complète
            setAboutYahwehBg(imageUrl);
          } else {
            // console.log("Aucune section About_Yahweh trouvée");
          }
        } else {
          // console.error("Erreur API sections:", sectionResponse.message);
        }
      } catch (error) {
        // console.error("Error loading data:", error);
      }
    };

    loadYahwehData();
  }, []);;
  return (
    <div className="about-yahweh-page">
      <div
        id="pg-banner-abouty"
        className="page-banner"
        style={{
          backgroundImage: `url(${aboutYahwehBg || imagesData.backgroundImages.pageBanner_About_Yahweh})`
        }}
      ></div>
      {/* <div id="pg-banner-abouty" className="page-banner" style={{ backgroundImage: `url(${imagesData.backgroundImages.pageBanner_About_Yahweh})` }}></div> */}
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
        <p className="pg-top-mrgn-mod-about">{yahwehTitle2}</p>
        {/* <p className="pg-top-mrgn-mod-about">YAHWEH</p> */}
      </div>
      <div className="sec-text-about pg-text-fmt-about">
        <p className="">
          {yahwehDescription1}
          {/* Ny hery mandrisika ny izao rehetra izao dia tsy hery mistery, fa olona
          tena izy mitondra ny anarana hoe{" "}
          <span className="David-about">יהוה</span>. Ny fitsidihana ny tobin'ny
          habakabaka iraisam-pirenena, sy ny fandinihana ara-tsiansa,
          anisan'izany ny sary nalaina avy any amin'ny planeta hafa, dia
          manaporofo fa ny habakabaka mahagaga sy goavana dia voarindra tsara.
          Tsy misy dikany ny manao fehin-kevitra fa izao tontolo goavana izao
          dia voarindra tsara nefa tsy misy hery iray mifehy. Ny lojika dia
          milaza fa tsy misy hery tsy manan-tsaina afaka hamorona izao karazana
          fiainana isan-karazany izao, na hanome ny fahendrena sy hery tsy
          manam-petra hita eny amin'ny izao tontolo izao. */}
        </p>
      </div>
      <div className="sec-bar-about"></div>
      <div className="sec-text-about pg-text-fmt-about">
        <p className="">
          {yahwehDescription2}
          {/* Fa izao no lazain'i <span className="David-about">יהוה</span>, Ilay
          nahary ny lanitra; <span className="David-about">יהוה</span> formed
          the no namorona ny tany sy nanao izy, Nisy nanorenany izy, ary tsy ho
          an-tsininy no naha-nahary Azy (Isaia 45:18). */}
        </p>
      </div>
      <div className="sec-bar-about"></div>
      <div className="sec-text-about pg-text-fmt-about">
        <p className="">
          {yahwehDescription3}
          {/* Misy fitsipika vaovao izay efa voaporofo tamin'ny alalan'ny arkeolojia
          manerantany. Ny mpahay arkeolojia dia miara-milaza tsy misy
          fisalasalana, fa ao ambadiky ny habakabaka goavana sy ny izao tontolo
          izao, misy fototra iray: ny finoana Andriamanitra tokana, ILAY
          ANDRIAMANITRA TOKANA, izay ny anarany hatramin'izao dia noforanina,
          nosaronina, nafenina, ary natahotra. Io anarana io,{" "}
          <span className="David-about">יהוה</span>, dia atao hoe "Ny
          Tsiambaratelo Lehibe Indrindra Etỳ An-Tany". */}
        </p>
      </div>
      <div className="sec-bar-about"></div>
      <div className="sec-text-about pg-text-fmt-about">
        <p className="">
          {yahwehDescription4}
          {/* Ao amin'ny Ohabolana 30:4 dia misy fanontaniana maromaro momba ny
          Mpahary ny Lanitra, fa ny roa tonga lafatra indrindra dia: Iza no
          anarany, ary Iza no anaran'ny Zanany, raha hahay ny hilaza? */}
        </p>
      </div>
      <div className="sec-bar-about"></div>
      <div className="sec-text-about pg-text-fmt-about">
        <p>
          {yahwehDescription5}
          {/* I Mosesy, talohan'ny fianjeran'i Egipta, dia nahafantatra fa
          zava-dehibe ny miantso an'Andriamanitra amin'ny anarany manokana
          (Eksodosy 3:13), ary io toe-javatra io mbola misy hatramin'izao.
          Talohan'ny fianjeran'i Babylona, ilay tanàna lehibe...{" "}
          <span className="David-about">יהוה&nbsp;בּן&nbsp;יהוה</span>, tIlay
          Zanak'i<span className="David-about">יהוה</span>, dia nahatakatra ny
          maha-zava-dehibe ny fiantsoana Azy amin'ny anarany manokana; fa tsy
          misy anarana hafa eo ambanin'ny lanitra omena ny olombelona, izay
          ahafahana voavonjy (Jaona 5:43; 1 Timoty 2:5-6; Asa 4:12). */}
        </p>
      </div>
      <div className="sec-bar-about"></div>
      <div className="sec-text-about pg-text-fmt-about pg-text-ltr-sp-6-about">
        <p>
          {yahwehDescription6}
          {/* Amin'ny fototry ny zavatra rehetra, tsy azo atao ny hiditra amin'ny
          fifandraisana amin'i <span className="David-about">יהוה</span> raha
          tsy manaiky an'i <span className="David-about">יהוה בּן יהוה</span>,
          Ilay Zanany Tiana (Jaona 10:9, 30; Jaona 14:6; Jaona 17:11). Noho
          izany, ny fahafantarana an'i <span className="David-about">יהוה</span>{" "}
          dia mitovy amin'ny fahitana ny zava-misy amin'ny fahatokiana azo
          antoka sy ny famonjena. Ny fanambarana ny anarany sy ny anaran'ny
          Zanany no fanalahidy hahatakarana ny finoana ara-Baiboly. */}
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
