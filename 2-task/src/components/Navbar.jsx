import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
      <nav className="navbar">
        <Link to="/" className="navbar__link">Услуги</Link>
        <Link to="/" className="navbar__link">Виджеты</Link>
        <Link to="/" className="navbar__link">Интеграции</Link>
        <Link to="/" className="navbar__link">Кейсы</Link>
      </nav>
  );
}

export default Navbar;
