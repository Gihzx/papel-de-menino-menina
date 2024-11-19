import imgMae from "../../../assets/ongCriancaMae.svg";
import imgProf from "../../../assets/WhatsApp Image 2024-10-28 at 16.56.35_fd23c33f (1).svg";
import imgAluno from "../../../assets/WhatsApp Image 2024-10-28 at 16.38.26_4cbce4b9.svg";
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
            <img src={imgProf} alt="foto de mae " className="photo" />
          </div>
          <div className="item">
            <img src={imgAluno} alt="foto de mae " className="photo" />
          </div>
        </S.Container>
      </section>
    </>
  );
}
export default Actions;
