import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import global_en from '../src/assets/translations/en.json';
import global_id from '../src/assets/translations/id.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { DarkModeProvider } from './context/darkmode/darkModeContext';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: global_en,
    },
    id: {
      global: global_id,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
