import { useState } from 'react'
import { useLang } from './LangContext'
import { useInView } from '../hooks/useInView'

const barberData = [
  {
    name: 'LUIS DIAZ',
    handle: '@realbarbershop',
    rating: null,
    reviewCount: null,
    icon: '💈',
    gradientDir: 'right',
    instagramUrl: 'https://www.instagram.com/realbarbershop',
    bookUrl: 'https://booksy.com/en-us/123274_real-barbershop_barber-shop_22788_burtonsville',
    bioKey: 'luisBio',
    bookKey: 'bookWithLuis',
    tagKeys: ['Fades', 'tagBeardWork', 'tagKidsCuts', 'tagHotTowel'],
    services: {
      en: [
        { name: 'Shape Up', price: '$20', duration: '30 MIN' },
        { name: "Kids Haircut", price: '$35', duration: '30 MIN' },
        { name: 'Regular Haircut (No Beard)', price: '$40', duration: '30 MIN' },
        { name: 'Skin Fade & Beard / Razor Shave', price: '$45', duration: '30 MIN' },
        { name: 'Bald Razor Shave', price: '$45', duration: '30 MIN' },
        { name: 'Full Service', price: '$50', duration: '45 MIN' },
        { name: 'Specialty Design Cut', price: '$60', duration: '45 MIN' },
        { name: 'Hot Towel Facial + Skin Maintenance', price: '$60', duration: '45 MIN' },
      ],
      es: [
        { name: 'Shape Up / Delineado', price: '$20', duration: '30 MIN' },
        { name: 'Corte de Niños', price: '$35', duration: '30 MIN' },
        { name: 'Corte Regular (Sin Barba)', price: '$40', duration: '30 MIN' },
        { name: 'Skin Fade y Barba / Navaja', price: '$45', duration: '30 MIN' },
        { name: 'Rasurado al Cero', price: '$45', duration: '30 MIN' },
        { name: 'Servicio Completo', price: '$50', duration: '45 MIN' },
        { name: 'Corte con Diseño', price: '$60', duration: '45 MIN' },
        { name: 'Facial con Toalla Caliente + Piel', price: '$60', duration: '45 MIN' },
      ],
    },
  },
  {
    name: 'DEANDRE CERON',
    handle: '@_deandrethebarber',
    rating: null,
    reviewCount: null,
    icon: '✂️',
    gradientDir: 'left',
    image: '/deandre.jpeg',
    instagramUrl: 'https://www.instagram.com/_deandrethebarber',
    bookUrl: 'https://app.thecut.co/barbers/Deandre-Ceron',
    bioKey: 'deandreBio',
    bookKey: 'bookWithDeandre',
    tagKeys: ['Fades', 'tagBeardWork', 'tagKidsCuts'],
    services: {
      en: [
        { name: 'Haircut', price: '$40', duration: '45 MIN' },
        { name: 'Haircut + Beard', price: '$45', duration: '45 MIN' },
        { name: 'Shape Up', price: '$20', duration: '25 MIN' },
        { name: "Kid's Cut", price: '$30', duration: '45 MIN' },
      ],
      es: [
        { name: 'Corte', price: '$40', duration: '45 MIN' },
        { name: 'Corte + Barba', price: '$45', duration: '45 MIN' },
        { name: 'Shape Up / Delineado', price: '$20', duration: '25 MIN' },
        { name: 'Corte de Niños', price: '$30', duration: '45 MIN' },
      ],
    },
  },
  {
    name: 'STUEY',
    handle: '@stueycutz',
    rating: null,
    reviewCount: null,
    icon: '🎨',
    gradientDir: 'right',
    image: '/stuey.jpeg',
    instagramUrl: 'https://www.instagram.com/stueycutz/',
    bookUrl: 'https://stueycutz.square.site/',
    bioKey: 'stueyBio',
    bookKey: 'bookWithStuey',
    tagKeys: ['tagScissorWork', 'tagHairColoring', 'tagHaircutBeard', 'Fades'],
    services: {
      en: [
        { name: 'Any Haircut (No Beard)', price: '$40', duration: '30 MIN' },
        { name: 'Haircut + Beard', price: '$45', duration: '45 MIN' },
      ],
      es: [
        { name: 'Cualquier Corte (Sin Barba)', price: '$40', duration: '30 MIN' },
        { name: 'Corte + Barba', price: '$45', duration: '45 MIN' },
      ],
    },
  },
  {
    name: 'MELVIN SORIANO',
    handle: '@thebreal6',
    rating: null,
    reviewCount: null,
    icon: '💈',
    gradientDir: 'right',
    instagramUrl: 'https://www.instagram.com/thebreal6',
    bookUrl: 'https://www.instagram.com/thebreal6',
    bioKey: 'melvinBio',
    bookKey: 'bookWithMelvin',
    tagKeys: ['Fades', 'tagBeardWork', 'tagKidsCuts'],
    dmOnly: true,
  },
  {
    name: 'GUILLERMO GALICIA',
    handle: '@galiciakutz',
    rating: null,
    reviewCount: null,
    icon: '✂️',
    gradientDir: 'left',
    image: '/galicia.jpeg',
    instagramUrl: 'https://www.instagram.com/galiciakutz',
    bookUrl: 'https://booksy.com/en-us/529928_galiciakutz_barber-shop_22788_burtonsville',
    bioKey: 'guillermoBio',
    bookKey: 'bookWithGuillermo',
    tagKeys: ['tagPrecisionCuts', 'tagBeardSculpt', 'tagLineUps', 'tagKids'],
    services: {
      en: [
        { name: 'Haircut', price: '$40', duration: '30 MIN' },
        { name: 'Haircut + Beard', price: '$50', duration: '45 MIN' },
        { name: "Kid's Haircut", price: '$35', duration: '30 MIN' },
        { name: 'Line Up', price: '$25+', duration: '30 MIN' },
      ],
      es: [
        { name: 'Corte', price: '$40', duration: '30 MIN' },
        { name: 'Corte + Barba', price: '$50', duration: '45 MIN' },
        { name: 'Corte de Niños', price: '$35', duration: '30 MIN' },
        { name: 'Delineado', price: '$25+', duration: '30 MIN' },
      ],
    },
  },
]

function BarberCard({ barber, delay = 0 }) {
  const { t, lang } = useLang()
  const [ref, visible] = useInView()
  const [pricingOpen, setPricingOpen] = useState(false)

  const services = barber.services ? (barber.services[lang] || barber.services.en) : []
  const tags = barber.tagKeys.map(k => hardcodedTags[k] ?? t(k))

  return (
    <div
      ref={ref}
      className={`w-full flex flex-col bg-dark-200 border border-cream/[0.06] overflow-hidden transition-all duration-500 hover:border-gold/30 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Visual header */}
      <div className={`h-64 relative overflow-hidden flex items-center justify-center ${
        barber.gradientDir === 'right'
          ? 'bg-gradient-to-br from-dark-300 to-dark-100'
          : 'bg-gradient-to-br from-dark-100 to-dark-300'
      }`}>
        {barber.image
          ? <img src={barber.image} alt={barber.name} className="w-full h-full object-cover object-top" />
          : <span className="text-6xl opacity-40">{barber.icon}</span>
        }
        {barber.rating && (
          <div className="absolute top-4 right-4 bg-dark/85 backdrop-blur-lg px-3.5 py-2 flex items-center gap-1.5 text-sm font-semibold">
            <span className="text-gold">★</span> {barber.rating} · {barber.reviewCount} {t('reviews')}
          </div>
        )}
      </div>

      {/* Bio */}
      <div className="p-7 pb-5">
        <h3 className="font-display text-3xl tracking-[1px] mb-1">{barber.name}</h3>
        <span className="text-sm text-gold mb-4 block">{barber.handle}</span>
        <p className="text-[0.9rem] text-cream-muted leading-relaxed mb-5">{t(barber.bioKey)}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gold/10 text-gold text-[0.72rem] tracking-[1px] uppercase">{tag}</span>
          ))}
        </div>
        {barber.instagramUrl && (
          <a
            href={barber.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cream/50 text-xs tracking-[1px] no-underline hover:text-gold transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            {barber.handle}
          </a>
        )}
      </div>

      {/* Pricing toggle or DM note */}
      <div className="border-t border-cream/[0.06] mt-auto">
        {barber.dmOnly ? (
          <div className="px-7 py-4 flex items-center gap-2 text-cream/50 text-xs tracking-[1px]">
            <span className="text-gold">✦</span>
            {lang === 'es' ? 'Envía un DM para precios y disponibilidad' : 'DM for pricing & availability'}
          </div>
        ) : (
          <>
            <button
              onClick={() => setPricingOpen(!pricingOpen)}
              className="w-full flex items-center justify-between px-7 py-4 text-left hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-xs tracking-[2px] uppercase text-cream/60">
                {lang === 'es' ? 'Ver Precios' : 'View Pricing'}
              </span>
              <span className={`text-gold text-lg transition-transform duration-300 ${pricingOpen ? 'rotate-45' : ''}`}>+</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${pricingOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="divide-y divide-cream/[0.04] border-t border-cream/[0.06]">
                {services.map((svc, i) => (
                  <div key={i} className="flex items-center justify-between px-7 py-3.5">
                    <div>
                      <span className="text-sm text-cream/90">{svc.name}</span>
                      <span className="ml-3 text-[0.68rem] text-cream-faded tracking-[1px] uppercase">{svc.duration}</span>
                    </div>
                    <span className="font-display text-lg text-gold">{svc.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Book CTA */}
      <div className="px-7 py-6 flex flex-col gap-3">
        <a
          href={barber.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 bg-gold text-dark font-display text-base tracking-[2px] text-center no-underline transition-all hover:bg-gold/90"
        >
          {t(barber.bookKey)} →
        </a>
        {barber.instagramUrl && (
          <a
            href={barber.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3.5 border border-cream/20 text-cream/70 font-display text-sm tracking-[2px] text-center no-underline transition-all hover:border-gold/50 hover:text-gold"
          >
            SEE MY WORK →
          </a>
        )}
      </div>
    </div>
  )
}

function WalkInNotice() {
  const { t, lang } = useLang()
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      className={`mt-10 p-6 border border-dashed border-gold/25 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <p className="text-[0.9rem] text-cream-muted">
        {t('walkIn')} <strong className="text-gold">{t('walkInBold')}</strong>
        <br />
        <span className="text-cream-faded text-xs tracking-[1px] mt-1 block">15456 Old Columbia Pike, Burtonsville, MD</span>
      </p>
    </div>
  )
}

// Non-translated tag values (literal strings, not i18n keys)
const hardcodedTags = { Fades: 'Fades', 'Scissor Work': 'Scissor Work', 'Hair Coloring': 'Hair Coloring', 'Haircut & Beard': 'Haircut & Beard' }

export default function Barbers() {
  const { t } = useLang()
  const [headerRef, headerVisible] = useInView()

  return (
    <section id="barbers" className="py-24 bg-dark relative">
      {/* Keep #booking anchor valid for FloatingCTA + other links */}
      <span id="booking" className="absolute -top-20" aria-hidden="true" />

      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(200,162,69,0.05), transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-xs tracking-[3px] uppercase text-gold font-medium mb-4 block">{t('bookingLabel')}</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-[1px]">{t('bookingTitle')}</h2>
          <p className="mt-5 text-sm text-cream-muted max-w-lg mx-auto leading-relaxed">{t('bookingSub')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {barberData.map((barber, i) => (
            <div key={barber.name} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex">
              <BarberCard barber={barber} delay={i * 100} />
            </div>
          ))}
        </div>

        <WalkInNotice />
      </div>
    </section>
  )
}
