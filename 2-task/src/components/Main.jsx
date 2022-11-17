import React from "react";
import "./Main.css";

function Main() {
  return (
    <>
    <main className="main">
      <div className="main__container">
      <h1 className="main__title">
        Зарабатывайте&#10;больше
        <br />
        <span className="main_theme_gragient main__tytle_bold">с&nbsp;WELBEX</span>
      </h1>
      <p className="main__description">
        Развиваем и контролируем продажи за вас
      </p>
      <h2 className="main__subtitle">
        Вместе с&nbsp;
        <span className="main_theme_gragient">бесплатной консультацией</span>{" "}
        мы дарим:
      </h2>
      <ul className="main__list">
        <li>
          <span className="main_theme_gragient main__list_margin">&mdash;</span>Skype аудит
        </li>
        <li>
          <span className="main_theme_gragient main__list_margin">&mdash;</span>Dashboard
        </li>
        <li>
          <span className="main_theme_gragient main__list_margin">&mdash;</span>30 виджетов
        </li>
        <li>
          <span className="main_theme_gragient main__list_margin">&mdash;</span>Месяц аmoCRM
        </li>
      </ul>
      </div>
      <div className="cover">
        <div className="cover__circle_color_purple-light"></div>
        <div className="cover__circle_color_red-light"></div>
        <div className="cover__circle_color_yellow-light"></div>
        <div className="cover__circle_color_purple"></div>
        <div className="cover__circle_color_red"></div>
      </div>
    </main>

    </>
  );
}

export default Main;
