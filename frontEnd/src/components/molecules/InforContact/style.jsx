import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2%;

  h1 {
    color: #ba6414;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    width: 90%;
  }
  @media (max-width: 375px) {
    padding: 6%;
    p {
      width: 100%;
    }
  }
`;
