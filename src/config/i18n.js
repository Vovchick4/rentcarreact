import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import ua from '../locales/ua.json';
import { setLocale } from '../config/axios';

i18next.use(initReactI18next).init({
  resources: {
    en,
    ua,
  },
  supportedLngs: ['en', 'ua'],
  lng: 'en',
});

i18next.on('languageChanged', (lng) => {
  setLocale(lng);
});
