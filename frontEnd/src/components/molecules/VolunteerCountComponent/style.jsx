import styled from "styled-components";

export const Conatiner = styled.section`
  background-color: #ff9029;
  justify-content: space-around;
  display: flex;
  align-items: center;
  border-radius: 0 0 10px 10px;
  padding: 20px;
  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .namber {
    color: aliceblue;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    font-size: 50px;
    font-weight: 800;
  }
  p {
    font-weight: 600;
    font-size: 19px;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1440px) {
    position: relative;
    display: flex;
    align-items: center;
    .item {
      width: 100%;
    }
  }
`;
