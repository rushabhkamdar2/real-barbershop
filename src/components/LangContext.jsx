import { createContext, useContext, useState, useEffect } from 'react'
import translations from '../i18n'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof navigator !== 'undefined' && navigator.language?.startsWith('es')) return 'es'
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'es'
      ? 'Real Barbershop | Cortes Premium en Burtonsville, MD'
      : 'Real Barbershop | Premium Cuts in Burtonsville, MD'
  }, [lang])

  const t = (key) => translations[lang]?.[key] || translations.en[key] || key

  const toggle = () => setLang(prev => prev === 'en' ? 'es' : 'en')

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
