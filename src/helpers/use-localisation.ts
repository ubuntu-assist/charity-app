import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const useLocalization = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage.split('-')[0])
    } else {
      // Detect user's browser language
      const browserLang = navigator.language
      i18n.changeLanguage(browserLang.split('-')[0])
    }
  }, [i18n])

  return { i18n }
}
