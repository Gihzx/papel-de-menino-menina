import { NavBar } from "../../components/molecules/navBar/NavBar";
import Comments from "../../components/molecules/comments/Comments";
import SectionName from "../../components/atomo/sectionName/SectionName";
function CommentsPre() {
  return (
    <>
      <NavBar />
      <SectionName>Palavras da presidente</SectionName>
      <Comments />
    </>
  );
}
export default CommentsPre;
