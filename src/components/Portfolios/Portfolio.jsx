import React from 'react';
import './Portfolio.css'

const Portfolio = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='portfolio'>
      <div>
        <h1>Project</h1>
      </div>
      <div className='project1'>
       <div className='project-image img-up' style={{backgroundImage: `URL(/src/assets/images/project.png)`}}>
       </div>
       <div className='project-info'>
       <h2>CAR RENTAL</h2>
       <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
       <div className='tech-item'>
       <span>#HTML</span>
       <span>#CSS</span>
       <span>#JS</span>
       </div>
       <div className='code-btn'>
       <button><i class="fa-brands fa-github"></i>Code</button>
       <button>Live Demo</button>
       </div>
       </div>
      </div>
    
      <div className='project1 project2'>
      <div className='project-image img-up' style={{backgroundImage: `URL(/src/assets/images/)`}}>
       </div>
       <div className='project-info'>
       <h2>CAR RENTAL</h2>
       <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
       <div className='tech-item'>
       <span>#HTML</span>
       <span>#CSS</span>
       <span>#JS</span>
       </div>
       <div className='code-btn'>
       <button><i class="fa-brands fa-github"></i>Code</button>
       <button id="contact">Live Demo</button>
       </div>
       </div>
      </div>

    </div>
  );
};

export default Portfolio;