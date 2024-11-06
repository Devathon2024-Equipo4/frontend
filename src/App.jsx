import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import GpsPage from "./routes/GpsPage";
import ReindeerOrganizatorPage from "./routes/ReindeerOrganizatorPage";
import ElfRegistryPage from "./routes/ElfRegistryPage";
import ChildrenClassificatorPage from "./routes/ChildrenClassificatorPage";
import CaloryCounterPage from "./routes/CaloryCounterpage";
import LetterLectorPage from "./routes/LetterLectorPage";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <div className="">
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gps" element={<GpsPage />} />
            <Route path="/reindeerOrg" element={<ReindeerOrganizatorPage />} />
            <Route path="/elfRegistry" element={<ElfRegistryPage />} />
            <Route path="/caloryCounter" element={<CaloryCounterPage />} />
            <Route
              path="/childernClassificator"
              element={<ChildrenClassificatorPage />}
            />
            <Route path="/letterLector" element={<LetterLectorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
