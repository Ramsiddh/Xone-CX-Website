import React from "react";
import "./Styles1.css";
import imageSrc from "./img-1.png";

function Styles1() {
  return (
    <div className="main-container">
      <div className="grid-container">
        <section className="section">
          <div className="grid-item">
            <div className="images-position">
              <span className="image-outline">
                <img
                  className="image-size"
                  src={imageSrc}
                  alt=""
                  style={{ width: "40%", height: "40%" }}
                />
              </span>
            </div>

            <div className="grid-design">
              <h2 className="subtitle" marked="center">
                Proven Exchange Excellence
              </h2>
              <div className="J2">
                <p className="S2">
                  Choose our company for a proven track record of exchange
                  excellence. With a commitment to transparency, regulatory
                  compliance, and customer satisfaction, we have earned the
                  trust of individuals and businesses alike.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Styles1;
