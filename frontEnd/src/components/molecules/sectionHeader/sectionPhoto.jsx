import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./style.jsx";

function Carrusel() {
  const data = [
    {
      id: "1",
      image:
        "https://papeldemenino.org.br/wp-content/uploads/2023/06/007-1536x1023.jpeg",
      text: "Uma nova chance começa com acolhimento",
    },
    {
      id: "2",
      image:
        "https://papeldemenino.org.br/wp-content/uploads/2023/06/PapelDeMenino-30-de-195-1-scaled.jpg",
      text: "Uma nova chance começa com acolhimento",
    },
    {
      id: "3",
      image:
        "https://papeldemenino.org.br/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-26-at-12.12.45.jpeg",
    },
  ];
  return (
    <>
      <S.div>
        <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt="foto"
                className="
                slide-item
            "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.div>
    </>
  );
}
export default Carrusel;
