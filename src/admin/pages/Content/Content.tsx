
import { useState } from "react";
import "./Content.css";
import HomeTab from "./tabs/HomeTab";
import ServicesTab from "./tabs/ServicesTab";
import AboutTab from "./tabs/MenuTab";
import ContactTab from "./tabs/ContactTab";

function Content() {
  const [activeTab, setActiveTab] = useState("home");

  const renderTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab />;
      case "services":
        return <ServicesTab />;
      case "about":
        return <AboutTab />;
      case "contact":
        return <ContactTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="container">
      <nav className="nav-bar">
        <button
          className={`nav-button ${activeTab === "home" ? "active" : ""}`}
          onClick={() => setActiveTab("home")}
        >
          Accueil
        </button>
        <button
          className={`nav-button ${activeTab === "services" ? "active" : ""}`}
          onClick={() => setActiveTab("services")}
        >
          Services
        </button>
        <button
          className={`nav-button ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          À propos
        </button>
        <button
          className={`nav-button ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </nav>

      <div className="content">{renderTab()}</div>
    </div>
  );
}

export default Content;
