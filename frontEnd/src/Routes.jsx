import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/admContact/AdmContact";
import InforOng from "./pages/InforOng/InforOng";
import InforDonate from "./pages/InforDonate/InforDonate";
import MissionNgo from "./pages/missionNgo/missionNgo";
import MaleDivision from "./pages/MaleDivision/MaleDivision";
import UnitFemi from "./pages/UnitFemi/UnitFemi";
import OurMethods from "./pages/ourMethods/OurMethods";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import PressInfo from "./pages/PressInfo/PressInfo";
import ProjectIPM from "./pages/projectIPM/ProjectIPM";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/inforOng" element={<InforOng />} />
        <Route path="/equipe" element={<TeamMembers />} />
        <Route path="/doe" element={<InforDonate />} />
        <Route path="/cursoeoficina" element={<MissionNgo />} />
        <Route path="/unidadeMascula" element={<MaleDivision />} />
        <Route path="/unidadeFeminina" element={<UnitFemi />} />
        <Route path="/metodologia" element={<OurMethods />} />
        <Route path="/imprensa" element={<PressInfo />} />
        <Route path="/projetoIPM" element={<ProjectIPM />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
