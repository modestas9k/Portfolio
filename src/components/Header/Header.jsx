import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "./../../assets/logo.png";

function Header() {
  return (
    <div className="header__container">
      <nav>
        <Link to="/" className="nav__logo">
          <img src={logo} alt="logo" />
        </Link>

        <div className="nav__links">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
