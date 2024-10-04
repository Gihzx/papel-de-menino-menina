import * as S from "./style.jsx";
import imgDepoimento from "../../../assets/WhatsApp-Image-2023-06-17-at-17.37.44.svg";
function Testimony() {
  return (
    <>
      <S.Section>
        <header>
          <h2>Depoimento</h2>
        </header>
        <div className="item">
          <p>
            Desejo que crianças e adolescentes que não foram amados e cuidados,
            não acabem atrás das grades. Eu acredito em segundas chances, que o
            amor transforma, o amor acolhe, o amor restaura, reintegra, insere e
            nos torna co-responsáveis pela vida do outro.
          </p>
          <img src={imgDepoimento} alt="" />
        </div>
        <div className="item">
          <p>
            EU TENHO UM SONHO! A confiança é o primeiro passo para gerar
            oportunidades. É necessário sempre acreditar que o sonho é possível.
            Que o céu é o limite e você, truta, é imbatível. - Racionais MCs
          </p>
          <img src={imgDepoimento} alt="" />
        </div>
      </S.Section>
    </>
  );
}

export default Testimony;
