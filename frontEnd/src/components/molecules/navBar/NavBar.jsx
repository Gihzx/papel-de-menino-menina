import logoIPM from "../../../assets/logoIPM.png";
import { PrimaryButton } from "../../atomo/button/Primary-button";
import { IoIosArrowDown } from "react-icons/io";
import * as S from "./style.jsx";
import { useState } from "react";
export function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);

    console.log("MUDEI");
  };
  return (
    <>
      <header>
        <nav>
          <S.div className="menu">
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
            <div className="mobile-menu" onClick={toggleMobileMenu}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </S.div>
        </nav>
      </header>
    </>
  );
}
