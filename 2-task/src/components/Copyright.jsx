import React from "react";
import { Link } from "react-router-dom";
import "../blocks/Footer.css";

function Copyright() {
  return (
    <div className="footer__copyrigth">
      <p className="footer__copyrigth_text">
        &copy;WELBEX 2022. Все права защищены.
      </p>
      <Link className="footer__copyrigth_link">
        Политика конфиденциальности
      </Link>
    </div>
  );
}

export default Copyright;
