import React from "react";
import "./Home.scss";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            View my work <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
