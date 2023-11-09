import React from 'react';
import './about.css';
import ME from '../../assets/Photo Profile.jpeg';
import { FaAward } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { PiFolderSimpleLockThin } from "react-icons/pi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h1>About Me</h1>

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
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiTechnoHeart className="about__icon" />
              <h5>Knowledge</h5>
              <small>15 Technologies</small>
            </article>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <PiFolderSimpleLockThin className="about__icon" />
              <h5>Projects</h5>
              <small>20 Completed</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About