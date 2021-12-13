import React, { useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {

const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <a href="#Home">
              <span>N</span>
              ikita
              <span>.</span>
            </a>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <a href="#Home">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
            </a>
            <a href="#About">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
            </a>
            <a href="#Services">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/services"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Services
                </NavLink>
              </li>
            </a>
            <a href="#Project">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/portfolio"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Portfolio
                </NavLink>
              </li>
            </a>
            <a href="#Skills">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/skills"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Skills
                </NavLink>
              </li>
            </a>
            <a href="#Contact">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact
                </NavLink>
              </li>
            </a>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>


    <div className="container">
      <div className="home__content">
        <div className="home__meta">
          <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
          <h2 className="home__text pz__10">Hi, I’m Nikita Saka</h2>
          <h3 className="home__text sweet pz__10" id="home-title">
            Front-end Developer.
          </h3>
          <h4 className="home__text pz__10">based in Belgium.</h4>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Home;
