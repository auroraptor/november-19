import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
    <Link to="/" className="logo__link"></Link>
    <p className="logo__description">крупный интегратор CRM<br />в Росcии и ещё 8странах</p>
    </div>
  );
}

export default Logo;
