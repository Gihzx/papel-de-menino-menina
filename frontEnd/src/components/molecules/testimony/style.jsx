import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 3.5rem;
  @media (max-width: 375px) {
    .item {
      display: flex;
      flex-direction: column;
      p {
      }
    }
  }

  .item {
    display: flex;
    justify-content: center;
    width: 60%;
    height: 200px;
    p {
      margin-left: 20px;
      display: flex;
      align-items: center;
      border-left: solid 4px #7d00a2;
      padding: 20px;
    }
  }
  header {
    display: flex;
    justify-content: center;
  }
  h2 {
    color: #ba6414;
  }
`;
