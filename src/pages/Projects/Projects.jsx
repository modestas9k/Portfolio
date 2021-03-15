import React, { useState, useEffect, useContext } from "react";
import "./Projects.scss";
import { Button } from "../../components";
import projectsData from "../../projectsData";
import { useHistory } from "react-router-dom";
import { ProjectContext } from "../../contexts/ProjectContext";

function ProjectPage() {
  const [projects, setProjects] = useState();
  const { projectsGroup, setProjectsGroup } = useContext(ProjectContext);
  const history = useHistory();

  useEffect(() => {
    let newArr = [];
    if (projectsGroup === "all") {
      projectsData.forEach((obj) => newArr.push(obj));
    }
    if (projectsGroup !== "all") {
      let filteredData = projectsData.filter(
        (obj) => obj.type === projectsGroup
      );
      filteredData.forEach((obj) => newArr.push(obj));
    }
    setProjects(newArr);
  }, [projectsGroup]);

  return (
    <div className="projects__container">
      <div className="projects__head">
        <h1>Projects</h1>
        <div className="projects__head--buttons">
          <Button
            handleClick={() => setProjectsGroup("all")}
            active={projectsGroup === "all"}
            type="transparent"
            text="All"
          />
          <Button
            handleClick={() => setProjectsGroup("projects")}
            active={projectsGroup === "projects"}
            type="transparent"
            text="Projects"
          />
          <Button
            handleClick={() => setProjectsGroup("oneDayChallenge")}
            active={projectsGroup === "oneDayChallenge"}
            type="transparent"
            text="One Day Challenge"
          />
          <Button
            handleClick={() => setProjectsGroup("studyProjects")}
            active={projectsGroup === "studyProjects"}
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
