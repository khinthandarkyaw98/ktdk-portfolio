import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-container'id='home'>
      <div className='hero-content'>
        <h2>Crafting Impactful Digital Interactions</h2>
        <p>
          Highly motivated and creative Frontend Developer | Bringing digital visions to life
        </p>
      </div>

      <div className='hero-img'>
        <div>
          <div className='tech-icon'>
            <img src='./assets/images/img01.png' alt="react-logo" />
          </div>
          <img src='./assets/images/img11.png' alt="" />
        </div>

        <div>
          <div className='tech-icon'>
            <img src='./assets/images/img02.png' alt="" />
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/img03.png' alt="" />
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/img04.png' alt="" />
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/img05.png' alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;