import React, { useState, useEffect } from "react";
import "./Projects.scss";
import { Button } from "../../components";
import projectsData from "../../projectsData";
import { useHistory } from "react-router-dom";

function ProjectPage() {
  const [projects, setProjects] = useState();
  const [projectType, setProjectType] = useState({
    study: true,
    oneDay: true,
    project: true,
  });
  const history = useHistory();

  useEffect(() => {
    let newArr = [];
    if (projectType.project) {
      let oneDayArr = projectsData.filter((obj) => obj.type === "projects");
      oneDayArr.forEach((obj) => newArr.push(obj));
    }
    if (projectType.oneDay) {
      let oneDayArr = projectsData.filter(
        (obj) => obj.type === "oneDayChallenge"
      );
      oneDayArr.forEach((obj) => newArr.push(obj));
    }
    if (projectType.study) {
      let studyArr = projectsData.filter((obj) => obj.type === "studyProjects");
      studyArr.forEach((obj) => newArr.push(obj));
    }
    setProjects(newArr);
  }, [projectType]);

  return (
    <div className="projects__container">
      <div className="projects__head">
        <h1>Projects</h1>
        <div className="projects__head--buttons">
          <Button
            handleClick={() => {
              setProjects(projectsData.studyProjects);
              setProjectType({
                ...projectType,
                project: !projectType.project,
              });
            }}
            active={projectType.project}
            type="transparent"
            text="Projects"
          />
          <Button
            handleClick={() => {
              setProjects(projectsData.studyProjects);
              setProjectType({
                ...projectType,
                oneDay: !projectType.oneDay,
              });
            }}
            active={projectType.oneDay}
            type="transparent"
            text="One Day Challenge"
          />
          <Button
            handleClick={() => {
              setProjects(projectsData.studyProjects);
              setProjectType({
                ...projectType,
                study: !projectType.study,
              });
            }}
            active={projectType.study}
            type="transparent"
            text="Study Projects"
          />
        </div>
      </div>
      <div className="projects__main">
        {projects &&
          projects.map((project) => {
            return (
              <div
                key={project.id}
                className="projects__main--card"
                onClick={() =>
                  history.push({
                    pathname: `/projects/${project.id}`,
                    state: { project: project },
                  })
                }
              >
                <img src={project.smallImage} alt={project.smallImageAlt} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProjectPage;
