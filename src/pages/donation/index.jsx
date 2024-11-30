import { SectionName } from "../../components/SectionName";
import SectionDoe from "../../components/molecules/sectionDoe/SectionDoe";
import DateDonate from "../../components/molecules/dateDonate/DateDonate";
import TextDoe from "../../components/atomo/textDoe/TextDoe";
import Line from "../../components/atomo/line/Line";

export function Donation() {
  return (
    <>
      <SectionName title="Voluntário" />
      <SectionDoe />
      <DateDonate />
      <TextDoe />
      <Line />
    </>
  );
}
