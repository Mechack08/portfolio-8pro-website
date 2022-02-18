import React from "react";

const Card = ({ logo, title, content }) => {
  const Logo = logo ? logo : "";
  return (
    <article className="about__card">
      <Logo className="about__icon" />
      <h5>{title}</h5>
      <small>{content}</small>
    </article>
  );
};

export default Card;
