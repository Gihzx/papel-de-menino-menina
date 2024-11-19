import * as S from "./style.jsx";
function SectionName({ children }) {
  return (
    <>
      <S.Container>
        <h2>{children}</h2>
      </S.Container>
    </>
  );
}
export default SectionName;
