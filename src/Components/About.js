import Section from "./Section";
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Section className="section__about">
        <Container className="container">
          <Jumbotron />
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default About;
