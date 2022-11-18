import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { MOBILE_MAX_WIDTH, DESCTOP_MIN_WIDTH } from "../utils/device-width";
import './Header.css'
import HeaderContact from "./HeaderContact";

function Header() {
  const size = useWindowSize();
  console.log(size);
  console.log(DESCTOP_MIN_WIDTH);
  return (
    <header className="header">
      { size.width > MOBILE_MAX_WIDTH && <Logo/> }
      <Navbar />
      { size.width > DESCTOP_MIN_WIDTH && <HeaderContact/>}
    </header>
  );
}

export default Header;
