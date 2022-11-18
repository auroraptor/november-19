import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Menu() {
  return (
    <>
      <p className="footer__title">Меню</p>
      <ul className="footer__container">
        <li className="footer__link">
          <Link to="/">Расчёт стоимости</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Услуги</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Виджеты</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Интеграции</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Наши клиенты</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Благодарность клиентов</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Кейсы</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Сертификаты</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Блог на Youtube</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Вопрос / Ответ</Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
