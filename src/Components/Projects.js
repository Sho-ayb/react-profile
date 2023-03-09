import Section from "./Section";
import Container from "./Container";
import Row from "./Row";
import Footer from "./Footer";

import javascriptImage from "../Images/javascript-image.png";

const Projects = () => {
  return (
    <>
      <Section className="section__projects">
        <Container className="container">
          <Row className="align-items-md-stretch">
            <h2 className="text-center">Projects</h2>
            <Container className="container mt-3 mb-3">
              <Row>
                <div className="col">
                  <div className="card h-100">
                    <img
                      src={javascriptImage}
                      className="card-img-top"
                      alt="card-image"
                    />
                    <div className="card-body align-self-end">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </Row>
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default Projects;
