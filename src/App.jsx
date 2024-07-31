import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import '../src/App.css';
import HomePage from './pages/HomePage/HomePage';
import yonatanBg from '../src/assets/images/yonatan2.jpg';
import Header from './components/common/Header/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import Project from './components/layout/Project/Project';
import Projects from './pages/Projects/Projects';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

function App() {
  return (
    <div className="App d-flex">
      <div className='sidebar'>
      <LandingPage className = 'sidebar'  />
      </div>
      <div className="main">
        <div className="homepage-bg">
          <img className="yonatan-bg" src={yonatanBg} alt="yonatan"/>
        </div>
        <HomePage />
        <Header className = 'right-side'  ></Header>
        <AboutMe className='right-side'></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
