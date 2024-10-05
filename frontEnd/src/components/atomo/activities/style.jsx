import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  .text {
    width: 30%;
  }
  h1 {
    color: rgb(255, 144, 41);
  }
  p {
    width: 97%;
  }
  h2 {
    color: rgb(255, 144, 41);
  }
  @media (max-width: 375px) {
    .text {
      width: 100%;
    }
  }
`;
