import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function FooterContact() {
  return (
    <div className="footer__col">
      <p className="footer__title">Контакты</p>
      <ul className="footer__container footer__contact">
        <li>
          <Link to="tel:+75555555555" className="footer__link footer__link_type_tel">+7 555 555-55-55</Link>
        </li>
        <li>
          <nav className="footer__navbar_social">
            <Link to="/" className="footer__link footer__icon_type_telegram" />
            <Link to="/" className="footer__link footer__icon_type_viber" />
            <Link to="/" className="footer__link footer__icon_type_whatsapp" />
          </nav>
        </li>
        <li>
          <Link to="/" className="footer__link">Москва, Путевой проезд 3с1, к 902</Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterContact;
