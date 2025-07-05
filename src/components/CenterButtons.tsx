

// import { Link } from "react-router-dom";
// import "./styles/centerButtons.css";

// // Import des images locales
// import TetragrammatonImg from "./images/center-buttons/Tetragrammaton.jpg";
// import NationYahwehImg from "./images/center-buttons/The_Nation_of_Yahweh.jpg";
// import UniverseYahwehImg from "./images/center-buttons/Universe_of.jpg";
// import FeastsYahwehImg from "./images/center-buttons/Feasts.jpg";
// import GoodNewsImg from "./images/center-buttons/Good_News.jpg";
// import CrucifixionImg from "./images/center-buttons/Crucifixion.jpg";
// import ShockingRevelationsImg from "./images/center-buttons/Shock.jpg";
// import SabbathImg from "./images/center-buttons/Sab.jpg";
// import ErosionConstitutionImg from "./images/center-buttons/Erosion.jpg";
// import OperationWordWarImg from "./images/center-buttons/Op_WW.jpg";
// import BalanceJusticeImg from "./images/center-buttons/Balance_Justice.jpg";
// import OnlineBookstoreImg from "./images/center-buttons/ON-Line_Bookstore.jpg";


// interface CenterButton {
//   href: string;
//   image: string;
//   alt: string;
//   external?: boolean;
// }


// const centerButtons: CenterButton[] = [
//   {
//     href: "/Tetragrammaton",
//     image: TetragrammatonImg,
//     alt: "Tetragrammaton",
//   },
//   {
//     href: "/The_Nation_of_Yahweh",
//     image: NationYahwehImg,
//     alt: "The Nation of Yahweh",
//   },
//   {
//     href: "/The_Universe_of_Yahweh",
//     image: UniverseYahwehImg,
//     alt: "The Universe of Yahweh",
//   },
//   {
//     href: "/The_Feasts_of_Yahweh",
//     image: FeastsYahwehImg,
//     alt: "The Feasts of Yahweh",
//   },
//   {
//     href: "/The_Good_News_of_Yahweh",
//     image: GoodNewsImg,
//     alt: "The Good News of Yahweh",
//   },
//   {
//     href: "/The_Crucifixion",
//     image: CrucifixionImg,
//     alt: "The Crucifixion",
//   },
//   {
//     href: "/Shocking_Revelations",
//     image: ShockingRevelationsImg,
//     alt: "Shocking Revelations",
//   },
//   {
//     href: "/The_Sabbath",
//     image: SabbathImg,
//     alt: "The Sabbath",
//   },
//   {
//     href: "/Erosion_of_The_Constitution",
//     image: ErosionConstitutionImg,
//     alt: "Erosion of The Constitution",
//   },
//   {
//     href: "/Operation_Word_War",
//     image: OperationWordWarImg,
//     alt: "Operation Word War",
//   },
//   {
//     href: "/Balance_Justice",
//     image: BalanceJusticeImg,
//     alt: "Balance Justice",
//   },
//   {
//     href: "https://shop.yahwehbenyahweh.com/",
//     image: OnlineBookstoreImg,
//     alt: "On-line Book Store",
//     external: true,
//   },
// ];
// // const images: ImageSection = Btn_img
// export function CenterButtons() {
//   return (
//     <div className="center-buttons-home">
//       {centerButtons.map((button, index) => (
//         <div key={index} className="center-button-home">
//           {button.external ? (
//             <a 
//               href={button.href} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               aria-label={button.alt}
//             >
//               <img
//                 src={button.image}
//                 alt={button.alt}
//                 className="center-button-img-home"
//                 loading="lazy"
//               />
//             </a>
//           ) : (
//             <Link 
//               to={button.href}
//               aria-label={button.alt}
//             >
//               <img
//                 src={button.image}
//                 alt={button.alt}
//                 className="center-button-img-home"
//                 loading="lazy"
//               />
//             </Link>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
























































import { Link } from "react-router-dom";
import "./styles/centerButtons.css";
import buttonsData from "../data/bouton-img.json";

interface CenterButton {
  id: number;
  href: string;
  path: string;
  alt: string;
  external?: boolean;
}

export function CenterButtons() {
  // Création dynamique des boutons à partir du JSON
  const centerButtons: CenterButton[] = buttonsData.boutons.map((button) => {
    // Génération du href basé sur l'alt text (vous pouvez adapter cette logique)
    const href = button.alt === "On-line Book Store" 
      ? "https://shop.yahwehbenyahweh.com/"
      : `/${button.alt.replace(/\s+/g, '_')}`;
    
    return {
      id: button.id,
      href,
      path: button.path,
      alt: button.alt,
      external: href.startsWith('http')
    };
  });

  return (
    <div className="center-buttons-home">
      {centerButtons.map((button) => (
        <div key={button.id} className="center-button-home">
          {button.external ? (
            <a 
              href={button.href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={button.alt}
            >
              <img
                src={button.path} // Utilisez directement le chemin du JSON
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
                src={button.path} // Utilisez directement le chemin du JSON
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