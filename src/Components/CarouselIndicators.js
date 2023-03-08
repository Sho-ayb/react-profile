const CarouselIndicators = () => {
  return (
    <>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="../Images/javascript-image.png"
            className="d-block w-100"
            alt="JavaScript logo"
          />
        </div>
        <div className="carousel-item">
          <img
            src="../Images/nodejs-image.png"
            className="d-block w-100"
            alt="Nodejs logo"
          />
        </div>
        <div className="carousel-item">
          <img
            src="../Images/jquery_image.png"
            className="d-block w-100"
            alt="Jquery logo"
          />
        </div>
        <div className="carousel-item">
          <img
            src="../Images/bootstrap-image.png"
            className="d-block w-100"
            alt="Bootstrap logo"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </>
  );
};

export default CarouselIndicators;
