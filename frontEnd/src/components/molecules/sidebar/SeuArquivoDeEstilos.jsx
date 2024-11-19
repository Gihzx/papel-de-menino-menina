import styled from "styled-components";
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
