

import { Link } from "react-router-dom";
import "./styles/centerButtons.css";

// Import des images locales
import TetragrammatonImg from "./images/center-buttons/Tetragrammaton.jpg";
import NationYahwehImg from "./images/center-buttons/The_Nation_of_Yahweh.jpg";
import UniverseYahwehImg from "./images/center-buttons/Universe_of.jpg";
import FeastsYahwehImg from "./images/center-buttons/Feasts.jpg";
import GoodNewsImg from "./images/center-buttons/Good_News.jpg";
import CrucifixionImg from "./images/center-buttons/Crucifixion.jpg";
import ShockingRevelationsImg from "./images/center-buttons/Shock.jpg";
import SabbathImg from "./images/center-buttons/Sab.jpg";
import ErosionConstitutionImg from "./images/center-buttons/Erosion.jpg";
import OperationWordWarImg from "./images/center-buttons/Op_WW.jpg";
import BalanceJusticeImg from "./images/center-buttons/Balance_Justice.jpg";
import OnlineBookstoreImg from "./images/center-buttons/ON-Line_Bookstore.jpg";


interface CenterButton {
  href: string;
  image: string;
  alt: string;
  external?: boolean;
}


const centerButtons: CenterButton[] = [
  {
    href: "/Tetragrammaton",
    image: TetragrammatonImg,
    alt: "Tetragrammaton",
  },
  {
    href: "/The_Nation_of_Yahweh",
    image: NationYahwehImg,
    alt: "The Nation of Yahweh",
  },
  {
    href: "/The_Universe_of_Yahweh",
    image: UniverseYahwehImg,
    alt: "The Universe of Yahweh",
  },
  {
    href: "/The_Feasts_of_Yahweh",
    image: FeastsYahwehImg,
    alt: "The Feasts of Yahweh",
  },
  {
    href: "/The_Good_News_of_Yahweh",
    image: GoodNewsImg,
    alt: "The Good News of Yahweh",
  },
  {
    href: "/The_Crucifixion",
    image: CrucifixionImg,
    alt: "The Crucifixion",
  },
  {
    href: "/Shocking_Revelations",
    image: ShockingRevelationsImg,
    alt: "Shocking Revelations",
  },
  {
    href: "/The_Sabbath",
    image: SabbathImg,
    alt: "The Sabbath",
  },
  {
    href: "/Erosion_of_The_Constitution",
    image: ErosionConstitutionImg,
    alt: "Erosion of The Constitution",
  },
  {
    href: "/Operation_Word_War",
    image: OperationWordWarImg,
    alt: "Operation Word War",
  },
  {
    href: "/Balance_Justice",
    image: BalanceJusticeImg,
    alt: "Balance Justice",
  },
  {
    href: "https://shop.yahwehbenyahweh.com/",
    image: OnlineBookstoreImg,
    alt: "On-line Book Store",
    external: true,
  },
];
// const images: ImageSection = Btn_img
export function CenterButtons() {
  return (
    <div className="center-buttons-home">
      {centerButtons.map((button, index) => (
        <div key={index} className="center-button-home">
          {button.external ? (
            <a 
              href={button.href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={button.alt}
            >
              <img
                src={button.image}
                alt={button.alt}
                className="center-button-img-home"
                loading="lazy"
              />
            </a>
          ) : (
            <Link 
              to={button.href}
              aria-label={button.alt}
            >
              <img
                src={button.image}
                alt={button.alt}
                className="center-button-img-home"
                loading="lazy"
              />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

