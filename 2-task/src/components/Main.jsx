import React from "react";
import MainList from "./MainList";
import "../blocks/Main.css";
import { MOBILE_MAX_WIDTH } from "../utils/device-width";

function Main(props) {
  const {windowWidth, handleClick} = props;

  return (
    <>
      <main className="main">
        <div className="main__container">
          <h1 className="main__title">
            Зарабатывайте
            <br />
            больше
            <br />
            <span className="main_theme_gragient main__title_bold">
              с&nbsp;WELBEX
            </span>
          </h1>
          <p className="main__description">
            Развиваем и контролируем <br />
            продажи за вас
          </p>
        </div>
        <div className="main__container">
          <h2 className="main__subtitle">
            Вместе с&nbsp;
            <span className="main_theme_gragient main__subtitle_size_xl">
              бесплатной<br />консультацией
            </span>{" "}
            мы дарим:
          </h2>
          <MainList windowWidth={windowWidth}/>
          { windowWidth > MOBILE_MAX_WIDTH && <button type="button" className="button_place_main button_size_xl" onClick={handleClick} aria-label="Получить консультацию">Получить консультацию</button>}
        </div>
        <div className="cover">
          <div className="cover__circle_color_purple-light"></div>
          <div className="cover__circle_color_red-light"></div>
          <div className="cover__circle_color_yellow-light"></div>
          <div className="cover__circle_color_purple-ball"></div>
          <div className="cover__circle_color_red"></div>
        </div>
        <div className="cover_desktop">
          {/* TODO */}
        </div>
      </main>
    </>
  );
}

export default Main;
