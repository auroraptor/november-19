import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function AboutUs() {
  return (
    <div className="footer__col">
      <p className="footer__title">О компании</p>
      <ul className="footer__container">
        <li>
          <Link to="/" className="footer__link">Партнёрская программа</Link>
        </li>
        <li>
          <Link to="/" className="footer__link">Вакансии</Link>
        </li>
      </ul>
    </div>
  );
}

export default AboutUs;
