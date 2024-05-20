import React from "react";
import "./index.scss";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="f-Icons">
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaFacebook />
          </div>
        </div>
        <div className="contact">
          <div className="number">
            <FaPhoneSquareAlt />

            <p>+7238712981237</p>
          </div>
          <div className="number">
            <FaPhoneSquareAlt />

            <p>+ioasdaosdjqsl</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
