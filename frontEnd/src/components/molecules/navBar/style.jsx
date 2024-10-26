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
  .menuContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav_list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .mobile-menu .line {
    width: 100%;
    height: 4px;
    background-color: #000;
    margin: 4px 0;
  }
  /* 
  Sidebar for mobile view / */
  .sidebar {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background-color: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .sidebar.active {
    transform: translateX(0);
  }

  /* / Hide sidebar in desktop / */
  @media (min-width: 769px) {
    .sidebar {
      display: none;
    }
  }

  /* Show mobile menu and hide desktop menu on mobile view  */
  @media (max-width: 768px) {
    .nav_list {
      display: none;
    }

    .mobile-menu {
      display: flex;
    }

    .sidebar {
      display: block;
    }
  }
`;
