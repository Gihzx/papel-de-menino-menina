import SectionName from "../../components/atomo/sectionName/SectionName";
import Footer from "../../components/molecules/footer/Footer";
import SectionDoe from "../../components/molecules/sectionDoe/SectionDoe";
import DateDonate from "../dateDonate/DateDonate";
import TextDoe from "../../components/atomo/textDoe/TextDoe";
function InforDonate() {
  return (
    <>
      <SectionName>Doe</SectionName>
      <SectionDoe />
      <DateDonate />
      <TextDoe />
      <Footer />
    </>
  );
}
export default InforDonate;
