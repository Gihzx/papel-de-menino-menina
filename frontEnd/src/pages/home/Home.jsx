import { NavBar } from "../../components/molecules/navBar/NavBar";

import VolunteerCountComponent from "../../components/molecules/VolunteerCountComponent/VolunteerCountComponent";
import HistoryOng from "../../components/molecules/historyOng/historyOng";
function Home() {
  return (
    <>
      <NavBar />
      <VolunteerCountComponent />
      <HistoryOng />
    </>
  );
}
export default Home;
