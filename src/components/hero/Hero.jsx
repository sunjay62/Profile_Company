import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hero.css';

const Hero = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <div className={props.cName} data-aos="fade-down">
        <img src={props.heroImg} alt="HeroImg" />

        <div className="hero-text">
          <h1 data-aos="fade-right">{props.title}</h1>
          <p data-aos="fade-left">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
