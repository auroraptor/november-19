import React from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import "./Header.css";
import HeaderContact from "../HeaderContact/HeaderContact";

function Header(props) {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <HeaderContact {...props} />
    </header>
  );
}

export default Header;
