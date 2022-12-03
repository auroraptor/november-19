import React from "react";
import "../../index.css";
import "./HeaderContact.css";

function HeaderContact({ handleClick }) {
  return (
    <div className="contact contact_header">
      <a
        href="tel:+75555555555"
        className="contact__link contact__link_phone-number"
      >
        +7 555 555-55-55
      </a>
      <div className="contact__social-media">
        <div className="contact__social-media">
          <button
            type="button"
            aria-label={`Связаться с нами в Telegram`}
            className="button_contact button_telegram button_telegram_desktop"
            onClick={handleClick}
          />

          <button
            type="button"
            aria-label={`Связаться с нами в Viber`}
            className="button_contact button_viber button_viber_desktop"
            onClick={handleClick}
          />
          <button
            type="button"
            aria-label={`Связаться с нами в Whatsapp`}
            className="button_contact button_whatsapp button_whatsapp_desktop"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderContact;
