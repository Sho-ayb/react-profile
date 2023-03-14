import silhouttePerson from "../Images/silhouette-person.png";

const Jumbotron = () => {
  return (
    <>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-light rounded-3">
            <h2 className="about__me">About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              labore nesciunt id molestias! Ratione rerum enim exercitationem,
              aspernatur id laudantium deserunt ullam nulla voluptate iste
              similique laboriosam vero atque saepe.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              nobis praesentium iusto? Adipisci, hic quis, aliquid ad earum
              cupiditate repellendus cumque consequatur dicta cum architecto sit
              nemo quia quidem assumenda?
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2 className="about__me">Picture</h2>
            <img className="img-fluid" src={silhouttePerson} alt="about" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
