import * as S from "./style.jsx";
import { PrimaryButton } from "../../atomo/button/Primary-button.jsx";
function UserContact() {
  return (
    <>
      <S.Div>
        <h2>Contato</h2>
      </S.Div>
      <S.Container>
        <div className="infor">
          <div>
            <h3>Entre em contato</h3>
          </div>
          <div>
            <p className="colorText">E-mail:</p>
            <p>email@gmail.com</p>
            <p className="colorText">Telefone</p>
            <p>(00) 0000-0000</p>
          </div>
          <div>
            <p className="colorText">Horario de funcionamento:</p>
            <p>8:00 ás 18:00</p>
          </div>
          <div>
            <p className="colorText">
              {" "}
              preencha o formulário ao lado que entraremos em contato com voce!{" "}
            </p>
          </div>
          <div>
            <p>gestao@papeldemenino.org.br</p>
            <p>instagram.com/ipapeldemenino</p>
          </div>
        </div>
        <div className="inputs">
          <div>
            <input type="text" name="" id="" placeholder="E-mail" />
            <p>
              <input type="text" name="" id="" placeholder="Assunto" />
            </p>
            <textarea name="" id="" placeholder="Mensage..."></textarea>
          </div>

          <div>
            <PrimaryButton
              style={{ backgroundColor: "#ff9029" }}
              className="primary-button"
            >
              Saber mais
            </PrimaryButton>
          </div>
        </div>
      </S.Container>
    </>
  );
}
export default UserContact;
