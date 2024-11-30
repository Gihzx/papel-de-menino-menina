import SectionName from "../../components/atomo/sectionName/SectionName.jsx";
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
      <SectionName>Quem somos</SectionName>
      <InforIPM />
      <History />
      <Line />
    </>
  );
}

export function OurProjects() {
  return (
    <>
      <SectionName>Nosso projetos</SectionName>
    </>
  );
}

export function Methodology() {
  return (
    <>
      <SectionName>Nossa metodologia</SectionName>
      <OurMethodology />
      <EmotionalSupport />
      <CourseAndWorkshop />
      <Line />
    </>
  );
}