import React from 'react';
import { useState } from 'react';
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';
import { BiBookOpen } from 'react-icons/bi';
import { FaRegHandshake } from 'react-icons/fa'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === "#experience" ? 'active' : ''}><BiBookOpen /></a>
      <a href="#services" onClick={() => setActiveNav('#services')}className={activeNav === "#services" ? 'active' : ''}><FaRegHandshake /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === "#contact" ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav;