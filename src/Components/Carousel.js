import Container from "./Container";
import CarouselIndicators from "./CarouselIndicators";

const Carousel = () => {
  return (
    <div>
      <Container className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <CarouselIndicators />
        </div>
      </Container>
    </div>
  );
};

export default Carousel;
