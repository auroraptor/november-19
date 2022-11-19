import React from "react";
import "../blocks/buttons.css";

function ButtonSocial(props) {
  const { handleClick, device, socialMedia } = props;
  return (
    <button
      type="button"
      aria-label={`Связаться с нами в ${socialMedia.toUpperCase()}`}
      className={`button_contact button_${socialMedia} button_${socialMedia}_${device}`}
      onClick={handleClick}
    />
  );
}

export default ButtonSocial;
