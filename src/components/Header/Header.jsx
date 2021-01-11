import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header__container">
      <nav>
        <Link to="/" className="nav__logo">
          <FontAwesomeIcon icon={["fab", "medium"]} />
        </Link>

        <div className="nav__links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
