import { useState } from "react";
import { SidebarWrapper } from "./SeuArquivoDeEstilos.jsx";

const MenuComponent = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <SidebarWrapper>
      <div className="menuContainer">
        <div className="mobile-menu" onClick={toggleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </div>
    </SidebarWrapper>
  );
};

export default MenuComponent;
