import { useLang } from './LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-100">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(200,162,69,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(200,162,69,0.05) 0%, transparent 50%)'
        }} />
        {/* Barber pole stripes */}
        <div className="barber-stripe right-[15%]" style={{ background: 'linear-gradient(180deg, transparent, rgba(200,162,69,0.2), transparent)' }} />
        <div className="barber-stripe right-[15.4%]" style={{ background: 'linear-gradient(180deg, transparent, rgba(196,59,59,0.15), transparent)' }} />
        <div className="barber-stripe right-[15.8%]" style={{ background: 'linear-gradient(180deg, transparent, rgba(70,130,180,0.12), transparent)' }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-[720px]">
          {/* Badge */}
          <div className="opacity-0 animate-fade-up-delay-1 inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 text-gold text-xs tracking-[2px] uppercase font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse-gold" />
            {t('heroBadge')}
          </div>

          {/* Title */}
          <h1 className="opacity-0 animate-fade-up-delay-2 font-display text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.92] tracking-tight mb-6 text-shadow-gold">
            {t('heroTitle1')} <span className="text-gold">{t('heroTitleAccent')}</span> {t('heroTitle2')}
            <br />
            {t('heroTitle3')}
          </h1>

          {/* Sub */}
          <p className="opacity-0 animate-fade-up-delay-3 text-lg text-cream-muted leading-relaxed max-w-[520px] mb-10">
            {t('heroSub')}
          </p>

          {/* CTAs */}
          <div className="opacity-0 animate-fade-up-delay-4">
            <a href="#booking" className="inline-flex items-center gap-3 bg-gold text-dark px-12 py-5 font-display text-xl tracking-[2px] no-underline transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,162,69,0.35)]">
              {t('heroCta1')} →
            </a>
          </div>

          {/* Stats */}
          <div className="opacity-0 animate-fade-up-delay-5 flex gap-12 mt-16 pt-8 border-t border-cream/[0.08] flex-wrap">
            <div>
              <h3 className="font-display text-4xl text-gold leading-none">600+</h3>
              <p className="text-xs text-cream-faded tracking-[1px] uppercase mt-1">{t('statReviews')}</p>
            </div>
            <div>
              <h3 className="font-display text-4xl text-gold leading-none">10+</h3>
              <p className="text-xs text-cream-faded tracking-[1px] uppercase mt-1">{t('statYears')}</p>
            </div>
            <div>
              <h3 className="font-display text-4xl text-gold leading-none">#1</h3>
              <p className="text-xs text-cream-faded tracking-[1px] uppercase mt-1">{t('statRated')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
