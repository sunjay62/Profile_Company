import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Building from '../../assets/building2.jpg';
import Middle from '../../components/middle/Middle';
import { useTranslation } from 'react-i18next';
import { useDarkMode } from '../../context/darkmode/darkModeContext';

const Home = () => {
  const [t] = useTranslation('global');
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`home ${isDarkMode ? 'darkMode' : ''}`}>
      <Navbar />
      <section id="home">
        <Hero cName="hero" heroImg={Building} title={t('translation.hero.title')} text={t('translation.hero.text')} buttonText="Contact Us" url="#contact" btnClass="show" />
      </section>
      <section>
        <Middle />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
