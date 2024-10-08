import SectionName from "../../components/atomo/sectionName/SectionName";
import Footer from "../../components/molecules/footer/Footer";
import { NavBar } from "../../components/molecules/navBar/NavBar";
import SectionDoe from "../../components/molecules/sectionDoe/SectionDoe";
import DateDonate from "../../components/molecules/dateDonate/DateDonate";
import TextDoe from "../../components/atomo/textDoe/TextDoe";
import Line from "../../components/atomo/line/Line";
function InforDonate() {
  return (
    <>
      <NavBar />
      <SectionName>Doe</SectionName>
      <SectionDoe />
      <DateDonate />
      <TextDoe />
      <Line />
      <Footer />
    </>
  );
}
export default InforDonate;
