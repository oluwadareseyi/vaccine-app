import React, { useState } from "react";
import "./Feedback.scss";
import Clients from "../assets/images/Group 8.png";
import Quote from "../assets/images/Quotes.svg";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex === 1) return;

    setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) return;

    setCurrentIndex(currentIndex - 1);
  };
  return (
    <div className="feedback">
      <div className="left">
        <img className="img" src={Clients} alt="clients" />
      </div>
      <div className="right">
        <div className="title-small">FEEDBACK</div>
        <div className="title">Check What Our Clients Say About Us</div>
        <div className="quote-container">
          <div className="quotes">
            <img src={Quote} alt="quote" className="quote-image" />
            <div className={`${currentIndex === 1 ? "translate" : ""} quote`}>
              <div className="text">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of.
              </div>
              <p className="name">
                <b>Dr. Blessing Wilson.</b>
              </p>
              <div className="position">Chief Doctor</div>
            </div>

            <div className={`${currentIndex === 1 ? "translate" : ""} quote`}>
              <div className="text">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of.
              </div>
              <p className="name">
                <b>Dr. Blessing Wilson.</b>
              </p>
              <div className="position">Chief Doctor</div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <img
            onClick={prevSlide}
            src={leftArrow}
            alt="left-arrow"
            className="arrow-left"
          />
          <img
            onClick={nextSlide}
            src={rightArrow}
            alt="right-arrow"
            className="arrow-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
