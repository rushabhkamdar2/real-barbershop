import { useState, useEffect } from 'react'
import { useLang } from './LangContext'

export default function FloatingCTA() {
  const { t } = useLang()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[999] p-3 bg-dark/95 backdrop-blur-xl border-t border-gold/20 md:hidden transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="#booking"
        className="block w-full py-3.5 bg-gold text-dark font-display text-lg tracking-[2px] text-center no-underline"
      >
        {t('floatingCta')}
      </a>
    </div>
  )
}
