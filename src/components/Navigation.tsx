"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

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
    <div id="gold-top-menu" className="gold-top-menu">
      <div className={`topnav ${isOpen ? "responsive" : ""}`} id="myTopnav">
        <button className="icon md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown("about")}>
            <strong>ABOUT</strong>
            {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
          </button>
          <div className={`dropdown-content ${activeDropdown === "about" ? "show" : ""}`}>
            <Link to="/About_Yahweh">Yahweh</Link>
            <Link to="/About_Yahweh_Ben_Yahweh">Yahweh Ben Yahweh</Link>
            <Link to="/The_Followers_of_Yahweh_Ben_Yahweh">The Followers of Yahweh Ben Yahweh</Link>
            <Link to="/Cultural_Attire">Cultural Attire</Link>
          </div>
        </div>

        <Link to="/Contact_Us">
          <strong>CONTACT US</strong>
        </Link>

        <a href="https://shop.yahwehbenyahweh.com/" target="_blank" rel="noopener noreferrer">
          <strong>ONLINE BOOKSTORE</strong>
        </a>

        <div className="dropdown">
          <button className="dropbtn" onClick={() => toggleDropdown("menu")}>
            <strong>MENU</strong>
            {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
          </button>
          <div className={`dropdown-content ${activeDropdown === "menu" ? "show" : ""}`}>
            <Link to="/Tetragrammaton">Tetragrammaton</Link>
            <Link to="/The_Nation_of_Yahweh">The Nation of Yahweh</Link>
            <Link to="/The_Universe_of_Yahweh">The Universe of Yahweh</Link>
            <Link to="/The_Feasts_of_Yahweh">The Feasts of Yahweh</Link>
            <Link to="/The_Good_News_of_Yahweh">The Good News of Yahweh</Link>
            <Link to="/The_Crucifixion">The Crucifixion</Link>
            <Link to="/Shocking_Revelations">Shocking Revelations</Link>
            <Link to="/The_Sabbath">The Sabbath</Link>
            <Link to="/Erosion_of_The_Constitution">Erosion of The Constitution</Link>
            <Link to="/Operation_Word_War">Operation Word War</Link>
            <Link to="/Balance_Justice">Balance Justice</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
