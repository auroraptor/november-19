import React from "react";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Contact from "./Contact";
import Copyright from "./Copyright";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__navbar">
        <AboutUs />
        <Menu />
        <Contact />
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
