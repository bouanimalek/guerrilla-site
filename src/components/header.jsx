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
              <div
                id="carousel-header"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="item active carousel-image bg-img-1"></div>
                  <div className="item carousel-image bg-img-2"></div>
                  <div className="item carousel-image bg-img-3"></div>
                  <div className="item carousel-image bg-img-4"></div>
                  <div className="item carousel-image bg-img-5"></div>
                  <div className="item carousel-image bg-img-6"></div>
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
