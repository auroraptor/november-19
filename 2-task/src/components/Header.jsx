import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import { MOBILE_MAX_WIDTH, DESKTOP_MIN_WIDTH } from "../utils/device-width";
import Navbar from "./Navbar";
import Logo from "./Logo";
import './Header.css'
import HeaderContact from "./HeaderContact";

function Header() {
  const { width } = useWindowSize();
  return (
    <header className="header">
      { width > MOBILE_MAX_WIDTH && <Logo/> }
      <Navbar />
      { width > DESKTOP_MIN_WIDTH && <HeaderContact/>}
    </header>
  );
}

export default Header;
