import { useState } from 'react'
import { useLang } from './LangContext'
import { useInView } from '../hooks/useInView'

const barberData = {
  luis: {
    name: 'LUIS DIAZ',
    handle: '@realbarbershop',
    bookUrl: 'https://booksy.com/en-us/123274_real-barbershop_barber-shop_22788_burtonsville',
    services: {
      en: [
        { name: 'Shape Up', price: '$20', duration: '30 MIN' },
        { name: 'Kids Haircut', price: '$35', duration: '30 MIN' },
        { name: 'Regular Haircut', price: '$40', duration: '30 MIN' },
        { name: 'Skin Fade & Beard', price: '$45', duration: '30 MIN' },
        { name: 'Full Service', price: '$50', duration: '45 MIN' },
        { name: 'Specialty Design Cut', price: '$60', duration: '45 MIN' },
        { name: 'Bald Razor Shave', price: '$45', duration: '30 MIN' },
        { name: 'Hot Towel Facial', price: '$60', duration: '45 MIN' },
      ],
      es: [
        { name: 'Shape Up / Delineado', price: '$20', duration: '30 MIN' },
        { name: 'Corte de Niños', price: '$35', duration: '30 MIN' },
        { name: 'Corte Regular', price: '$40', duration: '30 MIN' },
        { name: 'Skin Fade y Barba', price: '$45', duration: '30 MIN' },
        { name: 'Servicio Completo', price: '$50', duration: '45 MIN' },
        { name: 'Corte con Diseño', price: '$60', duration: '45 MIN' },
        { name: 'Rasurado con Navaja', price: '$45', duration: '30 MIN' },
        { name: 'Facial con Toalla Caliente', price: '$60', duration: '45 MIN' },
      ],
    },
  },
  guillermo: {
    name: 'GUILLERMO GALICIA',
    handle: '@galiciakutz',
    bookUrl: 'https://booksy.com/en-us/529928_galiciakutz_barber-shop_22788_burtonsville',
    services: {
      en: [
        { name: 'Shape Up', price: '$25', duration: '30 MIN' },
        { name: 'Kids Haircut', price: '$40', duration: '30 MIN' },
        { name: 'Regular Haircut', price: '$45', duration: '30 MIN' },
        { name: 'Skin Fade & Beard', price: '$55', duration: '30 MIN' },
        { name: 'Full Service', price: '$65', duration: '45 MIN' },
        { name: 'Specialty Design Cut', price: '$70', duration: '45 MIN' },
        { name: 'Bald Razor Shave', price: '$55', duration: '30 MIN' },
        { name: 'Hot Towel Facial', price: '$65', duration: '45 MIN' },
      ],
      es: [
        { name: 'Shape Up / Delineado', price: '$25', duration: '30 MIN' },
        { name: 'Corte de Niños', price: '$40', duration: '30 MIN' },
        { name: 'Corte Regular', price: '$45', duration: '30 MIN' },
        { name: 'Skin Fade y Barba', price: '$55', duration: '30 MIN' },
        { name: 'Servicio Completo', price: '$65', duration: '45 MIN' },
        { name: 'Corte con Diseño', price: '$70', duration: '45 MIN' },
        { name: 'Rasurado con Navaja', price: '$55', duration: '30 MIN' },
        { name: 'Facial con Toalla Caliente', price: '$65', duration: '45 MIN' },
      ],
    },
  },
}

function BarberServicePanel({ barber, lang, bookLabel, delay = 0 }) {
  const [open, setOpen] = useState(false)
  const [ref, visible] = useInView()
  const services = barber.services[lang] || barber.services.en
  const preview = services.slice(0, 3)
  const rest = services.slice(3)

  return (
    <div
      ref={ref}
      className={`bg-dark-200 border border-cream/[0.06] transition-all duration-500 hover:border-gold/20 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Barber header */}
      <div className="px-8 pt-8 pb-6 border-b border-cream/[0.06]">
        <h3 className="font-display text-2xl tracking-[2px] mb-1">{barber.name}</h3>
        <span className="text-xs text-gold tracking-[1px]">{barber.handle}</span>
      </div>

      {/* Service rows */}
      <div className="divide-y divide-cream/[0.04]">
        {preview.map((svc, i) => (
          <ServiceRow key={i} svc={svc} />
        ))}

        {/* Expandable rows */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="divide-y divide-cream/[0.04]">
            {rest.map((svc, i) => (
              <ServiceRow key={i} svc={svc} />
            ))}
          </div>
        </div>
      </div>

      {/* Toggle + Book */}
      <div className="px-8 py-6 flex flex-col gap-3">
        <button
          onClick={() => setOpen(!open)}
          className="w-full py-3 border border-cream/20 text-cream/60 text-xs tracking-[2px] uppercase hover:border-cream/40 hover:text-cream/90 transition-all"
        >
          {open
            ? lang === 'es' ? 'VER MENOS −' : 'SHOW LESS −'
            : lang === 'es' ? `VER ${rest.length} SERVICIOS MÁS +` : `SEE ${rest.length} MORE SERVICES +`}
        </button>
        <a
          href={barber.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3.5 bg-gold text-dark font-display text-sm tracking-[2px] text-center no-underline transition-all hover:bg-gold/90"
        >
          {bookLabel} →
        </a>
      </div>
    </div>
  )
}

function ServiceRow({ svc }) {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <div>
        <span className="text-sm tracking-[0.5px] text-cream/90">{svc.name}</span>
        <span className="ml-3 text-[0.68rem] text-cream-faded tracking-[1px] uppercase">{svc.duration}</span>
      </div>
      <span className="font-display text-lg text-gold">{svc.price}</span>
    </div>
  )
}

export default function Services() {
  const { t, lang } = useLang()
  const [headerRef, headerVisible] = useInView()

  return (
    <section id="services" className="py-24 bg-dark-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-xs tracking-[3px] uppercase text-gold font-medium mb-4 block">{t('servicesLabel')}</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-[1px]">{t('servicesTitle')}</h2>
          <p className="mt-5 text-sm text-cream-muted max-w-md mx-auto leading-relaxed">
            {lang === 'es'
              ? 'Cada barbero fija sus propios precios. Elige tu barbero para ver su menú exacto.'
              : 'Each barber sets their own rates. Choose your barber to see their exact menu.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          <BarberServicePanel
            barber={barberData.luis}
            lang={lang}
            bookLabel={t('bookWithLuis')}
            delay={0}
          />
          <BarberServicePanel
            barber={barberData.guillermo}
            lang={lang}
            bookLabel={t('bookWithGuillermo')}
            delay={100}
          />
        </div>
      </div>
    </section>
  )
}
