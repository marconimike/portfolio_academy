import React from "react";
import "./Projects.css";
import Slide from "../../components/Slide/Slide";
import Title from "../../components/Title/Title";

const Projects = () => {
  return (
    <section
      className="projects"
      id="projects"
      aria-label="projetos">
      <Title
        title={"Projetos"}
        subTitle={"Principais projetos"}
        theme={"dark"}
      />

      <div className="projectsWrpp">
        <Slide />
      </div>
      <a
        href="https://github.com/marconimike"
        target="_blank"
        className="more">
        VER MAIS
      </a>
    </section>
  );
};

export default Projects;
