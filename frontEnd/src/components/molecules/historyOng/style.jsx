import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  h1 {
    color: #ba6414;
    width: 300px;
  }
  .line {
    border-bottom: #7d00a2;
    width: 20px;
  }
  .pictureSection {
    border-radius: 10px;
    height: 65%;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    width: 88%;
    .pictureSection {
      width: 97%;
      margin-top: 15px;
    }
  }
`;

export const Div = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div``;
