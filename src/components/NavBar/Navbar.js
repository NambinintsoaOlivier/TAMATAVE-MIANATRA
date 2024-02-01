import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState();

  const handleItemClick = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <div class="container d-flex justify-content-end">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isMenuOpen ? "open" : ""
            }`}
            id="navbarCollapse"
          >
            <ul class="navbar-nav mb-2 mb-md-0">
              <li class="nav-item" onClick={handleItemClick}>
                <NavLink
                  to={"/"}
                  class="nav-link custom-nav-link active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item" onClick={handleItemClick}>
                <NavLink class="nav-link custom-nav-link" to={"/formations"}>
                  Formations
                </NavLink>
              </li>
              <li class="nav-item" onClick={handleItemClick}>
                <NavLink class="nav-link custom-nav-link" to={"/login"}>
                  Se connecter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
