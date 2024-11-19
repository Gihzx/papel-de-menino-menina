import { NavBar } from "../../components/molecules/navBar/NavBar";

import Actions from "../../components/molecules/projectActions/Actions";
import VolunteerCountComponent from "../../components/molecules/VolunteerCountComponent/VolunteerCountComponent";
import HistoryOng from "../../components/molecules/historyOng/HistoryOng";
import VideoYoutube from "../../components/molecules/videoYoutube/VideoYoutube";
import UserContact from "../../components/molecules/userContact/UserContact";
import Testimony from "../../components/molecules/testimony/Testimony";
import Footer from "../../components/molecules/footer/Footer";
import Carousel from "../../components/molecules/carousel/Carousel";
function Home() {
  return (
    <>
      <NavBar />
      <Carousel />
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
