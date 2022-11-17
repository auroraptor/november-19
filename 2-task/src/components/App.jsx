import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
