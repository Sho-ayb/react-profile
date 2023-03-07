// Importing style file

import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="row navbar bg-dark" data-bs-theme="dark">
            <div className="navbar-header col-sm-12 col-md-6 text-center">
              <a className="navbar-brand" href="#">
                Sho'ayb's Portfolio
              </a>
            </div>
            <ul className="nav nav-tabs col-sm-12 col-md-6 justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section__about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section__work">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section__skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section__skills">
                  LinkedIn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section__skills">
                  Github
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
