import { NavBar } from "../../components/molecules/navBar/NavBar";
import Footer from "../../components/molecules/footer/Footer";
import SectionName from "../../components/atomo/sectionName/SectionName";
import InforContact from "../../components/molecules/InforContact/InforContact";
function Contact() {
  return (
    <>
      <NavBar />
      <SectionName>Contato</SectionName>
      <InforContact />
      <Footer />
    </>
  );
}
export default Contact;
