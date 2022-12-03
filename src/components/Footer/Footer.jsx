import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Menu from "../Menu/Menu";
import FooterContact from "../FooterContact/FooterContact";
import Copyright from "../Copyright/Copyright";
import "./Footer.css";

function Footer(props) {
  const { handleClick } = props;

  return (
    <footer className="footer">
      <div className="footer__navbar">
        <AboutUs />
        <Menu />
        <FooterContact handleClick={handleClick} />
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
