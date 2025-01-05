import { SectionName } from "../../components/SectionName";
import SectionDoe from "../../components/molecules/sectionDoe/SectionDoe";
import DateDonate from "../../components/molecules/dateDonate/DateDonate";
import TextDoe from "../../components/atomo/textDoe/TextDoe";
import Line from "../../components/atomo/line/Line";

export function Donation() {
  return (
    <>
      <SectionName title="Como doar" />
      <SectionDoe />
      <DateDonate
        bankName="Banco do Brasil"
        accountNumber="12345-6"
        pix="exemplo@pix.com"
        paypalLink="https://www.paypal.com/donate/?hosted_button_id=XWYF36FTCENY2"
      />
      <TextDoe />
      <Line />
    </>
  );
}
