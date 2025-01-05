import * as S from "./style.jsx";
import { PrimaryButton } from "../../atomo/button/Primary-button.jsx";
import { useState } from "react";
import emailjs from "@emailjs/browser";
function UserContact() {
  const [assunto, setAssunto] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (assunto === "" || email === "" || message === "") {
      alert("preenhca todos os campos");
    }
    const templateParams = {
      from_name: assunto,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_bl5m93f",
        "template_yw9u30g",
        templateParams,
        "yFaDSg1wmvVh5Kt-7"
      )
      .then(
        (response) => {
          console.log("enail enviado", response.status, response.text);
          setAssunto("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("erro:", error);
        }
      );
  }
  return (
    <>
      <S.Div>
        <h2>Contato</h2>
      </S.Div>
      <S.Container>
        <div className="infor">
          <div>
            <h3>Entre em contato</h3>
          </div>
          <div>
            <p className="colorText">E-mail:</p>
            <p>email@gmail.com</p>
        
          </div>
          <div>
            <p className="colorText">Horario de funcionamento:</p>
            <p>8:00 ás 18:00</p>
          </div>
          <div>
            <p className="colorText">
              {" "}
              preencha o formulário ao lado que entraremos em contato com voce!{" "}
            </p>
          </div>
          <div>
            <p>instagram.com/ipapeldemenino</p>
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <div className="inputs">
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Assunto"
                  onChange={(e) => setAssunto(e.target.value)}
                />
              </p>
              <textarea
                name=""
                id=""
                placeholder="Mensage..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div>
              <PrimaryButton
                style={{ backgroundColor: "#ff9029" }}
                className="primary-button"
              >
                Saber mais
              </PrimaryButton>
            </div>
          </div>
        </form>
      </S.Container>
    </>
  );
}
export default UserContact;
