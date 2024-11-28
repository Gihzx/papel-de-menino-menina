import img from "../../../assets/Screenshot_2024-11-23_205605-removebg-preview (1).png";
import * as S from "./style.jsx";
function Comments() {
  return (
    <>
      <h1>
        Reescrevendo Histórias: Acreditando no Poder do Amor e das Segundas
        Chances
      </h1>
      <S.ContainerBox>
        <div className="comment-section">
          <img src={img} alt="" />
          <p>
            "Desejo que crianças e adolescente que não foram amados e cuidados,
            não acabem atrás das grades."
          </p>
        </div>
        <p>
          O Instituto Papel de Menino & Menina (IPM) é além de uma organização,
          um grupo de pessoas que sonham e acreditam ser possível a
          (re)socialização de crianças e adolescentes que cumprem medida
          socioeducativa.
        </p>
        <p>
          Em nossa visão o ser humano é capaz de reescrever a sua história
          através da educação, arte, cultura e qualificação profissional. Sobre
          estes princípios estão baseadas nossas ações
        </p>
        <p>
          Eu acredito em segundas chances, que o amor transforma, o amor acolhe,
          amor retaura, reitegra, insere e nos torna coresponsáveis pela vida do
          outro.
        </p>
        <p>
          Recomeçar é andar para frente, mas dessa vez em um caminho totalmente
          diferente.
        </p>
        <p>
          Não podemos voltar atrás e mudar o que já aconteceu, mas sempre há uma
          oportunidade de recomeçar
        </p>
      </S.ContainerBox>
    </>
  );
}
export default Comments;
