import "./style/operation_Word_War.css";
import "./style/responsive.css";

// Importation des images
import DivBarImage from "./image/div-bar.png";
import AuthenticImage from "./image/Authentic.jpg";
import BottomMediaImage from "./image/bottom-media.jpg";

export function Operation_Word_War() {
  return (
    <>
      <div id="pg-banner-ope"></div>
      <div id="top-bar-gold-ope"></div>

      <div className="sec-text-ope pg-text-ttl-fmt-ope">
        <p>
          Tsy tamin'ity taona ity no noforonina ny vaovao sandoka!
          <br />
          Tsy tamin'ity folo taona ity no noforonina ny vaovao sandoka!
          <br />
          Tsy tamin'ity taonjato aza no nanombohan'ny vaovao sandoka!
        </p>
      </div>

      <div className="pg-title-break-ope">
        <img
          className="bottom-media-img-ope"
          src={DivBarImage}
          alt="Sakana mizara ny votoaty"
        />
      </div>

      <div className="sec-text-ope pg-text-fmt-ope">
        <p className="p-mrg-fmt-ope">
          Ny Meggido Report dia vaovao sandoka tamin'ny taona 80 sy 90, izay
          mampanao ny Operation Word War - tahaka ny tantara lehibe rehetra -
          MARINA!
        </p>
      </div>

      <div className="pg-title-break-ope">
        <img
          className="bottom-media-img-ope"
          src={DivBarImage}
          alt="Sakana mizara ny votoaty"
        />
      </div>

      <div className="sec-text-ope pg-text-fmt-ope">
        <p className="p-mrg-fmt-ope">
          Ity tantara voarakitra sy voamarina ity dia momba ny governemanta
          federaly tsy misy famindram-po, masiaka, ary saro-piaro, ary ny fomba
          tsy nampahafatiny lehilahy mainty iray hanandratra ny mpiara-belona
          aminy avy any amin'ny fahantrana ho any amin'ny harena.
        </p>
      </div>

      <div className="pg-title-break-ope">
        <img
          className="bottom-media-img-ope"
          src={DivBarImage}
          alt="Sakana mizara ny votoaty"
        />
      </div>

      <div className="sec-text-ope pg-text-fmt-ope">
        <p className="p-mrg-fmt-ope">
          Tsy maintsy nisy ilay lehilahy, Yahweh Ben Yahweh, tsy nahomby, satria
          Amerika dia governemanta masina, ary noho ny antony sasany dia izy
          irery no afaka manampy anao. Noho izany, noho ny nampiseho ny olona fa
          tsy maintsy ho andevo an'ny rafitra, Yahweh Ben Yahweh dia voasazy
          faty.
        </p>
      </div>

      <div className="pg-title-break-ope">
        <img
          className="bottom-media-img-ope"
          src={DivBarImage}
          alt="Sakana mizara ny votoaty"
        />
      </div>

      <div className="sec-text-ope pg-text-fmt-ope">
        <p className="p-mrg-fmt-ope">
          Ny antontan-taratasy rohy eto amin'ity pejy ity dia tokony hamakiana
          ao amin'ny toerana mangina sy mahazo aina mba hahatsapa tanteraka ny
          horohoron'ity governemanta ity ary ny fomba mety hisy fiantraikany
          aminao...
        </p>
      </div>

      <div id="Authentic">
        <a
          href="pdf/Operation_Word_War_Web.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-size-ope"
            src={AuthenticImage}
            alt="Rakitra marina momba ny Operation Word War"
          />
        </a>
      </div>

      <div>
        <img
          className="bottom-media-img-ope"
          src={BottomMediaImage}
          alt="Sary fanampiny momba ny Operation Word War"
        />
      </div>
    </>
  );
}

export default Operation_Word_War;
