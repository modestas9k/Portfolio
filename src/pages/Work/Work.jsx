import React, { useState, useEffect } from "react";
import "./Work.scss";
import { Button } from "./../../components";
import projectsData from "./../../projectsData";
import { useHistory } from "react-router-dom";

function WorkPage() {
  const [projects, setProjects] = useState();
  const [projectType, setProjectType] = useState({
    study: true,
    oneDay: true,
    project: true,
  });
  const history = useHistory();

  useEffect(() => {
    let newArr = [];
    if (projectType.study) {
      let studyArr = projectsData.filter((obj) => obj.type === "studyProjects");
      studyArr.forEach((obj) => newArr.push(obj));
    }
    if (projectType.oneDay) {
      let oneDayArr = projectsData.filter(
        (obj) => obj.type === "oneDayChallenge"
      );
      oneDayArr.forEach((obj) => newArr.push(obj));
    }
    if (projectType.project) {
      let oneDayArr = projectsData.filter((obj) => obj.type === "projects");
      oneDayArr.forEach((obj) => newArr.push(obj));
    }
    setProjects(newArr);
  }, [projectType]);

  return (
    <div className="container">
      <div className="head">
        <h1>Work page</h1>
        <div className="button-wrapper">
          <Button
            handleClick={() => {
              setProjects(projectsData.studyProjects);
              setProjectType({
                ...projectType,
                study: !projectType.study,
              });
            }}
            type="transparent"
            text="Study Projects"
          />
          <Button
            handleClick={() => {
              setProjects(projectsData.studyProjects);
              setProjectType({
                ...projectType,
                oneDay: !projectType.oneDay,
              });
            }}
            type="transparent"
            text="One Day Challenge"
          />
          <Button
            handleClick={() => {
              setProjects(projectsData.studyProjects);
              setProjectType({
                ...projectType,
                project: !projectType.project,
              });
            }}
            type="transparent"
            text="Projects"
          />
        </div>
      </div>
      <div className="projects-wrapper">
        {projects &&
          projects.map((project) => {
            return (
              <div
                key={project.id}
                className="project"
                onClick={() =>
                  history.push({
                    pathname: `/projects/${project.id}`,
                    state: { project: project },
                  })
                }
              >
                <img src={project.smallImage} alt={project.smallImageAlt} />
                <h4>{project.title}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WorkPage;
