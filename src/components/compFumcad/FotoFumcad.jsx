import fumdac from "../../assets/Screenshot_2025-01-03_204729-removebg-preview.png";
import cmdca from "../../assets/Screenshot_2025-01-03_205325-removebg-preview.png";
import Sp from "../../assets/Screenshot_2025-01-05_170014-removebg-preview.png"
import { Container, Foto } from "./StyledComponents";

function FotoFumcad() {
  return (
    <Container>
      <Foto src={fumdac} alt="Imagem 1" />
      <Foto src={cmdca} alt="Imagem 2" />
      <Foto src={Sp} alt="Imagem 3" />
    </Container>
  );
}

export default FotoFumcad;
