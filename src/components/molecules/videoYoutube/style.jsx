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

  @media (max-width: 1025px) and (min-width: 900px) {
    .VideoYoutube {
      width: 90vw;
    }
  }
  @media (max-width: 1200px) {
    .VideoYoutube {
      width: 90vw;
    }
  }

  @media (max-width: 1024px) {
    .VideoYoutube {
      width: 90vw;
    }
  }
  @media (max-width: 808px) and (min-width: 772px) {
    .VideoYoutube {
      width: 90vw;
    }
  }

  @media (max-width: 768px) {
    .VideoYoutube {
      width: 90vw;
    }
  }

  @media (max-width: 480px) {
    .VideoYoutube {
      width: 90vw;
    }
  }
  @media (max-width: 375px) {
    .VideoYoutube {
      width: 90vw;
    }
  }
  h1 {
    color: #ba6414;
  }
`;
