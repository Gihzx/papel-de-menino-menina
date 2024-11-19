import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { FaBars } from "react-icons/fa";

function Sidebar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    about: false,
    contact: false,
  });

  const toggleSubmenu = (menu) => {
    setIsSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const showSettings = (event) => {
    event.preventDefault();
    alert("Configurações clicadas!");
  };

  return (
    <Menu
      customBurgerIcon={<FaBars style={{ fontSize: "1.5em" }} />}
      // customCrossIcon={
      //   <span>
      //     <FaBars />
      //   </span>
      // }
      styles={{
        bmBurgerButton: {
          position: "fixed",
          width: "30px",
          height: "25px",
          right: "20px",
          top: "30px",
        },
        bmBurgerBars: {
          background: "#333",
          height: "3px",
        },
        bmBurgerBarsHover: {
          background: "#555",
        },
        bmCrossButton: {
          height: "24px",
          width: "24px",
        },
        bmCross: {
          background: "#333",
        },
        bmMenu: {
          background: "#fafafa",
          padding: "2.5em 1.5em 0",
          position: "fixed",
          overflow: "none",
          fontSize: "1.15em",
          right: "0",
        },
        bmItemList: {
          color: "#333",
          padding: "0.8em",
        },
        bmOverlay: {
          background: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <a id="home" className="menu-item" href="/" style={linkStyle}>
        Início
      </a>

      <div>
        <a
          id="about"
          className="menu-item"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleSubmenu("about");
          }}
          style={linkStyle}
        >
          Sobre
        </a>
        {isSubmenuOpen.about && (
          <div style={submenuStyle}>
            <a href="/about/team" style={subLinkStyle}>
              Nossa Equipe
            </a>
            <a href="/about/company" style={subLinkStyle}>
              Sobre a Empresa
            </a>
          </div>
        )}
      </div>

      <div>
        <a
          id="contact"
          className="menu-item"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleSubmenu("contact");
          }}
          style={linkStyle}
        >
          Contato
        </a>
        {isSubmenuOpen.contact && (
          <div style={submenuStyle}>
            <a href="/contact/email" style={subLinkStyle}>
              E-mail
            </a>
            <a href="/contact/phone" style={subLinkStyle}>
              Telefone
            </a>
          </div>
        )}
      </div>

      <a
        onClick={showSettings}
        className="menu-item--small"
        href="#"
        style={linkStyle}
      >
        Configurações
      </a>
    </Menu>
  );
}

// Estilos para os links do menu
const linkStyle = {
  display: "block",
  padding: "10px 0",
  color: "#333",
  textDecoration: "none",
  transition: "color 0.3s",
};

// Estilos para os sublinks
const submenuStyle = {
  paddingLeft: "20px", // Indentação para diferenciar do link principal
};

const subLinkStyle = {
  display: "block",
  padding: "5px 0",
  color: "#666",
  textDecoration: "none",
  fontSize: "0.9em",
  transition: "color 0.3s",
};

export default Sidebar;
