import React from "react";
import "./Home.scss";
import { Button } from "./../../components";
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
          <Button
            text="View my work"
            type="primary"
            handleClick={() => history.push("/projects")}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
