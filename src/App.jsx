import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
};

export default App;

{/* 
Author: Khin Thandar Kyaw
Reference: https://youtu.be/yp6tRkS-QBU?si=cqC0MZFQEjcCwF11
Date: 4 Jan 2024
*/}