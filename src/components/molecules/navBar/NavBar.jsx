import { useState, useEffect } from "react";
import logoIPM from "../../../assets/logoIPM.png";
import { PrimaryButton } from "../../atomo/button/Primary-button";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import MenuComponent from "../sidebar/SideBar.jsx";
import Dropdown from "../../atomo/dropdown/Dropdown.jsx";
import { Link } from "react-router-dom";
import * as S from "./style.jsx";

export function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <MenuComponent />
      <header>
        <nav className="navbar">
          <S.Div className="menuContainer">
            <Link to="/">
              <img src={logoIPM} alt="logoIMP" className="logo" />
            </Link>
            {isMobile ? (
              <div>
                <button onClick={toggleMenu} className="hamburger-btn">
                  {menuOpen ? (
                    <IoIosClose size={30} color="#7D00A2" />
                  ) : (
                    <IoIosMenu size={30} color="#7D00A2" />
                  )}
                </button>
                {menuOpen && (
                  <S.MobileMenu>
                    <ul>
                      <li>
                        <Dropdown
                          options={[
                            { text: "Quem Somos", link: "/inforOng" },
                            { text: "Nossos projetos", link: "/projetoIPM" },
                            { text: "Nossa Metodologia", link: "/metodologia" },
                          ]}
                          defaultValue="Institucional"
                        />
                      </li>
                      <li>
                        <Dropdown
                          options={[
                            {
                              text: "Unidade Feminina",
                              link: "/unidadeFeminina",
                            },
                            {
                              text: "Unidade Masculina",
                              link: "/unidadeMascula",
                            },
                          ]}
                          defaultValue="Projetos"
                        />
                      </li>
                      <li>
                        <Dropdown
                          options={[
                            {
                              text: "Cursos & Oficinas",
                              link: "/cursoeoficina",
                            },
                            { text: "Imprensa", link: "/imprensa" },
                          ]}
                          defaultValue="Apoiadores"
                        />
                      </li>
                      <li>
                        <Dropdown
                          options={[{ text: "Condeca", link: "/condeca" }]}
                          defaultValue="Lei de Incetivo"
                        />
                      </li>
                      <span>
                        <Link to="/contato">
                          <PrimaryButton
                            style={{
                              backgroundColor: "aliceblue",
                              color: "#7D00A2",
                            }}
                          >
                            Contato
                          </PrimaryButton>
                        </Link>
                      </span>
                      <span>
                        <Link to="https://www.paypal.com/donate/?hosted_button_id=XWYF36FTCENY2">
                          <PrimaryButton
                            style={{
                              backgroundColor: "#7D00A2",
                              color: "aliceblue",
                            }}
                          >
                            Doe agora
                          </PrimaryButton>
                        </Link>
                      </span>
                    </ul>
                  </S.MobileMenu>
                )}
              </div>
            ) : (
              <S.Nav_list className="menuDesktop">
                <ul>
                  <li>
                    <Dropdown
                      options={[
                        { text: "Quem Somos", link: "/inforOng" },
                        { text: "Nossos projetos", link: "/projetoIPM" },
                        { text: " Metodologia", link: "/metodologia" },
                      ]}
                      defaultValue="Institucional"
                    />
                    <IoIosArrowDown color="#7D00A2" size={20} />
                  </li>
                  <li>
                    <Dropdown
                      options={[
                        { text: "Unidade Feminina", link: "/unidadeFeminina" },
                        { text: "Unidade Masculina", link: "/unidadeMascula" },
                      ]}
                      defaultValue="Serviços"
                    />
                    <IoIosArrowDown color="#7D00A2" size={20} />
                  </li>
                  <li>
                    <Dropdown
                      options={[
                        { text: "Cursos & Oficinas", link: "/cursoeoficina" },
                        { text: "Imprensa", link: "/imprensa" },
                      ]}
                      defaultValue="Apoiadores"
                    />
                    <IoIosArrowDown color="#7D00A2" size={20} />
                  </li>
                  <li>
                    <Dropdown
                      options={[{ text: "Volutário", link: "/voluntario" }]}
                      defaultValue="Doação"
                    />
                    <IoIosArrowDown color="#7D00A2" size={20} />
                  </li>

                  <span>
                    <Link to="/contato">
                      <PrimaryButton
                        style={{
                          backgroundColor: "aliceblue",
                          color: "#7D00A2",
                        }}
                      >
                        Contato
                      </PrimaryButton>
                    </Link>
                  </span>
                  <span>
                    <Link to="https://www.paypal.com/donate/?hosted_button_id=XWYF36FTCENY2">
                      <PrimaryButton
                        style={{
                          backgroundColor: "#7D00A2",
                          color: "aliceblue",
                        }}
                      >
                        Doe agora
                      </PrimaryButton>
                    </Link>
                  </span>
                </ul>
              </S.Nav_list>
            )}
          </S.Div>
        </nav>
      </header>
    </>
  );
}
