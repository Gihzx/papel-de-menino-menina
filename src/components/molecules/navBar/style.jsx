import styled from "styled-components";
export const Div = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: aliceblue;
  width: 100%;
  z-index: 1;
  top: 0;

  /* @media (max-width: 375px) {
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
  } */
  @media (max-width: 375px) {
    padding: 10px;
  }
  @media (max-width: 824px) {
    ul {
      display: none;
    }
    li {
      display: none;
    }
    /* padding: 10px 24px;
    position: relative;
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
    } */
  }
`;
export const Nav_list = styled.div`
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
  .dropdown-item {
    padding: 8px 12px;
    cursor: pointer;
  }

  /* Efeito hover para as opções do dropdown */
  .dropdown-item:hover {
    background-color: #caa1d6; /* Cor de fundo para o hover */
    color: #fff; /* Cor do texto ao passar o mouse */
    border-radius: 5px; /* Bordas arredondadas */
    transition: background-color 0.3s ease; /* Transição suave */
  }
  .arrowDown {
    margin-left: 5px;
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
  /* Telas pequenas (smartphones em modo retrato) */
  @media (max-width: 480px) {
    ul {
      display: none;
    }
    li {
      padding: 20px;
    }
  }

  /* Telas médias (smartphones em modo paisagem e tablets em modo retrato) */
  @media (max-width: 768px) {
    /* Ajustes para telas médias, como mudanças de layout ou redução de fontes */
  }

  /* Telas grandes (tablets em modo paisagem e desktops menores) */
  @media (max-width: 1024px) {
    /* Ajustes para telas maiores, como tablets em paisagem ou laptops */
  }

  /* Telas extra-grandes (laptops grandes e desktops) */
  @media (max-width: 1200px) {
    /* Ajustes para telas bem grandes, se necessário */
  }
  @media (max-width: 375px) {
    padding: 30px;
    ul {
      display: none;
    }
    li {
      padding: 20px;
    }
    /* ul {
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
    } */
  }
  @media (max-width: 824px) {
    /* ul {
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
    } */
  }

  /* .mobile-menu {
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
  */
  /*Sidebar for mobile view / */
  /* .sidebar {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background-color: #ac1111;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .sidebar.active {
    transform: translateX(0);
  } */

  /* / Hide sidebar in desktop / */
  /* @media (min-width: 769px) {
    .sidebar {
      display: none;
    }
  } */

  /* Show mobile menu and hide desktop menu on mobile view  */
  /* @media (max-width: 768px) {
    .nav_list {
      display: none;
    }

    .mobile-menu {
      display: flex;
    }

    .sidebar {
      display: block;
    }
  } */
`;
