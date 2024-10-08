import styled from "styled-components";
export const div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 375px) {
    padding: 10px 24px;
    position: relative;
    display: flex;
    justify-content: space-between;

    .menu {
      cursor: pointer;
      opacity: 0;
    }
    .menu .active div {
      opacity: 1;
      visibility: visible;
      width: 1.5rem;
      height: 2px;
      margin: 5px;
      background-color: #0d0d0e;
    }
  }
  @media (max-width: 824px) {
    padding: 10px 24px;
    position: relative;
    display: flex;
    justify-content: space-between;

    .menu {
      cursor: pointer;
      opacity: 0;
    }
    .menu .active div {
      opacity: 1;
      visibility: visible;
      width: 1.5rem;
      height: 2px;
      margin: 5px;
      background-color: #0d0d0e;
    }
  }
`;
export const nav_list = styled.div`
  ul {
    display: flex;
    list-style: none;
    padding: 10px;
  }
  li {
    margin: 0 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 1;
  }
  .arrowDown {
    margin-left: 5px;
  }
  @media (max-width: 375px) {
    ul {
      /* display esta como display:none */
      position: absolute;
      list-style: none;
      display: flex;
      align-items: start;
      flex-direction: column;
      margin-top: 2.5rem;
      padding: 10px;
      width: 90vw;
      height: 92vh;
      right: 0;
      margin-right: 15px;
      background-color: aliceblue;
    }
    li {
      padding: 10px 0;
      display: flex;
      margin: 0 0;
      align-items: start;
      cursor: pointer;
    }
    .arrowDown {
      display: none;
    }
  }
  @media (max-width: 824px) {
    ul {
      position: absolute;
      list-style: none;
      display: flex;
      align-items: start;
      flex-direction: column;
      margin-top: 2.5rem;
      padding: 10px;
      width: 90vw;
      height: 92vh;
      right: 0;
      margin-right: 15px;
      background-color: aliceblue;
    }
    li {
      padding: 10px 0;
      display: flex;
      margin: 0 0;
      align-items: start;
      cursor: pointer;
    }
    .arrowDown {
      display: none;
    }
  }
`;
