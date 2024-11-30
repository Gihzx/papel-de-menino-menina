import { FooterSection, Main } from "./style.jsx";
import logo from "../../assets/logoIPM.png";
import { Links } from "./components/links.jsx";
import { isMobile } from "react-device-detect";

export function Footer() {
  return (
    <FooterSection>
      <Main>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: isMobile ? "100%" : "40vw",
          }}
        >
          <Links
            title="Contatos"
            links={[
              { name: "Telefone", href: "" },
              { name: "WhatsApp", href: "" },
              { name: "E-mail", href: "" },
            ]}
          />
          <Links
            title="Redes sociais"
            links={[
              { name: "Instagram", href: "" },
              { name: "Facebook", href: "" },
            ]}
          />
          <Links
            title="Ações"
            links={[
              { name: "Quem somos?", href: "" },
              { name: "Equipe", href: "" },
              { name: "E-Contato", href: "" },
            ]}
          />
        </section>
      </Main>
      <div className="text">
        <p>© 2023 Todos os direitos reservados.</p>
      </div>
    </FooterSection>
  );
}
