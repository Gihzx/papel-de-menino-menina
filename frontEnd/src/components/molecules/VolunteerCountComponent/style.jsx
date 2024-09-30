import styled from "styled-components";

export const Conatiner = styled.section`
  background-color: #ff9029;
  display: flex;
  align-items: center;
  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .namber {
    color: aliceblue;
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
`;
