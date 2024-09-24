// 
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './Components/locales/en/translate.json';
import kh from './Components/locales/kh/translate.json';

const resources = {
  en: {
    translation: en
  },
  kh: {
    translation: kh
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS
    }
  });

export default i18n;
