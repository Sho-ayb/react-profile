import { Link } from "react-router-dom";
import CV from "../Assets/CV.pdf";

const Nav = () => {
  return (
    <nav className="row navbar bg-dark" data-bs-theme="dark">
      <div className="navbar-header col-lg-6 text-md-start text-center">
        <Link className="navbar-brand ms-3" to="/">
          Sho'ayb's Portfolio
        </Link>
      </div>
      <ul className="nav nav-tabs  col-lg-6 justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="projects">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="skills">
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={CV} target="_blank" rel="noreferrer">
            CV
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
