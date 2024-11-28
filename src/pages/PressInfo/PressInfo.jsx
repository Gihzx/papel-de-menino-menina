import Line from "../../components/atomo/line/Line";
import SectionName from "../../components/atomo/sectionName/SectionName";
import { NavBar } from "../../components/molecules/navBar/NavBar";
import Press from "../../components/molecules/Press/Press";

function PressInfo() {
  return (
    <>
      <NavBar />
      <SectionName>Imprensa</SectionName>
      <Press />
      <Line />
    </>
  );
}
export default PressInfo;
