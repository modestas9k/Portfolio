import React, { useState } from "react";
import "./Projects.scss";
import { Card } from "./../../components";
import { FlippingCard, Counter, DrumKit } from "./../../DailyChallanges";
import wineImg from "./../../assets/wineSite/wineSite1.png";
import digitalImg from "./../../assets/digitalArt/digitalArt1.png";
import finSkaiciuokle from "./../../assets/finansuSkaiciuokle/fin1.png";
import cardGenerator from "./../../assets/cardGenerator.png";

function Projects() {
  const [courseStuff, setCourseStuff] = useState(false);
  const [oneDays, setOneDays] = useState(true);

  return (
    <div className="project__main">
      <div className="project__head">
        <h1>Projects</h1>
        <div className="project__buttons">
          <button
            className={courseStuff ? "btn_active" : ""}
            onClick={() => {
              setCourseStuff(true);
              setOneDays(false);
            }}
          >
            Course Projects
          </button>
          <button
            className={oneDays ? "btn_active" : ""}
            onClick={() => {
              setOneDays(true);
              setCourseStuff(false);
            }}
          >
            One-Day Challenges
          </button>
        </div>
      </div>
      {courseStuff && (
        <div className="project__card-wrapper">
          <Card
            img={digitalImg}
            alt="Digital Art website image"
            title="Digital Art website"
            description="An Unsplash clone developed from scratch for final work of course. Added Masonry component, material-ui-chip-input and jimp for resizing images before uploading to firebase storage."
            gitHub="https://github.com/modestas9k/DigitalArt"
            website="https://vue-demo-c6fe6.firebaseapp.com/"
            chips={["React.js", "Material-ui", "Firebase"]}
          />
          <Card
            img={wineImg}
            alt="Wine site image"
            title="Wine site"
            description="A wine management system where goal was CRUD from scratch, connecting React App <-> Node.js <-> Azure MySQL database and authenticate with JsonWebToken."
            gitHub="https://github.com/modestas9k/WineSite"
            chips={[
              "React.js",
              "Styled-components",
              "Node.js",
              "MySql",
              "jwt and bcrypt",
            ]}
          />
          <Card
            img={finSkaiciuokle}
            alt="finance calculator website"
            title="Finance calculator"
            description="Simple finance management system, tracking product income and outcome."
            gitHub="https://github.com/modestas9k/FinansuSkaiciuokle"
            website="https://finansuskaiciuokle.netlify.app/finance"
            chips={["Vue.js", "Bulma", "Firebase"]}
          />
          <Card
            img={cardGenerator}
            alt="finance calculator website"
            title="Card generator"
            description="An simple random people card generator, using randomuser.me API for generating data. My first project using an API."
            gitHub="https://github.com/modestas9k/CardGenerator"
            website="https://randompplgenerator.netlify.app/"
            chips={["HTML", "CSS", "JS"]}
          />
        </div>
      )}
      {oneDays && (
        <div className="projects__oneDays-wrapper">
          <FlippingCard />
          <Counter />
          <DrumKit />
        </div>
      )}
    </div>
  );
}
export default Projects;
