import React from 'react';
import './About.css'

const About = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='about'>
      <h1>About</h1>
      <div className='about-section'>
      <div className='about-left'>
      <p>I am a dedicated self teach front end developer With a solid foundation in HTML, CSS, Tailwind CSS, Sass, React, and JavaScript. Also basic experience with Next JS 14, WordPress, TypeScript and Firebase. I'm actively seeking a paid internship or junior role where I can contribute my skills, learn from experienced professionals, and grow as a developer.</p>
      </div>
      <div className='about-right'> 
        <img  id='project' src='https://i.postimg.cc/cHM4cw2d/work-zone.png'/>
      </div>
      </div>
    </div>
  );
};

export default About;