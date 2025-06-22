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
import The_Good_News_of_Yahweh from "./pages/(sous-page)/The_Good_News_of_Yahweh/The_Good_News_of_Yahweh";
import Back_issues from "./pages/(sous-page)/The_Good_News_of_Yahweh/(sous page)/back_issues";
import Back_issues_p2 from "./pages/(sous-page)/The_Good_News_of_Yahweh/(sous page)/back_issues_p2";
import The_Crucifixion from "./pages/(sous-page)/The_Crucifixion/The_Crucifixion";
import Shocking_Revelations from "./pages/(sous-page)/Shocking_Revelations/Shocking_Revelations";
import The_Sabbath from "./pages/(sous-page)/The_Sabbath/The_Sabbath";


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
            <Route path="/The_Good_News_of_Yahweh" element={<The_Good_News_of_Yahweh />} />
            <Route path="/The_Good_News_of_Yahweh/back_issues" element={<Back_issues />} />
            <Route path="/The_Good_News_of_Yahweh/back_issues/2" element={<Back_issues_p2 />} />
            <Route path="/The_Crucifixion" element={<The_Crucifixion />} />
            <Route path="/Shocking_Revelations" element={<Shocking_Revelations />} />
            <Route path="/The_Sabbath" element={<The_Sabbath />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
