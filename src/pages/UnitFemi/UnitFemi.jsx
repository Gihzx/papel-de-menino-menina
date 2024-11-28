import { NavBar } from "../../components/molecules/navBar/NavBar";
import SectionName from "../../components/atomo/sectionName/SectionName";
import {
  FemiUnit,
  Pami,
  BeautySalon,
  GirlsAndMothers,
  PostMeasure,
  AllNew,
} from "../../components/molecules/FemiUnit/FemiUnit";
import Line from "../../components/atomo/line/Line";
function UnitFemi() {
  return (
    <>
      <NavBar />
      <SectionName>Unidade Feminina</SectionName>
      <FemiUnit />
      <Pami />
      <BeautySalon />
      <GirlsAndMothers />
      <PostMeasure />
      <AllNew />
      <Line />
    </>
  );
}
export default UnitFemi;
