import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Unlock exclusive currency exchange offers by subscribing to our
          newsletter.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Transfer Money</h2>
            <Link to="/sign-up">Register/Login</Link>
            <Link to="/">US Money Transfer</Link>
            <Link to="/">UK Money Tranfer</Link>
            <Link to="/">Canada Money Transfer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Exchange Rates API</h2>
            <Link to="/">Exchange rates API</Link>
            <Link to="/">Free Trail</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Developers</Link>
          </div>

          <div class="footer-link-items">
            <h2>Tools and Resources</h2>
            <Link to="/">Blog</Link>
            <Link to="/">Currency Converter</Link>
            <Link to="/">Currency Charts</Link>
            <Link to="/">Currency Encyclopedia</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Xone
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">© 2020 EX. All Rights Reserved</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
