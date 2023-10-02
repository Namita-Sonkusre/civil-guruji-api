import React, { useState, useRef } from "react";
import "./header.css";
import logo from "../images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; 
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const target = useRef(null);

  const toggleMenu = () => {
    setShow(!show);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="tanker">
      <div className="civil-guruji-header">
        <div className="left-header">
          <div>
            <img src={logo} alt="logo" className="civil-guruji-logo" />
            <p className="logo-title">Civil Guruji</p>
          </div>

          <OverlayTrigger
            placement={"bottom"}
            trigger={"click"}
            overlay={
            <div className="menu menu2">
              <ul className="dropdown-menu-list">
                <li className="dropdown-list">
                  <Link to="#">Free Courses</Link>
                </li>
                <li className="dropdown-list">
                  <Link to="#">Offline Training</Link>
                </li>
                <li className="dropdown-list">
                  <Link to="#">Online Training</Link>
                </li>
                <li className="dropdown-list">
                  <Link to="#">Online Training</Link>
                </li>
                <li className="dropdown-list">
                  <Link to="#">Community</Link>
                </li>
                <li className="dropdown-list">
                  <Link to="#">Blog</Link>
                </li>
                <li className="dropdown-list">
                  <Link to="#">Contact us</Link>
                </li>
                <li className="dropdown-list">
                  <Link to="#">Job Buildo</Link>
                </li>
              </ul>
              </div>
            }
          >
            <button className="menu" ref={target} onClick={toggleMenu}>
              {isMenuOpen ? (
                <div >
                  Close
                  <FaTimes className="close-icon" /> 
                </div>
              ) : (
                <>
                  Menu
                  <RxHamburgerMenu className="menu-icon" />
                </>
              )}
            </button>
          </OverlayTrigger>
        </div>
        <button className="right-header menu">Login/Register</button>
      </div>
    </div>
  );
};

export default Header;
