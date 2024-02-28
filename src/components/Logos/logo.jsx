import '../Logos/logo.css';
import React, { useEffect } from 'react';

const Logo = (darkMode) => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX * 100) / window.innerWidth + '%';
      const y = (event.clientY * 100) / window.innerHeight + '%';

      const balls = document.getElementsByClassName('ball');

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = 'translate(-' + x + ',-' + y + ')';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      <div className="eyes">
        <div className="eye">
          <div className="ball"><div className='mini-ball'></div></div>
        </div>
        <div className="eye">
          <div className="ball"><div className='mini-ball'></div></div>
        </div>
      </div>
      <div className="lips"></div>
    </div>
  );
};

export default Logo;
