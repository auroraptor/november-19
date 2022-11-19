import React from "react";
import "../Main/Main.css";
import "./MainList.css";

function MainList() {
  return (
    <ul className="main__list">
      <li className="main__list_container">
        <span className="main_theme_gragient main__list_visible">&mdash;</span>
        Skype аудит
        <span className="main__list_description">
          отдела продаж и CRM системы
        </span>
      </li>
      <li className="main__list_container">
        <span className="main_theme_gragient main__list_visible">&mdash;</span>
        Dashboard
        <span className="main__list_description">
          с показателями вашего бизнеса
        </span>
      </li>
      <li className="main__list_container">
        <span className="main_theme_gragient main__list_visible">&mdash;</span>
        <p className="text_mobile">30 виджетов</p>
        <p className="text_desktop">Виджеты</p>

        <span className="main__list_description">30 готовых решений</span>
      </li>
      <li className="main__list_container">
        <span className="main_theme_gragient main__list_visible">&mdash;</span>
        <p className="text_mobile">Месяц аmoCRM</p>
        <p className="text_desktop">35 дней</p>
        <span className="main__list_description">использования CRM</span>
      </li>
    </ul>
  );
}

export default MainList;
