import { Image } from "./image";
import React from "react";
import MyGallery from "./MyGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Partners = (props) => {
  return (
    <div id="partners" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Partenaires</h2>
        </div>
        <div className="row">
          <div>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={d.id} className="col-md-5ths col-xs-6">
                    <div className="partner-logo">
                      <img src={d.path} alt="partners" />
                    </div>
                  </div>
                ))
              : "Loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
