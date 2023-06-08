import React from "react";
import "./Stack.css";
import { ReactComponent as Js } from "../../assets/js.svg";
import { ReactComponent as Django } from "../../assets/django.svg";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Mongodb } from "../../assets/mongodb.svg";
import { ReactComponent as Reactjs } from "../../assets/reactjs.svg";
import { ReactComponent as Ts } from "../../assets/ts.svg";
import { ReactComponent as Python } from "../../assets/python.svg";
import { ReactComponent as Nodejs } from "../../assets/nodejs.svg";
import { ReactComponent as Mysql } from "../../assets/mysql.svg";

const Stack = () => {
  const stacks = [
    { logo: <Js />, title: "JavaScript" },
    { logo: <Ts />, title: "TypeScript" },
    { logo: <Python />, title: "Python" },
    { logo: <Html />, title: "HTML5" },
    { logo: <Css />, title: "CSS3" },
    { logo: <Reactjs />, title: "React.js" },
    { logo: <Nodejs />, title: "Nodejs" },
    { logo: <Django />, title: "Django" },
    { logo: <Mysql />, title: "Mysql" },
    { logo: <Mongodb />, title: "MongoDB" },

  ];
  let count = 0.5;

  return (
    <section
      id="stack"
      className="stacks">
      <p className="stackText">DEV</p>
      <ul className="stackList">
        {stacks.map((item, i) => {
          return (
            <li
              key={i}
              style={{ animationDelay: `${(count += 0.2)}s` }}>
              {item.logo} <span>{item.title}</span>
            </li>
          );
        })} 
      </ul> 

    </section>
  );
};

export default Stack;
