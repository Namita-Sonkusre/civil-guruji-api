import React, { useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const TraningBox = ({ head, description, children: child }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const target = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="col-md-3">
      <OverlayTrigger
        placement={"bottom-end"}
        trigger={"click"}
        overlay={<div className="card card-border-tab">{child}</div>}
      >
        <div class="card card-border-tab">
          <h3>{head}</h3>
          <p>{description}</p>

          <div className="videoBox-2 add-more-training">
            <GoPlus
              ref={target}
              onClick={toggleMenu}
              style={{
                transform: isMenuOpen ? "rotate(45deg)" : "rotate(0deg)",
              }}
              className="go-to-play"
            />
          </div>
        </div>
      </OverlayTrigger>
    </div>
  );
};

const Section62 = () => {
  return (
    <div className="tanker">
      <div className="row">
        <TraningBox head="Online" description="Practical Training">
          <div className="training-session">
            <h3>Online Training</h3>
            <p>COPs For Building</p>
            <p>COPs For Highway Construction Training</p>
            <p>AOPs (Architectural Operating Process)</p>
          </div>
        </TraningBox>

        <TraningBox head="Offline" description="Practical Training">
          <div className="training-session">
            <h3>Offline Training</h3>
            <p>Corporate Training Courses Offline</p>
          </div>
        </TraningBox>

        <TraningBox head="Individual" description="Individual Training">
          <div className="training-session">
            <h3>Individual Training</h3>
            <p>Mastering In Mivan Formwork</p>
            <p>Freelancing To Business</p>
            <p>Property Valuation</p>
          </div>
        </TraningBox>

        <TraningBox head="Free" description="Free Training">
          <div className="training-session">
            <h3>Free Training</h3>
            <p>Career Planning</p>
            <p>Career Planning</p>
            <p>Unit Conversion</p>
          </div>
        </TraningBox>
      </div>
    </div>
  );
};

export default Section62;
