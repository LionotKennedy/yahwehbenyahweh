
import "./style/the_Crucifixion.css";
import "./style/responsive.css";
// Importation des images
import NoImg from "./image/No.png";
import BirdImg from "./image/Bird.png";
import { useEffect, useState } from "react";
import { fetchData_2 } from "../../../admin/api/api";
import { MenuAPI, getImageUrl } from "../../../admin/api/menuImage";

interface SectionMenuData {
  id: number;
  // section_name: string | null;
  // path: string;
  section: string | null;
  src: string;
  created_at: string;
  updated_at: string;
}


export function The_Crucifixion() {
  //  const [titleCrucifixion, setTitleCrucifixion] = useState("")
  const [descriptionCrucifixion1, setDescriptionCrucifixion1] = useState("")
  const [descriptionCrucifixion2, setDescriptionCrucifixion2] = useState("")
  const [descriptionCrucifixion3, setDescriptionCrucifixion3] = useState("")
  const [descriptionCrucifixion4, setDescriptionCrucifixion4] = useState("")
  const [descriptionCrucifixion5, setDescriptionCrucifixion5] = useState("")
  const [descriptionCrucifixion6, setDescriptionCrucifixion6] = useState("")
  const [descriptionCrucifixion7, setDescriptionCrucifixion7] = useState("")
  const [descriptionCrucifixion8, setDescriptionCrucifixion8] = useState("")
  const [descriptionCrucifixion9, setDescriptionCrucifixion9] = useState("")
  const [descriptionCrucifixion10, setDescriptionCrucifixion10] = useState("")
  const [descriptionCrucifixion11, setDescriptionCrucifixion11] = useState("")
  const [crucifixionImage, setCrucifixionImage] = useState("");
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
          { id: 6, name: "The_Crucifixion", setter: setCrucifixionImage }
        ];

        sections.forEach(section => {
          interface BannerData {
            id: number;
            section: string | null;
            src: string;
            // section_name: string | null;
            // path: string;
            created_at: string;
            updated_at: string;
          }

          const banner: BannerData | undefined = sortedSectionbg.find(
            (b: BannerData) =>
              // b.id === section.id || b.section_name === section.name
              b.id === section.id || b.section === section.name
          );
          if (banner) {
            section.setter(getImageUrl(banner.src));
            // section.setter(getImageUrl(banner.path));
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
    fetchData_2("crucifixion").then((d) => {
      // setTitleCrucifixion(d?.titlecrucifixion || "")
      setDescriptionCrucifixion1(d?.descriptioncrucifixion1 || "")
      setDescriptionCrucifixion2(d?.descriptioncrucifixion2 || "")
      setDescriptionCrucifixion3(d?.descriptioncrucifixion3 || "")
      setDescriptionCrucifixion4(d?.descriptioncrucifixion4 || "")
      setDescriptionCrucifixion5(d?.descriptioncrucifixion5 || "")
      setDescriptionCrucifixion6(d?.descriptioncrucifixion6 || "")
      setDescriptionCrucifixion7(d?.descriptioncrucifixion7 || "")
      setDescriptionCrucifixion8(d?.descriptioncrucifixion8 || "")
      setDescriptionCrucifixion9(d?.descriptioncrucifixion9 || "")
      setDescriptionCrucifixion10(d?.descriptioncrucifixion10 || "")
      setDescriptionCrucifixion11(d?.descriptioncrucifixion11 || "")
    })
  }, []);
  return (
    <div id="backdrop" className="crucifixion-page">
      <div id="pg-banner-cru" style={{ backgroundImage: `url(${crucifixionImage})` }}></div>
      <div id="top-bar-gold-cru"></div>
      <div id="No-cru">
        <img
          src={NoImg}
          alt="Tsy"
          className="width-cru"
        />
      </div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p0">
        <p>
          {descriptionCrucifixion1}
          {/* Tamin'ny 7 Novambra 1990, ny Governemantan'i Etazonia dia naka an'i{" "}
          <span className="David-cru">יהוה&nbsp;בּן&nbsp;יהוה</span> sy ny 16
          ny mpanaraka Azy tamin'ny fanafihana maika nataon'ny mpampihorohoro
          ny fivavahana. Araka ny fanaon'ny F.B.I. 25 taona mba hanakorontanana
          sy hanalamany ny fikambanana mainty hoditra, an'arivony ny
          mpiasam-panjakana no nandray anjara tamin'io fanafihana io. Araka ny
          fijoroan'ny mpikasa F.B.I. iray, ny Firenen'i{" "}
          <span className="David-cru">יהוה</span> dia nohararaotina mafy
          efa ho an'ny 10 taona. */}
        </p>
      </div>
      <div className="sec-bar-cru"></div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p1">
        <p>
          {descriptionCrucifixion2}
          {/* Tany amin'ny 7 faritra samihafa, ny mpikambana ao amin'ny Firenen'i{" "}
          <span className="David-cru">יהוה</span> dia nosamborina, nofatorana
          tanana, nosokafana akanjo, ary natory tany an-dalambe mangatsiaka sy
          mafy. */}
        </p>
      </div>
      <div className="sec-bar-cru"></div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p2">
        <p>
          {descriptionCrucifixion3}
          {/* Tsy misy porofo marina hanenjehana, ny GOVERNEMANTA FEDERALY dia
          nanendry ny Firenen'i <span className="David-cru">יהוה</span> amin'ny
          R.I.C.O. (Racketeering Influenced Corrupt Organizations), nametraka
          fitsipika mampidi-doza. Noho ny fanentanana momba ny FAHAFAHAM-
          PANAHY voalohany izaro manohana ny fivavahana, maro ny mpahay lalàna
          sy ny mpahay fivavahana no gaga nefa tsy niseho fahatezerana. */}
        </p>
      </div>
      <div className="sec-bar-cru"></div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p3">
        <p>
          {descriptionCrucifixion4}
          {/* Ho vavolombelony lehibe, ny GOVERNEMANTA FEDERALY dia niankina tamin'i
          ROBERT "LYING BOB" ROZIER, mpamono olona maro niaiky heloka sy
          mpandany rongony. ("LYING BOB" dia tsy nahazo vavolombelona ny
          ray aman-dreniny momba ny toetrany mandritra ny fitsarana.) Ho
          valim-pitia ny fijoroany ho vavolombelona, "LYING BOB" dia nahazo
          famotsoran-keloka rehefa niaiky heloka nahafaty olona 4. */}
        </p>
      </div>
      <div className="sec-bar-cru"></div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p4">
        <p>
          {descriptionCrucifixion5}
          {/* Nianiana, ny manampahefana ambony tao amin'ny DEPARTEMAN'NY
          JUSTISIA dia niaiky fa malemy ny raharaha ary ny fanendrena R.I.C.O.
          dia nanome azy "NY TOMBONTsoa HAHATRATRA". */}
        </p>
      </div>
      <div className="sec-bar-cru"></div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p5">
        <p>
          {descriptionCrucifixion6}
          {/* Rehefa nihaino ny porofo ny mpitsara ao amin'ny fitsarana
          eo an-toerana, tsy misy ny korontana ny fanendrena R.I.C.O.
          federaly, ny mpitsara dia namoaka didim-pitsarana haingana sy
          MIARAKA amin'ny "TSY MANAN-TSINY" amin'ny fanendrena rehetra.
          "TSY MANAN-TSINY" ho an'ny mpampanoa lalàna rehetra. */}
        </p>
      </div>
      <div className="sec-bar-cru"></div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p6">
        <p>
          {descriptionCrucifixion7}
          {/* Rehefa 5 andro sy sasany nieritreritra, ny mpitsara federaly dia
          nitaraina in-efatra ny tsy fahafahany miray hevitra. Very
          hevitra izy ireo. Farany, dia nanameloka an'i{" "}
          <span className="David-cru">יהוה&nbsp;בּן&nbsp;יהוה</span> tamin'ny
          "TSIKOMBANA HANATARANA R.I.C.O." noho ny VERY HEVITRA sy NY TSY
          FAHAIZANA. */}
        </p>
      </div>
      <div className="sec-bar-cru"></div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p7">
        <p>
          {descriptionCrucifixion8}
          {/* Na dia eo aza ny fahitantsika ankehitriny fa ny lainga sy ny
          fanodikodinana ny rafitra mpitsara, ny governemanta dia naniraka an'i{" "}
          <span className="David-cru">יהוה&nbsp;בּן&nbsp;יהוה</span> ho any
          am-ponja mba hitondra sazy 18 taona. Nandany 6 taona tao amin'ny
          FONJA LEWISBURG, ny fonja ratsy indrindra ao amin'ny RAFITRA
          FANASIAN'NY E.U., any Lewisburg, Pennsylvania, ary nandany fotoana
          any amin'ny FCI Raybrook any Raybrook, New York. */}
        </p>
      </div>
      <div className="sec-bar-cru"></div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p8">
        <p>
          {descriptionCrucifixion9}
          {/* Mandritra ny fotoana voalohany tany am-ponja,{" "}
          <span className="David-cru">יהוה&nbsp;בּן&nbsp;יהוה</span> dia
          niharan'ny fanararaotana mafy. Natao tao amin'ny efitra irery izy,
          tsy nomena sakafo, tsy nandray fandroana, tsy nahazo ny Baiboly, ary
          nomena fanafody tsy nahazoany. Ny gadra hafa koa dia tsy nahazo
          fanampiana ara-pitsaboana maika noho ny fifandraisany Aminy. */}
        </p>
      </div>
      <div className="sec-bar-cru"></div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p9">
        <p>
          {descriptionCrucifixion10}
          {/* <span className="David-cru">יהוה&nbsp;בּן&nbsp;יהוה</span> dia
          nandany ny ampahatelon'ny sazy 18 taony tany am-ponja tamin'ny
          fanerena "MAFy" any Miami, Florida. */}
        </p>
      </div>
      <div className="sec-bar-cru"></div>
      <div className="sec-text-cru pg-text-fmt-cru pg-text-fmt-p10">
        <p>
          {descriptionCrucifixion11}
          {/* Araka ny faminaniana, i KRISTY dia novadihana tamin'ny tananan'ny
          manampahefana amin'ny alalan'i JODASY.{" "}
          <span className="David-cru">יהוה&nbsp;בּן&nbsp;יהוה</span> kosa dia
          novadihana tamin'ny alalan'i JODASY tamin'ny tananan'ny GOVERNEMANTAN'I
          E.U. izay manana lalàna miaro ny fahalalahana ara-pivavahana. */}
        </p>
      </div>
      <div className="sec-text-cru pg-text-fmt-ctr-cru">
        <p>
          <strong>
            ROHY VAOVAO MOMBA NY FAMONJENA,
            <br />
            MANAFATRA NY BOKY{" "}
            <a
              href="https://shop.yahwehbenyahweh.com/index.php/the-crucifixion-of-the-messiah.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              ETY
            </a>
          </strong>
        </p>
      </div>
      <div id="Bird">
        <img
          className="width-cru2"
          src={BirdImg}
          alt="Vorona"
        />
      </div>
      <div id="top-bar-gold-cru"></div>
    </div>
  );
}

export default The_Crucifixion;