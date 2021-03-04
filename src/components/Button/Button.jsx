import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Button.scss";

function Button({ text, type, handleClick, active }) {
  switch (type) {
    case "primary":
      return (
        <button onClick={handleClick} className="primary">
          <div id="slide"></div>
          {text}
        </button>
      );

    case "transparent":
      return (
        <button
          onClick={handleClick}
          className={active ? "active transparent" : "transparent"}
        >
          {text}
        </button>
      );

    case "gitHub":
      return (
        <button onClick={handleClick} className="gitHub">
          <FontAwesomeIcon icon={["fab", "github"]} />
          {text}
        </button>
      );

    default:
      return (
        <button className="default" onClick={handleClick}>
          {text}
        </button>
      );
  }
}
export default Button;
