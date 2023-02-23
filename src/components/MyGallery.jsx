import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
// import "photoswipe/src/photoswipe.css";
import "../../node_modules/photoswipe/src/photoswipe.css";

export default function MyGallery(props) {
  const leftArrowSVGString =
    '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 100 125" width="100" height="125"><path d="M5,50L50,5l3,3L11,50l42,42l-3,3L5,50z M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>';
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      arrowPrevSVG: leftArrowSVGString,
      arrowNextSVG: leftArrowSVGString,
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div
      id={props.galleryID}
      style={{
        margin: 3,
        padding: 3,
        border: "1rem solid #2e3191",
        borderRadius: 10,
      }}
    >
      {props.images.map((image, index) => (
        <a
          style={{ margin: 3 }}
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
}
