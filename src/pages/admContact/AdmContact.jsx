import { NavBar } from "../../components/molecules/navBar/NavBar";
import SectionName from "../../components/atomo/sectionName/SectionName";
import InforContact from "../../components/molecules/InforContact/InforContact";
import Line from "../../components/atomo/line/Line";
function Contact() {
  return (
    <>
      <NavBar />
      <SectionName>Contato</SectionName>
      <InforContact />
      <Line />
    </>
  );
}
export default Contact;
