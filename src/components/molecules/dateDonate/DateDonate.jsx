import * as S from "./style.jsx";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../atomo/button/Primary-button.jsx";

function DateDonate({
  bankName,
  pix,
  accountNumber,
  paypalLink,
  text,
  infComprovante,
  emailName,
  infEnvio
}) {
  return (
    <S.Container>
      <div className="textH3">
        <h3>Dados de conta corrente para doação:</h3>
      </div>
      <div className="containerButton">
        <div className="textParagrafro">
          <div>
            <p>
              Banco do Brasil: <span>{bankName}</span>
            </p>
          </div>
          <div>
            <p>
              <span>{text}</span>
            </p>
          </div>
          <div>
            <p>
              CNPJ: <span>{accountNumber}</span>
            </p>
          </div>
          <div>
            <p>
              Pix: <span>{pix}</span>
            </p>
          </div>
          <div>
            <p>
              {infComprovante} <span>{emailName}</span>
            </p>
          </div>
          <div>
            <span>
             
            </span>
            <span>{ infEnvio}</span>
          </div>
        </div>
        <div>
          <Link to={paypalLink}>
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
  );
}

export default DateDonate;
