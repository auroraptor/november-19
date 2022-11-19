import React from "react";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import FooterContact from "./FooterContact";
import Copyright from "./Copyright";
import './Footer.css';

function Footer(props) {
  const {windowWidth, handleClick} = props;

  return (
    <footer className="footer">
      <div className="footer__navbar">
        <AboutUs />
        <Menu />
        <FooterContact windowWidth={windowWidth} handleClick={handleClick}/>
      </div>
      <Copyright/>
    </footer>
  );
}

export default Footer;
