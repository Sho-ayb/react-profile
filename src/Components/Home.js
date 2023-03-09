import Section from "./Section";
import Carousel from "./Carousel";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Section className="section__home">
        <Carousel />
      </Section>
      <Footer />
    </>
  );
};

export default Home;
