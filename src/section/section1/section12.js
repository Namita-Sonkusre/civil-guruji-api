import ".././section.css"; // Import your external CSS
import React, { useState } from "react";
import { GoPlay, GoPlus } from "react-icons/go";

const Section12 = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="tanker">
      {!show ? (
        <div className="bg-img">
          <div className="videoBox">
            <GoPlay className="go-to-play" onClick={(e) => setShow(true)} />
          </div>
          <div className="videobox"></div>
          <div className="videoBox-2">
            <GoPlus className="go-to-play" />
          </div>
        </div>
      ) : (
        <div className="svg-setup">
        <div class="content">
          <div class="rwd-media">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SqqT6sHF21I"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
            <svg width="50" height="70" className="video-svg">
              <line
                x1="25"
                y1="0"
                x2="25"
                y2="70"
                stroke="#d7d7d7"
                stroke-width="2"
              />
              <circle cx="25" cy="65" r="5" fill="#d7d7d7" />
            </svg>
            </div>
      )}
    </div>
  );
};

export default Section12;
