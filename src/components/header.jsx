import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div
            className="container"
            style={{ height: "100vh", width: "100vw" }}
          >
            <div className="row">
              {/* <div className="col-md-8 col-md-offset-2 intro-text"></div> */}
              <div
                id="carousel-example-generic"
                className="carousel slide"
                style={{ width: "100vw" }}
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="2"
                  ></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                  <div className="item active carousel-image bg-img-1">
                    {/* <img src="./img/header.jpeg" alt="..." /> */}
                    <div className="carousel-caption">
                      <strong>Team Building</strong>
                    </div>
                  </div>
                  <div className="item carousel-image bg-img-2">
                    {/* <img src="./img/header.jpeg" alt="..." /> */}
                    <div className="carousel-caption">
                      <strong>Team Building</strong>
                    </div>
                  </div>
                  <div className="item carousel-image bg-img-3">
                    {/* <img src="./img/header.jpeg" alt="..." /> */}
                    <div className="carousel-caption">
                      <strong>Team Building</strong>
                    </div>
                  </div>
                </div>

                <a
                  className="left carousel-control"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="prev"
                >
                  {/* <span
                    className="glyphicon glyphicon-chevron-left"
                    aria-hidden="true"
                  >
                  </span>

                  <span className="sr-only">Previous</span> */}
                </a>
                <a
                  className="right carousel-control"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="next"
                >
                  {/* <span
                    className="glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
