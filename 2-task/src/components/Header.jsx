import React from "react";
import { MOBILE_MAX_WIDTH, DESKTOP_MIN_WIDTH } from "../utils/device-width";
import Navbar from "./Navbar";
import Logo from "./Logo";
import "../blocks/Header.css";
import HeaderContact from "./HeaderContact";

function Header(props) {
  const { windowWidth, handleClick } = props;
  return (
    <header className="header">
      {windowWidth > MOBILE_MAX_WIDTH && <Logo />}
      <Navbar windowWidth={windowWidth} />
      {windowWidth > DESKTOP_MIN_WIDTH && (
        <HeaderContact handleClick={handleClick} />
      )}
    </header>
  );
}

export default Header;
