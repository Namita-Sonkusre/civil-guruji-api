import React from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/ing3.png";
import img4 from "../../images/img4.png";
import bgGif from "../../images/bgGif.gif";

const Section31 = () => {
  return (
    <div className="tanker">
      <div className="section-container">
        <div className="background-image">
          <img src={bgGif} alt="Background" className="background-img" />
        </div>
        <div className="text-overlay">
          <svg width="120" height="10">
            <line
              x1="0"
              y1="5"
              x2="120"
              y2="5"
              stroke="#d7d7d7"
              stroke-width="2"
            />
            <circle cx="105" cy="5" r="5" fill="#d7d7d7" />
          </svg>
          <p
            className="main-title become-expert"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            WE HAVE PROUDLY FEATURED IN
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-6 col-margin">
          <div class="card img-card-border">
            <img src={img1} className="card-img-top grayscale" alt="img" />
          </div>
        </div>
        <div className="col-md-3 col-6 col-margin">
          <div class="card img-card-border">
            <img src={img2} className="card-img-top grayscale" alt="img" />
          </div>
        </div>
        <div className="col-md-3 col-6 col-margin">
          <div class="card img-card-border">
            <img src={img3} className="card-img-top grayscale" alt="img" />
          </div>
        </div>
        <div className="col-md-3 col-6 col-margin">
          <div class="card img-card-border">
            <img src={img4} className="card-img-top grayscale" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section31;
