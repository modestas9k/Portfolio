import React, { useState } from "react";
import "./Projects.scss";
import { FlippingCard } from "./../../components";

function Projects() {
  const [biggerOnes, setBiggerOnes] = useState(true);
  const [oneDays, setOneDays] = useState(false);

  return (
    <div className="project__main">
      <div className="project__head">
        <h1>Projects</h1>
        <div className="project__buttons">
          <button
            className={biggerOnes ? "btn_active" : ""}
            onClick={() => {
              setBiggerOnes(true);
              setOneDays(false);
            }}
          >
            "Bigger ones"
          </button>
          <button
            className={oneDays ? "btn_active" : ""}
            onClick={() => {
              setOneDays(true);
              setBiggerOnes(false);
            }}
          >
            One day challenge
          </button>
        </div>
      </div>
      {biggerOnes && <div className="">bigger ones</div>}
      {oneDays && (
        <div>
          <FlippingCard />
        </div>
      )}
    </div>
  );
}
export default Projects;
