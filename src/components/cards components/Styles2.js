import React from "react";
import "./Styles2.css";
import imageSrc from "./img-2.png";

function Styles2() {
  return (
    <div className="second-container">
      <div className="second-grid-container">
        <section className="section2">
          <div className="second-grid-item">
            <div classname="second-grid-item2">
              <h2 className="second-subtitle" marked="center">
                Dependable Currency Solutions
              </h2>
              <div className="JJ2">
                <span className="SS2">
                  Count on our company for dependable currency solutions that
                  prioritize trust and reliability. With a strong reputation
                  built on integrity and transparent practices, we offer secure
                  transactions, competitive rates, and prompt service.
                </span>
              </div>
            </div>

            <div className="second-images-design">
              <span className="second-image-outline">
                <img
                  className="image-second-d"
                  src={imageSrc}
                  alt=""
                  style={{ width: "40%", height: "40%" }}
                />
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Styles2;
