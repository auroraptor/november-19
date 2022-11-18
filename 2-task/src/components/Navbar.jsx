import React from "react";
import { Link } from 'react-router-dom';
import useWindowSize from "../hooks/useWindowSize";
import { TABLET_WIDTH } from "../utils/device-width";
import './Navbar.css'

function Navbar() {
  const width = useWindowSize().width;
  return (
      <nav className="navbar">
        <Link to="/" className="navbar__link">Услуги</Link>
        <Link to="/" className="navbar__link">Виджеты</Link>
        <Link to="/" className="navbar__link">Интеграции</Link>
        <Link to="/" className="navbar__link">Кейсы</Link>
        { width > TABLET_WIDTH && <Link to="/" className="navbar__link">Сертификаты</Link>}
      </nav>
  );
}

export default Navbar;
