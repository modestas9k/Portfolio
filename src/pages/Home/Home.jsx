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
          <h1>Front-End Developer</h1>
          <button onClick={() => history.push("/projects")}>
            View my work{" "}
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
