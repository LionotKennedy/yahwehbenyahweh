import { Link, useLocation } from "react-router-dom";
import BookImage from "./image/Book_of_The_Month.png";
import OrderNowImage from "./image/Order_Now.png";
import BottomMediaImage from "./image/bottom-media.jpg";
import "./style/book_of_the_Month.css";
import "./style/responsive.css";
import { useEffect, useState } from "react";
import { getImageUrl } from "../../../admin/api/homeImage2";

export function Book_of_the_Month() {

  const location = useLocation();
  const banners = location.state?.banners || [];
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    if (banners.length > 0) {
      interface Banner {
        id: number;
        path: string;
        // Add other properties if needed
      }
      const banners: Banner[] = location.state?.banners || [];
      const imageWithId4: Banner | undefined = banners.find((banner: Banner) => banner.id === 4);
      if (imageWithId4) {
        // console.log("Image avec ID 4:", imageWithId4);
        const imageUrl = getImageUrl(imageWithId4.path);
        // console.log("URL de l'image:", imageUrl);
        setBackgroundImage(imageUrl); // Stocke l'URL de l'image dans l'état
      } else {
        console.log("Aucune image trouvée avec l'ID 4 dans les bannières");
      }
    }
  }, [banners]);

  return (
    <>
      <div id="pg-banner-month" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}></div>
      <div id="top-bar-gold-month"></div>
      <div className="botm-title-text-month">
        <strong>MIARAHABA AMINAY FAHAMAKIANA ISAM-BOLANA!!</strong>
      </div>
      <div className="sec-bar-month"></div>
      <div className="botm-title-text-itl-month">
        <i>
          Ny Boky isam-bolana dia nosoratana ho an'ireo
          <br />
          mifidy fianarana ny Saina "Masina" an'i
          <br />
          Yahweh Ben Yahweh.
        </i>
      </div>
      <div className="sec-bar-month"></div>
      <div className="view-12-months">
        <Link to="/Books_for_the_Year" className="style-month">
          JEREO NY 12 VOLANA
        </Link>
      </div>
      <div className="sec-line-month"></div>
      <div className="botm-title-text-sm-month">
        <span className="style-colo-month">MANORINA FOTOTRA MAHERY</span>
        <br />
      </div>
      <div className="botm-container-month">
        <div className="botm-book-size-container-month">
          <div className="botm-book-size-month">
            <a
              href="https://shop.yahwehbenyahweh.com/index.php/building-a-strong-foundation.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="botm-book-size-img-month"
                src={BookImage}
                alt="Manorina Fototra Mahery"
              />
            </a>
            <br />
            <br />
          </div>
          <div className="botm-button-size-month">
            <a
              href="https://shop.yahwehbenyahweh.com/index.php/building-a-strong-foundation.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="botm-button-size-img-month"
                src={OrderNowImage}
                alt="Kaomandy izao"
              />
            </a>
          </div>
        </div>
        <div className="botm-book-exerpt-container-month">
          <p className="botm-book-exerpt-month">
            Ity fahalalana ity dia ho an'ireo ray aman-dreny izay tapa-kevitra
            ny hananan'ny zanany ny maha-mpisorona andriamanitra azy. Na ny ray
            aman-dreny aza dia tsy maintsy mivadika ho toy ny ankizy, raha
            tianareo ny maha-mpisorona andriamanitra, izay lanitra. Ka ho an'ny
            ray aman-dreny, manana andraikitra roa ianareo, dia ny fampiofanana
            NY TENANAREO sy NY ZANAKAREO amin'ny "fahalalana" an'i Yahweh. Ny
            tanjon'ny fahalalana an'i Yahweh dia ny hanome zo anao sy ny zanakao
            hiditra ao amin'ny Fanjakan'ny Lanitra.
          </p>
          <p className="botm-book-exerpt-month">
            Ny Dingana Voalohany dia ny "hanomboka" ny tenanao sy ny zanakao
            amin'ny fahalalana an'i Yahweh. Izany dia midika fa ny fahalalana
            an'i Yahweh dia tsy maintsy ho eo amin'ny fiandohana sy ny ampahany
            voalohany amin'ny fianarana. Tsy maintsy MANOMBOKA ary MANOMBOKA
            amin'ny fahalalana an'i Yahweh ianao. Ny zanakao dia tsy maintsy
            TERAKA amin'ny alalan'ny fahalalana an'i Yahweh. Ny fahalalana an'i
            Yahweh dia tsy maintsy ho ny FIAKARANA. Ny ray aman-dreny no tokony
            ho mpamorona ity hetsika ity. Ny fahalalana an'i Yahweh dia tsy
            maintsy ho ny TOETRAN'NY FIANDOHANA, ny LOHARANO, ary ny ANTONY
            VOALOHANY amin'ny fianarana rehetra. Ny asa rehetra ataon'ny zanakao
            dia tsy maintsy manomboka amin'ny "fahalalana" an'i Yahweh.
          </p>
        </div>
      </div>
      <p className="botm-bottom-page-month"></p>
      <div>
        <img
          className="bottom-media-img-B"
          src={BottomMediaImage}
          alt="Media bottom"
        />
      </div>
    </>
  );
}

export default Book_of_the_Month;
