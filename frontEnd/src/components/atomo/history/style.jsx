import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 180vh;
  }

  @media (max-width: 375px) {
    img {
      height: 80vh;
    }
  }
`;
