import React from 'react';

import {BsLinkedin} from 'react-icons/bs';
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const HeaderSocials = () => {

  return (
    <div className="header__socials">

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
  );
}

export default HeaderSocials