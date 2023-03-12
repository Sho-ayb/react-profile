const Footer = () => {
  return (
    <>
      <footer>
        <div className="container position-relative">
          <div
            className="btn-group text-center btn-group-lg position-absolute end-0"
            role="group"
            aria-label="Footer Buttons"
          >
            <a
              href="https://medium.com/"
              target="__blank"
              className="btn btn-success me-1"
            >
              Medium
            </a>
            <a
              href="https://dev.to/"
              target="__blank"
              className="btn btn-success me-1"
            >
              Dev.to
            </a>{" "}
            <a
              href="https://github.com/Sho-ayb?tab=repositories"
              target="__blank"
              className="btn btn-success me-1"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/sho-ayb-choudhry-4a906426a/"
              target="__blank"
              className="btn btn-success me-1"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
