import { useState, useEffect } from 'react'
import { useLang } from './LangContext'
import LangToggle from './LangToggle'

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setMobileOpen(false)

  const links = [
    { href: '#barbers', label: t('navBarbers') },
    { href: '#reviews', label: t('navReviews') },
    { href: '#info', label: t('navHours') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 bg-dark border-b border-gold/15 ${
        scrolled ? '' : 'border-transparent'
      }`}
      style={{ paddingTop: 'calc(env(safe-area-inset-top) + 1rem)', paddingBottom: '1rem' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo + Lang */}
        <div className="flex items-center gap-5">
          <a href="#" className="no-underline flex items-center">
            <img
              src="/real_barber.jpeg"
              alt="Real Barbershop"
              className="h-12 w-12 object-cover rounded-full"
              style={{ mixBlendMode: 'lighten' }}
            />
          </a>
          <div className="hidden md:block">
            <LangToggle />
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-cream-muted no-underline text-[0.85rem] font-medium tracking-[1px] uppercase transition-colors hover:text-gold">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#booking" className="text-dark no-underline text-[0.85rem] font-semibold tracking-[1px] uppercase bg-gold px-6 py-2.5 transition-all hover:bg-gold-light hover:-translate-y-px">
              {t('navBook')}
            </a>
          </li>
        </ul>

        {/* Mobile: Lang + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <LangToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="bg-transparent border-none cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gold my-1.5 transition-all ${mobileOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gold my-1.5 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gold my-1.5 transition-all ${mobileOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark/[0.97] backdrop-blur-xl p-6 border-b border-gold/15 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close} className="text-cream-muted no-underline text-[0.85rem] font-medium tracking-[1px] uppercase hover:text-gold">
              {l.label}
            </a>
          ))}
          <a href="#booking" onClick={close} className="text-dark no-underline text-[0.85rem] font-semibold tracking-[1px] uppercase bg-gold px-6 py-2.5 text-center">
            {t('navBook')}
          </a>
        </div>
      )}
    </nav>
  )
}
