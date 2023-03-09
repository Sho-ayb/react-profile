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
            <a href="#" className="btn btn-success me-1">
              Medium
            </a>
            <a href="#" className="btn btn-success">
              Dev.to
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
