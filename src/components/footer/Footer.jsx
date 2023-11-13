import React from 'react';
import './footer.css';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import IMGLOGO from '../../assets/icon/Logo Gasbro tagliato.png';
const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <h2>GASBRO</h2>
        <img src={IMGLOGO} alt="LogoGasbro" width={300} height={300} />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/gabriele-cuscin%C3%A0/"
          alt="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/GasbroNinja" alt="GitHub">
          <BsGithub />
        </a>
        <a href="https://twitter.com/GasbroDev" alt="X">
          <RiTwitterXFill />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; GASBRO Web Developer. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer