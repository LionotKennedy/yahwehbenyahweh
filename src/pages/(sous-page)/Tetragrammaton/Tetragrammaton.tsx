
import "./style/tetragrammaton.css";
// import Tetragrama from "./image/Tetragrammaton.png";
import Yahweh from "./image/Yahweh.png";
import Yahweh_Ben_Yahweh from "./image/Yahweh_Ben_Yahweh.png";
import YAHWEH from "./image/YAHWEH-.png";
import YHWH from "./image/YHWH.png";
import bottomMedia from "./image/bottom-media.png";
import { fetchData_2 } from "../../../admin/api/api";
import { useEffect, useState } from "react";

export function Tetragrammaton() {
  // ------------ États ------------
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [description2, setDescription2] = useState("")

  useEffect(() => {
    fetchData_2("tetragrama").then((d) => {
      setTitle(d?.title || "")
      setDescription(d?.description || "")
      setDescription2(d?.description2 || "")
    })
    // console.log(title)
  }, []);

  return (
    <div className="tetragrammaton-page">
      <div id="pg-banner-tetra" className=""></div>
      <div id="top-bar-gold-tetra" className=""></div>
      <div className="div-width-tetra">
        <div id="Tetragrammaton" className="title-section-fol">
          {/* <img
            // src="/public/Tetragrammaton/image/Tetragrammaton.png"
            src={Tetragrama}
            alt="Tetragrammaton"
            className="width-pers1-tetra"
          /> */}
          {/* <h1 className="te-title">Tetragrammaton</h1> */}
          <h1 className="te-title">{title}</h1>
        </div>
        <div id="Yahweh">
          <img
            // src="/public/Tetragrammaton/image/Yahweh.png"
            src={Yahweh}
            alt="Yahweh"
            className="width-pers2-tetra"
          />
        </div>
        <div>
          <p className="pg-text-fmt-lrg-itl-tetra">
            <i>HEBREO HO AN'ILAY YAHWEH</i>
          </p>
        </div>
        <div className="sec-bar-tetra"></div>
        <div id="Yahweh">
          <img
            // src="/public/Tetragrammaton/image/Yahweh_Ben_Yahweh.png"
            src={Yahweh_Ben_Yahweh}
            alt="Yahweh Ben Yahweh"
            className="width-pers3-tetra"
          />
        </div>
        <div>
          <p className="pg-text-fmt-lrg-itl-tetra">
            <i>HEBREO HO AN'ILAY YAHWEH BEN YAHWEH</i>
          </p>
        </div>
        <div className="sec-bar-tetra"></div>
        <div>
          <p className="pg-text-fmt-lrg-tetra">
            <img
              className="Yahweh-img-tetra"
              // src="/public/Tetragrammaton/image/Yahweh.png"
              src={Yahweh}
              alt="Yahweh"
            />{" "}
            IZANY NO ANARAN'ANDRIAMANITRA ARAKA NY
            <br />
            FANORATANA AO AMIN'NY FITENY HEBREO.
          </p>
          <p className="pg-text-fmt-lrg-tetra">
            <img
              className="YAHWEH-CAP-img-tetra"
              // src="/public/Tetragrammaton/image/YAHWEH-.png"
              src={YAHWEH}
              alt="YAHWEH"
            />{" "}
            (
            <img
              className="Yahweh-img-tetra"
              // src="/src/pages/(sous-page)/Tetragrammaton/image/Yahweh.png"
              src={Yahweh}
              alt="Yahweh"
            />
            ) ANDRIAMANITRA NY FANEKENA
            <br />
            ISRAELY,{" "}
            <img
              className="YHWH-img-tetra"
              // src="/public/Tetragrammaton/image/YHWH.png"
              src={YHWH}
              alt="Yahweh"
            />
            , AO AMIN'NY HEBREO TALOHA.
          </p>
        </div>
        <div className="sec-bar-tetra"></div>
        <div>
          <p className="pg-text-fmt-lrg-tetra">
            {description}
            {/* ARAKA NY FOMBA JIOSY, NOHO NY FANAJANA,
            <br />
            TSY NATAO HANTSUININA NY ANARAN'ANDRIAMANITRA,
            <br />
            KA NOSOLOINA NY TENY HEBREO HO AN'ILAY
            <br />
            Tompo SY Andriamanitra.
            <br />
            REHEFA MISEO NY TENY Tompo SY Andriamanitra
            <br />
            AMIN'NY SORATRA LEHIBE SY KELY,
            <br />
            NY HEBREO TALOHA DIA MAMAKY */}
            <br />
            <img
              className="YHWH-img-tetra"
              // src="/public/Tetragrammaton/image/YHWH.png"
              src={YHWH}
              alt="Yahweh"
            />
            .
          </p>
          <p className="pg-text-fmt-lrg-tetra">
            <img
              className="YAHWEH-CAP-img-tetra"
              // src="/public)/Tetragrammaton/image/YAHWEH-.png"
              src={YAHWEH}
              alt="YAHWEH"
            />{" "}
            (
            <img
              className="Yahweh-img-tetra"
              // src="/public/Tetragrammaton/image/Yahweh.png"
              src={Yahweh}
              alt="Yahweh"
            />
            ) ANDRIAMANITRA NY FANEKENA
            <br />
            ISRAELY,{" "}
            <img
              className="YHWH-img-tetra"
              // src="/public/Tetragrammaton/image/YHWH.png"
              src={YHWH}
              alt="Yahweh"
            />
            , AO AMIN'NY HEBREO TALOHA.
          </p>
          <p className="pg-text-fmt-sm-tetra">
            REFERENCE: NY BAIBLY MASINA AMIN'NY DIKAN'NY MPAJAKA JAMES,
            <br />
            COPYRIGHT 1984, THOMAS NELSON PUBLISHERS, NASHVILLE, TN PEJY 763.
            <br />
            (HITA AO AMIN'NY RAKIPAHALALANA AO AMIN'NY FARAN'ITY BAIBLY ITY.)
            <br />
          </p>
          <p className="pg-text-fmt-lrg-tetra">
            {description2}
            {/* AMIN'NY TRANGAM-BOARY MARO DIA "TOMPO" NO ANARAM-BOSOTRA
            <br />
            MANJAKA AMIN'NY FANAJANA ANDRIAMANITRA, NA
            <br />
            SOLON'NY ANARANA MANOKANA
            <br /> */}
            <img
              className="YAHWEH-CAP-img-tetra"
              // src="/public/Tetragrammaton/image/YAHWEH-.png"
              src={YAHWEH}
              alt="YAHWEH"
            />{" "}
            (KJV-RSV "ILAY TOMPO").
          </p>
          <p className="pg-text-fmt-sm-tetra">
            REFERENCE: NY RAKIPAHALALAN'ILAY MPANDIKA BAIBLY, COPYRIGHT 1962,
            <br />
            TAHINY III, PEJY 150, ABINGDON PRESS.
          </p>
          <p className="pg-text-fmt-lrg-tetra">
            TAMIN'NY HEBREO TALOHA INDRIKA DIA NY ANARANA MASINA
            <br />
            NISEHO TAHINY NY TENY EFATRA NA
          </p>
          <p className="pg-text-fmt-lrg-tetra">
            TETRAGRAMMATON:{" "}
            <img
              className="YHWH-img-tetra"
              // src="/public/Tetragrammaton/image/YHWH.png"
              src={YHWH}
              alt="Yahweh"
            />{" "}
            (
            <img
              className="Yahweh-img-tetra"
              // src="/public/Tetragrammaton/image/Yahweh.png"
              src={Yahweh}
              alt="Yahweh"
            />
            ) TSIKY
            <br />
            MISY MARIKA NY ZANAPEONINA.
          </p>
          <p className="pg-text-fmt-sm-tetra">
            REFERENCE: NY RAKIPAHALALAN'ILAY MPANDIKA BAIBLY, COPYRIGHT 1962,
            <br />
            TAHINY II, PEJY 409, ABINGDON PRESS.
          </p>
        </div>
      </div>
      <div id="pg-btm-media-tetra">
        <img
          className="bottom-media-img-tetra"
          // src="/public/Tetragrammaton/image/bottom-media.png"
          src={bottomMedia}
        />
      </div>
      {/* Coucou 8 */}
    </div>
  );
}
export default Tetragrammaton;