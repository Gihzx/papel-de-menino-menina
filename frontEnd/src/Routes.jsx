import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/admContact/AdmContact";
import InforOng from "./pages/InforOng/InforOng";
import InforDonate from "./components/molecules/InforDonate/InforDonate";
import MissionNgo from "./pages/missionNgo/missionNgo";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/inforOng" element={<InforOng />} />
        <Route path="/doe" element={<InforDonate />} />
        <Route path="/missao" element={<MissionNgo />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
