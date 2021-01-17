import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className={isOpen ? "burger burger__open" : "burger"}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav className={isOpen ? "open" : ""}>
        <Link onClick={() => setOpen(false)} to="/projects">
          Projects
        </Link>
        <Link onClick={() => setOpen(false)} to="/about">
          About
        </Link>
        <div className="header__line"></div>
        <div className="header__buttons">
          <button
            className="header__btn-linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/modestas-skirius-276631202/"
              )
            }
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </button>
          <button
            className="header__btn-github"
            onClick={() => window.open("https://github.com/modestas9k")}
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </button>
          <button
            className="header__btn-instagram"
            onClick={() =>
              window.open("https://www.instagram.com/modest.skirius/")
            }
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </button>
          <button
            className="header__btn-mail"
            onClick={() => window.open("mailto:modestas.skirius@gmail.com")}
          >
            <FontAwesomeIcon icon={["far", "envelope"]} />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
