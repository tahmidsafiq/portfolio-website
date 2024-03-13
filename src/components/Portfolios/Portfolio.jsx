import React from 'react';
import './Portfolio.css'

const Portfolio = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='portfolio'>
      <div>
        <h1>Project</h1>
      </div>
      <div className='project1'>
       <div className='project-image img-up' style={{backgroundImage: `URL(https://i.postimg.cc/DzgqnrZN/tstube.png)`}}>
       </div>
       <div className='project-info'>
       <h2>TsTube</h2>
       <p>Ts Tube is a video shareing interface insparaion by youtube. I design home page and individual video page. Here i using html, css, and vanila JavaScript. I lean from this project lot of css3 and Js</p>
       <div className='tech-item'>
       <span>#HTML</span>
       <span>#CSS</span>
       <span>#JS</span>
       </div>
       <div className='code-btn'>
       <a href='https://github.com/tahmidsafiq/video-sharing-platforms-interface'><button><i class="fa-brands fa-github"></i>Code</button></a>
       <a href='https://tstube.netlify.app/'><button>Live Demo</button></a>
       </div>
       </div>
      </div>
    
      <div className='project1 project2'>
      <div className='project-image img-up' style={{backgroundImage: `URL(https://i.postimg.cc/bNPRYDv1/ts-random-quote-creator.png)`}}>
       </div>
       <div className='project-info'>
       <h2>Ts Random Quote</h2>
       <p>Ts Random Quote is a Random Quote Creator. Here when user click NEW QUOTE button for every click get new quote. This project created by using fetch api. From this project learn about fetch api, error handleing and lot of advance JavaScript.</p>
       <div className='tech-item'>
       <span>#HTML</span>
       <span>#CSS</span>
       <span>#JS</span>
       </div>
       <div className='code-btn'>
       <a href='https://github.com/tahmidsafiq/ts-random-quote-creator'><button><i class="fa-brands fa-github"></i>Code</button></a>
       <a href='https://ts-random-quote-creator.netlify.app/' id="contact"><button>Live Demo</button></a>
       </div>
       </div>
      </div>

    </div>
  );
};

export default Portfolio;