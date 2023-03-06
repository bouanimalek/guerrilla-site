import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
// import "./App.css";
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
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <GalleryUpdated data={landingPageData.Gallery} />
      <Procedures data={landingPageData.Procedures} />
      <Partners data={landingPageData.Partners} />
      <ToastContainer />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
