
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GalleryAPI } from "../admin/api/homeImage2";   // <-- your API
import "./styles/centerButtons.css";   // <-- keep your existing styles
import { URL } from "../admin/api/url";


interface GalleryImage {
  // path: string;
  id: number;
  src: string;
  alt: string;
}

const LINKS = [
  "/Tetragrammaton",
  "/The_Nation_of_Yahweh",
  "/The_Universe_of_Yahweh",
  "/The_Feasts_of_Yahweh",
  "/The_Good_News_of_Yahweh",
  "/The_Crucifixion",
  "/Shocking_Revelations",
  "/The_Sabbath",
  "/Erosion_of_The_Constitution",
  "/Operation_Word_War",
  "/Balance_Justice",
  "/Shop",
  // "https://shop.yahwehbenyahweh.com/",
];
// const URL= "http://localhost:5000";
export function CenterButtons() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    GalleryAPI.fetchAll().then((res) => {
      if (res.success) setImages(res.data.sort((a: any, b: any) => a.id - b.id));
    });
  }, []);

  return (
    <div className="center-buttons-home">
      {images.slice(0, 12).map((img, idx) => {
        const href = LINKS[idx];
        const isExternal = href.startsWith("http");

        return (
          <div key={img.id} className="center-button-home">
            {isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={img.alt}
              >
                <img
                  // src={`${URL}${img.path}`}   // API URL
                  src={`${URL}${img.src}`}   // API URL
                  alt={img.alt}
                  className="center-button-img-home"
                  loading="lazy"
                />
              </a>
            ) : (
              <Link to={href} aria-label={img.alt}>
                <img
                  // src={`${URL}${img.path}`}   // API URL
                  src={`${URL}${img.src}`}   // API URL
                  alt={img.alt}
                  className="center-button-img-home"
                  loading="lazy"
                />
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}






// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { GalleryAPI } from "../admin/api/homeImage2";
// import { getImageUrl } from "../admin/api/image"; // 👈 import ton helper
// import "./styles/centerButtons.css";

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
//   "/Shop",
// ];

// export function CenterButtons() {
//   const [images, setImages] = useState<GalleryImage[]>([]);

//   useEffect(() => {
//     GalleryAPI.fetchAll().then((res) => {
//       if (res.success) {
//         const sorted = res.data.sort((a: any, b: any) => a.id - b.id);
//         setImages(sorted);

//         // 🔍 Affiche chaque URL complète dans la console
//         sorted.forEach((img: GalleryImage) => {
//           console.log("Image URL:", getImageUrl(img.path));
//         });
//       }
//     });
//   }, []);

//   return (
//     <div className="center-buttons-home">
//       {images.slice(0, 12).map((img, idx) => {
//         const href = LINKS[idx];
//         const isExternal = href.startsWith("http");
//         const fullImageUrl = getImageUrl(img.path); // 👈 URL complète

//         return (
//           <div key={img.id} className="center-button-home">
//             {isExternal ? (
//               <a href={href} target="_blank" rel="noopener noreferrer" aria-label={img.alt}>
//                 <img src={fullImageUrl} alt={img.alt} className="center-button-img-home" loading="lazy" />
//               </a>
//             ) : (
//               <Link to={href} aria-label={img.alt}>
//                 <img src={fullImageUrl} alt={img.alt} className="center-button-img-home" loading="lazy" />
//               </Link>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }