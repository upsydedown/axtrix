import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
const App = () => {
  return (
    <>
      <section className="appMain">
        <div className="appLogo">
          <img src="../images/logo.jpg" alt="" />
        </div>
        <div className="appBody">
          <div className="NavigationPanel">
            <Navbar />
          </div>
          <div className="PagesPanel">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
