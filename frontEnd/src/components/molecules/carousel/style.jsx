import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden; /* Esconde qualquer parte da imagem que saia do contêiner */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnimatedImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Mantém a proporção da imagem */
  transform-origin: center; /* Define o ponto de origem da transformação */
`;
export const Title = styled.h1`
  position: absolute;
  left: 0;
  margin-left: 7rem;
  color: #ba6414;
`;
export const P = styled.p`
  position: absolute;
  width: 50%;
  display: flex;
  margin-top: 10%;
  left: 0;
  margin-left: 7rem;
  color: aliceblue;
  border-left: solid 4px #7d00a2;
  padding: 15px;
`;
