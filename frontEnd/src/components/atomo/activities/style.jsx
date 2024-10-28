import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 7%;
  .text {
    width: 30%;
  }
  h1 {
    color: #ba6414;
  }
  p {
    width: 97%;
  }
  h2 {
    color: #ba6414;
  }
  @media (max-width: 375px) {
    .text {
      width: 100%;
    }
    p {
      width: 100%;
    }
  }
`;
