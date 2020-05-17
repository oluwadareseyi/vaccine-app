import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="top-container">
        <div className="top-container__left">
          <nav className="nav">
            <div className="logo">VaccineApp</div>
            <div className="nav-items">
              <div className="nav-item">Home</div>
              <div className="nav-item">About Us</div>
              <div className="nav-item">Services</div>
              <div className="nav-item">Blog</div>
              <div className="nav-item">Contact Us</div>
            </div>
          </nav>
          <div className="content">
            <div className="inner">
              <div className="update">
                <div className="new">New</div>
                <div className="latest">
                  Get the latest update on coronavirus (COVID-19)
                </div>
              </div>
              <h1 className="title">Your Child's Health Is Important To Us.</h1>
              <div className="sub">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the.
              </div>
              <button className="button get">Get Started</button>
            </div>
            <div className="mother" />
          </div>
          <div className="fill-circle"></div>
          <div className="border-circle"></div>
        </div>
        <div className="top-container__right">
          <button className="button">Sign Up</button>
        </div>
      </div>

      <div className="about-container"></div>
    </div>
  );
};

export default App;
