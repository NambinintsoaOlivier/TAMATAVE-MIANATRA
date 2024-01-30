import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer
        className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
        style={{ background: "#101010", color: "#EDC254" }}
      >
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span>&copy; 2024 Company, Inc</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
