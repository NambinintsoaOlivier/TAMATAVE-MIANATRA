import React from "react";
import "./Login.css";
import logoHome from "../../styles/images/logoTamMian.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="home-content">
            <div className="home-content-item d-flex flex-column align-items-center">
              <img src={logoHome} alt="" />
              <p>En cours de développement...</p>
              <div className="home-menu">
                <div className="text-center">
                  <h2 className="mt-1 mb-2 pb-1" style={{ color: "#D9D9D9" }}>
                    Se connecter
                  </h2>
                </div>
                <form>
                  <div className="form-outline mb-3">
                    <input
                      type="email"
                      id="form2Example11"
                      className="form"
                      placeholder="Email address"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form2Example22"
                      className="form"
                      placeholder="Password"
                    />
                  </div>
                  <div className="btn btn-connection mb-3">Connexion</div>
                  <Link to={"/forgot-password"}>
                    <p className="text-end text-underline">
                      <u style={{ color: "#D9D9D9" }}>Mot de passe oublié</u>
                    </p>
                  </Link>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2" style={{ color: "#D9D9D9" }}>
                      Don't have an account?
                    </p>
                    <Link to={"/signup"}>
                      <button type="button" className="btn btn-danger">
                        Create new
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
