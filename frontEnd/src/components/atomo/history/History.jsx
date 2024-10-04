import imgHistory from "../../../assets/SITE-Descritivos-600x849.png";
import imgHistory2 from "../../../assets/IPM-Relatorio-de-Transparencia-2020_2021.svg";
import * as S from "./style.jsx";
function History() {
  return (
    <S.Container>
      <img src={imgHistory2} alt="img" className="img" />
      <img src={imgHistory} alt="img" className="img" />
    </S.Container>
  );
}
export default History;
