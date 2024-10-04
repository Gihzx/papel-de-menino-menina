import imgMae from "../../../assets/ongCriancaMae.svg";
import * as S from "./style.jsx";
function Actions() {
  return (
    <>
      <section>
        <S.Div>
          <h1> Nossas Ações</h1>
        </S.Div>
        <S.Container>
          <div className="item">
            <img src={imgMae} alt="foto de mae " className="photo" />
          </div>
          <div className="item">
            <img src={imgMae} alt="foto de mae " />
          </div>
          <div className="item">
            <img src={imgMae} alt="foto de mae " />
          </div>
        </S.Container>
      </section>
    </>
  );
}
export default Actions;
