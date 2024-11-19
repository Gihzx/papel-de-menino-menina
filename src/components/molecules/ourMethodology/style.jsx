import styled from "styled-components";

export const Container = styled.section`
  padding: 3% 7%;
  h1,
  h2 {
    color: #ba6414;
  }

  .img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 45%;
    object-fit: cover;
  }
  @media (max-width: 375px) {
    img {
      width: 100%;
    }
  }
  .img2 {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 25%;
    }
  }
`;
export const ContainerTwo = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .text {
    p {
      font-weight: 600;
    }
  }
`;
