import { NavBar } from "../../components/molecules/navBar/NavBar";
import HistoryOngHome from "../../components/molecules/historyOngHome/HistoryOngHome";
import VolunteerCountComponent from "../../components/molecules/VolunteerCountComponent/VolunteerCountComponent";
import VideoYoutube from "../../components/molecules/videoYoutube/videoYoutube";
import UserContact from "../../components/molecules/userContact/userContact";
import Testimony from "../../components/molecules/testimony/Testimony";
import Footer from "../../components/molecules/footer/Footer";
import Carousel from "../../components/molecules/carousel/Carousel";
import CarrosselParceiros from "../../components/molecules/partner/Partner";
function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
      <VolunteerCountComponent />
      <HistoryOngHome />
      <VideoYoutube />
      <UserContact />
      <Testimony />
      <CarrosselParceiros />
      <Footer />
    </>
  );
}
export default Home;
