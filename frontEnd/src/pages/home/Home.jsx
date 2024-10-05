import { NavBar } from "../../components/molecules/navBar/NavBar";
import Actions from "../../components/molecules/projectActions/actions";
import VolunteerCountComponent from "../../components/molecules/VolunteerCountComponent/VolunteerCountComponent";
import HistoryOng from "../../components/molecules/historyOng/historyOng";
import VideoYoutube from "../../components/molecules/videoYoutube/videoYoutube";
import UserContact from "../../components/molecules/userContact/userContact";
import Testimony from "../../components/molecules/testimony/Testimony";
import Footer from "../../components/molecules/footer/Footer";
// import CarouselImg from "../../components/molecules/carousel/Carousel";
function Home() {
  return (
    <>
      <NavBar />
      {/* <CarouselImg /> */}
      <VolunteerCountComponent />
      <HistoryOng />
      <Actions />
      <VideoYoutube />
      <UserContact />
      <Testimony />
      <Footer />
    </>
  );
}
export default Home;
