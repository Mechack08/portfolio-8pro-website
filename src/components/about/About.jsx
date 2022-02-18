import React from "react";
import "./about.css";
import ME from "../../assets/about-8pro.JPG";
import Card from "./Card";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <Card
              logo={FaAward}
              title="Experience"
              content="2+ Years Working"
            />
            <Card logo={FiUsers} title="Clients" content="5+ Worldwide" />
            <Card
              logo={VscFolderLibrary}
              title="Projects"
              content="10+ Completed"
            />
          </div>

          <p>
            Fullstact web developper. I've Finished my studies on december 2020
            in Computer science at Adventist University of Lukanga. I took
            several online courses to improve and deepen my knowledge in
            computer science. Udemy has been one of my favorite online courses
            platform.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
