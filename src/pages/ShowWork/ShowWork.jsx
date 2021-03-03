import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import projectsData from "./../../projectsData";
import { FlippingCard, Counter, DrumKit } from "./../../DailyChallanges";
import { Button } from "./../../components";
import "./ShowWork.scss";

function ShowWork() {
  const location = useLocation();
  const [project, setProject] = useState("");

  const findProject = (path) => {
    const projectId = path.replace("/projects/", "");
    projectsData.forEach((types) => {
      types.forEach((obj) => {
        if (obj.id === projectId) {
          setProject(obj);
        }
      });
    });
  };

  useEffect(() => {
    if (location.state && location.state.project) {
      setProject(location.state.project);
    } else {
      findProject(location.pathname);
    }
  }, [location]);

  return (
    <div>
      {project && project.type !== "oneDayChallenge" && (
        <div className="showWork__container">
          <div className="showWork__image-wrapper">
            {project.images &&
              project.images.map((obj) => {
                return (
                  <div key={obj.id}>
                    <img src={obj.src} alt={obj.alt} />
                  </div>
                );
              })}
          </div>
          <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="showWork__chip-box">
              {project.chips &&
                project.chips.map((chip) => {
                  return (
                    <div className="showWork__chip" key={chip}>
                      {chip}
                    </div>
                  );
                })}
            </div>
            <div className="showWork__buttons">
              {project.gitHub && (
                <Button
                  type="gitHub"
                  text="GitHub"
                  handleClick={() => window.open(project.gitHub)}
                />
              )}
              {project.website && (
                <Button
                  text="Website"
                  type="transparent"
                  handleClick={() => window.open(project.website)}
                />
              )}
            </div>
          </div>
        </div>
      )}
      {project && project.type === "oneDayChallenge" && (
        <div>
          {project.id === "FlippingCard" && <FlippingCard />}
          {project.id === "CountDown" && <Counter />}
          {project.id === "DrumKit" && <DrumKit />}
        </div>
      )}
    </div>
  );
}
export default ShowWork;
