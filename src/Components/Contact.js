import Section from "./Section";
import Container from "./Container";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Section className="section__contact">
        <Container className="container">
          <h2 className="text-center p-5">Contact</h2>
          <form action="submit" className="row g-3">
            <div className="col-6 mb-3">
              <label htmlFor="email__input" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email__input"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textarea__input" className="htmlForm-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="textarea__input"
                placeholder="Message..."
                rows="5"
              ></textarea>
            </div>
            <div className="col-12 d-flex flex-sm-column flex-md-row justify-content-end">
              <button
                type="submit"
                className="btn btn-primary btn-lg mb-3 align-items-end"
              >
                Submit
              </button>
            </div>
          </form>
        </Container>
        <Footer />
      </Section>
    </div>
  );
};

export default Contact;
