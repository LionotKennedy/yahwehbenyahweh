// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { Menu, X } from "lucide-react"
// // import "../components/styles/responsive.css"
// import "../components/styles/navigation.css" 

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const toggleDropdown = (dropdown: string) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
//   }

//   return (
//     <div id="gold-top-menu-nav" className="gold-top-menu-nav">
//       <div className={`topnav ${isOpen ? "responsive" : ""}`} id="myTopnav">
//         <button className="icon _md" onClick={toggleMenu} aria-label="Toggle menu">
//           {isOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>

//         <div className="dropdown">
//           <button className="dropbtn" onClick={() => toggleDropdown("about")}>
//             <strong>ABOUT</strong>
//           </button>
//           <div className={`dropdown-content ${activeDropdown === "about" ? "show" : ""}`}>
//             <Link to="/About_Yahweh">Yahweh</Link>
//             <Link to="/About_Yahweh_Ben_Yahweh">Yahweh Ben Yahweh</Link>
//             <Link to="/The_Followers_of_Yahweh_Ben_Yahweh">The Followers of Yahweh Ben Yahweh</Link>
//             <Link to="/Cultural_Attire">Cultural Attire</Link>
//           </div>
//         </div>

//         <Link to="/Contact_Us">
//           <strong>CONTACT US</strong>
//         </Link>

//         <a href="https://shop.yahwehbenyahweh.com/" target="_blank" rel="noopener noreferrer">
//           <strong>ONLINE BOOKSTORE</strong>
//         </a>

//         <div className="dropdown">
//           <button className="dropbtn" onClick={() => toggleDropdown("menu")}>
//             <strong>MENU</strong>
//             {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
//           </button>
//           <div className={`dropdown-content ${activeDropdown === "menu" ? "show" : ""}`}>
//             <Link to="/Tetragrammaton">Tetragrammaton</Link>
//             <Link to="/The_Nation_of_Yahweh">The Nation of Yahweh</Link>
//             <Link to="/The_Universe_of_Yahweh">The Universe of Yahweh</Link>
//             <Link to="/The_Feasts_of_Yahweh">The Feasts of Yahweh</Link>
//             <Link to="/The_Good_News_of_Yahweh">The Good News of Yahweh</Link>
//             <Link to="/The_Crucifixion">The Crucifixion</Link>
//             <Link to="/Shocking_Revelations">Shocking Revelations</Link>
//             <Link to="/The_Sabbath">The Sabbath</Link>
//             <Link to="/Erosion_of_The_Constitution">Erosion of The Constitution</Link>
//             <Link to="/Operation_Word_War">Operation Word War</Link>
//             <Link to="/Balance_Justice">Balance Justice</Link>
//           </div>
//         </div>
//       </div>
//    </div>
//   )
// }

























"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import "../components/styles/navigation.css"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="gold-top-menu">
      <div className={`topnav ${isOpen ? "responsive" : ""}`} id="myTopnav">
        {/* Menu button for mobile */}
        <button className="icon mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Navigation links */}
        <div className="nav-links-container">
          <div className="dropdown">
            <button className="dropbtn" onClick={() => toggleDropdown("about")}>
              <strong>ABOUT</strong>
            </button>
            <div className={`dropdown-content ${activeDropdown === "about" ? "show" : ""}`}>
              <Link to="/About_Yahweh" onClick={() => setIsOpen(false)}>Yahweh</Link>
              <Link to="/About_Yahweh_Ben_Yahweh" onClick={() => setIsOpen(false)}>Yahweh Ben Yahweh</Link>
              <Link to="/The_Followers_of_Yahweh_Ben_Yahweh" onClick={() => setIsOpen(false)}>The Followers of Yahweh Ben Yahweh</Link>
              <Link to="/Cultural_Attire" onClick={() => setIsOpen(false)}>Cultural Attire</Link>
            </div>
          </div>

          <Link to="/Contact_Us" className="nav-link" onClick={() => setIsOpen(false)}>
            <strong>CONTACT US</strong>
          </Link>

          <a href="https://shop.yahwehbenyahweh.com/" target="_blank" rel="noopener noreferrer" className="nav-link">
            <strong>ONLINE BOOKSTORE</strong>
          </a>

          <div className="dropdown">
            <button className="dropbtn" onClick={() => toggleDropdown("menu")}>
              <strong>MENU</strong>
            </button>
            <div className={`dropdown-content ${activeDropdown === "menu" ? "show" : ""}`}>
              <Link to="/Tetragrammaton" onClick={() => setIsOpen(false)}>Tetragrammaton</Link>
              <Link to="/The_Nation_of_Yahweh" onClick={() => setIsOpen(false)}>The Nation of Yahweh</Link>
              <Link to="/The_Universe_of_Yahweh" onClick={() => setIsOpen(false)}>The Universe of Yahweh</Link>
              <Link to="/The_Feasts_of_Yahweh" onClick={() => setIsOpen(false)}>The Feasts of Yahweh</Link>
              <Link to="/The_Good_News_of_Yahweh" onClick={() => setIsOpen(false)}>The Good News of Yahweh</Link>
              <Link to="/The_Crucifixion" onClick={() => setIsOpen(false)}>The Crucifixion</Link>
              <Link to="/Shocking_Revelations" onClick={() => setIsOpen(false)}>Shocking Revelations</Link>
              <Link to="/The_Sabbath" onClick={() => setIsOpen(false)}>The Sabbath</Link>
              <Link to="/Erosion_of_The_Constitution" onClick={() => setIsOpen(false)}>Erosion of The Constitution</Link>
              <Link to="/Operation_Word_War" onClick={() => setIsOpen(false)}>Operation Word War</Link>
              <Link to="/Balance_Justice" onClick={() => setIsOpen(false)}>Balance Justice</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


















// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { Menu, X } from "lucide-react"
// import "./styles/navigation.css"

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//     // Fermer tous les dropdowns quand on ferme le menu
//     if (isOpen) {
//       setActiveDropdown(null)
//     }
//   }

//   const toggleDropdown = (dropdown: string) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
//   }

//   const closeMenu = () => {
//     setIsOpen(false)
//     setActiveDropdown(null)
//   }

//   return (
//     <div id="gold-top-menu" className="gold-top-menu">
//       <div className={`topnav ${isOpen ? "responsive" : ""}`} id="myTopnav">
//         {/* Menu Hamburger - toujours visible sur mobile */}
//         <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Menu Items */}
//         <div className="nav-items">
//           <div className="dropdown">
//             <button className="dropbtn" onClick={() => toggleDropdown("about")}>
//               <strong>ABOUT</strong>
//             </button>
//             <div className={`dropdown-content ${activeDropdown === "about" ? "show" : ""}`}>
//               <Link to="/About_Yahweh" onClick={closeMenu}>
//                 Yahweh
//               </Link>
//               <Link to="/About_Yahweh_Ben_Yahweh" onClick={closeMenu}>
//                 Yahweh Ben Yahweh
//               </Link>
//               <Link to="/The_Followers_of_Yahweh_Ben_Yahweh" onClick={closeMenu}>
//                 The Followers of Yahweh Ben Yahweh
//               </Link>
//               <Link to="/Cultural_Attire" onClick={closeMenu}>
//                 Cultural Attire
//               </Link>
//             </div>
//           </div>

//           <Link to="/Contact_Us" onClick={closeMenu}>
//             <strong>CONTACT US</strong>
//           </Link>

//           <a href="https://shop.yahwehbenyahweh.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
//             <strong>ONLINE BOOKSTORE</strong>
//           </a>

//           <div className="dropdown">
//             <button className="dropbtn" onClick={() => toggleDropdown("menu")}>
//               <strong>MENU</strong>
//             </button>
//             <div className={`dropdown-content ${activeDropdown === "menu" ? "show" : ""}`}>
//               <Link to="/Tetragrammaton" onClick={closeMenu}>
//                 Tetragrammaton
//               </Link>
//               <Link to="/The_Nation_of_Yahweh" onClick={closeMenu}>
//                 The Nation of Yahweh
//               </Link>
//               <Link to="/The_Universe_of_Yahweh" onClick={closeMenu}>
//                 The Universe of Yahweh
//               </Link>
//               <Link to="/The_Feasts_of_Yahweh" onClick={closeMenu}>
//                 The Feasts of Yahweh
//               </Link>
//               <Link to="/The_Good_News_of_Yahweh" onClick={closeMenu}>
//                 The Good News of Yahweh
//               </Link>
//               <Link to="/The_Crucifixion" onClick={closeMenu}>
//                 The Crucifixion
//               </Link>
//               <Link to="/Shocking_Revelations" onClick={closeMenu}>
//                 Shocking Revelations
//               </Link>
//               <Link to="/The_Sabbath" onClick={closeMenu}>
//                 The Sabbath
//               </Link>
//               <Link to="/Erosion_of_The_Constitution" onClick={closeMenu}>
//                 Erosion of The Constitution
//               </Link>
//               <Link to="/Operation_Word_War" onClick={closeMenu}>
//                 Operation Word War
//               </Link>
//               <Link to="/Balance_Justice" onClick={closeMenu}>
//                 Balance Justice
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Overlay pour fermer le menu en cliquant à côté */}
//         {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
//       </div>
//     </div>
//   )
// }
