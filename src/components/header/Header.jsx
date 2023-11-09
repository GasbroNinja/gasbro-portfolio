import React from 'react';
import './header.css';
import CTA from './CTA'
import ME from '../../assets/personal-avatar-removebg.png'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gabriele Cuscina'</h1>
        <h5 className='text-light'>Web Developer Front-end</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header