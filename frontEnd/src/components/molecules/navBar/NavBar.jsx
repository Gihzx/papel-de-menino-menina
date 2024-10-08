import logoIPM from "../../../assets/logoIPM.png";
import { PrimaryButton } from "../../atomo/button/Primary-button";
import { IoIosArrowDown } from "react-icons/io";
import * as S from "./style.jsx";
import { useRef, useState } from "react";
export function NavBar() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  console.log(isActive);
  return (
    <>
      <header>
        <nav
          ref={dropDownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <S.div className="menuContainer">
            <img src={logoIPM} alt="logoIMP" className="logo" />

            <S.nav_list>
              <ul>
                <li>
                  Nossa história{" "}
                  <IoIosArrowDown
                    color="#7D00A2"
                    size={20}
                    className="arrowDown"
                  />
                </li>
                <li>
                  Projeto{" "}
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
            <button onClick={onClick} className="mobile-menu">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </button>
          </S.div>
        </nav>
      </header>
    </>
  );
}
