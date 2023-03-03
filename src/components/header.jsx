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
                id="carousel-header"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* <ol className="carousel-indicators">
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
                </ol> */}

                <div className="carousel-inner" role="listbox">
                  <div className="item active carousel-image bg-img-1">
                    {/* <img src="./img/header.jpeg" alt="..." /> */}
                    {/* <div className="carousel-caption">
                      <strong>Team Building</strong>
                    </div> */}
                  </div>
                  <div className="item carousel-image bg-img-2">
                    {/* <img src="./img/header.jpeg" alt="..." /> */}
                    {/* <div className="carousel-caption">
                      <strong>Team Building</strong>
                    </div> */}
                  </div>
                  <div className="item carousel-image bg-img-3">
                    {/* <img src="./img/header.jpeg" alt="..." /> */}
                    {/* <div className="carousel-caption">
                      <strong>Team Building</strong>
                    </div> */}
                  </div>
                  <div className="item carousel-image bg-img-4">
                    {/* <img src="./img/header.jpeg" alt="..." /> */}
                    {/* <div className="carousel-caption">
                      <strong>Team Building</strong>
                    </div> */}
                  </div>
                  <div className="item carousel-image bg-img-5">
                    {/* <img src="./img/header.jpeg" alt="..." /> */}
                    {/* <div className="carousel-caption">
                      <strong>Team Building</strong>
                    </div> */}
                  </div>
                </div>

                <a
                  class="left carousel-control"
                  href="#carousel-header"
                  role="button"
                  data-slide="prev"
                >
                  <span class="icon-prev" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="right carousel-control"
                  href="#carousel-header"
                  role="button"
                  data-slide="next"
                >
                  <span class="icon-next" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
