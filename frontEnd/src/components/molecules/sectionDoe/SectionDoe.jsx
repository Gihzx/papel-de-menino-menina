import * as S from "./style.jsx";
import { PrimaryButton } from "../../atomo/button/Primary-button";

function SectionDoe() {
  return (
    <>
      <S.Container>
        <header>
          <h1>Doe</h1>
        </header>
        <main>
          <div>
            <p>
              Em nossa visão, o ser humano é capaz de reescrever a sua história
              através da educação, arte, cultura e qualificação profissional.
              Sobre estes princípios estão baseadas nossas atividades com aulas
              formativas, cursos profissionalizantes e rodas de conversa.
            </p>
          </div>
          <div>
            <div>
              <p>VOLUNTARIADO Quer ser voluntárix no IPM?!</p>
            </div>
            <div>
              <PrimaryButton style={{ backgroundColor: "#7D00A2" }}>
                Seja um voluntário
              </PrimaryButton>
            </div>
          </div>
        </main>
      </S.Container>
    </>
  );
}
export default SectionDoe;
