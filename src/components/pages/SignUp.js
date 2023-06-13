import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { useHistory } from "react-router-dom";

function SignUpForm() {
  const history = useHistory();
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (isFormSubmitted && isChecked) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [isFormSubmitted, isChecked, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setShowSuccessMessage(false);
      return;
    }
    setFormSubmitted(true);
    setShowSuccessMessage(true);
  };

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setShowSuccessMessage(false);
  };

  return (
    <div className="signup-container">
      <div className="wrapper1">
        <div className="form-box1 register">
          <h2>Sign Up</h2>
          {showSuccessMessage && (
            <div className="notifications success">
              <span className="emoji">🎉</span>
              <span>You've successfully registered.</span>
              <span className="emoji">🎉</span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="input-box1">
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>

            <div className="input-box1">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>

            <div className="input-box1">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>

            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  required
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />{" "}
                I agree to the terms and conditions
              </label>
            </div>

            {isFormSubmitted && !isChecked && (
              <div className="error-panel">
                Please check the terms and conditions
              </div>
            )}

            <button
              type="submit"
              className="btns"
              disabled={isFormSubmitted && !isChecked}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="footer1">
        <p className="rights1">@2020.All Rights Reserved</p>
        <div className="social-logos1">
          <a href="https://www.facebook.com">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://www.twitter.com">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a href="https://www.instagram.com">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
