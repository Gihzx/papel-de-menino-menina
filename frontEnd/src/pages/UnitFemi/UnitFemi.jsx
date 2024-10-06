import Footer from "../../components/molecules/footer/Footer";
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
      <Footer />
    </>
  );
}
export default UnitFemi;
