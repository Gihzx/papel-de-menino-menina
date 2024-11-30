import HistoryOngHome from "../../components/molecules/historyOngHome/HistoryOngHome";
import VolunteerCountComponent from "../../components/molecules/VolunteerCountComponent/VolunteerCountComponent";
import VideoYoutube from "../../components/molecules/videoYoutube/VideoYoutube";
import UserContact from "../../components/molecules/userContact/UserContact";
import Testimony from "../../components/molecules/testimony/Testimony";
import Carousel from "../../components/molecules/carousel/Carousel";
import CarrosselParceiros from "../../components/molecules/partner/Partner";

function Home() {
  return (
    <>
      <Carousel />
      <VolunteerCountComponent />
      <HistoryOngHome />
      <VideoYoutube />
      <UserContact />
      <Testimony />
      <CarrosselParceiros />
    </>
  );
}
export default Home;
