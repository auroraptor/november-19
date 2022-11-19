import React from "react";
import "../index.css";
import "./Footer.css";

function FooterContact(props) {
  const { handleClick } = props;

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
          <button
            type="button"
            aria-label={`Связаться с нами в Telegram`}
            className="button_contact button_telegram button_telegram_desktop button_telegram_mobile button_telegram_footer"
            onClick={handleClick}
          />

          <button
            type="button"
            aria-label={`Связаться с нами в Viber`}
            className="button_contact button_viber button_viber_desktop button_viber_mobile button_viber_footer"
            onClick={handleClick}
          />
          <button
            type="button"
            aria-label={`Связаться с нами в Whatsapp`}
            className="button_contact button_whatsapp button_whatsapp_desktop button_whatsapp_mobile button_whatsapp_footer"
            onClick={handleClick}
          />
        </div>
        <button
          type="button"
          aria-label="Показать на карте"
          className="button_address contact__link"
          onClick={handleClick}
        >
          Москва, Путевой проезд 3с1, к 902
        </button>
      </div>
    </div>
  );
}

export default FooterContact;
