import $ from "jquery";
import React, { useState } from "react";
import "./Home.css";

function Home() {
  $(function () {
    var activateHamburger = function (event) {
      var el = $(this);
      if (el.hasClass("active")) {
        el.addClass("active-end");
        el.one("transitionend", function () {
          el.removeClass("active active-end");
        });
      } else {
        el.addClass("active");
      }
    };
    $(".hamburger").click(activateHamburger);
  });
  // Toogle Menu
  const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo-text">
            <a>
              <span>N</span>
              ikita
              <span>.</span>
            </a>
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="Home">
                <li className="nav__items mx__15 pt__10">Home</li>
              </a>
              <a href="About">
                <li className="nav__items mx__15 pt__10">About</li>
              </a>
              <a href="Services">
                <li className="nav__items mx__15 pt__10">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15 pt__10">Portfolio</li>
              </a>
              <a href="#Skills">
                <li className="nav__items mx__15 pt__10">Skills</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15 pt__10">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}

          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#about">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#services">Services</a>
                </li>
                <li className="sideNavbar">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="sideNavbar">
                  <a href="#skills">Skills</a>
                </li>
                <li className="sideNavbar">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m Nikita Saka</h2>
              <h3 className="home__text sweet pz__10">Front-end Developer.</h3>
              <h4 className="home__text pz__10">based in Belgium.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
