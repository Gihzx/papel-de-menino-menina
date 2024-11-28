import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/admContact/AdmContact";
import InforOng from "./pages/InforOng/InforOng";
import InforDonate from "./pages/InforDonate/InforDonate";
import MissionNgo from "./pages/missionNgo/MissionNgo";
import MaleDivision from "./pages/MaleDivision/MaleDivision";
import UnitFemi from "./pages/UnitFemi/UnitFemi";
import OurMethods from "./pages/ourMethods/OurMethods";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import PressInfo from "./pages/PressInfo/PressInfo";
import ProjectIPM from "./pages/projectIPM/ProjectIPM";
import CommentsPre from "./pages/commentsPre/CommentsPre";
import Condensed from "./pages/condensed/Condensed";
// import NavBar from "./components/molecules/navBar/NavBar";
import Footer from "./components/molecules/footer/Footer";

function AppRoutes() {
  return (
    <>
      {/* <NavBar/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/inforOng" element={<InforOng />} />
          <Route path="/equipe" element={<TeamMembers />} />
          <Route path="/voluntario" element={<InforDonate />} />
          <Route path="/cursoeoficina" element={<MissionNgo />} />
          <Route path="/unidadeMascula" element={<MaleDivision />} />
          <Route path="/unidadeFeminina" element={<UnitFemi />} />
          <Route path="/metodologia" element={<OurMethods />} />
          <Route path="/imprensa" element={<PressInfo />} />
          <Route path="/projetoIPM" element={<ProjectIPM />} />
          <Route path="/comentario-presidente" element={<CommentsPre />} />
          <Route path="condeca" element={<Condensed />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default AppRoutes;
