import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>ShenCarCar</h2>
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Socials</h3>
            <ul>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2025 ShenCarCar. All rights reserved</p>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy & Policy</a>
          <a href="/terms">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
