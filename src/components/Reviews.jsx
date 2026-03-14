import { useLang } from './LangContext'
import { useInView } from '../hooks/useInView'

const reviewsData = [
  { text: "Best barber in the DMV. Real cool chill barber. Get a great haircut, talk about life, and doesn't take an hour to cut your hair.", author: 'Thomas', service: 'Skin Fade & Beard · with Luis' },
  { text: 'Guillermo is very prompt and professional. His haircuts are always on point. Keep up the good work!', author: 'Ehsan', service: 'Haircut · with Guillermo' },
  { text: 'My 5 year old loves getting a haircut from him. Luis is the best!', author: 'Yolanda', service: 'Kids Haircut · with Luis' },
  { text: 'Great service, welcoming atmosphere, amazing cut. I just found my barber in the DMV!', author: 'Client', service: 'Haircut + Beard · with Guillermo' },
  { text: 'Luis is definitely a top barber in the DMV. The vibe is great and the service is consistent every single visit.', author: 'Avry', service: 'Skin Fade & Beard · with Luis' },
  { text: "Gave me exactly what I asked for! Pays attention to detail well. I'll definitely be back.", author: 'Destiny', service: 'Haircut · with Guillermo' },
]

export default function Reviews() {
  const { t } = useLang()
  const [headerRef, headerVisible] = useInView()

  return (
    <section id="reviews" className="py-24 bg-dark-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-xs tracking-[3px] uppercase text-gold font-medium mb-4 block">{t('reviewsLabel')}</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none tracking-[1px]">{t('reviewsTitle')}</h2>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-6 pb-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {reviewsData.map((r, i) => (
            <div key={i} className="flex-shrink-0 w-[360px] max-md:w-[300px] snap-start bg-dark-200 border border-cream/[0.04] p-8 relative">
              <div className="absolute top-5 right-6 font-display text-6xl text-gold/10 leading-none">"</div>
              <div className="text-gold text-[0.9rem] tracking-[2px] mb-4">★★★★★</div>
              <p className="text-[0.95rem] text-cream-muted leading-relaxed mb-5 italic">{r.text}</p>
              <div className="font-semibold text-[0.9rem] text-cream">{r.author}</div>
              <div className="text-xs text-cream-faded mt-1">{r.service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
