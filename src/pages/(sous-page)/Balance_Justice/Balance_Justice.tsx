import "./style/balance_Justice.css";
import "./style/responsive.css";

// Importation des images
// import AbrahamFoundationImage from "./image/The_Abraham_Foundation.png";
import BottomMediaImage from "./image/bottom-media.jpg";
import { fetchData_2 } from "../../../admin/api/api";
import { useEffect, useState } from "react";
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


export function Balance_Justice() {
  const [titleBalance, setTitleBalance] = useState("")
  const [descriptionBalance1, setDescriptionBalance1] = useState("")
  const [descriptionBalance2, setDescriptionBalance2] = useState("")
  const [descriptionBalance3, setDescriptionBalance3] = useState("")
  const [descriptionBalance4, setDescriptionBalance4] = useState("")
  const [balanceImage, setBalanceImage] = useState("");
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
          { id: 12, name: "Balance_Justice", setter: setBalanceImage }
        ];

        sections.forEach(section => {
          const banner = sortedSectionbg.find((b: SectionMenuData) =>
            b.id === section.id || b.section === section.name
            // b.id === section.id || b.section_name === section.name
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
    fetchData_2("balance").then((d) => {
      setTitleBalance(d?.titlebalance || "")
      setDescriptionBalance1(d?.descriptionbalance1 || "")
      setDescriptionBalance2(d?.descriptionbalance2 || "")
      setDescriptionBalance3(d?.descriptionbalance3 || "")
      setDescriptionBalance4(d?.descriptionbalance4 || "")
    })
  }, []);

  return (
    <>
      <div id="pg-banner-bal" style={{ backgroundImage: `url(${balanceImage})` }}></div>
      <div id="top-bar-gold-bal"></div>

      <div id="The_Abraham_Foundation" className="title-section-fol">
        <h1 className="te-title">{titleBalance}</h1>
        {/* <img
          id="title-img-bal"
          src={AbrahamFoundationImage}
          alt="Ny Fondation Abraham - Fikambanana miaro ny zon'ny Hebreo Israelita"
        /> */}
      </div>

      <div className="sec-bar-bal pg-top-pd-mod-bal"></div>

      <div className="sec-text-bal pg-text-ttl-fmt-sm-bal pg-text-ttl-fmt-sm-p1-bal">
        <p>
          {descriptionBalance1}
          {/* Ny Fondation Abraham, Inc., dia natsangana ho an'ny tanjona manokana
          hanangona vola ho an'ny fiarovana ara-dalàna ny Hebreo Israelita tsy
          manan-karena sy tsy manan-tsiny ary ny hafa nofidin'ny Fondation. Ity
          vola ity dia manampy amin'ny fandoavana ny sarany mpisolovava, ny
          mpikaroka manokana, ny fanangonana sy ny fanontana ny
          antontan-taratasy ara-dalàna, ny dia, ary ny trano fandraisam-bahiny
          ho an'ny mpisolovava sy ny vavolombelona, ary maro hafa koa. */}
        </p>
      </div>

      <div className="sec-bar-bal pg-top-pd-mod-bal"></div>

      <div className="sec-text-bal pg-text-ttl-fmt-sm-bal pg-text-ttl-fmt-sm-p2-bal">
        <p>
          {descriptionBalance2}
          {/* Ny Fondation no tompon'andraikitra amin'ny fanangonana ny ekipa
          ara-dalàna izay nandritra ny enina ambin'ny folo taona dia nahomby
          tamin'ny fiarovana an'i{" "}
          <span className="David-bal">יהוה&nbsp;בּן&nbsp;יהוה</span>, ny
          Lehiben'ny Firenen'i <span className="David-bal">יהוה</span> sy ny
          Hebreo Israelita hafa. Ny ekipa ireo dia nahazo didim-pitsarana tsy
          manan-tsiny maro, nahazo fanafahana amin'ny fanendrena maro,
          nifampiraharaha tamin'ny fifanakalozana tolo-kevitra tsy mbola nisy
          toy izany, nahazo famotsoran-dàlana aloha, ary nanampy ny maro hafa
          nitady torohevitra momba ny raharaha heloka bevava sy sivily. */}
        </p>
      </div>

      <div className="sec-bar-bal pg-top-pd-mod-bal"></div>

      <div className="sec-text-bal pg-text-ttl-fmt-sm-bal pg-text-ttl-fmt-sm-p3-bal">
        <p>
          {descriptionBalance3}
          {/* Saingy ny ady ara-dalàna dia tsy nifarana tamin'ny niakarana an'i{" "}
          <span className="David-bal">יהוה&nbsp;בּן&nbsp;יהוה</span>. Noho izany,
          ny Fondation dia tsy maintsy mbola vonona hihatra ny fanamby vaovao
          rehetra, ary mandray ny fanohananao mandra-pahatongan'ny Fiverenan'i
          Kristy faharoa. */}
        </p>
      </div>

      <div className="sec-text-bal pg-text-ttl-fmt-ctr-bal">
        <p>
          {descriptionBalance4}
          {/* Ny Fondation Abraham
          <br />
          P.O. Box 530883
          <br />
          Miami, FL 33153 */}
        </p>
      </div>

      <div>
        <img
          className="bottom-media-img-bal"
          src={BottomMediaImage}
          alt="Sary fanampiny momba ny asa sosialy sy ara-dalàna"
        />
      </div>
    </>
  );
}

export default Balance_Justice;
