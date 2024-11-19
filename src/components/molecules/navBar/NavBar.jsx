import logoIPM from "../../../assets/logoIPM.png";
import { PrimaryButton } from "../../atomo/button/Primary-button";
import { IoIosArrowDown } from "react-icons/io";
import MenuComponent from "../sidebar/SideBar.jsx";
import Dropdown from "../../atomo/dropdown/Dropdown.jsx";
import { Link } from "react-router-dom";
import * as S from "./style.jsx";
export function NavBar() {
  return (
    <>
      <MenuComponent />
      <header>
        <nav className="navbar">
          <S.Div className="menuContainer">
            <Link to="/">
              {" "}
              <img src={logoIPM} alt="logoIMP" className="logo" />
            </Link>
            <S.Nav_list className="menuDesktop">
              <ul>
                <li>
                  <Dropdown
                    options={[
                      {
                        text: "Quem Somos",
                        link: "/inforOng",
                      },
                      {
                        text: "Nossos projetos",
                        link: "/projetoIPM",
                      },
                      {
                        text: "Nossa Metodologia",
                        link: "/metodologia",
                      },
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

                <span>
                  <Link to="/contato">
                    {" "}
                    <PrimaryButton
                      style={{ backgroundColor: "aliceblue", color: "#00000" }}
                      className="primary-button"
                    >
                      Contato
                    </PrimaryButton>
                  </Link>
                </span>
                <span>
                  <Link to="https://www.paypal.com/donate/?hosted_button_id=XWYF36FTCENY2">
                    {" "}
                    <PrimaryButton
                      style={{ backgroundColor: "#7D00A2", color: "aliceblue" }}
                      className="primary-button"
                    >
                      Doe agora
                    </PrimaryButton>
                  </Link>
                </span>
              </ul>
            </S.Nav_list>
          </S.Div>
        </nav>
      </header>
    </>
  );
}
