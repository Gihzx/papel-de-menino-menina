import styled from "styled-components";
import { motion } from "framer-motion";

// Container para imagem responsiva
export const Container = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Imagem com animação e responsividade
export const AnimatedImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
`;

// Título com responsividade ajustada
export const Title = styled.h1`
  position: absolute;
  left: 0;
  margin-left: 7vw; /* Use vw para maior flexibilidade */
  color: #ba6414;
  font-size: 3rem; /* Definindo tamanho base em rem */

  /* Media Queries */
  @media (max-width: 1024px) and (min-width: 900px) {
  }
  @media (max-width: 1200px) {
    margin-left: 5vw; /* Ajuste para telas grandes */
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    margin-left: 4vw;
    font-size: 2rem;
  }
  @media (max-width: 808px) and (min-width: 772px) {
    margin-left: 4vw;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    margin-left: 2rem; /* Ajuste ainda maior para tablets */
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-left: 1rem; /* Ajuste para dispositivos móveis */
    font-size: 1.2rem;
  }

  @media (max-width: 375px) {
    margin-left: 1rem;
    font-size: 1rem; /* Maior redução para telas muito pequenas */
  }
`;

// Parágrafo com responsividade ajustada
export const P = styled.p`
  position: absolute;
  width: 800px; /* Ajuste de largura usando % */
  display: flex;
  margin-top: 15%;
  left: 0;
  margin-left: 7vw; /* Margem responsiva */
  color: aliceblue;
  border-left: solid 4px #7d00a2;
  padding: 7px;
  font-size: 1.2rem;

  /* Media Queries */
  @media (max-width: 1025px) and (min-width: 900px) {
    /* Ajustes para telas entre 1024px e 900px */
    margin-left: 5vw;
    margin-top: 20%;
    font-size: 1rem;
  }
  @media (max-width: 1200px) {
    margin-left: 5vw;
    margin-top: 20%;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    margin-left: 4vw;
    margin-top: 25%;
    font-size: 1rem;
    width: 60%;
  }
  @media (max-width: 808px) and (min-width: 772px) {
    margin-left: 4vw;
    margin-top: 25%;
    font-size: 1rem;
    width: 90%;
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-top: 25%;
    width: 85%; /* Ajuste de largura em telas médias */
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    margin-left: 1rem;
    margin-top: 40%;
    width: 90%;
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    margin-left: 1rem;
    margin-top: 60%;
    width: 90%;
    font-size: 0.7rem;
  }
`;
