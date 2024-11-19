import SectionName from "../../components/atomo/sectionName/SectionName.jsx";
import { NavBar } from "../../components/molecules/navBar/NavBar.jsx";
import Footer from "../../components/molecules/footer/Footer.jsx";
import InforIPM from "../../components/molecules/InforIPM/InforIPM.jsx";
import History from "../../components/atomo/history/History.jsx";
import Line from "../../components/atomo/line/Line.jsx";
function InforOng() {
  return (
    <>
      <NavBar />
      <SectionName>Quem somos</SectionName>
      <InforIPM />
      <History />
      <Line />
      <Footer />
    </>
  );
}
export default InforOng;
