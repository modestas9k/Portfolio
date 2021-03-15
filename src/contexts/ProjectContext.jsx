import React, { useState, createContext } from "react";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projectsGroup, setProjectsGroup] = useState("all");
  return (
    <ProjectContext.Provider value={{ projectsGroup, setProjectsGroup }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
