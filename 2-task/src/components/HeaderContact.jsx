import React from "react";
import { Link } from "react-router-dom";
import "./HeaderContact.css";
import './Footer.css';

function HeaderContact() {
  return (
    <div className="contact">
          <Link to="tel:+75555555555" className="contact__link contact__link_type_tel">+7 555 555-55-55</Link>
          <nav className="contact__navbar_social">
            <Link to="/" className="contact__link contact__icon_type_telegram" />
            <Link to="/" className="contact__link contact__icon_type_viber" />
            <Link to="/" className="contact__link contact__icon_type_whatsapp" />
          </nav>
    </div>
  );
}

export default HeaderContact;
