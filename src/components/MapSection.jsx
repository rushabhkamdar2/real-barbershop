import { useLang } from './LangContext'

export default function MapSection() {
  const { t } = useLang()

  return (
    <section id="map" className="bg-dark-100">
      <div className="relative w-full h-[400px] max-md:h-[300px] overflow-hidden">
        <iframe
          className="w-full h-full border-none map-frame"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Real+Barbershop,15456+Old+Columbia+Pike,Burtonsville,MD+20866&zoom=15&maptype=roadmap"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Real Barbershop location on Google Maps"
          allowFullScreen
        />
        {/* Edge fade overlays */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(180deg, #141414 0%, transparent 15%), linear-gradient(0deg, #141414 0%, transparent 15%)'
        }} />
        {/* Directions button */}
        <div className="absolute bottom-8 left-8 z-10">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=15456+Old+Columbia+Pike+Burtonsville+MD+20866"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark/90 backdrop-blur-xl border border-gold/30 text-gold no-underline font-display text-base tracking-[1.5px] transition-all hover:bg-gold hover:text-dark hover:border-gold"
          >
            ↗ {t('getDirections')}
          </a>
        </div>
      </div>
    </section>
  )
}
