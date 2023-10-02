import React from "react";
import socialmedia from "../../images/socialmedia.jpg";
import session from "../../images/session.jpg";
import training from "../../images/training.jpg";
import corporate from "../../images/corporate.jpg";
import pan from "../../images/pan.jpg";
import bgGif from "../../images/bgGif.gif"


const Section41 = () => {
  return (
    <div className="tanker">
      <div className="section-container">
      <div className="background-image background-image-2">
          <img
            src={bgGif}
            alt="Background"
            className="background-img"
          />
        </div>
        <div className="text-overlay">
          <p
            className="main-title become-expert"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Numbers That Make Us Reliable & Valuable
          </p>
          <svg width="120" height="10">
              <line
                x1="0"
                y1="5"
                x2="120"
                y2="5"
                stroke="#d7d7d7"
                stroke-width="2"
              />
              <circle cx="115" cy="5" r="5" fill="#d7d7d7" />
            </svg>
        </div>
      </div>
      <div className="row second-row">
        <div className="col-12 col-md-4">
          <div className="reliable-img">
            <img
              src={socialmedia}
              alt="socialmedia"
              className="img-valuable"
              data-aos="fade-down-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
            <div
              className="valuable-text"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <h2>
                <span className="head-clr">2.6M</span>
                <span>+</span>
              </h2>
              <p className="para-clr">
                Social Media <br /> Followers
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="reliable-img">
            <img
              src={session}
              alt="session"
              className="img-valuable"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            <div
              className="valuable-text"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <h2>
                <span className="head-clr">2K</span>
                <span>+</span>
              </h2>
              <p className="para-clr">
                Training <br />
                Session
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="reliable-img">
            <img
              src={training}
              alt="training"
              className="img-valuable"
              data-aos="fade-down-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
            <div
              className="valuable-text"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <h2>
                <span className="head-clr">2.6 L</span>
                <span>+</span>
              </h2>
              <p className="para-clr">
                Engineers
                <br />
                Trained
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row second-row">
        <div className="col-md-1"></div>
        <div className="col-12 col-md-5">
          <div className="reliable-img">
            <img
              src={corporate}
              alt="corporate"
              className="img-valuable"
              data-aos="fade-up-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
            <div
              className="valuable-text-2"
              data-aos="zoom-in-down"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <h2>
                <span className="head-clr">50</span>
                <span>+</span>
              </h2>
              <p className="para-clr">
                Corporate
                <br />
                Trainers
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="reliable-img">
            <img
              src={pan}
              alt="pan"
              className="img-valuable"
              data-aos="fade-up-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
            <div
              className="valuable-text-2"
              data-aos="zoom-in-down"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <h2>
                <span className="head-clr">18</span>
                <span>+</span>
              </h2>
              <p className="para-clr">
                Branches
                <br />
                Pan India
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default Section41;
