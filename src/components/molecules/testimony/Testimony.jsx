import * as S from "./style.jsx";
import imgDepoimento from "../../../assets/image-1 (2).png";
import imgDepoimento2 from "../../../assets/image (3).png";

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
              " Desejo que crianças e adolescentes que não foram amados e
              cuidados, não acabem atrás das grades. Eu acredito em segundas
              chances, que o amor transforma, o amor acolhe, o amor restaura,
              reintegra, insere e nos torna co-responsáveis pela vida do outro.
              "
              <div>
                <span>Silvana Urbani</span> - Presidente
              </div>
            </p>
            <img src={imgDepoimento} alt="" className="imgDepoi" />
          </div>
          <div className="item">
            <p>
              "EU TENHO UM SONHO! A confiança é o primeiro passo para gerar
              oportunidades. ''É necessário sempre acreditar que o sonho é
              possível. Que o céu é o limite e você, truta, é imbatível." -
              Racionais MCs"
              <div>
                <span>Anderson Carvalho</span> - Coordenador de Projetos
              </div>
            </p>
            <img src={imgDepoimento2} alt="" className="imgDepoi" />
          </div>
        </div>
      </S.Section>
    </>
  );
}

export default Testimony;
