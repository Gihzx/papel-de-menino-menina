import * as S from "./style.jsx";
import { PrimaryButton } from "../../atomo/button/Primary-button.jsx";
import logo from "../../../assets/logoIPM.png";
function Footer() {
  return (
    <>
      <S.Section>
        <div className="input">
          <input type="text" placeholder="Digite seu e-mail" />
          <PrimaryButton
            onClick={() => alert("seja bem vindo")}
            style={{ backgroundColor: "#7D00A2" }}
            className="primary-button"
          >
            Enviar
          </PrimaryButton>
        </div>
        <S.LestContainer>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h4>Contatos</h4>
            <p>Telefone:</p>
            <p>WhatsApp</p>
            <p>E-mail</p>
          </div>
          <div>
            <h4>Redes sociais</h4>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
          <div>
            <h4>Ações</h4>
            <p> Quem somos?</p>
            <p>Nosso projeto</p>
            <p>Equipe</p>
            <p>Contato</p>
          </div>
        </S.LestContainer>
        <div className="text">
          <p>© 2023 All Rights Reserved.</p>
        </div>
      </S.Section>
    </>
  );
}
export default Footer;
