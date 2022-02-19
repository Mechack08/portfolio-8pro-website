import React from "react";
import Article from "./Article";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio-1-quiz.JPG";
import IMG2 from "../../assets/portfolio-6-musique.JPG";
import IMG3 from "../../assets/portfolio-4-Gymn.JPG";
import IMG4 from "../../assets/portfolio-5-Furniture.JPG";
import IMG5 from "../../assets/portfolio-3-Hotel.JPG";
import IMG6 from "../../assets/portfolio-7-mern.JPG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <Article
          title="Marvel Quizz"
          adress="Github"
          imgLink={IMG1}
          demoLink="https://marvel-quiz-d1b6c.web.app/"
          githubLink="https://github.com/Mechack08/marvel-quiz"
        />
        <Article
          title="Music Revolution"
          adress="Github"
          imgLink={IMG2}
          githubLink="https://github.com/Mechack08/musique-show-maquette"
          demoLink="https://mechack08.github.io/musique-show-maquette/"
        />
        <Article
          title="Gymn Pro"
          adress="Github"
          imgLink={IMG3}
          githubLink="https://github.com/Mechack08/gymn-website"
          demoLink="https://mechack08.github.io/gymn-website/"
        />
        <Article
          title="Furniture House"
          adress="Github"
          imgLink={IMG4}
          githubLink="https://github.com/Mechack08/furniture-store"
          demoLink="https://mechack08.github.io/furniture-store/"
        />
        <Article
          title="Grand Hotel"
          adress="Github"
          imgLink={IMG5}
          githubLink="https://github.com/Mechack08/Grand-Hotel"
          demoLink="https://mechack08.github.io/Grand-Hotel/"
        />
        <Article
          title="Social Media"
          adress="Github"
          imgLink={IMG6}
          githubLink="https://github.com/Mechack08/mern-social-network"
          demoLink="#"
        />
      </div>
    </section>
  );
};

export default Portfolio;
