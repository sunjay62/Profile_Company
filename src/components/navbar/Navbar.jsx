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
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useTranslation } from 'react-i18next';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDarkMode } from '../../context/darkmode/darkModeContext';
import Logo from '../../assets/navbar-logo.png';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 45,
  height: 29,
  padding: 6,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(4px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(14px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 25,
    height: 25,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 12,
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [t, i18n] = useTranslation('global');
  const { isDarkMode, toggleDarkMode } = useDarkMode();

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
      <nav className={`${isScrolled ? 'navbarItems scrolled' : 'navbarItems'} ${isDarkMode ? 'darkMode' : ''} `}>
        <div className="logoContainer">
          <img src={Logo} alt="" className={`navbar-logo ${isDarkMode ? 'darkMode' : ''}`} />
        </div>
        <div className="menu-icons" onClick={() => setClicked(!clicked)}>
          {clicked ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <div className={`containerMenu ${isDarkMode ? 'darkMode' : ''}`}>
              <Link className="nav-links" to="/" onClick={() => scrollToSection('home')}>
                <div className={`menu-icon ${isDarkMode ? 'darkMode' : ''}`}>
                  <HomeIcon />
                </div>
                <div className={`menu-title ${isDarkMode ? 'darkMode' : ''}`}>{t('translation.navbar.home')}</div>
              </Link>
            </div>
          </li>
          <li>
            <div className={`containerMenu ${isDarkMode ? 'darkMode' : ''}`}>
              <Link className="nav-links" to="/overview">
                <div className={`menu-icon ${isDarkMode ? 'darkMode' : ''}`}>
                  <BusinessIcon />
                </div>
                <div className={`menu-title ${isDarkMode ? 'darkMode' : ''}`}>
                  {t('translation.navbar.about')}
                  <KeyboardArrowDownIcon className={`submenu-arrow ${isDarkMode ? 'darkMode' : ''}`} />
                </div>
              </Link>
              <ul className={`dropdown-menu ${isDarkMode ? 'darkMode' : ''}`}>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/overview">{t('translation.navbar.remala')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/overview">{t('translation.navbar.vision')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/overview">{t('translation.navbar.achieve')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/corporate/structure">{t('translation.navbar.milestone')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/corporate/milestone">{t('translation.navbar.strukturG')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/organization/structure">{t('translation.navbar.strukturO')}</Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={`containerMenu ${isDarkMode ? 'darkMode' : ''}`}>
              <Link className="nav-links" to="/information/career">
                <div className={`menu-icon ${isDarkMode ? 'darkMode' : ''}`}>
                  <InfoOutlinedIcon />
                </div>
                <div className={`menu-title ${isDarkMode ? 'darkMode' : ''}`}>
                  {t('translation.navbar.info')}

                  <KeyboardArrowDownIcon className={`submenu-arrow ${isDarkMode ? 'darkMode' : ''}`} />
                </div>
              </Link>
              <ul className={`dropdown-menu2 ${isDarkMode ? 'darkMode' : ''}`}>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/career">{t('translation.navbar.csr')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/career">{t('translation.navbar.career')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/business">{t('translation.navbar.news')}</Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={`containerMenu ${isDarkMode ? 'darkMode' : ''}`}>
              <Link className="nav-links" to="/information/career">
                <div className={`menu-icon ${isDarkMode ? 'darkMode' : ''}`}>
                  <AccountTreeOutlinedIcon />
                </div>
                <div className={`menu-title ${isDarkMode ? 'darkMode' : ''}`}>
                  {t('translation.navbar.gcg')}
                  <KeyboardArrowDownIcon className={`submenu-arrow ${isDarkMode ? 'darkMode' : ''}`} />
                </div>
              </Link>
              <ul className={`dropdown-menu2 ${isDarkMode ? 'darkMode' : ''}`}>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/career">{t('translation.navbar.directors')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/career">{t('translation.navbar.commissioners')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/business">{t('translation.navbar.ethic')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/business">{t('translation.navbar.policy')}</Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={`containerMenu ${isDarkMode ? 'darkMode' : ''}`}>
              <Link className="nav-links" to="/information/career">
                <div className={`menu-icon ${isDarkMode ? 'darkMode' : ''}`}>
                  <CurrencyExchangeIcon />
                </div>
                <div className={`menu-title ${isDarkMode ? 'darkMode' : ''}`}>
                  {t('translation.navbar.investor')}

                  <KeyboardArrowDownIcon className={`submenu-arrow ${isDarkMode ? 'darkMode' : ''}`} />
                </div>
              </Link>
              <ul className={`dropdown-menu2 ${isDarkMode ? 'darkMode' : ''}`}>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/career">{t('translation.navbar.prospectus')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/career">{t('translation.navbar.disclosure')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/business">{t('translation.navbar.rups')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/business">{t('translation.navbar.lapyear')}</Link>
                  </div>
                </li>
                <li>
                  <div className={`subMenu ${isDarkMode ? 'darkMode' : ''}`}>
                    <Link to="/information/business">{t('translation.navbar.finance')}</Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={`containerMenu ${isDarkMode ? 'darkMode' : ''}`}>
              <Link className="nav-links" to="#contact" onClick={() => scrollToSection('contact')}>
                <div className={`menu-icon ${isDarkMode ? 'darkMode' : ''}`}>
                  <ContactsOutlinedIcon />
                </div>
                <div className={`menu-title ${isDarkMode ? 'darkMode' : ''}`}> {t('translation.navbar.contact')}</div>
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
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
              <FormGroup>
                <FormControlLabel control={<MaterialUISwitch checked={isDarkMode} onClick={toggleDarkMode} />} label="" />
              </FormGroup>
            </ThemeProvider>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
