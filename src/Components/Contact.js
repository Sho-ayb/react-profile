import Section from "./Section";
import Container from "./Container";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Section className="section__contact">
        <Container className="container">
          <h2 className="text-center p-5">Contact</h2>
          <form action="" class="row g-3">
            <div class="col-6 mb-3">
              <label for="email__input" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="email__input"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="textarea__input" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="textarea__input"
                placeholder="Message..."
                rows="5"
              ></textarea>
            </div>
            <div class="col-12 d-flex flex-sm-column flex-md-row justify-content-end">
              <button
                type="submit"
                class="btn btn-primary btn-lg mb-3 align-items-end"
              >
                Submit
              </button>
            </div>
          </form>
        </Container>
        <Footer />
      </Section>
    </>
  );
};

export default Contact;
