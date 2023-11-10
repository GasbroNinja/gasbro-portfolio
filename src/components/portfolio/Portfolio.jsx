import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/BenchmarkEpicode-mock.png';
import IMG2 from '../../assets/CRUD-Agenda-mock.png';
import IMG3 from '../../assets/Epibooks-app.png';
import IMG4 from '../../assets/Redshift-gaming-mock.png';
import IMG5 from '../../assets/RemoteJobsSearch-app.png';
import IMG6 from '../../assets/Weather-app mockup.png';
import IMG7 from '../../assets/';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio Item Title</h3>
          <a href="https://github.com" className="btn">
            Github
          </a>
          <a href="https://github.com" className="btn btn-primary" target='_blan'>
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
}

export default Portfolio