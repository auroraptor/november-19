import React from "react";
import { MOBILE_MAX_WIDTH } from "../utils/device-width";
import "../blocks/Main.css";

function MainList(props) {
  const { windowWidth } = props;
  return (
    <ul className="main__list">
      <li className="main__list_container">
        <span className="main_theme_gragient main__list_visible">&mdash;</span>
        Skype аудит
        <span className="main__list_description">отдела продаж и CRM системы</span>
      </li>
      <li className="main__list_container">
        <span className="main_theme_gragient main__list_visible">&mdash;</span>
        Dashboard
        <span className="main__list_description">с показателями
вашего бизнеса</span>
      </li>
      <li className="main__list_container">
        <span className="main_theme_gragient main__list_visible">&mdash;</span>
        { windowWidth < MOBILE_MAX_WIDTH ? '30 виджетов' : 'Виджеты'}
        <span className="main__list_description">30 готовых решений</span>
      </li>
      <li className="main__list_container">
        <span className="main_theme_gragient main__list_visible">&mdash;</span>
        { windowWidth < MOBILE_MAX_WIDTH ? 'Месяц аmoCRM' : '35 дней'}
        <span className="main__list_description">отдела продаж и CRM системы</span>
      </li>
    </ul>
  );
}

export default MainList;
