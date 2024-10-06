import SectionName from "../../atomo/sectionName/SectionName";
import Footer from "../footer/Footer";
import { NavBar } from "../navBar/NavBar";
import SectionDoe from "../sectionDoe/SectionDoe";
import DateDonate from "../../dateDonate/DateDonate";
import TextDoe from "../../atomo/textDoe/TextDoe";
function InforDonate() {
  return (
    <>
      <NavBar />
      <SectionName>Doe</SectionName>
      <SectionDoe />
      <DateDonate />
      <TextDoe />
      <Footer />
    </>
  );
}
export default InforDonate;
