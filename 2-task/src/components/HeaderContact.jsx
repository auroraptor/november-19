import React from "react";
import { Link } from "react-router-dom";
import "./HeaderContact.css";
import './Footer.css';

function HeaderContact() {
  return (
    <>
          <Link to="tel:+75555555555" className="footer__link footer__link_type_tel">+7 555 555-55-55</Link>
          <nav className="footer__navbar_social">
            <Link to="/" className="footer__link icon_type_telegram" />
            <Link to="/" className="footer__link icon_type_viber" />
            <Link to="/" className="footer__link icon_type_whatsapp" />
          </nav>
    </>
  );
}

export default HeaderContact;
