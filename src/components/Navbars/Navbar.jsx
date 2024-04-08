
import React, { useEffect } from 'react';
import '../Navbars/nav.css';
import Logo from '../Logos/logo';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    const menuButton = document.getElementById("menu");
    const links = document.querySelectorAll('.linkbar');

    const handleMenuButtonClick = () => {
      menuButton.classList.toggle("change");
      mobileMenu.classList.toggle("show-menu");
    };

    const handleLinkClick = (elementId) => {
      scroll.scrollToElement(document.getElementById(elementId), { behavior: 'smooth' });
    };

    menuButton.addEventListener('click', handleMenuButtonClick);

    links.forEach((link) => {
      link.addEventListener('click', () => handleLinkClick(link.getAttribute('data-scroll-to')));
    });

    return () => {
      menuButton.removeEventListener('click', handleMenuButtonClick);
      links.forEach((link) => {
        link.removeEventListener('click', () => handleLinkClick(link.getAttribute('data-scroll-to')));
      });
    };
  }, []);

  return (
    <nav className={darkMode ? "dark-mode" : "light-mode"}>
      <div className='logo'>
        <span className='logo-img'><Logo darkMode={darkMode} toggleDarkMode={toggleDarkMode} /></span>
        <h1>Tahmid Safiq</h1>
      </div>
      <div className='nav-link'>
        <Link data-scroll-to="experience" activeClass='active' to="experience" spy={true} smooth={true} offset={-550} duration={500} className='linkbar'>Home</Link>
        <Link data-scroll-to="about" activeClass='active' to="about" spy={true} smooth={true} offset={-15} duration={500} className='linkbar'>About</Link>
        <Link data-scroll-to="portfolio" activeClass='active' to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className='linkbar'>Project</Link>
        <Link data-scroll-to="contact" activeClass='active' to="contact" spy={true} smooth={true} offset={950} duration={500} className='linkbar'>Contact</Link>
      </div>
      <span className='darkmodebtn' onClick={toggleDarkMode}>
        {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
      </span>

      <div className="menu" id='menu' onClick={() => {}}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className='mobile-menu' id='mobile-menu'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#experience' onClick={() => handleLinkClick('experience')}>Experience</a></li>
          <li><a href='#about' onClick={() => handleLinkClick('about')}>About</a></li>
          <li><a href='#project' onClick={() => handleLinkClick('portfolio')}>Project</a></li>
          <li><a href='#contact' onClick={() => handleLinkClick('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
