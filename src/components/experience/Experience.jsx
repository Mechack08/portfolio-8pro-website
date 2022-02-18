import React from "react";
import "./experience.css";
import Articles from "./Articles";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have ?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__fontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <Articles
              logo={BsPatchCheckFill}
              title="HTML"
              detail="Experienced"
            />
            <Articles
              logo={BsPatchCheckFill}
              title="CSS"
              detail="Intermediate"
            />
            <Articles logo={BsPatchCheckFill} title="JS" detail="Experienced" />
            <Articles
              logo={BsPatchCheckFill}
              title="SASS"
              detail="Intermediate"
            />
            <Articles
              logo={BsPatchCheckFill}
              title="REACT"
              detail="Experienced"
            />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <Articles
              logo={BsPatchCheckFill}
              title="MySql"
              detail="experienced"
            />
            <Articles
              logo={BsPatchCheckFill}
              title="MongoDb"
              detail="Intermidiate"
            />
            <Articles
              logo={BsPatchCheckFill}
              title="NodeJs"
              detail="experienced"
            />
            <Articles
              logo={BsPatchCheckFill}
              title="PHP"
              detail="Intermidiate"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
