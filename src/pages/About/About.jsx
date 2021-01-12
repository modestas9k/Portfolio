import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="about__main">
        <div className="about__main--text-box">
          <h1>About</h1>
          <article>
            With passion recently graduated Frond-end course at Code Academy in
            Vilnius. I learned many things, such as front-end development with
            HTML, CSS and JavaScript, various popular libraries and frameworks
            (Vue.js, React, Bulma, Material-ui), writing clean code, debugging,
            working in a team, using Git/GitHub to manage and contribute code to
            a team project, and most importantly - I learned how to learn new
            things.
          </article>
        </div>
        <div className="about__main--image-box"></div>
      </div>
      <div className="about__foot">
        <h3>Contact me </h3>
        <div className="about__line"></div>
        <div className="about__buttons">
          <button
            className="about__btn-fb"
            onClick={() =>
              window.open("https://www.facebook.com/modestas.skirius/")
            }
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </button>
          <button
            className="about__btn-linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/modestas-skirius-276631202/"
              )
            }
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </button>
          <button
            className="about__btn-github"
            onClick={() => window.open("https://github.com/modestas9k")}
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </button>
          <button
            className="about__btn-instagram"
            onClick={() =>
              window.open("https://www.instagram.com/modest.skirius/")
            }
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </button>
          <button
            className="about__btn-mail"
            onClick={() => window.open("mailto:modestas.skirius@gmail.com")}
          >
            <FontAwesomeIcon icon={["far", "envelope"]} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
