import { useState } from "react";
import logo from "../../assets/logoIPM.png";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import Dropdown from "../atomo/dropdown/Dropdown.jsx";
import { Navlist } from "./style.jsx";
import { isMobile } from "react-device-detect";
import { theme } from "../../theme.jsx";
import { Links } from "../Links";
import { DropdownMenu } from "./components/dropdown.jsx";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const menuStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  };

  const mobileMenuStyles = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    backgroundColor: theme.colors.aliceblue,
    position: "absolute",
    top: "100px",
    left: 0,
    width: "100%",
    zIndex: 1001,
    display: menuOpen ? "block" : "none",
  };

  const mobileMenuItemStyles = {
    borderBottom: "1px solid #ddd",
    textAlign: "center",
  };

  return (
    <header style={{ padding: "20px" }}>
      <nav>
        <div style={menuStyles}>
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          {isMobile ? (
            <div>
              <button
                onClick={toggleMenu}
                style={{
                  background: "transparent",
                  borderRadius: "5px",
                  borderColor: theme.colors.primary,
                }}
              >
                {menuOpen ? (
                  <IoIosClose size={30} color={theme.colors.primary} />
                ) : (
                  <IoIosMenu size={30} color={theme.colors.primary} />
                )}
              </button>
              {menuOpen && (
                <>
                  <ul style={mobileMenuStyles}>
                    <DropdownMenu
                      title="Institucional"
                      options={[
                        { text: "Quem Somos", link: "/sobre" },
                        { text: "Nossos projetos", link: "/projetos" },
                        { text: "Nossa Metodologia", link: "/metodologia" },
                      ]}
                    />
                    <DropdownMenu
                      title="Projetos"
                      options={[
                        { text: "Unidade Feminina", link: "/unidadeFeminina" },
                        { text: "Unidade Masculina", link: "/unidadeMascula" },
                      ]}
                    />
                    <DropdownMenu
                      title="Apoiadores"
                      options={[
                        { text: "Cursos & Oficinas", link: "/cursos-oficina" },
                        { text: "Imprensa", link: "/imprensa" },
                      ]}
                    />
                    <DropdownMenu
                      title="Lei de Incetivo"
                      options={[{ text: "Condeca", link: "/condeca" }]}
                    />
                    <li style={mobileMenuItemStyles}>
                      <Links
                        title="Contatos"
                        type="primary"
                        links={[{ name: "Contato", href: "/contato" }]}
                        style={{ width: "100%" }}
                      />
                    </li>
                    <li style={mobileMenuItemStyles}>
                      <Links
                        title="Doe agora"
                        type="secondary"
                        links={[
                          {
                            name: "Doe agora",
                            href: "https://www.paypal.com/donate/?hosted_button_id=XWYF36FTCENY2",
                          },
                        ]}
                      />
                    </li>
                  </ul>
                </>
              )}
            </div>
          ) : (
            <Navlist className="menuDesktop">
              <ul>
                <li>
                  <Dropdown
                    options={[
                      { text: "Quem Somos", link: "/sobre" },
                      { text: "Nossos projetos", link: "/projetos" },
                      { text: "Metodologia", link: "/metodologia" },
                    ]}
                    defaultValue="Institucional"
                  />
                  <IoIosArrowDown color={theme.colors.primary} size={20} />
                </li>
                <li>
                  <Dropdown
                    options={[
                      { text: "Unidade Feminina", link: "/unidadeFeminina" },
                      { text: "Unidade Masculina", link: "/unidadeMascula" },
                    ]}
                    defaultValue="Serviços"
                  />
                  <IoIosArrowDown color={theme.colors.primary} size={20} />
                </li>
                <li>
                  <Dropdown
                    options={[
                      { text: "Cursos & Oficinas", link: "/cursos-oficina" },
                      { text: "Imprensa", link: "/imprensa" },
                    ]}
                    defaultValue="Apoiadores"
                  />
                  <IoIosArrowDown color={theme.colors.primary} size={20} />
                </li>
                <li>
                  <Dropdown
                    options={[{ text: "Volutário", link: "/voluntario" }]}
                    defaultValue="Doação"
                  />
                  <IoIosArrowDown color={theme.colors.primary} size={20} />
                </li>
                <li>
                  <Dropdown
                    options={[{ text: "Condeca", link: "/condeca" }]}
                    defaultValue="Lei de Incetivo"
                  />
                  <IoIosArrowDown color={theme.colors.primary} size={20} />
                </li>
                <li>
                  <Links
                    title="Contatos"
                    type="primary"
                    links={[{ name: "Contato", href: "/contato" }]}
                  />
                </li>
                <li>
                  <Links
                    title="Doe agora"
                    type="secondary"
                    links={[
                      {
                        name: "Doe agora",
                        href: "https://www.paypal.com/donate/?hosted_button_id=XWYF36FTCENY2",
                      },
                    ]}
                  />
                </li>
              </ul>
            </Navlist>
          )}
        </div>
      </nav>
    </header>
  );
}
