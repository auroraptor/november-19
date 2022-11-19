import React from "react";
import { Link } from "react-router-dom";
import { TABLET_WIDTH } from "../utils/device-width";
import "../blocks/Navbar.css";

function Navbar(props) {
  const { windowWidth } = props;
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        Услуги
      </Link>
      <Link to="/" className="navbar__link">
        Виджеты
      </Link>
      <Link to="/" className="navbar__link">
        Интеграции
      </Link>
      <Link to="/" className="navbar__link">
        Кейсы
      </Link>
      {windowWidth > TABLET_WIDTH && (
        <Link to="/" className="navbar__link">
          Сертификаты
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
