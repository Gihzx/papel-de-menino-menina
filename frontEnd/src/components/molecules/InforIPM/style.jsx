import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  @media (max-width: 375px) {
    margin: 1.5rem;
  }
  padding: 3% 7%;
  gap: 47px;
  h1 {
    color: #ba6414;
  }
  h2 {
    color: #ba6414;
  }
  header {
    display: flex;

    justify-content: start;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  div {
    width: 100%;
  }
`;
