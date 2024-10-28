import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: #ba6414;
  }
`;
export const Section = styled.section`
  padding: 3% 7%;
  display: flex;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 20px;
    padding: 1rem;
    p {
      width: 40%;
    }
    @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        width: 98%;
      }
      .imgDepoi {
        width: 70%;
      }
    }
  }
`;
