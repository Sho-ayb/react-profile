import { Link } from "react-router-dom";
import CV from "../Docs/CV.pdf";

const Nav = () => {
  return (
    <div>
      <nav className="row navbar bg-dark" data-bs-theme="dark">
        <div className="navbar-header col-lg-6 text-md-start text-center">
          {/* <a className="navbar-brand" href="/">
            Sho'ayb's Portfolio
          </a> */}
          <Link className="navbar-brand" to="/">
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
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={CV} target="_blank">
              CV
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
