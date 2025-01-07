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
  border-bottom: solid 3px #7d00a2;


  .hamburger-menu {
    display: none;
    cursor: pointer;
    z-index: 2;
  }

  .hamburger-menu div {
    width: 25px;
    height: 3px;
    background-color: #7d00a2;
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }

  .hamburger-menu.active div:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger-menu.active div:nth-child(2) {
    opacity: 0;
  }
  .hamburger-menu.active div:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  @media (max-width: 824px) {
    padding: 10px;

    .hamburger-menu {
      display: block; /* Mostra o botão no mobile */
    }

    ul {
      display: none; /* Esconde o menu no mobile */
      flex-direction: column;
      position: absolute;
      top: 60px;
      right: 10px;
      background-color: aliceblue;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      width: 200px;
      padding: 10px;
    }

    ul.active {
      display: flex; /* Mostra o menu ao ativar o hambúrguer */
    }

    li {
      margin: 10px 0;
    }
    
  }
`;

export const Navlist = styled.div`
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

  .dropdown-item:hover {
    background-color: #caa1d6;
    color: #fff;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .arrowDown {
    margin-left: 5px;
  }

  @media (max-width: 480px) {
    ul {
      display: none;
    }
    li {
      padding: 20px;
    }
  }
`;

export const SidebarWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    .sidebar {
      display: block;
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
      z-index: 2;
    }

    .sidebar.active {
      transform: translateX(0);
    }

    .menuContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav_list {
      display: none;
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }

    .line {
      width: 100%;
      height: 4px;
      background-color: #000;
      margin: 4px 0;
    }
  }
`;
