import * as S from "./style.jsx";
import imgHomem from "../../../assets/imgHomen.jpg";
import { PrimaryButton } from "../../atomo/button/Primary-button";
function HistoryOng() {
  return (
    <>
      <S.Container>
        <S.Div>
          <S.Section>
            <header>
              <h1>Instituto Papel de Menino & Menina</h1>
              <span className="line"></span>
            </header>
            <h2>Nossa Historia</h2>
            <p>
              O Instituto Papel de Menino & Menina (IPM), fundado em 2008, é uma
              OSC que se dedica a acolher e apoiar crianças e adolescentes, de
              12 a 18 anos, em privação de liberdade e cumprindo medida
              socioeducativa na cidade de São Paulo. O IPM atua dentro de
              unidades femininas e masculinas da Fundação CASA de São Paulo,
              oferecendo suporte, aconselhamento e capacitação para que quase 2
              mil adolescentes por ano possa, se (re) integrar na sociedade de
              forma produtiva e saudável. Somos a única organização social
              atuando no acolhimento e orientação de adolescentes gestantes e
              mães que estão encarceradas em unidades socioeducativas de São
              Paulo.
            </p>
          </S.Section>
          <PrimaryButton
            style={{ backgroundColor: "#7D00A2", width: 319 }}
            className="primary-button"
          >
            Saber mais
          </PrimaryButton>
        </S.Div>
        <span>
          <img
            src={imgHomem}
            alt="Imagem de um homem"
            className="pictureSection"
          />
        </span>
      </S.Container>
    </>
  );
}
export default HistoryOng;
