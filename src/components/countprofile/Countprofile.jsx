import React, { useState, useEffect } from 'react';
import './countprofile.scss';
import { useTranslation } from 'react-i18next';

const Countprofile = () => {
  const [countYears, setCountYears] = useState(0);
  const [countPartners, setCountPartners] = useState(0);
  const [countCompany, setCountCompany] = useState(0);
  const targetCountYears = 16;
  const targetCountPartners = 120;
  const targetCountCompany = 7;
  const interval = 15;
  const [t] = useTranslation('global');

  useEffect(() => {
    const timer = setInterval(() => {
      if (countYears < targetCountYears) {
        setCountYears((prevCount) => prevCount + 1);
      }
      if (countPartners < targetCountPartners) {
        setCountPartners((prevCount) => prevCount + 1);
      }
      if (countCompany < targetCountCompany) {
        setCountCompany((prevCount) => prevCount + 1);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [countYears, countPartners, countCompany]);

  return (
    <div className="countContainer">
      <div className="count">
        <h1>{countYears}+</h1>
        <h3>{t('translation.count.title1')}</h3>
        <p>{t('translation.count.text1')}</p>
      </div>
      <div className="count">
        <h1>{countPartners}+</h1>
        <h3>{t('translation.count.title2')}</h3>
        <p>{t('translation.count.text2')}</p>
      </div>
      <div className="count">
        <h1>{countCompany}</h1>
        <h3>{t('translation.count.title3')}</h3>
        <p>{t('translation.count.text3')}</p>
      </div>
    </div>
  );
};

export default Countprofile;
