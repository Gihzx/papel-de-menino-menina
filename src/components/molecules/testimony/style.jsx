import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top:3rem;
  h2 {
    color: #ba6414;
  }
`;
export const Section = styled.section`
  padding: 3% 7%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 1rem;
    p {
      width: 40%;
    }
    span{
      color: #7D00A2 ;
      font-weight: 600;
    }

    @media (max-width: 1025px) and (min-width: 900px) {
      /* Ajustes para telas entre 1024px e 900px */
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
    @media (max-width: 1200px) {
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

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        width: 98%;
      }
      .imgDepoi {
        width: 30%;
      }
    }
    @media (max-width: 808px) and (min-width: 772px) {
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

    @media (max-width: 768px) {
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

    @media (max-width: 480px) {
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
