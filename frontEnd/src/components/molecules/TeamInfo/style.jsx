import styled from "styled-components";

export const Container = styled.section`
  padding: 3% 7%;
  section {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  div {
    padding: 2%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 20%;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;
