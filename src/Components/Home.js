import Section from "./Section";
import Container from "./Container";
import Carousel from "./Carousel";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Section className="section__home">
        <Container className="container">
          <Carousel />
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default Home;
