
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GalleryAPI } from "../admin/api/homeImage2";   // <-- your API
import "./styles/centerButtons.css";   // <-- keep your existing styles

interface GalleryImage {
  id: number;
  path: string;
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

        const El = isExternal ? "a" : Link;
        const elProps = isExternal
          ? { href, target: "_blank", rel: "noopener noreferrer" }
          : { to: href };

        return (
          <div key={img.id} className="center-button-home">
            <El {...elProps} aria-label={img.alt}>
              <img
                src={`http://localhost:5000${img.path}`}   // API URL
                alt={img.alt}
                className="center-button-img-home"
                loading="lazy"
              />
            </El>
          </div>
        );
      })}
    </div>
  );
}

