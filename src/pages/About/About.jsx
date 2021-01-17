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
    </div>
  );
}

export default About;
