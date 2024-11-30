import { SectionName } from "../../components/SectionName";
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
      <SectionName title="Unidade Feminina" />
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
      <SectionName title="Unidade Masculina" />
      <MaleUnit />
      <FormationClass />
      <Line />
    </>
  );
}
