

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










// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { toast } from 'react-hot-toast';
// import { GalleryAPI, getImageUrl } from "../admin/api/homeImage2";
// import "./styles/centerButtons.css";
// import "./styles/centerButtons2.css";

// interface GalleryImage {
//   id: number;
//   path: string;
//   alt: string;
//   created_at: string;
//   updated_at: string;
// }

// interface CenterButton {
//   id: number;
//   href: string;
//   path: string;
//   alt: string;
//   external?: boolean;
// }

// export function CenterButtons() {
//   const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchGalleryImages = async () => {
//       try {
//         setLoading(true);
//         const { success, data, message } = await GalleryAPI.fetchAll();
        
//         if (success && data) {
//           // Trier les images par ID pour avoir un ordre cohérent
//           const sortedImages = data.sort((a: GalleryImage, b: GalleryImage) => a.id - b.id);
//           setGalleryImages(sortedImages);
//         } else {
//           toast.error(message || "Erreur lors du chargement de la galerie");
//           setError(message || "Erreur inconnue");
//         }
//       } catch (err) {
//         console.error("Erreur lors de la récupération des images:", err);
//         toast.error("Erreur lors du chargement de la galerie");
//         setError(err instanceof Error ? err.message : "Erreur inconnue");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGalleryImages();
//   }, []);

//   // Création dynamique des boutons à partir des données de l'API
//   const centerButtons: CenterButton[] = galleryImages.map((image) => {
//     // Génération du href basé sur l'ID ou l'alt text (adaptez cette logique selon vos besoins)
//     const href = image.id === 1  // Exemple: le premier bouton pourrait être un lien externe
//       ? "https://shop.yahwehbenyahweh.com/"
//       : `/${image.alt.replace(/\s+/g, '_')}`;
    
//     return {
//       id: image.id,
//       href,
//       path: getImageUrl(image.path), // Utilisez getImageUrl pour avoir l'URL complète
//       alt: image.alt,
//       external: href.startsWith('http')
//     };
//   });

//   if (loading) {
//     return (
//       <div className="center-buttons-home loading">
//         <div className="loader">Chargement des images...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="center-buttons-home error">
//         <p>Erreur: {error}</p>
//         <button onClick={() => window.location.reload()}>Réessayer</button>
//       </div>
//     );
//   }

//   return (
//     <div className="center-buttons-home">
//       {centerButtons.map((button) => (
//         <div key={button.id} className="center-button-home">
//           {button.external ? (
//             <a 
//               href={button.href} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               aria-label={button.alt}
//             >
//               <img
//                 src={button.path}
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
//                 src={button.path}
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







// // CenterButtons.tsx
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { GalleryAPI, getImageUrl } from "../admin/api/homeImage2"; // chemin vers votre api
// import "./styles/centerButtons.css";

// interface GalleryItem {
//   id: number;
//   path: string;
//   alt: string;
// }

// export function CenterButtons() {
//   const [items, setItems] = useState<GalleryItem[]>([]);

//   useEffect(() => {
//     GalleryAPI.fetchAll()
//       .then((res) => {
//         if (res.success) setItems(res.data);
//       })
//       .catch(() => {
//         /* déjà toasté dans l’API */
//       });
//   }, []);

//   // On s’assure d’avoir exactement 12 éléments, triés par id
//   const buttons = Array.from({ length: 12 }, (_, i) => {
//     const id = i + 1;
//     const found = items.find((g) => g.id === id);
//     return {
//       id,
//       href: id === 1 ? "https://shop.yahwehbenyahweh.com/" : `/gallery-${id}`,
//       path: found ? getImageUrl(found.path) : "/placeholder.svg",
//       alt: found?.alt || `Gallery ${id}`,
//       external: id === 1,
//     };
//   });

//   return (
//     <div className="center-buttons-home">
//       {buttons.map((btn) => (
//         <div key={btn.id} className="center-button-home">
//           {btn.external ? (
//             <a href={btn.href} target="_blank" rel="noopener noreferrer" aria-label={btn.alt}>
//               <img src={btn.path} alt={btn.alt} className="center-button-img-home" loading="lazy" />
//             </a>
//           ) : (
//             <Link to={btn.href} aria-label={btn.alt}>
//               <img src={btn.path} alt={btn.alt} className="center-button-img-home" loading="lazy" />
//             </Link>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }





















// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { GalleryAPI, getImageUrl } from "../admin/api/homeImage2"; // chemin vers ton api.ts
// import "./styles/centerButtons.css";

// interface GalleryImage {
//   id: number;
//   path: string;
//   alt: string;
//   created_at: string;
//   updated_at: string;
// }

// export function CenterButtons() {
//   const [images, setImages] = useState<GalleryImage[]>([]);

//   useEffect(() => {
//     GalleryAPI.fetchAll()
//       .then((res) => {
//         if (res.success) setImages(res.data);
//       })
//       .catch(() => {
//         /* toast déjà géré dans l’API */
//       });
//   }, []);

//   // On limite à 12 images (l’API en renvoie déjà 12)
//   const galleryButtons = images.slice(0, 12).map((img) => ({
//     id: img.id,
//     href: img.alt === "On-line Book Store"
//       ? "https://shop.yahwehbenyahweh.com/"
//       : `/${img.alt.replace(/\s+/g, "_")}`,
//     path: getImageUrl(img.path),
//     alt: img.alt,
//     external: img.alt === "On-line Book Store",
//   }));

//   return (
//     <div className="center-buttons-home">
//       {galleryButtons.map((btn) => (
//         <div key={btn.id} className="center-button-home">
//           {btn.external ? (
//             <a
//               href={btn.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={btn.alt}
//             >
//               <img
//                 src={btn.path}
//                 alt={btn.alt}
//                 className="center-button-img-home"
//                 loading="lazy"
//               />
//             </a>
//           ) : (
//             <Link to={btn.href} aria-label={btn.alt}>
//               <img
//                 src={btn.path}
//                 alt={btn.alt}
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



































// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { toast } from 'react-hot-toast';
// import { getImageUrl, GalleryAPI } from "../admin/api/homeImage2";
// import "./styles/centerButtons.css";
// import "./styles/centerButtons2.css";

// interface GalleryImage {
//   id: number;
//   path: string;
//   alt: string;
//   created_at: string;
//   updated_at: string;
// }

// interface CenterButton {
//   id: number;
//   href: string;
//   path: string;
//   alt: string;
//   external?: boolean;
// }

// export function CenterButtons() {
//   const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Charger les images de la galerie depuis l'API
//   useEffect(() => {
//     const fetchGalleryImages = async () => {
//       try {
//         setLoading(true);
//         const { success, data, message } = await GalleryAPI.fetchAll();
        
//         if (success && data) {
//           setGalleryImages(data);
//         } else {
//           setError(message || "Erreur inconnue lors du chargement de la galerie");
//           toast.error(message || "Erreur lors du chargement de la galerie");
//         }
//       } catch (err) {
//         console.error("Erreur lors de la récupération des images de galerie:", err);
//         setError(err instanceof Error ? err.message : "Erreur inconnue");
//         toast.error("Erreur lors du chargement de la galerie");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGalleryImages();
//   }, []);

//   // Si chargement en cours
//   if (loading) {
//     return (
//       <div className="center-buttons-home">
//         {[...Array(12)].map((_, index) => (
//           <div key={index} className="center-button-home">
//             <div className="center-button-img-home loading-placeholder">
//               <div className="loading-spinner"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   // Si erreur
//   if (error) {
//     return (
//       <div className="center-buttons-home">
//         <div className="error-message">
//           <p>{error}</p>
//           <button onClick={() => window.location.reload()}>Réessayer</button>
//         </div>
//       </div>
//     );
//   }

//   // Création des boutons à partir des données de la galerie
//   const galleryButtons: CenterButton[] = galleryImages.map((image) => {
//     // Vous pouvez adapter cette logique pour les liens selon vos besoins
//     const href = `/gallery/${image.id}`;
    
//     return {
//       id: image.id,
//       href,
//       path: getImageUrl(image.path),
//       alt: image.alt,
//       external: false
//     };
//   });

//   // Si moins de 12 images, compléter avec des placeholders
//   while (galleryButtons.length < 12) {
//     galleryButtons.push({
//       id: galleryButtons.length + 1,
//       href: "#",
//       path: "/placeholder.svg",
//       alt: "Image non disponible",
//       external: false
//     });
//   }

//   return (
//     <div className="center-buttons-home">
//       {galleryButtons.slice(0, 12).map((button) => (
//         <div key={button.id} className="center-button-home">
//           {button.external ? (
//             <a 
//               href={button.href} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               aria-label={button.alt}
//             >
//               <img
//                 src={button.path}
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
//                 src={button.path}
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
































// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { GalleryAPI } from "../admin/api/homeImage2";   // <-- your API
// import "./styles/centerButtons.css";   // <-- keep your existing styles

// interface GalleryImage {
//   id: number;
//   path: string;
//   alt: string;
// }

// const LINKS = [
//   "/Tetragrammaton",
//   "/The_Nation_of_Yahweh",
//   "/The_Universe_of_Yahweh",
//   "/The_Feasts_of_Yahweh",
//   "/The_Good_News_of_Yahweh",
//   "/The_Crucifixion",
//   "/Shocking_Revelations",
//   "/The_Sabbath",
//   "/Erosion_of_The_Constitution",
//   "/Operation_Word_War",
//   "/Balance_Justice",
//   "https://shop.yahwehbenyahweh.com/",
// ];

// export function CenterButtons() {
//   const [images, setImages] = useState<GalleryImage[]>([]);

//   useEffect(() => {
//     GalleryAPI.fetchAll().then((res) => {
//       if (res.success) setImages(res.data.sort((a: any, b: any) => a.id - b.id));
//     });
//   }, []);

//   return (
//     <div className="center-buttons-home">
//       {images.slice(0, 12).map((img, idx) => {
//         const href = LINKS[idx];
//         const isExternal = href.startsWith("http");

//         const El = isExternal ? "a" : Link;
//         const elProps = isExternal
//           ? { href, target: "_blank", rel: "noopener noreferrer" }
//           : { to: href };

//         return (
//           <div key={img.id} className="center-button-home">
//             <El {...elProps} aria-label={img.alt}>
//               <img
//                 src={`http://localhost:5000${img.path}`}   // API URL
//                 alt={img.alt}
//                 className="center-button-img-home"
//                 loading="lazy"
//               />
//             </El>
//           </div>
//         );
//       })}
//     </div>
//   );
// }