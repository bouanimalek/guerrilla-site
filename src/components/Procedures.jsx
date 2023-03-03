import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { GlobalStyle } from "../globalStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #2e3191;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export const Procedures = (props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
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
                  {/* <Button onClick={openModal}> */}
                  <a
                    id={"#" + d.name.replace(/\s/g, "")}
                    href={"#responsive"}
                    style={{ backgroundColor: "#2e3191" }}
                    data-toggle="modal"
                    data-target={"#" + d.name.replace(/\s/g, "")}
                  >
                    <i
                    // style={{ backgroundImage: `url("/img/about.jpg")` }}
                    // className={d.icon}
                    >
                      <img
                        src={d.iconPath}
                        alt="icon"
                        className="service-logo"
                      />
                    </i>
                  </a>

                  {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
                  {/* <GlobalStyle /> */}
                  {/* </Button> */}
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
                            // backgroundImage: `url("/img/fond_guerrilla_icon.png")`,
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
                            {/* <img
                              src="/img/header/fortinet.jpg"
                              alt="modal"
                              style={{
                                flexShrink: 0,
                                minWidth: "100%",
                                minHeight: "100%",
                                borderRadius: 10,
                              }}
                            /> */}
                            <div className="modal-style-text">
                              {d.paragraph}
                              {/* <object
                                data="./img/classes.txt"
                                width={"100%"}
                                height={"100%"}
                              >
                                {" "}
                                not supported
                              </object> */}
                              {/* <iframe
                                src="https://drive.google.com/file/d/1QCrnEROTXQBToDbbkakCYQYmWSI_eVtP/preview"
                                width="640"
                                height="480"
                                allow="autoplay"
                                title="paragraph"
                              ></iframe> */}
                            </div>
                          </div>
                          {/* <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-default"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div> */}
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
