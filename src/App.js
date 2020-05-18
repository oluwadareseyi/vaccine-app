import React from "react";
import "./App.scss";
import FeedBack from "./components/Feedback";
import Tablets from "./assets/images/Icon awesome-tablets.svg";
import Syringe from "./assets/images/Icon metro-injection.svg";
import Bubbles from "./assets/images/Icon ionic-ios-chatbubbles.svg";
import Arrow from "./assets/images/arrow.svg";

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

      <div className="about-container">
        <div className="about-container__images">
          <div className="img img-1" />
          <div className="img img-2" />
        </div>
        <div className="about-container__content">
          <div className="title-small">ABOUT US</div>
          <div className="title">
            A Great Place <br />
            For <b>Medical Care</b>
          </div>
          <div className="sub">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, the actual teachings of the great explorer of
            the truth.
          </div>
          <button className="button">LEARN MORE</button>
        </div>
      </div>

      <div className="services-container">
        <div className="texts">
          <div className="title-small">SERVICES</div>
          <div className="title">Services We Offer</div>
          <div className="sub">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the.
          </div>
        </div>

        <div className="boxes">
          <div className="box">
            <div className="content">
              <img src={Tablets} alt="tablets" className="icon" />
              <div className="title-small">OLDER & CHILDREN</div>
              <div className="title">
                Medication <br /> Tracker
              </div>
              <div className="sub">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born.
              </div>
              <div className="more">
                Learn More <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <img src={Syringe} alt="tablets" className="icon syr" />
              <div className="title-small">CHILDREN</div>
              <div className="title">
                Vaccination <br /> Tracker
              </div>
              <div className="sub">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born.
              </div>
              <div className="more">
                Learn More <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="content">
              <img src={Bubbles} alt="tablets" className="icon syr" />
              <div className="title-small">OLDER & CHILDREN</div>
              <div className="title doc">DocChat</div>
              <div className="sub">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born.
              </div>
              <div className="more">
                Learn More <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeedBack />

      <div className="location">
        <div className="find-box">
          <div className="content">
            <h2 className="title">
              Let's Find A Hospital <br /> Near You.
            </h2>
            <p className="sub">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of.
            </p>
            <div className="input-con">
              <input placeholder="Enter Your Location" type="text" />
              <button className="button">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-container">
        <div className="title-small">BLOG</div>
        <div className="title">Latest Articles</div>
        <div className="sub">Stay on top of the news on all health matters</div>
        <div className="article-boxes">
          <div className="box box-1">
            <div className="top"></div>
            <div className="bottom">
              <div className="meta">
                <div className="date">17th April, 2020</div>
                <div className="time">5-min read</div>
              </div>
              <h4>But I Must Explain To You How</h4>
              <p>
                But I Must Explain To You How All This Mistaken Idea Denouncing
                Plea....
              </p>
            </div>
          </div>

          <div className="box box-2">
            <div className="top"></div>
            <div className="bottom">
              <div className="meta">
                <div className="date">17th April, 2020</div>
                <div className="time">5-min read</div>
              </div>
              <h4>But I Must Explain To You How</h4>
              <p>
                But I Must Explain To You How All This Mistaken Idea Denouncing
                Plea....
              </p>
            </div>
          </div>

          <div className="box box-3">
            <div className="top"></div>
            <div className="bottom">
              <div className="meta">
                <div className="date">17th April, 2020</div>
                <div className="time">5-min read</div>
              </div>
              <h4>But I Must Explain To You How</h4>
              <p>
                But I Must Explain To You How All This Mistaken Idea Denouncing
                Plea....
              </p>
            </div>
          </div>
        </div>
        <button className="button">Keep Reading</button>
      </div>
    </div>
  );
};

export default App;
