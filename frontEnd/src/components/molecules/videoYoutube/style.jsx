import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  .VideoYoutube {
    width: 900px;
    height: 500px;
  }
  @media (max-width: 375px) {
    .VideoYoutube {
      width: 21.8rem;
    }
  }
  h1 {
    color: #ba6414;
  }
`;
