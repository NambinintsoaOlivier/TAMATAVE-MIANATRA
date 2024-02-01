import React from "react";
import "../styles/Home.css";
import logoHome from "../styles/images/logoTamMian.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="home-content ">
            <div className="home-content-item d-flex flex-column align-items-center">
              <img src={logoHome} alt="" />
              <div className="home-menu d-flex flex-column align-items-center justify-content-center">
                <Link to={"/formations"} className="btn btn-search mb-3">
                  Trouver du formation
                </Link>
                <Link to={"/login"} className="btn btn-login mb-3">
                  Se connecter
                </Link>
                <Link to={"/signup"} className="btn btn-create-account mb-3">
                  Créer un compte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
