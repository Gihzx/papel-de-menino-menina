import Carousel from "react-bootstrap/Carousel";
import * as S from "./style.jsx";
function CarouselImg() {
  return (
    <S.Container>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            src="https://papeldemenino.org.br/wp-content/uploads/2023/06/007-1536x1023.jpeg"
            alt=""
            className="imgCarousel"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://papeldemenino.org.br/wp-content/uploads/2023/06/PapelDeMenino-30-de-195-1-scaled.jpg"
            alt=""
            className="imgCarousel"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://papeldemenino.org.br/wp-content/uploads/2023/06/PapelDeMenino-66-de-195-scaled.jpg"
            alt=""
            className="imgCarousel"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </S.Container>
  );
}

export default CarouselImg;
