import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import UniverseOfYahweh from "./pages/UniverseOfYahweh";
import CulturalAttire from "./pages/CulturalAttire";

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
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
