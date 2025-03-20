import React from "react";
import '../../Css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/admin">Admin</a>
            </li>
            {/* <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li> */}
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="mailto: turfyblog@gmail.com">turfybooking@gmail.com</a>
          </p>
          <p>Phone 1: +91 8248988150</p>
          <p>Phone 2: +91 9342160653</p>
          <p>Phone 3: +91 8525040248</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 turfy.in. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
