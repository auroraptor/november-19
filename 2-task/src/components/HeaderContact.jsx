import React from "react";
import ButtonSocial from "./ButtonSocial";
import "../index.css";
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
        <ButtonSocial
          device={"desktop"}
          socialMedia={"telegram"}
          handleClick={handleClick}
        />
        <ButtonSocial
          device={"desktop"}
          socialMedia={"viber"}
          handleClick={handleClick}
        />
        <ButtonSocial
          device={"desktop"}
          socialMedia={"whatsapp"}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default HeaderContact;
