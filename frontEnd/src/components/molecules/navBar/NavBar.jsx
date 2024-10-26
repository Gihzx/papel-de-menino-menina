import logoIPM from "../../../assets/logoIPM.png";
import { PrimaryButton } from "../../atomo/button/Primary-button";
import { IoIosArrowDown } from "react-icons/io";
import * as S from "./style.jsx";
import DropdownExample from "../../atomo/dropdown/Dropdown.jsx";
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

            {/* Menu for Desktop */}
            <S.nav_list className="menuDesktop">
              <ul>
                <DropdownExample />
                <li>
                  Nossa história Projeto{" "}
                  <IoIosArrowDown
                    color="#7D00A2"
                    size={20}
                    className="arrowDown"
                  />
                </li>
                <li>
                  Nossa metodologia{" "}
                  <IoIosArrowDown
                    color="#7D00A2"
                    size={20}
                    className="arrowDown"
                  />
                </li>
                <li>
                  Contato{" "}
                  <IoIosArrowDown
                    color="#7D00A2"
                    size={20}
                    className="arrowDown"
                  />
                </li>
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
            </S.nav_list>

            {/* Button to open sidebar (visible in mobile) */}
            <button onClick={onClick} className="mobile-menu">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </button>

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
