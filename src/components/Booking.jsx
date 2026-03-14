import { useLang } from './LangContext'
import { useInView } from '../hooks/useInView'

export default function Booking() {
  const { t } = useLang()
  const [ref, visible] = useInView()

  return (
    <section id="booking" className="py-24 bg-dark relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(200,162,69,0.06), transparent 70%)' }} />
      <div className="max-w-[640px] mx-auto px-6 relative z-10 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-xs tracking-[3px] uppercase text-gold font-medium mb-4 block">{t('bookingLabel')}</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-[1px]">{t('bookingTitle')}</h2>
          <p className="text-cream-muted mt-4 leading-relaxed">{t('bookingSub')}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <a
              href="https://booksy.com/en-us/123274_real-barbershop_barber-shop_22788_burtonsville"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-100 border border-cream/[0.08] p-10 text-center no-underline text-inherit transition-all duration-400 hover:border-gold hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(200,162,69,0.1)] block"
            >
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-display text-xl tracking-[1px] mb-2">{t('bookWithLuis')}</h3>
              <p className="text-sm text-cream-muted leading-relaxed whitespace-pre-line">{t('bookLuisDesc')}</p>
            </a>
            <a
              href="https://booksy.com/en-us/529928_galiciakutz_barber-shop_22788_burtonsville"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-100 border border-cream/[0.08] p-10 text-center no-underline text-inherit transition-all duration-400 hover:border-gold hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(200,162,69,0.1)] block"
            >
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-display text-xl tracking-[1px] mb-2">{t('bookWithGuillermo')}</h3>
              <p className="text-sm text-cream-muted leading-relaxed whitespace-pre-line">{t('bookGuillermoDesc')}</p>
            </a>
          </div>

          <div className="mt-8 p-5 border border-dashed border-gold/25">
            <p className="text-[0.9rem] text-cream-muted">
              {t('walkIn')} <strong className="text-gold">{t('walkInBold')}</strong>
              <br />15456 Old Columbia Pike, Burtonsville, MD
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
