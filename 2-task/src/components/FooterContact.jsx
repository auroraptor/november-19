import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { MOBILE_MAX_WIDTH } from "../utils/device-width";
import "./Footer.css";

function FooterContact(props) {
  const { windowWidth, handleClick } = props;

  return (
    <div className="footer__col">
      <p className="footer__title">Контакты</p>
      <div className="contact contact_footer">
        <a
          href="tel:+75555555555"
          className="contact__link contact__link_phone-number"
        >
          +7 555 555-55-55
        </a>
        <div className="contact__social-media">
          <button
            type="button"
            className={`button_contact button_telegram button_telegram_${ windowWidth < MOBILE_MAX_WIDTH ? 'mobile' : 'desktop'}`}
            onClick={handleClick}
          />
          <button
            type="button"
            className={`button_contact button_viber button_viber_${ windowWidth < MOBILE_MAX_WIDTH ? 'mobile' : 'desktop'}`}
            onClick={handleClick}
          />
          <button
            type="button"
            className={`button_contact button_whatsapp button_whatsapp_${ windowWidth < MOBILE_MAX_WIDTH ? 'mobile' : 'desktop'}`}
            onClick={handleClick}
          />
        </div>
        <Link to="/" className="contact__link">
          Москва, Путевой проезд 3с1, к 902
        </Link>
      </div>
    </div>
  );
}

export default FooterContact;
