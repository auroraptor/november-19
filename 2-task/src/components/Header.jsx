import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <Link to="/" className="navbar__link">Услуги</Link>
        <Link to="/" className="navbar__link">Виджеты</Link>
        <Link to="/" className="navbar__link">Интеграции</Link>
        <Link to="/" className="navbar__link">Кейсы</Link>
      </div>
    </div>
  );
}

export default Header;