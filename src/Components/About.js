import Section from "./Section";
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Section className="section__about">
        <Container className="container">
          <Jumbotron />
        </Container>
      </Section>
      <Footer />
    </div>
  );
};

export default About;
