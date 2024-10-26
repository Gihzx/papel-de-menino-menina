import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./style.jsx";
function Carousel() {
  const data = [
    {
      id: "1",
      image:
        "https://papeldemenino.org.br/wp-content/uploads/2023/06/007-1536x1023.jpeg",
    },
    {
      id: "2",
      image:
        "https://papeldemenino.org.br/wp-content/uploads/2023/06/PapelDeMenino-30-de-195-1-scaled.jpg",
    },
    {
      id: "3",
      image:
        "https://papeldemenino.org.br/wp-content/uploads/2023/06/PapelDeMenino-66-de-195-scaled.jpg",
    },
  ];
  return (
    <>
      <S.Container>
        <Swiper slidePreviw={1} pagination={{ clickable: true }} navigation>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="" className="imgCarousel" />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </>
  );
}
export default Carousel;
