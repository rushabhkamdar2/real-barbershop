import { useLang } from './LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="py-10 pb-24 md:pb-10 bg-dark border-t border-cream/[0.05]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <img
          src="/real_barber.jpeg"
          alt="Real Barbershop"
          className="h-16 w-16 object-cover rounded-full opacity-80"
          style={{ mixBlendMode: 'lighten' }}
        />
        <p className="text-xs text-cream-faded">{t('footer')}</p>
      </div>
    </footer>
  )
}
