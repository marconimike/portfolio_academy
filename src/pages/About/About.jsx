import React from "react";
import Title from "../../components/Title/Title";
import styles from "./About.module.css";

const About = () => {
  return (
    <section
      className={styles.about}
      id="about"
      aria-label="Sobre Mim">
      <Title
        title={"Sobre Mim"}
        theme={"dark"}
      />
      <p className={styles.aboutText}>
        Gosto de desenvolver projetos que realente faça a diferença, facilitar, agilizar e organizar empresas ou pessoas. Sou entusiata da Iot onde desenvolvo um projeto de Róbotica educacional, desenvolvendo projetos aparte de sucata. 
      </p>
    </section>
  );
};

export default About;
