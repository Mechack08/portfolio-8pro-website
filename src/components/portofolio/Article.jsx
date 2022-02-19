import React from "react";

const Article = ({ title, adress, imgLink, githubLink, demoLink }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-img">
        <img src={imgLink} alt="clear" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={githubLink} className="btn" target="_blank" rel="noreferrer">
          {adress}
        </a>
        <a
          href={demoLink}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Article;
