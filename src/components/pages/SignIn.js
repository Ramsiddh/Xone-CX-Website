import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { useHistory } from "react-router-dom";

function SignInForm() {
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
    <div className="signin-container">
      <div className="wrapper">
        <div className="form-box login">
          <h2 className="h2-modify">Sign In</h2>
          {showSuccessMessage && (
            <div className="notification success">
              <span className="emoji">🎉</span>
              <span>You've successfully signed in.</span>
              <span className="emoji">🎉</span>
            </div>
          )}
          <form classname="form-modify" onSubmit={handleSubmit}>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>

            <div className="input-box">
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
                Remember me
              </label>
              <p>Forget password?</p>
            </div>

            {isFormSubmitted && !isChecked && (
              <div className="error-panel">
                Please check the "Remember me" checkbox
              </div>
            )}

            <button
              type="submit"
              className="btn"
              disabled={isFormSubmitted && !isChecked}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <p className="rights">@2020.All Rights Reserved</p>
        <div className="social-logos">
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
export default SignInForm;