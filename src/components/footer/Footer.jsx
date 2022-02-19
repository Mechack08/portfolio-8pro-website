import React from "react";
import "./footer.css";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        8pro
      </a>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#experience">Experience</a>
        </li>
        <li>
          <a href="/#services">Services</a>
        </li>
        <li>
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/MakasiMechack">
          <IoLogoTwitter />
        </a>
        <a href="https://www.linkedin.com/in/mechack-makasi-172418126/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/mechackmakasi/">
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 8pro webdev. All reights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
