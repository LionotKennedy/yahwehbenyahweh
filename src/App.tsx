import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import UniverseOfYahweh from "./pages/(sous-page)/UniverseOfYahweh/UniverseOfYahweh";
import CulturalAttire from "./pages/(sous-page)/CulturalAttire/CulturalAttire";
import About_Yahweh from "./pages/(sous-page)/About_Yahweh/About_Yahweh";
import AboutYahwehBenYahweh from "./pages/(sous-page)/About_Yahweh_Ben_Yahweh/About_Yahweh_Ben_Yahweh";
import The_Followers_of_Yahweh_Ben_Yahweh from "./pages/(sous-page)/The_Followers_of_Yahweh_Ben_Yahweh/The_Followers_of_Yahweh_Ben_Yahweh";
import Contact_Us from "./pages/(sous-page)/Contact_Us/Contact_Us";
import Tetragrammaton from "./pages/(sous-page)/Tetragrammaton/Tetragrammaton";
import The_Nation_of_Yahweh from "./pages/(sous-page)/The_Nation_of_Yahweh/The_Nation_of_Yahweh";
import The_Feasts_of_Yahweh from "./pages/(sous-page)/The_Feasts_of_Yahweh/The_Feasts_of_Yahweh";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/The_Universe_of_Yahweh"
              element={<UniverseOfYahweh />}
            />
            <Route path="/Cultural_Attire" element={<CulturalAttire />} />
            {/* Ajoutez d'autres routes selon vos besoins */}
            <Route path="/About_Yahweh" element={<About_Yahweh />} />
            <Route path="/About_Yahweh_Ben_Yahweh" element={<AboutYahwehBenYahweh />} />
            <Route path="/The_Followers_of_Yahweh_Ben_Yahweh" element={<The_Followers_of_Yahweh_Ben_Yahweh />} />
            <Route path="/Contact_Us" element={<Contact_Us />} />
            <Route path="/Tetragrammaton" element={<Tetragrammaton />} />
            <Route path="/The_Nation_of_Yahweh" element={<The_Nation_of_Yahweh />} />
            <Route path="/The_Feasts_of_Yahweh" element={<The_Feasts_of_Yahweh />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
