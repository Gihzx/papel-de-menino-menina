import { NavBar } from "../../components/molecules/navBar/NavBar";
import Footer from "../../components/molecules/footer/Footer";
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
      <Footer />
    </>
  );
}
export default Contact;
