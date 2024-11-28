import Line from "../../components/atomo/line/Line";
import SectionName from "../../components/atomo/sectionName/SectionName";
import { NavBar } from "../../components/molecules/navBar/NavBar";
import TeamInfo from "../../components/molecules/TeamInfo/TeamInfo";
function TeamMembers() {
  return (
    <>
      <NavBar />
      <SectionName>Equipe</SectionName>
      <TeamInfo />
      <Line />
    </>
  );
}
export default TeamMembers;
