
"use client";

import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="gold-top-menu">
      <div className={`topnav ${isMenuOpen ? "responsive" : ""}`} id="myTopnav">
        <a
          href="javascript:void(0);"
          style={{ fontSize: "20px", height: "20px" }}
          className="icon"
          onClick={toggleMenu}
        >
          &#9776;
        </a>
        <div className="dropdown">
          <button className="dropbtn">
            <strong>MOMBA NY</strong>
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/About_Yahweh/">Yahweh</a>
            <a href="/About_Yahweh_Ben_Yahweh/">Yahweh Ben Yahweh</a>
            <a href="/The_Followers_of_Yahweh_Ben_Yahweh/">
              Ny Mpanaraka an'i Yahweh Ben Yahweh
            </a>
            <a href="/Cultural_Attire/">Fitafiana Nentim-paharazana</a>
          </div>
        </div>
        <a href="/Contact_Us/">
          <strong>HIFANDRAISA AMINAY</strong>
        </a>
        <a href="https://shop.yahwehbenyahweh.com/">
          <strong>FIVAROTAM-BOBY AN-INTERNET</strong>
        </a>
        <div className="dropdown">
          <button className="dropbtn">
            <strong>SAFIDY</strong>
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/Tetragrammaton/">Tetragrama</a>
            <a href="/The_Nation_of_Yahweh/">Firenen'i Yahweh</a>
            <a href="/The_Universe_of_Yahweh/">Ny Tontolon'i Yahweh</a>
            <a href="/The_Feasts_of_Yahweh/">Ny Fetin'i Yahweh</a>
            <a href="/The_Good_News_of_Yahweh/">Ny Vaovao Mahafalin’i Yahweh</a>
            <a href="/The_Crucifixion/">Ny Fanomboana tamin’ny hazofijaliana</a>
            <a href="/Shocking_Revelations/">Famahaliana mampihorohoro</a>
            <a href="/The_Sabbath/">Ny Sabata</a>
            <a href="/Erosion_of_The_Constitution/">
              Ny Fahasimban’ny Lalàmpanorenana
            </a>
            <a href="/Operation_Word_War/">Operation Ady Teny</a>
            <a href="/Balance_Justice/">Fitsarana milamina</a>
          </div>
        </div>
      </div>
    </div>
  );
}
