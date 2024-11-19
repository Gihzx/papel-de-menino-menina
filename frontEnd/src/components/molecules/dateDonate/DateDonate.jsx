import * as S from "./style.jsx";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../atomo/button/Primary-button.jsx";

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
            <Link to="https://www.paypal.com/donate/?hosted_button_id=XWYF36FTCENY2">
              {" "}
              <PrimaryButton
                style={{
                  backgroundColor: "rgb(255, 144, 41)",
                  color: "aliceblue",
                  width: 170,
                }}
                className="primary-button"
              >
                Doe agora
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </S.Container>
    </>
  );
}
export default DateDonate;
