import SectionName from "../../components/atomo/sectionName/SectionName";
import {
  FemiUnit,
  Pami,
  BeautySalon,
  GirlsAndMothers,
  PostMeasure,
  AllNew,
} from "../../components/molecules/FemiUnit/FemiUnit";
import Line from "../../components/atomo/line/Line";

import {
    MaleUnit,
    FormationClass,
  } from "../../components/molecules/MaleUnit/MaleUnit";


export function Female() {
  return (
    <>
      <SectionName>Unidade Feminina</SectionName>
      <FemiUnit />
      <Pami />
      <BeautySalon />
      <GirlsAndMothers />
      <PostMeasure />
      <AllNew />
      <Line />
    </>
  );
}

export function Male() {
    return (
      <>
        <SectionName>Unidade Masculina</SectionName>
        <MaleUnit />
        <FormationClass />
        <Line />
      </>
    );
  }