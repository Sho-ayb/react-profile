import Section from "./Section";
import Container from "./Container";
import Row from "./Row";
import Footer from "./Footer";

import myProjectsJSON from "../my-projects.json";

const Projects = () => {
  const myProjectsParsed = JSON.parse(JSON.stringify(myProjectsJSON));

  console.log(myProjectsParsed);

  return (
    <div>
      <Section className="section__projects">
        <Container className="container">
          <h2 className="text-center p-5">Projects</h2>
          <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            {myProjectsParsed.map((project, key) => (
              <div className="col" key={key}>
                <div className="card w-auto h-100">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt="Hollywood Sign on The Hill"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>{project.title}</strong>
                    </h5>
                    <p className="card-text">{project.description}</p>
                    <span>
                      <strong>Technologies:</strong> {project.technologies}
                    </span>
                    <div className="list-group list-group-light list-group-flush mt-5">
                      <a
                        href={project.github}
                        className="list-group-item list-group-item-action list-group-item-light"
                      >
                        Project hosted on Github
                      </a>
                      <a
                        href={project.deployed}
                        className="list-group-item list-group-item-action list-group-item-dark"
                      >
                        Project deployed live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </Section>
      <Footer />
    </div>
  );
};

export default Projects;
