import React from "react";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import FooterContact from "./FooterContact";
import Copyright from "./Copyright";
import './Footer.css';

function Footer(props) {

  return (
    <footer className="footer">
      <div className="footer__navbar">
        <AboutUs />
        <Menu />
        <FooterContact windowWidth={props.windowWidth} handleClick={props.handleClick}/>
      </div>
      <Copyright/>
    </footer>
  );
}

export default Footer;
