import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Anchal</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="mailto:anchalagrawal37@gmail.com"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-gmail"></i>
          </a>
          <a
            href="https://github.com/anchal4561"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anchal37/"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Anchal. All right reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
