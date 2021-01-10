import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Button.scss";

function Button({ text, type }) {
  switch (type) {
    case "primary":
      return <button className="primary">{text}</button>;

    case "transparent":
      return <button className="transparent">{text}</button>;

    case "gitHub":
      return (
        <button className="gitHub">
          <p>
            <FontAwesomeIcon icon={["fab", "github"]} />
          </p>{" "}
          {text}
        </button>
      );

    default:
      return <button>{text}</button>;
  }
}
export default Button;
