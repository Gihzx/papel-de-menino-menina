import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3% 7%;
  flex-wrap: wrap;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    color: #ba6414;
  }
  @media (max-width: 375px) {
    .item {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
`;
