import React from 'react';
import './Footer.css';

const Footer = ({ darkMode, toggleDarkMode }) => {
  const topBtn = () =>{
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
  }
  return (
    
    <div className='footer'>
      <h3>Copyright © 2024. All rights are reserved</h3>
      <button  onClick={topBtn}><i class="fa-solid fa-up-long"></i></button>
    </div>
  );
};

export default Footer;