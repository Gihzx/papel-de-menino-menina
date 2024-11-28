import Footer from "../../components/molecules/footer/Footer";
import { NavBar } from "../../components/molecules/navBar/NavBar";
import SectionName from "../../components/atomo/sectionName/SectionName";
import {
  CommunityBakery,
  TrainingClass,
  WorkshopActivity,
  DigitalLiteracy,
  BarbershopServices,
} from "../../components/atomo/activities/CommunityBakery";
import Line from "../../components/atomo/line/Line";
function MissionNgo() {
  return (
    <>
      <NavBar />
      <SectionName>Cursos & oficinas</SectionName>
      <CommunityBakery />
      <TrainingClass />
      <WorkshopActivity />
      <DigitalLiteracy />
      <BarbershopServices />
      <Line />
      <Footer />
    </>
  );
}
export default MissionNgo;
