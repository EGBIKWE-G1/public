import React from "react";
import "./Header.css";
import canary_logo from "../Components/canary-logo.png";
const Header = () => {
  return (
    <>
      <div className="company-logo-container">
        <img src={canary_logo} alt="canary_company_logo" height="50px" />
      </div>
      <div className="canary-header_logo">
        <div className="header_navigation_bar">
          <svg
            width="1227"
            height="664"
            viewBox="0 0 1227 664"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="613.5" cy="50.5" r="613.5" fill="#F8F8F8" />
          </svg>
        </div>
      </div>
    </>
  );
};
export default Header;
