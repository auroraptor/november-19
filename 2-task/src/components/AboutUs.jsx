import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function AboutUs() {
  return (
    <>
      <p className="footer__title">О компании</p>
      <ul className="footer__container">
        <li className="footer__link">
          <Link to="/">Партнёрская программа</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Вакансии</Link>
        </li>
      </ul>
    </>
  );
}

export default AboutUs;
