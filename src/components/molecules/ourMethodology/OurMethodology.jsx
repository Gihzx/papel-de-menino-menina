import * as S from "./style.jsx";
import ImgMetodologia from "../../../assets/WhatsApp-Image-2023-06-17-at-17.37.44.svg";
import ImgFormMetodologia from "../../../assets/Captura de tela 2024-09-26 211116.png";
export function OurMethodology() {
  return (
    <S.Container>
      <div>
        <h1> Metodologia</h1>
        <p>
          {" "}
          Nosso trabalho é a partir da criação de vínculo, evitar que o
          adolescente volte a cometer delitos e evitar que futuramente sejam
          inseridos no sistema prisional adulto.
        </p>
        <div className="img">
          <img src={ImgFormMetodologia} alt="" />
        </div>
      </div>
      <div>
        <span>Mentoria e acompanhamento </span>- através dos parceiros e
        colaboradores do Instituto Papel de Menino.
        <span>Acompanhamento psicossocial</span> - Através de psicologos
        parcerios, oferecemos atendimentos on-line e presencial.
        <span>Apoio Socioeconomico </span> - Através de uma parceria, o IPM
        disponibiliza o valor de R$ 400 mensais durante o período de 6 meses
        para custeio de necessidades básicas: energia elétrica, gás,
        alimentação, remédios, transporte etc.
        <span> Assistência Social </span>- Através de uma parceria com a Cruz
        Vermelha Brasileira, o IPM disponibiliza 02 cestas básicas mensais com
        produtos de limpeza, higiene pessoal e alimentação.
      </div>
    </S.Container>
  );
}
export function EmotionalSupport() {
  return (
    <S.Container>
      <div>
        <h2>Apoio Socioeconômico</h2>
        <p>
          Em parcerias com outras instituições, disponibilizamos cestas básicas
          mensalmente com produtos essenciais para as famílias atendidas. Tamo
          junto é um programa em que disponibilizamos um valor fixo por até 6
          meses, com finalidade de suprir gastos do cotidiano e despesas
          relativas à procura de emprego.
        </p>
      </div>
    </S.Container>
  );
}
export function CourseAndWorkshop() {
  return (
    <S.ContainerTwo>
      <h2>CURSOS & OFICINAS</h2>
      <div className="img2">
        <img src={ImgMetodologia} alt="" />
      </div>
      <div className="text">
        <p>
          <p>CURSOS & OFICINAS </p>
          <ul>
            <li>Padaria Escola - Curso de Panificação</li>
            <li> Nas Ideia - Curso de Formação</li>
            <li>Oficina de Musicalização - Rap </li>
            <li>
              {" "}
              Oficina de Estética e Beleza: Design de Sobrancelha, Tranças{" "}
            </li>
            <li>Letramento Digital</li>
            <li>Barbearia</li>
          </ul>
        </p>
      </div>
    </S.ContainerTwo>
  );
}
