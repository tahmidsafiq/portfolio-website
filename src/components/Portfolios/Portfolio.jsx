import React from 'react';
import './Portfolio.css'

const Portfolio = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='portfolio'>
      <div>
        <h1>Project</h1>
      </div>

      <div className='project1'>
       <div className='project-image img-up' style={{backgroundImage: `URL(https://i.postimg.cc/Y2nr5pDq/tahmid-blog.png)`}}>
       </div>

       <div className='project-info'>
       <h2>Ts Blog</h2>
       <p>"Ts Blog" is a Next.js Blog with Sanity, Tailwind CSS, Shadcn ui, and TypeScript empowers users to create and share dynamic blog posts with ease. Leveraging Next.js for fast rendering, Sanity for content management, Tailwind CSS for stylish UI, and TypeScript for enhanced development experience.</p>
       <div className='tech-item'>
       <span>#Next js 14</span>
       <span>#Tailwind CSS</span>
       <span>#TypeScript</span>
       </div>
       <div className='code-btn'>
       <a href='https://github.com/tahmidsafiq/ts-blog'><button><i class="fa-brands fa-github"></i>Code</button></a>
       <a href='https://tahmid-blog.vercel.app/'><button>Live Demo</button></a>
       </div>
       </div>
       
      </div>
            <div className='project1 project2'>
       <div className='project-image img-up' style={{backgroundImage: `URL(https://i.postimg.cc/Kzfhs1L5/chat-application.png)`}}>
       </div>
       <div className='project-info'>
       <h2>Realtime Chat Application</h2>
       <p>"Realtime Chat Application" is a React.js project with SCSS styling, Firebase authentication, and React Router DOM. Users can securely log in, register, and engage in real-time messaging. Demonstrates proficiency in front-end technologies and authentication implementation.</p>
       <div className='tech-item'>
       <span>#React</span>
       <span>#SCSS</span>
       <span>#Fairbase</span>
       </div>
       <div className='code-btn'>
       <a href='https://github.com/tahmidsafiq/realtime-chat-application'><button><i class="fa-brands fa-github"></i>Code</button></a>
       <a href='ts-realtime-chat-application.vercel.app'><button>Live Demo</button></a>
       </div>
       </div>
      </div>

      <div className='project1'>
      <div className='project-image img-up' style={{backgroundImage: `URL(https://i.postimg.cc/pV0XQTBY/ts-code.png)`}}>
       </div>
       <div className='project-info'>
       <h2>Ts Code Editor</h2>
       <p>"Ts Code Editor" is a minimalist code editor built with React.js and Tailwind CSS. It enables users to write, edit, and preview HTML, CSS, and JavaScript code in real-time, facilitating quick prototyping and experimentation. Ideal for beginners and developers seeking a lightweight coding environment.</p>
       <div className='tech-item'>
       <span>#React Js</span>
       <span>#Tailwind Css</span>
       </div> 
       <div className='code-btn'>
       <a href='https://github.com/tahmidsafiq/ts-code-editor'><button><i class="fa-brands fa-github"></i>Code</button></a>
       <a href='https://ts-code-editor.netlify.app/' id="contact"><button>Live Demo</button></a>
       </div>
       </div>
      </div>

            
      <div className='project1 project2'>
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

    
      <div className='project1'>
      <div className='project-image img-up' style={{backgroundImage: `URL(https://i.postimg.cc/MWD26XB1/portfolio.png)`}}>
       </div>
       <div className='project-info'>
       <h2>My Portfolio Website</h2>
       <p>I am presenting, this is My unique simple portfolio website with CSS and React.js, featuring a dynamic eyes moving logo. Showcase my skills, projects, and achievements elegantly, while offering users a seamless transition between light and dark themes for enhanced viewing experience.</p>
       <div className='tech-item'>
       <span>#CSS</span>
       <span>#React Js</span>
       </div> 
       <div className='code-btn'>
       <a href='https://github.com/tahmidsafiq/portfolio-website'><button><i class="fa-brands fa-github"></i>Code</button></a>
       <a href='https://tahmidsafiq.netlify.app/' id="contact"><button>Live Demo</button></a>
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