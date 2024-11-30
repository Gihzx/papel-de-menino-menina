import SectionName from "../../components/atomo/sectionName/SectionName";
import {
  CommunityBakery,
  TrainingClass,
  WorkshopActivity,
  DigitalLiteracy,
  BarbershopServices,
} from "../../components/atomo/activities/CommunityBakery";
import Line from "../../components/atomo/line/Line";
import Press from "../../components/molecules/Press/Press";

export function Courses() {
  return (
    <>
      <SectionName>Cursos & oficinas</SectionName>
      <CommunityBakery />
      <TrainingClass />
      <WorkshopActivity />
      <DigitalLiteracy />
      <BarbershopServices />
      <Line />
    </>
  );
}

export function Media() {
    return (
      <>
        <SectionName>Imprensa</SectionName>
        <Press />
        <Line />
      </>
    );
  }