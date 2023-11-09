/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './mynav.css';
import { HiOutlineHome } from "react-icons/hi";
import { LuUser2 } from "react-icons/lu";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { useState } from 'react';

const MyNav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <HiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <LuUser2 />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experince")}
        className={activeNav === "#experince" ? "active" : ""}
      >
        <BsJournalBookmarkFill />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdOutlineDesignServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TbMessageCircle />
      </a>
    </nav>
  );
}

export default MyNav