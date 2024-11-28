import { NavBar } from "../../components/molecules/navBar/NavBar";
import {
  MaleUnit,
  FormationClass,
} from "../../components/molecules/MaleUnit/MaleUnit";
import Line from "../../components/atomo/line/Line";
import SectionName from "../../components/atomo/sectionName/SectionName";
function MaleDivision() {
  return (
    <>
      <NavBar />
      <SectionName>Unidade Masculina</SectionName>
      <MaleUnit />
      <FormationClass />
      <Line />
    </>
  );
}
export default MaleDivision;
