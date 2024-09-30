import { NavBar } from "../../components/molecules/navBar/NavBar";
import Carrusel from "../../components/molecules/sectionHeader/sectionPhoto";
import VolunteerCountComponent from "../../components/molecules/VolunteerCountComponent/VolunteerCountComponent";
function Home() {
  return (
    <>
      <NavBar />
      <Carrusel />
      <VolunteerCountComponent />
    </>
  );
}
export default Home;
