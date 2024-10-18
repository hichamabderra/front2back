import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
  const text = {
    en: {
      title: "Theme and Language Switcher",
      switchTheme: "Switch Theme",
      switchLang: "Switch language",
    },
    ar: {
      title: "مغير الموضوع واللغة",
      switchTheme: "تبديل الوضع ",
      switchLang: "تبديل  اللغة ",
    },
  };
  return (
    <div className={`app ${theme} ${language}`}>
      <header>
        <h1 className='mb-8 text-4xl'>{text[language].title}</h1>
        <button onClick={toggleTheme} className='bg-lime-700 px-6 py-2 mr-6 rounded-full'>
          {theme === "light"
            ? text[language].switchTheme
            : text[language].switchTheme}
        </button>
        <button className='bg-orange-700 px-6 py-2 mr-6 rounded-full' onClick={toggleLanguage}>{text[language].switchLang}</button>
      </header>
    </div>
  );


}

export default App;
