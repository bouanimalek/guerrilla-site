import React from "react";

export const Procedures = (props) => {
  return (
    <div id="procedures" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nos Procédures</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <a
                    id={"#" + d.name.replace(/\s/g, "")}
                    href={"#responsive"}
                    style={{ backgroundColor: "#2e3191" }}
                    data-toggle="modal"
                    data-target={"#" + d.name.replace(/\s/g, "")}
                  >
                    <i>
                      <img
                        src={d.iconPath}
                        alt="icon"
                        className="service-logo"
                      />
                    </i>
                  </a>

                  <div className="procedure-desc">
                    <h3>{d.name}</h3>
                    <p style={{ textAlign: "justify" }}>{d.text}</p>
                    <div
                      className="modal fade"
                      id={d.name.replace(/\s/g, "")}
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby={"#" + d.name.replace(/\s/g, "")}
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div
                          className="modal-content"
                          style={{
                            background: "#2e3191",
                          }}
                        >
                          <div className="modal-header">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                              style={{ color: "#fff" }}
                            >
                              &times;
                            </button>
                            <h4
                              className="modal-title"
                              id="myModalLabel"
                              style={{
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: 30,
                              }}
                            >
                              {d.name}
                            </h4>
                          </div>
                          <div className="modal-body modal-style">
                            <div className="modal-style-text">
                              {d.paragraph}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
