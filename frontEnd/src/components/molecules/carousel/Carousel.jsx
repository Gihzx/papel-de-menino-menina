import * as S from "./style.jsx";
import img from "../../../assets/papeldemeninoemenina.png";

const Carousel = () => {
  return (
    <S.Container>
      <S.AnimatedImage
        src={img}
        alt="Imagem Animada"
        initial={{ scale: 1.09 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <S.Title>Uma nova chance começa com acolhimento</S.Title>
      <S.P>
        No projeto, acreditamos que cada pessoa merece uma oportunidade de
        recomeçar. Com amor, empatia e cuidado, acolhemos aqueles que buscam um
        novo caminho, oferecendo suporte e criando um ambiente de transformação
        e esperança. Aqui, cada história é importante e cada recomeço é
        celebrado.
      </S.P>
    </S.Container>
  );
};

export default Carousel;
