import React, { useState } from "react";
import Header from "./components/Headers/header";
import Navbar from "./components/Navbars/Navbar";
import Experience from "./components/Experiences/Experience";
import Portfolio from "./components/Portfolios/Portfolio";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footers/Footer";
import About from "./components/Abouts/About";
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Experience darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Portfolio  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Contact  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Footer  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
}

export default App;
