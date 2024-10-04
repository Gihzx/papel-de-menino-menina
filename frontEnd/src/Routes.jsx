import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/admContact/AdmContact";
import InforOng from "./pages/InforOng/InforOng";
import InforDonate from "./components/molecules/InforDonate/InforDonate";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/inforOng" element={<InforOng />} />
        <Route path="/doe" element={<InforDonate />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
