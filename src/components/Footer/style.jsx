import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: rgb(255, 144, 41);

  .input {
    display: flex;
    justify-content: end;
    align-items: end;
    padding: 15px;
    input {
      padding: 13px;
      border-radius: 5px;
      outline: none;
      border: none;
    }
  }
  .text {
    display: flex;
    align-items: end;
    justify-content: space-around;
  }
`;
export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: solid 1px #202020;
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
`;
