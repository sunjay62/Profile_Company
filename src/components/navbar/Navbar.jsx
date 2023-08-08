import React, { useState, useEffect } from 'react';
import './navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import MaterialUISwitch from '../switch/MaterialUISwitch';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [t, i18n] = useTranslation('global');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollThreshold = 10;

      if (currentScrollPos > prevScrollPos) {
        setIsScrolled(true);
      } else if (currentScrollPos < prevScrollPos && prevScrollPos - currentScrollPos > scrollThreshold) {
        setIsScrolled(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let offset = 0;

      if (id === 'about') {
        offset = 50;
      }
      if (id === 'contact') {
        offset = -400;
      }
      if (id === 'business') {
        offset = -10;
      }
      if (id === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return;
      }

      const offsetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className={isScrolled ? 'navbarItems scrolled' : 'navbarItems'}>
        <h1 className="navbar-logo">PT Remala Abadi</h1>
        <div className="menu-icons" onClick={() => setClicked(!clicked)}>
          {clicked ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <div className="containerMenu">
              <Link className="nav-links" to="/" onClick={() => scrollToSection('home')}>
                <div className="menu-icon-home">
                  <HomeIcon />
                </div>
                <div className="menu-title">{t('translation.navbar.home')}</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="containerMenu">
              <Link className="nav-links" to="/overview">
                <div className="menu-icon">
                  <BusinessIcon />
                </div>
                <div className="menu-title">
                  {t('translation.navbar.about')}
                  <KeyboardArrowDownIcon className="submenu-arrow" />
                </div>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <div className="subMenu">
                    <Link to="/overview">{t('translation.navbar.remala')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/overview">{t('translation.navbar.vision')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/overview">{t('translation.navbar.achieve')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/corporate/structure">{t('translation.navbar.milestone')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/corporate/milestone">{t('translation.navbar.strukturG')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/organization/structure">{t('translation.navbar.strukturO')}</Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="containerMenu">
              <Link className="nav-links" to="/information/career">
                <div className="menu-icon">
                  <InfoOutlinedIcon />
                </div>
                <div className="menu-title">
                  {t('translation.navbar.info')}

                  <KeyboardArrowDownIcon className="submenu-arrow" />
                </div>
              </Link>
              <ul className="dropdown-menu2">
                <li>
                  <div className="subMenu">
                    <Link to="/information/career">{t('translation.navbar.csr')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/information/career">{t('translation.navbar.career')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/information/business">{t('translation.navbar.news')}</Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="containerMenu">
              <Link className="nav-links" to="/information/career">
                <div className="menu-icon">
                  <AccountTreeOutlinedIcon />
                </div>
                <div className="menu-title">
                  {t('translation.navbar.gcg')}
                  <KeyboardArrowDownIcon className="submenu-arrow" />
                </div>
              </Link>
              <ul className="dropdown-menu2">
                <li>
                  <div className="subMenu">
                    <Link to="/information/career">{t('translation.navbar.directors')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/information/career">{t('translation.navbar.commissioners')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/information/business">{t('translation.navbar.ethic')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/information/business">{t('translation.navbar.policy')}</Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="containerMenu">
              <Link className="nav-links" to="/information/career">
                <div className="menu-icon">
                  <CurrencyExchangeIcon />
                </div>
                <div className="menu-title">
                  {t('translation.navbar.investor')}

                  <KeyboardArrowDownIcon className="submenu-arrow" />
                </div>
              </Link>
              <ul className="dropdown-menu2">
                <li>
                  <div className="subMenu">
                    <Link to="/information/career">{t('translation.navbar.prospectus')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/information/career">{t('translation.navbar.disclosure')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/information/business">{t('translation.navbar.rups')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/information/business">{t('translation.navbar.lapyear')}</Link>
                  </div>
                </li>
                <li>
                  <div className="subMenu">
                    <Link to="/information/business">{t('translation.navbar.finance')}</Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="containerMenu">
              <Link className="nav-links" to="#contact" onClick={() => scrollToSection('contact')}>
                <div className="menu-icon">
                  <ContactsOutlinedIcon />
                </div>
                <div className="menu-title"> {t('translation.navbar.contact')}</div>
              </Link>
            </div>
          </li>
        </ul>
        <div className="configure">
          <div className="language">
            <div className="language">
              <button className={`language-button ${selectedLanguage === 'id' ? 'active' : ''}`} onClick={() => handleLanguageChange('id')}>
                ID
              </button>
              <button className={`language-button ${selectedLanguage === 'en' ? 'active' : ''}`} onClick={() => handleLanguageChange('en')}>
                EN
              </button>
            </div>
          </div>
          <div className="darkMode">
            <MaterialUISwitch defaultChecked />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
