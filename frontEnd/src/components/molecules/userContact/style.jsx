import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  background-color: #7d00a2;
  padding: 3% 7%;
  gap: 40px;
  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 1.5rem;
    input {
      padding: 1rem;
      width: 300px;
      outline: none;
      border: none;
      border-radius: 2px;
    }
    textarea {
      width: 325px;
      height: 150px;
      outline: none;
    }
  }
  .colorText {
    color: #ba6414;
    font-weight: 700;
  }
  p {
    color: aliceblue;
    font-weight: 200;
  }
  h3 {
    color: aliceblue;
  }
  .infor {
    width: 300px;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    color: #ba6414;
  }
`;
