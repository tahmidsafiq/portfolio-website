import React, { useState } from 'react';
import '../Headers/header.css';
import pdfFile from '/tahmid-safiq-resume.pdf';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [imageSrc, setImageSrc] = useState('https://i.postimg.cc/nrpM80Bs/profile.jpg');

  const handleImageClick = () => {
    const newImageSrc = imageSrc === 'https://i.postimg.cc/nrpM80Bs/profile.jpg' ? 'https://i.postimg.cc/xTjqtp9h/color-Full.png' : 'https://i.postimg.cc/nrpM80Bs/profile.jpg';
    setImageSrc(newImageSrc);
  };

  const handleDownloadCV = () => {

    const link = document.createElement('a');
    link.href = pdfFile;
    
    link.setAttribute('download', 'tahmid-safiq-resume.pdf');
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
  };

  return (
    <header>
      <div className='profile-pic'>
        <img id='phofileImg' src={imageSrc} alt="Profile" />
      </div>
      <div className='profile-info'>
        <h6 id='experience'>Hi, I'm</h6>
        <h1>Tahmid Safiq</h1>
        <h5>Front-end <span style={{cursor:'pointer'}} onClick={handleImageClick}>developer</span></h5>
        <p>
          Now, my life is looking like this website black & white. <br />
          And Only <span style={{cursor:'pointer'}} onClick={handleImageClick}>developer</span> can make it colorful.
        </p>
        <div className='mobile-btn'>
          <button className='cv-btn' onClick={handleDownloadCV}>Download CV</button>
          <a href='https://wa.me/8801793372099' className='hire-btn'><i className="fa-solid fa-laptop-code"></i>Hire Me</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

