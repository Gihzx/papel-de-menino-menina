import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import patner1 from "../../../assets/Screenshot_2024-11-23_175054-removebg-preview.png";
import patner2 from "../../../assets/Screenshot_2024-11-23_175100-removebg-preview.png";
import patner3 from "../../../assets/Screenshot_2024-11-23_175100-removebg-preview.png";
import patner4 from "../../../assets/Screenshot_2024-11-23_175116-removebg-preview.png";
import patner5 from "../../../assets/Screenshot_2024-11-23_175116-removebg-preview.png";
import patner6 from "../../../assets/Screenshot_2024-11-23_175121-removebg-preview (1).png";
import patner7 from "../../../assets/Screenshot_2024-11-23_175126-removebg-preview.png";
import patner8 from "../../../assets/Screenshot_2024-11-23_175130-removebg-preview.png";
import patner9 from "../../../assets/Screenshot_2024-11-23_175135-removebg-preview.png";
import patner10 from "../../../assets/images/logos/cruzVermelhaBrasileira.png";
import patner11 from "../../../assets/Screenshot_2024-11-23_175140-removebg-preview.png";

const CarrosselParceiros = () => {
  const settings = {
    dots: false, // Mostra os indicadores (bolinhas)
    infinite: true, // Loop infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 3, // Quantidade de slides visíveis
    slidesToScroll: 1, // Quantidade de slides que rolam por vez
    autoplay: true, // Habilita autoplay
    autoplaySpeed: 2000, // Intervalo de autoplay (ms)
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Ajuste para dispositivos menores
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Ajuste para dispositivos ainda menores
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#ba6414", margin: "3rem 0" }}>
        Parceiros
      </h1>
      <div
        style={{
          padding: "20px",
          background: "#7D00A2",
          overflow: "hidden", 
          borderRadius: "3px",
        }}
      >
        <Slider {...settings}>
          {[
            patner1,
            patner2,
            patner3,
            patner4,
            patner5,
            patner6,
            patner7,
            patner8,
            patner9,
            patner10,
            patner11,
          ].map((imgSrc, index) => (
            <div key={index} style={{ padding: "10px" }}>
              <img
                src={imgSrc}
                alt={`Parceiro ${index + 1}`}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarrosselParceiros;
