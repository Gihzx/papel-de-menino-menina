import { SectionName } from "../../components/SectionName/index.jsx";
import InforIPM from "../../components/molecules/InforIPM/InforIPM.jsx";
import History from "../../components/atomo/history/History.jsx";
import Line from "../../components/atomo/line/Line.jsx";

import {
  OurMethodology,
  EmotionalSupport,
  CourseAndWorkshop,
} from "../../components/molecules/ourMethodology/OurMethodology.jsx";

export function AboutUs() {
  return (
    <>
      <SectionName title="Quem somos" />
      <InforIPM />
      <History />
      <Line />
    </>
  );
}

export function OurProjects() {
  return (
    <>
      <SectionName title="Nosso projetos" />
    </>
  );
}

export function Methodology() {
  return (
    <>
      <SectionName title="Nossa metodologia" />
      <OurMethodology />
      <EmotionalSupport />
      <CourseAndWorkshop />
      <Line />
    </>
  );
}
