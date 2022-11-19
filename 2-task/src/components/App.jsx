import React from "react";
import { Routes, Route } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import Cover from "./Cover";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

function App() {
  const handleClick = () => alert("not really button");
  const { width: windowWidth } = useWindowSize();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
          <Cover />
            <Header
              handleClick={handleClick}
            ></Header>
            <Main handleClick={handleClick} windowWidth={windowWidth}></Main>
            <Footer
              handleClick={handleClick}
              windowWidth={windowWidth}
            ></Footer>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
