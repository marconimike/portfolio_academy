import React from "react";
import "./Contacts.css";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import gmail from "../../assets/gmail.svg";
import Title from "../../components/Title/Title";

const Contacts = () => {
  return (
    <section
      className="contactsWrpp"
      id="contacts"
      aria-label="contatos">
      <div className="contacts">
        <Title
          title={"Contatos"}
          subTitle={"Redes sociais"}
        />
        <ul className="contactList">
          <a
            href="https://github.com/marconimike"
            target="_blank"
            className="github">
            <img src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/marconimike/"
            target="_blank"
            className="linkedin">
            <img src={linkedin} />
          </a>
          <a
            href="mailto:marconiaula@gmail.com?subject=Contato programação&body=Olá Marconi, gostaria de iniciar uma conversa."
            target="_blank"
            className="gmail">
            <img src={gmail} />
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
