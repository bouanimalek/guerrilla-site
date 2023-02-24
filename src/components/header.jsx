import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div>
          <div
            className="container"
            style={{ height: "100vh", width: "100vw" }}
          >
            <div className="row">
              {/* <div className="col-md-8 col-md-offset-2 intro-text"></div> */}
              <div
                id="carousel-example-generic"
                className="carousel slide"
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
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="800"
                      viewBox="0 0 712 712"
                    >
                      <path
                        fill="#fff"
                        d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
                      />
                    </svg>
                  </span>

                  <span className="sr-only">Previous</span>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="800"
                    viewBox="0 0 712 512"
                  >
                    <path
                      fill="#fff"
                      d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
