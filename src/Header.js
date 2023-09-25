import React from "react";
import {Link} from "react-router-dom"
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg mb-5">
        <div className="container-fluid">
          <a className="navbar-brand title" href="/">
            Force and Embers
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/compendium">
                  Compendium
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
