import styled from "styled-components";

export const Container = styled.div`
  background-color: #7d00a2;
  padding: 1rem;

  h2 {
    color: aliceblue;
    margin-left: 6%;
  }
  @media (max-width: 375px) {
    h2 {
      margin-left: 2%;
    }
  }
`;
