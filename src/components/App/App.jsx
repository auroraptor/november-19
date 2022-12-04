import React from "react";
import { Routes, Route } from "react-router-dom";
import Cover from "../Cover/Cover";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const handleClick = () => alert("not really button");
  return (
    <Routes>
      <Route
        path="/november-19"
        element={
          <div className="app">
            <Cover />
            <Header handleClick={handleClick} />
            <Main handleClick={handleClick} />
            <Footer handleClick={handleClick} />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
