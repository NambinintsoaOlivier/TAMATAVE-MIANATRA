import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer
        className="d-flex flex-wrap justify-content-end align-items-center py-4 my-4 border-top"
        style={{ background: "#101010", color: "#EDC254" }}
      >
        <div className="col-md-4 d-flex align-items-center">
          <span className="mr-3">&copy; 2024 Company, Inc</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
