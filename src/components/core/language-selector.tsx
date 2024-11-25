import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CONTINENTS } from '../../helpers/constants'

const LanguageSelector = ({
  selectedContinent,
  setSelectedContinent,
  onClose,
  isMobile = false,
}: any) => {
  const { i18n } = useTranslation()

  const handleLanguageSelect = (countryCode: any, languageCode: any) => {
    i18n.changeLanguage(languageCode.split('-')[0])
    localStorage.setItem('country', countryCode)
    localStorage.setItem('language', languageCode)
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      className={`${
        isMobile
          ? 'w-full'
          : 'absolute top-full right-0 w-72 bg-white shadow-lg rounded-lg mt-1'
      } overflow-hidden`}
    >
      {Object.entries(CONTINENTS).map(([continent, countries]) => (
        <div key={continent} className='border-b last:border-b-0'>
          <button
            className='w-full px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-50'
            onClick={() =>
              setSelectedContinent(
                selectedContinent === continent ? null : continent
              )
            }
          >
            {continent}
          </button>
          <AnimatePresence>
            {selectedContinent === continent && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className='overflow-hidden'
              >
                {countries.map((country) => (
                  <div key={country.country} className='bg-gray-50 px-4 py-2'>
                    <div className='flex items-center text-sm text-gray-900 mb-1'>
                      <span className='mr-2'>{country.flag}</span>
                      {country.country}
                    </div>
                    <div className='ml-6 space-y-1'>
                      {country.languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() =>
                            handleLanguageSelect(country.country, language.code)
                          }
                          className='block w-full text-left text-sm text-gray-600 hover:text-blue-700 py-1'
                        >
                          {language.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  )
}

export default LanguageSelector
