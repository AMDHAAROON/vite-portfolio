import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; 
import Header from './components/header';
import Hero from './components/hero' ;
import About from './components/About';
import Skill from './components/skill';
import Project from './components/project';
import Resume from './components/resume';
import Footer from './components/footer';
import Contact from './components/contact';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <Header />
    <Hero/>
    <About/>
    <div className="sm: hidden"> <Skill/></div>
    
    <Project/>
    <Resume/>
    <Contact/>
    <Footer/>

    
     {/* <Skill/> */}
    </div>
   
  </React.StrictMode>
);
