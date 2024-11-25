import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            about: 'About',
            programs: 'Programs',
            getInvolved: 'Get Involved',
            impact: 'Impact',
            donate: 'Donate',
            selectRegion: 'Select Region',
          },
        },
      },
      fr: {
        translation: {
          nav: {
            about: 'À propos',
            programs: 'Programmes',
            getInvolved: "S'impliquer",
            impact: 'Impact',
            donate: 'Faire un don',
            selectRegion: 'Sélectionner la région',
          },
        },
      },
      // Add more languages as needed
    },
  })

export default i18n
