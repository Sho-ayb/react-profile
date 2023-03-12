import Home from "./Home";

const Nav = () => {
  return (
    <div>
      <nav className="row navbar bg-dark" data-bs-theme="dark">
        <div className="navbar-header col-lg-6 text-md-start text-center">
          <a className="navbar-brand" href="/">
            Sho'ayb's Portfolio
          </a>
        </div>
        <ul className="nav nav-tabs  col-lg-6 justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link "
              data-toggle="tab"
              aria-current="page"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item" data-toggle="tab">
            <a className="nav-link" href="about">
              About Me
            </a>
          </li>
          <li className="nav-item" data-toggle="tab">
            <a className="nav-link" href="projects">
              Projects
            </a>
          </li>
          <li className="nav-item" data-toggle="tab">
            <a className="nav-link" href="skills">
              Skills
            </a>
          </li>
          <li className="nav-item" data-toggle="tab">
            <a className="nav-link" href="/Docs/CV.pdf">
              CV
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
