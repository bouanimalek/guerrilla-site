import { Image } from "./image";
import React from "react";
import MyGallery from "./MyGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GalleryUpdated = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projets</h2>
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
        <div
          id="carousel-gallery"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-gallery"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carousel-gallery" data-slide-to="1"></li>
            <li data-target="#carousel-gallery" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active ">
              <div className="row">
                <div
                  className="col-md-4  image-logo"
                  style={{ alignItems: "center", alignContent: "center" }}
                >
                  <a
                    href="/img/gallery/microsoft_event.JPG"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/microsoft_event.JPG"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/landor_6.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/landor_6.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>

                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/teambuilding_2.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/teambuilding_2.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/gms_brandt.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/gms_brandt.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/hpe_event.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/hpe_event.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/adwya.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/adwya.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            <div className="item  ">
              <div className="row">
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/dell_event.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/dell_event.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/landor_2.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/landor_2.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>

                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/fortinet.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/fortinet.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/landor_5.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/landor_5.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/teambuilding_5.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/teambuilding_5.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/landor_4.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/landor_4.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            <div className="item  ">
              <div className="row">
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/isg_event.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/isg_event.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/landor_7.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/landor_7.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>

                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/fac_medecine.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/fac_medecine.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/cours_musique.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/cours_musique.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/landor_event.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/landor_event.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
                <div className="col-md-4 image-logo">
                  <a
                    href="/img/gallery/landor_8.jpg"
                    className="ubea-card-item image-popup"
                    title="Microsoft Event (Windows 11)"
                  >
                    <figure>
                      <img
                        src="/img/gallery/resized/landor_8.jpg"
                        alt="img"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            {/* <a
              class="left carousel-control"
              href="#carousel-gallery"
              role="button"
              data-slide="prev"
            >
              <span class="icon-prev" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#carousel-gallery"
              role="button"
              data-slide="next"
            >
              <span class="icon-next" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
