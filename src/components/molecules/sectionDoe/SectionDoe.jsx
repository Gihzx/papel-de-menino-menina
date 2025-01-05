import * as S from "./style.jsx";
import { FaRegHeart } from "react-icons/fa6";
function SectionDoe() {
  return (
    <>
      <S.Container>
        <header>
          <div>
            <p className="paragrafro">Como posso ajudar?</p>
            <h1>
            Faça sua Doação<FaRegHeart />
            </h1>
          </div>
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
      
          </div>
          <div className="boxTxt">
            <p className="paragrafro">Doação IRPF:</p>
            <p>
              O Instituto Papel de Menino possui vários projetos de educção
              profissional, saúde, culturais e esportivos aprovados pelas Leis
              de Incentivo. A leis permitem que, ao apoiar os projetos do IPM, a
              pessoa que faz a Declaração de Imposto de Renda completa poderá
              deduzir do valor, até o limite de 6% do imposto normal devido.
            </p>
          </div>
          <div>
            <p className="paragrafro">Principais razões para invstir:</p>
            <p>
              - CONTRIBUIÇÃO ATIVA PARA A CONSTRUÇÃO DE UMA SOCIEDADE MAIS JUSTA
              HUMANA E INCLUSIVA
            </p>
            <p>- GERAÇÃO DE OPORTUNIDADE PARA MAIS DE 700 FAMÍLIAS</p>
            <p>- POSSIBILIDADE DE INVESTIMENTO A CUSTO ZERO</p>
          </div>
          <div>
            <p className="paragrafro">PARA PESSOAS FÍSICA:</p>
            <span>Passo 1:</span>
            <p>
              Podem investir em projetos culturais aprovados pelo Ministério da
              Cultura na Lei Rouanet, pessoa físicas contribuintes do Imposto de
              Renda, deduzindo até 6% do IR devido.
            </p>
          </div>
          <div>
            {" "}
            <span>Passo 2:</span>
            <p>
              O investidor deve depositar o valor desejado para o patrocínio na
              conta bancária do projeto até o útimo dia útil do ano corrente.
              Após do depósito, a entidade ou pessoa que poprôs o projeto irá
              emitir um recibo e enviar ao patrocinador, sendo que este servirá
              como comprovante para que a renúcia fiscal se efetue.
            </p>
          </div>
          <div>
            {" "}
            <span>Passo 3:</span>
            <p>
              O ressarcimento do patrocínio feito virá no ano seguinre, na forma
              de restituição ou abatendo do valor IR a pagar.
            </p>
          </div>
          <div className="boxTxt">
            <p className="paragrafro">Para empresas IRPJ </p>
            <h1>Doação IRPJ</h1>
          </div>
          <div>
            <span>Passo 1:</span>
            <p>
              Podem investir em projetos culturais, esportivos e de saúde
              aprovador pelas leis de incetivos (Federal, Estadual e Municipal)
              empresas tributadas em <span className="txt">LUCRO REAL</span>{" "}
              (com faturamento acima de R$48 milhões), deduzindo até 4% de IR
              devido, e as pessoas físcais, que fazem a declaração de{" "}
              <span className="txt">MODO COMPLETO,</span> podem deduzir até 6%
              de IR devido.
            </p>
          </div>
          <div>
            <span>Passo 2:</span>
            <p>
              O investidor deve depositar o valor desejado para o patrocínio na
              conta bancária do projero até o último dia útil do ano corrente.
              Após o depósito, a entidade ou pessoa que propôs o projeto irá
              emitir um recibo e enviar ao patrocinador, sendo que este servirá
              como comprovante para que a renuncia fiscal se efetue.{" "}
            </p>
          </div>
          <div>
            <span>Passo 3:</span>
            <p>
              O ressarcimento do patrocínio feito virá no ano seguinte, na forma
              de restituição ou abatendo do valor de IR a pagar.
            </p>
          </div>
        </main>
      </S.Container>
    </>
  );
}
export default SectionDoe;
