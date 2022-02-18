import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Photo editing for your Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo design for your company, Website, etc.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Notebook cover editing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma Website Models design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>AdobXd Website Models design</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Showcase Website development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creation of web pages for advertising</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>completed Web Appliaction development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Completed Blog development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Databases structure</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Text editing, Word, Excel, Power point, Publisher</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Statistics data editing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
