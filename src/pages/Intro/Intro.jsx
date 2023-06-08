import React from "react";
import "./Intro.css";
import foto from "../../assets/foto-site.png";
import resume from "../../assets/Marconisp.pdf";
import Stack from "./Stack";


import handleScroll from "../../utils/handleScroll";
import { MediaContext } from "../../context/MediaContext";

const Intro = () => {
  const { sections } = React.useContext(MediaContext);

  function download(url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <section
      className="introWrpp"
      id="intro"
      aria-label="introdução">
      <div className="introtitle">
        <h1 className="title">
          Marconi <span className="detail">Pereira</span>
        </h1>
        <span className="subtitle">
          DESENVOLVEDOR <span className="detail">BACK-END/DEVOPS</span>
        </span>
      </div>

      <div className="intro">
        <div className="introInfo">

          <p className="introText">
              Meu nome é Marconi Pereira sou um desenvolvedor Back-end, gosto de criar coisa que facilite a vida das pessoas. 
          </p> 
          <div className="infos">
            <button
              className="infoItem resume"
              onClick={() => download(resume)}>
              Baixar currículo
            </button>
            <a
              className="infoItem"
              onClick={(e) => handleScroll(e, sections.contacts)}>
              Contatos
            </a>
          </div>
        </div>

        <img
          src={foto}
          className="introImg"
        />
      </div>
      <Stack />
    </section>
  );
};

export default Intro;
