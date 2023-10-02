import ".././section.css";
import React from "react";

const Section11 = () => {
  return (
    <div className="tanker">
      <div>
        <div
          className="main-title"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {" "}
          Unlock Your Potential
        </div>
        <div
          className="main-title"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          As a Civil Engineer
        </div>
      </div>
      <div className="left-header main-btn">
        <button className="menu  explore-us explore-btn-clr">
          <span>Explore Courses</span>
        </button>
        <button className="menu  explore-us call-btn-clr">
          <span>Call Now</span>
        </button>
      </div>
      <div className="civil-dialogue ">
        <span>Civil</span>
        <span className="dialogue-style">की बात</span>
        <span>Guruji</span>
        <span className="dialogue-style">के साथ . . .</span>
      </div>
    </div>
  );
};

export default Section11;
