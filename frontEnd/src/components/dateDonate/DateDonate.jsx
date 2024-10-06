import * as S from "./style.jsx";
import { PrimaryButton } from "../atomo/button/Primary-button";
function DateDonate() {
  return (
    <>
      <S.Container>
        <div className="textH3">
          <h3>Dados de conta corrente para doação:</h3>
        </div>
        <div className="containerButton">
          <div className="textParagrafro">
            <div>
              <p>
                Banco Bradesco: <span>Ag0156-Cc 189148-0</span>
              </p>
            </div>
            <div>
              <p>
                Pix: <span>CNPJ:10.398.480./0001-44</span>
              </p>
            </div>
          </div>
          <div>
            <PrimaryButton
              onClick={() => alert("seja bem vindo")}
              style={{ backgroundColor: "rgb(255, 144, 41)" }}
              className="primary-button"
            >
              Doe com paypal
            </PrimaryButton>
          </div>
        </div>
      </S.Container>
    </>
  );
}
export default DateDonate;
