import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { AboutUs, OurProjects, Methodology } from "./pages/institucional";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import CommentsPre from "./pages/commentsPre/CommentsPre";
import Condensed from "./pages/condensed/Condensed";
import { Footer } from "./components/Footer";
import { Female, Male } from "./pages/services";
import { Courses, Media } from "./pages/supporters";
import { Donation } from "./pages/donation";
import { Contact } from "./pages/contact";
import { Header } from "./components/Header";

export function AppRoutes() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sobre" element={<AboutUs />} />
          <Route path="/projetos" element={<OurProjects />} />
          <Route path="/metodologia" element={<Methodology />} />

          <Route path="/unidadeFeminina" element={<Female />} />
          <Route path="/unidadeMascula" element={<Male />} />

          <Route path="/cursos-oficina" element={<Courses />} />
          <Route path="/imprensa" element={<Media />} />

          <Route path="/voluntario" element={<Donation />} />

          <Route path="/contato" element={<Contact />} />

          <Route path="/equipe" element={<TeamMembers />} />
          <Route path="/comentario-presidente" element={<CommentsPre />} />
          <Route path="condeca" element={<Condensed />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
