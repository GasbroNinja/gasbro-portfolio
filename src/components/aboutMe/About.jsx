import React from 'react';
import './about.css';
import ME from '../../assets/';
import { FaAward } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { MdOutlineFolderCopy } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutimage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about__card">
              <GiTechnoHeart className="about__icon" />
              <h5>Knowledge</h5>
              <small>10 Technologies</small>
            </article>

            <article className="about__card">
              <MdOutlineFolderCopy className="about__icon" />
              <h5>Projects</h5>
              <small>20 Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quasi quaerat vel rem repudiandae suscipit, praesentium molestiae
            recusandae doloremque qui voluptas corrupti, placeat corporis
            aliquid, tempora in explicabo iste ab.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About