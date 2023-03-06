import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top ">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{ marginBottom: 10 }}
          >
            <img
              src="/img/guerrila_logo_blanc.png"
              alt="logo"
              height={50}
              // width={50}
              style={{ paddingBottom: 10, marginBottom: 20 }}
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                A Propos
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>

            <li>
              <a href="#portfolio" className="page-scroll">
                Projets
              </a>
            </li>
            <li>
              <a href="#procedures" className="page-scroll">
                Procédures
              </a>
            </li>
            <li>
              <a href="#partners" className="page-scroll">
                Partenaires
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
