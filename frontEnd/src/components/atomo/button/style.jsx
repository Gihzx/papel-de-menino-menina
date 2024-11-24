import styled from "styled-components";

export const button = styled.button`
  border: none;
  padding: 0.62rem;
  color: aliceblue;
  border-radius: 5px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  background-color: #7d00a2; /* Cor base do botão */
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #b874e4; /* Cor mais clara no hover */
    transform: scale(1.05); /* Leve aumento ao passar o mouse */
  }

  &:active {
    transform: scale(0.95); /* Leve redução ao clicar */
  }
`;
