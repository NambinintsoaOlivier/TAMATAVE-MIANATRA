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
              <p>En cours de developpement...</p>
              <div className="home-menu d-flex flex-column align-items-center justify-content-center">
                <Link to={""} className="btn btn-search">
                  Trouver du formation
                </Link>
                <Link to={""} className="btn btn-login mt-3">
                  Se connecter
                </Link>
                <Link to={""} className="btn btn-create-account mt-3">
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
