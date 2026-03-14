import { useLang } from './LangContext'

export default function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="flex items-center bg-cream/[0.06] border border-cream/10 overflow-hidden h-[34px]" role="group" aria-label="Language">
      <button
        onClick={() => setLang('en')}
        className={`px-3.5 h-full text-[0.72rem] font-semibold tracking-[1.5px] uppercase transition-all duration-300 border-none cursor-pointer font-body ${
          lang === 'en' ? 'bg-gold text-dark' : 'bg-transparent text-cream-faded hover:text-cream'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => setLang('es')}
        className={`px-3.5 h-full text-[0.72rem] font-semibold tracking-[1.5px] uppercase transition-all duration-300 border-none cursor-pointer font-body ${
          lang === 'es' ? 'bg-gold text-dark' : 'bg-transparent text-cream-faded hover:text-cream'
        }`}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
    </div>
  )
}
