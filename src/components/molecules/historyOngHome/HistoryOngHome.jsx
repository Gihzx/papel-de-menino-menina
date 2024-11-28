import * as S from "./style.jsx";
import { PrimaryButton } from "../../atomo/button/Primary-button";
import imgHomem from "../../../assets/imgHomen.jpg";
function HistoryOngHome() {
  return (
    <S.Container>
      <img src={imgHomem} alt="Imagem de um homem" className="pictureSection" />
      <S.Div>
        <S.P>Nossa História</S.P>
        <h1>INSTITUTO PAPEL DE MENINO & MENINA</h1>
        <p>
          O Instituto Papel de Menino & Menina (IPM), fundado em 2008, é uma OSC
          que se dedica a acolher e apoiar crianças e adolescentes, de 12 a 18
          anos, em privação de liberdade e cumprindo medida socioeducativa na
          cidade de São Paulo.{" "}
        </p>
        <p>
          O IPM atua dentro de unidades femininas e masculinas da Fundação CASA
          de São Paulo, oferecendo suporte, aconselhamento e capacitação para
          que quase 2 mil adolescentes por ano possa, se (re) integrar na
          sociedade de forma produtiva e saudável.
        </p>
        <p>
          Somos a única organização social atuando no acolhimento e orientação
          de adolescentes gestantes e mães que estão encarceradas em unidades
          socioeducativas de São Paulo.
        </p>
        <span>
          <p>Acompanhamento Psicossocial e Mentoria</p>
          <p>Acompanhamento Psicossocial e Mentoria</p>
          <p>Acompanhamento Psicossocial e Mentoria</p>
          <p>Acompanhamento Psicossocial e Mentoria</p>
        </span>

        <PrimaryButton
          style={{ backgroundColor: "#7D00A2", width: 160 }}
          className="primary-button"
        >
          Saber mais
        </PrimaryButton>
      </S.Div>
    </S.Container>
  );
}
export default HistoryOngHome;
