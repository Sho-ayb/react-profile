import Section from "./Section";
import Container from "./Container";
import Footer from "./Footer";
import Row from "./Row";

const Skills = () => {
  return (
    <>
      <Section className="section__skills">
        <Container className="container">
          <h2 className="text-center p-5">Skills</h2>
          <Row>
            <table class="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Frontend</th>
                  <th scope="col">Language</th>
                  <th scope="col">Backend</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-secondary">
                  <th scope="row">1</th>
                  <td>HTML</td>
                  <td>Nodejs</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>CSS</td>
                  <td>MongoDB</td>
                </tr>
                <tr class="table-secondary">
                  <th scope="row">3</th>
                  <td>Sass</td>
                  <td>Mongoose</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>JavaScript</td>
                  <td>-</td>
                </tr>
                <tr class="table-secondary">
                  <th scope="row">6</th>
                  <td>Jquery</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Bootstrap 5</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </Row>
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default Skills;
