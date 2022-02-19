import React from "react";

const Options = ({ title, adress, sendTo, icon }) => {
  const Icon = icon && icon;
  return (
    <article className="contact__option">
      <Icon className="contact__option-icon" />
      <h4>{title}</h4>
      <h5>{adress}</h5>
      <a href={sendTo}>Send a message</a>
    </article>
  );
};

export default Options;
