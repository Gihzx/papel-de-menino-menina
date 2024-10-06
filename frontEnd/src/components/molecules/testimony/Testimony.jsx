import * as S from "./style.jsx";
import imgDepoimento from "../../../assets/WhatsApp-Image-2023-06-17-at-17.37.44.svg";
function Testimony() {
  return (
    <>
      <S.Header>
        <h2>Depoimento</h2>
      </S.Header>
      <S.Section>
        <div className="container">
          <div className="item">
            <p>
              Desejo que crianças e adolescentes que não foram amados e
              cuidados, não acabem atrás das grades. Eu acredito em segundas
              chances, que o amor transforma, o amor acolhe, o amor restaura,
              reintegra, insere e nos torna co-responsáveis pela vida do outro.
            </p>
            <img src={imgDepoimento} alt="" className="imgDepoi" />
          </div>
          <div className="item">
            <p>
              Desejo que crianças e adolescentes que não foram amados e
              cuidados, não acabem atrás das grades. Eu acredito em segundas
              chances, que o amor transforma, o amor acolhe, o amor restaura,
              reintegra, insere e nos torna co-responsáveis pela vida do outro.
            </p>
            <img src={imgDepoimento} alt="" className="imgDepoi" />
          </div>
        </div>
      </S.Section>
    </>
  );
}

export default Testimony;
