import logoIPM from "../../../assets/logoIPM.png";
import { PrimaryButton } from "../../atomo/button/Primary-button";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "../../atomo/dropdown/Dropdown.jsx";
import { Link } from "react-router-dom";
import * as S from "./style.jsx";
import { useState } from "react";

export function NavBar() {
  // const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const onClick = () => setIsActive(!isActive);

  return (
    <>
      <header>
        <nav className="navbar">
          <S.div className="menuContainer">
            <img src={logoIPM} alt="logoIMP" className="logo" />
            <S.nav_list className="menuDesktop">
              <ul>
                <li>
                  <Dropdown
                    options={[
                      { text: "Quem Somos", link: "/inforOng" },
                      { text: "Acompanhamento", link: "/" },
                      { text: "Nossa Metodologia", link: "/metodologia" },
                    ]}
                    defaultValue="Nossa historia"
                  />{" "}
                  <IoIosArrowDown
                    color="#7D00A2"
                    size={20}
                    className="arrowDown"
                  />
                </li>
                <li>
                  {" "}
                  <Dropdown
                    options={[
                      { text: "Unidade Feminina", link: "/unidadeFeminina" },
                      { text: "Unidade Masculina", link: "/unidadeMascula" },
                    ]}
                    defaultValue="Projetos"
                  />
                  <IoIosArrowDown
                    color="#7D00A2"
                    size={20}
                    className="arrowDown"
                  />
                </li>

                <li>
                  {" "}
                  <Dropdown
                    options={[
                      { text: "Cursos & Oficinas ", link: "/curso&oficina" },
                      { text: "Equipe", link: "/equipe" },
                      { text: "impresa", link: "/imprensa" },
                    ]}
                    defaultValue="Apoinhadores"
                  />
                  <IoIosArrowDown
                    color="#7D00A2"
                    size={20}
                    className="arrowDown"
                  />
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
                <span>
                  <Link to="https://www.paypal.com/donate/?hosted_button_id=XWYF36FTCENY2">
                    {" "}
                    <PrimaryButton
                      style={{ backgroundColor: "#7D00A2" }}
                      className="primary-button"
                    >
                      Doe agora
                    </PrimaryButton>
                  </Link>
                </span>
              </ul>
            </S.nav_list>

            {/* Button to open sidebar (visible in mobile) */}
            {/* <button onClick={onClick} className="mobile-menu">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </button> */}

            {/* Sidebar for Mobile */}
            {/* <div className={`sidebar ${isActive ? "active" : ""}`}>
              <ul>
                <li>Nossa história</li>
                <li>Projeto</li>
                <li>Nossa metodologia</li>
                <li>Contato</li>
                <span>
                  <PrimaryButton
                    onClick={() => alert("seja bem vindo")}
                    style={{ backgroundColor: "#7D00A2" }}
                    className="primary-button"
                  >
                    Doe agora
                  </PrimaryButton>
                </span>
              </ul>
            </div> */}
          </S.div>
        </nav>
      </header>
    </>
  );
}
