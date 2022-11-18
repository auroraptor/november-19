import React from "react";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Contact from "./Contact";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__navbar">
        <AboutUs />
        <Menu />
        <Contact />
      </div>
      <div className='footer__copyrigth'>
        <p>&copy;WELBEX 2022. Все права защищены.</p>
        <p>Политика конфиденциальности</p>
      </div>
    </footer>
  );
}

export default Footer;
