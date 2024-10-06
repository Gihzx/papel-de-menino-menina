import Line from "../../components/atomo/line/Line";
import SectionName from "../../components/atomo/sectionName/SectionName";
import Footer from "../../components/molecules/footer/Footer";
import { NavBar } from "../../components/molecules/navBar/NavBar";
import {
  OurMethodology,
  EmotionalSupport,
  CourseAndWorkshop,
} from "../../components/molecules/ourMethodology/OurMethodology";
function OurMethods() {
  return (
    <>
      <NavBar />
      <SectionName>Nossa metodologia</SectionName>
      <OurMethodology />
      <EmotionalSupport />
      <CourseAndWorkshop />
      <Line />
      <Footer />
    </>
  );
}
export default OurMethods;
