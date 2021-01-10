import React from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ img, alt, title, description, gitHub, website, chips }) {
  return (
    <div className="card__wrapper">
      <div className="card">
        <div className="card__image-box">
          {img && <img src={img} alt={alt} />}
        </div>
        <div className="card__text-box">
          <h2>{title}</h2>
          <article>{description}</article>
          <div className="card__chip-box">
            {chips &&
              chips.map((chip) => {
                return (
                  <div className="card__chip" key={chip}>
                    {chip}
                  </div>
                );
              })}
          </div>
          <div className="card__text-box--buttons">
            {gitHub && (
              <button onClick={() => window.open(gitHub)}>
                <FontAwesomeIcon icon={["fab", "github"]} />
                GitHub
              </button>
            )}
            {website && (
              <button onClick={() => window.open(website)}>Website</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
