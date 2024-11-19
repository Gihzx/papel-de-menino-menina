import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin: 3rem;
  gap: 50px;

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
    height: 690px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    width: 88%;
    .pictureSection {
      width: 65%;
    }
  }
  @media (max-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
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

  @media (max-width: 1024px) {
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const Section = styled.div``;
