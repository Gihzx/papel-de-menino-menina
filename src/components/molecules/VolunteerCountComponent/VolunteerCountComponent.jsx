import * as S from "./style.jsx";
import CountUp from "react-countup";
function VolunteerCountComponent() {
  return (
    <>
      <S.Conatiner>
        <span>
          <div className="item">
            <div className="namber">
              <CountUp start={0} end={18} duration={2.5} />+
            </div>
            <p>Ano de trabalho</p>
          </div>
          <div className="item">
            <div className="namber">
              <CountUp start={0} end={1952} duration={2.5} />+
            </div>
            <p>Adolescentes por ano</p>
          </div>
        </span>
        <div>
          <div className="item">
            <div className="namber">
              {" "}
              <CountUp start={0} end={100} duration={2.5} />+
            </div>
            <p>Voluntários cadastrados</p>
          </div>
          <div className="item">
            <div className="namber">
              {" "}
              <CountUp start={0} end={15} duration={2.5} />+
            </div>
            <p>Membros de esquipe ativos</p>
          </div>
        </div>
        <div>
          <div className="item">
            <div className="namber">
              {" "}
              <CountUp start={0} end={5} duration={2.5} />+
            </div>
            <p>Curso ativos</p>
          </div>
          <div className="item">
            <div className="namber">
              {" "}
              <CountUp start={0} end={500000} duration={2.5} />+
            </div>
            <p>Custo mensal</p>
          </div>
        </div>
      </S.Conatiner>
    </>
  );
}
export default VolunteerCountComponent;
