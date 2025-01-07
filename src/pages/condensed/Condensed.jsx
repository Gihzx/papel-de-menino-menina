import { SectionName } from "../../components/SectionName";
import CondecaInfo from "../../components/molecules/condecaInfo/CondecaInfo";
import DateDonate from "../../components/molecules/dateDonate/DateDonate";
import Line from "../../components/atomo/line/Line";
import Text from "./Text";
function Condensed() {
  return (
    <>
      <SectionName title="Condeca" />
      <CondecaInfo />
      <DateDonate
        bankName="BANCO DO BRASIL / Agência, 1897-x / Conta, 8947-8 "
        accountNumber="10.398.480.001-44"
        text={
          "Fundo Estadual dos Direitos da Crinaça e do Adolescente - FEDCA São Paulo"
        }
        pix="exemplo@pix.com"
        emailName={"gestao@papeldemenino.org.br"}
        infComprovante={"Enviar comprovante para:"}
        infEnvio={
          " Você ou sua empresa receberão as instruções de preenchimento da declaração de destinação para enviar ao FIA"
        }
        paypalLink="https://www.paypal.com/donate/?hosted_button_id=XWYF36FTCENY2"
      />
      <Text />
      <Line />
    </>
  );
}
export default Condensed;
