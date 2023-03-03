import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Carousel from "./components/Carousel";
import Modal2 from "./components/Modal2";
import { ToastContainer } from "react-toastify";
import { Procedures } from "./components/Procedures";
import { GalleryUpdated } from "./components/GalleryUpdated";
import { Partners } from "./components/Partners";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <GalleryUpdated data={landingPageData.Gallery} />

      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Procedures data={landingPageData.Procedures} />
      <Partners data={landingPageData.Partners} />
      <ToastContainer />
      <Contact data={landingPageData.Contact} />
      {/* <Modal2 /> */}
    </div>
  );
};

export default App;
