import React from "react";

const Articles = ({ logo, title, detail }) => {
  const Logo = logo ? logo : "";
  return (
    <article className="experience_details">
      {logo ? <Logo className="experience_details-icon" /> : null}

      <div>
        <h4>{title}</h4>
        <small className="text-light">{detail}</small>
      </div>
    </article>
  );
};

export default Articles;
