import React from "react";
import "./Styles3.css";
import imageSrc from "./img-3.png";

function Styles3() {
  return (
    <div className="third-container">
      <div className="third-grid-container">
        <section className="section3">
          <div className="third-grid-item">
            <div className="third-images-position">
              <span className="third-image-outline">
                <img
                  className="image-third-d"
                  src={imageSrc}
                  alt=""
                  style={{ width: "40%", height: "40%" }}
                />
              </span>
            </div>

            <div className="third-grid-designs">
              <h2 className="subtitle3" marked="center">
                Secure Currency Assurance
              </h2>
              <div className="K2">
                <span className="L2">
                  Rest assured that your financial interests are protected with
                  our secure currency exchange solutions. With stringent
                  security measures in place, including encrypted transactions
                  and robust identity verification.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Styles3;
