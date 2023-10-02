import React from "react";
import ".././section.css";
import bgGif from "../../images/bgGif.gif"

const Section21 = () => {
  return (
    <div className="tanker">
      <div className="section-container">
        <div className="background-image">
          <img
            src={bgGif}
            alt="Background"
            className="background-img"
          />
        </div>
        <div className="text-overlay">
          <p className="main-title become-expert" data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500">
            Become An Industry Expert in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section21;
