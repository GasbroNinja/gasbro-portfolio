import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {


  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      

      emailjs
        .sendForm(
          "service_73ne4xa",
          "template_a2fuyiq",
          form.current,
          "6y1yyf0CyqhFLhOiZ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

        e.target.reset()
    };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gasbrojobs@outlook.it</h5>
            <a
              href="mailto:gasbrojobs@outlook.it"
              target="mailto:gasbrojobs@outlook.it"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Gabriele Cuscina'</h5>
            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAD6DKe0B67TVNqf2COMxptVM7d_fgR3gA80&keywords=gabriele%20cuscin%C3%A0&origin=RICH_QUERY_SUGGESTION&position=0&searchId=54d691ef-71ba-49db-ba23-d5e17c3036a2&sid=tcH&spellCorrectionEnabled=false">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+393407667676</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+393407667676&text=Sono%20interessato%20al%20tuo%20profilo%20Gabriele"
              target="https://api.whatsapp.com/send?phone=+393407667676&text=Sono%20interessato%20al%20tuo%20profilo%20Gabriele"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact