import { Link } from "react-router-dom"
import "./styles/centerButtons.css"

interface CenterButton {
  href: string
  image: string
  alt: string
  external?: boolean
}

const centerButtons: CenterButton[] = [
  { href: "/Tetragrammaton", image: "/src/components/images/center-buttons/Tetragrammaton.jpg", alt: "Tetragrammaton" },
  {
    href: "/The_Nation_of_Yahweh",
    image: "/src/components/images/center-buttons/The_Nation_of_Yahweh.jpg",
    alt: "The Nation of Yahweh",
  },
  { href: "/The_Universe_of_Yahweh", image: "/src/components/images/center-buttons/Universe_of.jpg", alt: "The Universe of Yahweh" },
  { href: "/The_Feasts_of_Yahweh", image: "/src/components/images/center-buttons/Feasts.jpg", alt: "The Feasts of Yahweh" },
  { href: "/The_Good_News_of_Yahweh", image: "/src/components/images/center-buttons/Good_News.jpg", alt: "The Good News of Yahweh" },
  { href: "/The_Crucifixion", image: "/src/components/images/center-buttons/Crucifixion.jpg", alt: "The Crucifixion" },
  { href: "/Shocking_Revelations", image: "/src/components/images/center-buttons/Shock.jpg", alt: "Shocking Revelations" },
  { href: "/The_Sabbath", image: "/src/components/images/center-buttons/Sab.jpg", alt: "The Sabbath" },
  {
    href: "/Erosion_of_The_Constitution",
    image: "/src/components/images/center-buttons/Erosion.jpg",
    alt: "Erosion of The Constitution",
  },
  { href: "/Operation_Word_War", image: "/src/components/images/center-buttons/Op_WW.jpg", alt: "Operation Word War" },
  { href: "/Balance_Justice", image: "/src/components/images/center-buttons/Balance_Justice.jpg", alt: "Balance Justice" },
  {
    href: "https://shop.yahwehbenyahweh.com/",
    image: "/src/components/images/center-buttons/ON-Line_Bookstore.jpg",
    alt: "On-line Book Store",
    external: true,
  },
]

export function CenterButtons() {
  return (
    <div className="center-buttons grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {centerButtons.map((button, index) => (
        <div key={index} className="center-button">
          {button.external ? (
            <a href={button.href} target="_blank" rel="noopener noreferrer">
              <img
                src={button.image || "/placeholder.svg"}
                alt={button.alt}
                className="center-button-img w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </a>
          ) : (
            <Link to={button.href}>
              <img
                src={button.image || "/placeholder.svg"}
                alt={button.alt}
                className="center-button-img w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}
