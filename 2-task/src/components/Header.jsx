import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import "./Header.css";
import HeaderContact from "./HeaderContact";

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
