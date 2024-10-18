import { createContext, useState } from "react";

export const LanguageContext = createContext()
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar': 'en')
  }
  return (

    <LanguageContext.Provider value={{ language, toggleLanguage }}>
    {children}
    </LanguageContext.Provider>
  )

}
