import React from "react";
import "./Home.scss";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <>
      <section className="hero">
        <div className="text">
          <h1>
            Hello, I'm <strong>Modestas Skirius</strong>.
          </h1>
          <p>Front-End Developer</p>
          <button
            className="home__button"
            onClick={() => history.push("/projects")}
          >
            View work
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
