import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <div className="about-text">
              <h2>A propos</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div
              align="center"
              style={{
                position: "relative",
                marginTop: 80,
              }}
            >
              <a
                href="/videos/about.mp4"
                data-fancybox
                data-auto-focus="false"
                // data-width="70%"
                // data-height="360"
              >
                <img
                  src="/img/about-frame.jpg"
                  alt="video"
                  style={{
                    borderRadius: 10,
                    backgroundPosition: "center",
                  }}
                />
                <div class="playpause"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
