import * as S from "./style.jsx";
function VolunteerCountComponent() {
  return (
    <>
      <S.Conatiner>
        <div>
          <div className="item">
            <div className="namber">18</div>
            <p>Ano de trabalho</p>
          </div>
          <div className="item">
            <div className="namber"> 1´952</div>
            <p>Adolescentes por ano</p>
          </div>
        </div>
        <div>
          <div className="item">
            <div className="namber">100</div>
            <p>Voluntários acadastrados</p>
          </div>
          <div className="item">
            <div className="namber">15</div>
            <p>Menbros de esquipe ativos</p>
          </div>
        </div>
        <div>
          <div className="item">
            <div className="namber">5</div>
            <p>Curso ativos</p>
          </div>
          <div className="item">
            <div className="namber">50´0000</div>
            <p>Custo mensal</p>
          </div>
        </div>
      </S.Conatiner>
    </>
  );
}
export default VolunteerCountComponent;
