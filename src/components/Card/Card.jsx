import React from "react";
import "./Card.scss";
import { Button } from "./../../components";

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
              <Button
                type="gitHub"
                text="GitHub"
                handleClick={() => window.open(gitHub)}
              />
            )}
            {website && (
              <Button
                text="Website"
                type="default"
                handleClick={() => window.open(website)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
