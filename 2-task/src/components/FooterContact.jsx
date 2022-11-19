import React from "react";
import ButtonSocial from "./ButtonSocial";
import "../index.css";
import { MOBILE_MAX_WIDTH } from "../utils/device-width";
import "../blocks/Footer.css";

function FooterContact(props) {
  const { windowWidth, handleClick } = props;
  const handleDevice = windowWidth < MOBILE_MAX_WIDTH ? 'mobile' : 'desktop';

  return (
    <div className="footer__column">
      <p className="footer__title">Контакты</p>
      <div className="contact contact_footer">
        <a
          href="tel:+75555555555"
          className="contact__link contact__link_phone-number"
        >
          +7 555 555-55-55
        </a>
        <div className="contact__social-media">
        <ButtonSocial device={handleDevice} socialMedia={'telegram'} handleClick={handleClick} />
        <ButtonSocial device={handleDevice} socialMedia={'viber'} handleClick={handleClick} />
        <ButtonSocial device={handleDevice} socialMedia={'whatsapp'} handleClick={handleClick} />
        </div>
        <button type="button" aria-label="Показать на карте" className="button_address contact__link" onClick={handleClick}>Москва, Путевой проезд 3с1, к 902</button>
      </div>
    </div>
  );
}

export default FooterContact;
