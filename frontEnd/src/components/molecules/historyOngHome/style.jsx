import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center; /* Alinha o conteúdo verticalmente no centro */
  padding: 40px;
  gap: 40px;
  margin-top: 5rem;

  .pictureSection {
    border-radius: 10px;
    height: 600px;
    width: auto; /* Define a largura proporcional à altura */
    object-fit: cover;
  }

  .textSection {
    display: flex;
    flex-direction: column; /* Coloca o texto em uma coluna */
    justify-content: space-between; /* Espaça o texto de forma uniforme de cima para baixo */
  }

  h1 {
    font-size: 35px;
    color: #ba6414;
    margin-top: 0;
  }

  p {
    width: 45vw;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha a imagem e o texto no layout responsivo */
    align-items: center;

    .pictureSection {
      height: 400px;
      width: 100%; /* Faz com que a imagem ocupe toda a largura */
    }

    p {
      width: 90%; /* Ajusta o texto para ocupar o espaço disponível */
    }
  }
`;

export const Div = styled.div``;

export const P = styled.p`
  font-size: 19px;
  color: #7d00a2;
  font-weight: 600;
  margin-top: 0;
`;
