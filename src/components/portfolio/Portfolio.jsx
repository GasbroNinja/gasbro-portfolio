import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/BenchmarkEpicode-mock.png';
import IMG2 from '../../assets/Redshift-gaming-mock.png';
import IMG3 from '../../assets/ManArancino-mock.png';
import IMG4 from '../../assets/Weather-app mockup.png';
import IMG5 from '../../assets/RemoteJobsSearch-app.png';
import IMG6 from '../../assets/Epibooks-app.png';

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Benchmark Platform Epicode - Quiz online!",
      github: "https://github.com/GasbroNinja/Benchmark-Platform-epicode",
      demo: "https://benchmarkplatform-epicode.vercel.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Redshift Gaming - Benvenuto nel Gaming a Messina",
      github: "https://github.com/GasbroNinja/capstone-project-alpha",
      demo: "https://github.com/GasbroNinja/capstone-project-alpha",
    },
    {
      id: 3,
      image: IMG3,
      title: "Ma n'Arancino - Vetrina prodotto Messinese",
      github: "https://github.com/GasbroNinja/me-arancino",
      demo: "https://me-arancino.vercel.app/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Weather App - Scopri il Meteo nella tua Città!",
      github: "https://github.com/GasbroNinja/weather-project-d10",
      demo: "https://github.com/GasbroNinja/weather-project-d10",
    },
    {
      id: 5,
      image: IMG5,
      title: "RemoteJobs - trova l'azienda e salvala nei tuoi preferiti!",
      github: "https://github.com/GasbroNinja/d11-hw-app",
      demo: "https://github.com/GasbroNinja/d11-hw-app",
    },
    {
      id: 6,
      image: IMG6,
      title: "EpiBooks - store social sui Libri più di moda del momento",
      github: "https://github.com/GasbroNinja/u3-d7-app",
      demo: "https://github.com/GasbroNinja/u3-d7-app",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} width={250} height={250}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target={demo}>
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )
        }
      </div>
    </section>
  );
}

export default Portfolio