import React from "react";
import ReactPlayer from "react-player";

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
            {/* {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "} */}
            <div
              align="center"
              // className="embed-responsive embed-responsive-16by9"
              style={{
                position: "relative",
                marginTop: 80,
                // overflow: "hidden",
                // zIndex: 1,
                // border: "1rem solid#2e3191",
              }}
            >
              <a
                href="/videos/about.mp4"
                data-fancybox
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

              {/* <ReactPlayer url={"/videos/about.mp4"} controls light /> */}
              {/* <video controls class="embed-responsive-item">
                <source src="/videos/about.mp4" type="video/mp4" />
              </video> */}
              {/* <iframe
                about="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0wVUFtBTBxY?&autoplay=1&loop=1&showinfo=0&mute=1&modestbranding=1&frameborder=0&controls=0&playsinline=1&playlist=0wVUFtBTBxY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
