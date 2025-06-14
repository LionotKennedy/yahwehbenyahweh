import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import UniverseOfYahweh from "./pages/(sous-page)/UniverseOfYahweh/UniverseOfYahweh";
import CulturalAttire from "./pages/(sous-page)/CulturalAttire/CulturalAttire";
import About_Yahweh from "./pages/(sous-page)/About_Yahweh/About_Yahweh";
import AboutYahwehBenYahweh from "./pages/(sous-page)/About_Yahweh_Ben_Yahweh/About_Yahweh_Ben_Yahweh";

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
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
