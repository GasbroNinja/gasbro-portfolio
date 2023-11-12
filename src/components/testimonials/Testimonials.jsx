import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/Micky-avtr.jpeg'
import AVTR2 from '../../assets/Stef-Miceli-avtr.jpeg' 

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from other Developers</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Micky-Dev" />
          </div>
          <h5 className="client__name">Michelangelo Arcangelo Tedesco</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            corrupti odio repellendus excepturi cumque sapiente animi, sed
            tenetur culpa praesentium, possimus nam odit. Illum quaerat eveniet
            pariatur tempora, explicabo minus.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Stef-Dev" />
          </div>
          <h5 className="client__name">Stefano Miceli</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            corrupti odio repellendus excepturi cumque sapiente animi, sed
            tenetur culpa praesentium, possimus nam odit. Illum quaerat eveniet
            pariatur tempora, explicabo minus.
          </small>
        </article>
      </div>
    </section>
  );
}

export default Testimonials