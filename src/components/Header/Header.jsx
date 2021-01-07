import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav>
      <div className="nav__logo">
        <i className="fa fa-medium" aria-hidden="true"></i>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Header;
