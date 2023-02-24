import { Image } from "./image";
import React from "react";
import MyGallery from "./MyGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        {/* <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div> */}
        {/* <MyGallery
          galleryID="my-test-gallery"
          images={[
            {
              largeURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
              thumbnailURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
              width: 1875,
              height: 2500,
            },
            {
              largeURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
              thumbnailURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
              width: 1669,
              height: 2500,
            },
            {
              largeURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
              thumbnailURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
              width: 2500,
              height: 1666,
            },
            {
              largeURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
              thumbnailURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
              width: 1875,
              height: 2500,
            },
          ]}
        /> */}
        <div className="row">
          <div className="col-md-4">
            <a
              href="/img/header.jpeg"
              className="ubea-card-item image-popup"
              title="Microsoft Event (Windows 11)"
            >
              <figure>
                <img
                  src="/img/header.jpeg"
                  alt="img"
                  className="img-responsive"
                />
              </figure>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="/img/header.jpeg"
              className="ubea-card-item image-popup"
              title="Microsoft Event (Windows 11)"
            >
              <figure>
                <img
                  src="/img/header.jpeg"
                  alt="img"
                  className="img-responsive"
                />
              </figure>
            </a>
          </div>

          <div className="col-md-4">
            <a
              href="/img/header.jpeg"
              className="ubea-card-item image-popup"
              title="Microsoft Event (Windows 11)"
            >
              <figure>
                <img
                  src="/img/header.jpeg"
                  alt="img"
                  className="img-responsive"
                />
              </figure>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="/img/header.jpeg"
              className="ubea-card-item image-popup"
              title="Microsoft Event (Windows 11)"
            >
              <figure>
                <img
                  src="/img/header.jpeg"
                  alt="img"
                  className="img-responsive"
                />
              </figure>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="/img/header.jpeg"
              className="ubea-card-item image-popup"
              title="Microsoft Event (Windows 11)"
            >
              <figure>
                <img
                  src="/img/header.jpeg"
                  alt="img"
                  className="img-responsive"
                />
              </figure>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="/img/header.jpeg"
              className="ubea-card-item image-popup"
              title="Microsoft Event (Windows 11)"
            >
              <figure>
                <img
                  src="/img/header.jpeg"
                  alt="img"
                  className="img-responsive"
                />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
