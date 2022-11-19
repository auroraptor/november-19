import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Menu() {
  return (
    <div className="footer__column">
      <p className="footer__title">Меню</p>
      <ul className="footer__container footer__container_type_menu">
        <li className="footer__link_type_menu">
          <Link to="/" className="footer__link">
            Расчёт стоимости
          </Link>
        </li>
        <li className="footer__link_type_menu">
          <Link to="/" className="footer__link">
            Услуги
          </Link>
        </li>
        <li className="footer__link_type_menu">
          <Link to="/" className="footer__link">
            Виджеты
          </Link>
        </li>
        <li className="footer__link_type_menu">
          <Link to="/" className="footer__link">
            Интеграции
          </Link>
        </li>
        <li className="footer__link_type_menu">
          <Link to="/" className="footer__link">
            Наши клиенты
          </Link>
        </li>
        <li className="footer__link_type_menu">
          <Link to="/" className="footer__link">
            Благодарность клиентов
          </Link>
        </li>
        <li className="footer__link_type_menu">
          <Link to="/" className="footer__link">
            Кейсы
          </Link>
        </li>
        <li className="footer__link_type_menu">
          <Link to="/" className="footer__link">
            Сертификаты
          </Link>
        </li>
        <li className="footer__link_type_menu">
          <Link to="/" className="footer__link">
            Блог на Youtube
          </Link>
        </li>
        <li className="footer__link_type_menu">
          <Link to="/" className="footer__link">
            Вопрос / Ответ
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
