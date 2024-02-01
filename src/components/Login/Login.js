import React from "react";
import "./Login.css";
import logoHome from "../../styles/images/logoTamMian.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="home-content ">
            <div className="home-content-item d-flex flex-column align-items-center">
              <img src={logoHome} alt="" />
              <p>En cours de developpement...</p>
              <section class="h-100 ">
                <div class="container h-100">
                  <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <h2 class="mt-1 mb-2 pb-1" style={{ color: "#D9D9D9" }}>
                          Se connecter
                        </h2>
                      </div>
                      <form>
                        <div class="form-outline mb-3">
                          <input
                            type="email"
                            id="form2Example11"
                            class="form"
                            placeholder="Email address"
                          />
                        </div>

                        <div class="form-outline mb-3">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form"
                            placeholder="Password"
                          />
                        </div>
                        <div className="btn btn-connection mb-3">
                          Connection
                        </div>
                        <Link>
                          <p className="text-end text-underline">
                            <u style={{ color: "#D9D9D9" }}>
                              Mot de passe oublié
                            </u>
                          </p>
                        </Link>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2" style={{ color: "#D9D9D9" }}>
                            Don't have an account?
                          </p>
                          <button type="button" class="btn btn-danger">
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
