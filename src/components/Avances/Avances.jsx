import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './Avances.module.css'

const BuildingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M3 9h18M9 21V9M9 3v6M15 21V9M15 3v6"/>
  </svg>
)
const RoadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 21h20L12 2z"/>
    <path d="M12 10v5M10 17h4"/>
  </svg>
)
const PeopleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
)
const SportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20"/>
  </svg>
)
const DigitalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
)
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    badge: 'Finalizada', badgeClass: 'red',
    icon: <BuildingIcon />, iconClass: 'red',
    title: 'Parque Miraflores',
    desc: 'Nuevo espacio pÃºblico para el deporte, la recreaciÃ³n y la familia.',
    linkClass: 'red',
  },
  {
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
    badge: 'En EjecuciÃ³n', badgeClass: 'orange',
    icon: <RoadIcon />, iconClass: 'orange',
    title: 'Mejoramiento Av. Costanera',
    desc: 'Renovamos pistas, veredas e iluminaciÃ³n para un mejor trÃ¡nsito.',
    linkClass: 'orange',
  },
  {
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    badge: 'En EjecuciÃ³n', badgeClass: 'green',
    icon: <BuildingIcon />, iconClass: 'green',
    title: 'Centro Cultural Maldonado',
    desc: 'Un nuevo espacio para la cultura, el arte y la integraciÃ³n.',
    linkClass: 'green',
  },
  {
    img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: 'PrÃ³ximamente', badgeClass: 'teal',
    icon: <SportIcon />, iconClass: 'teal',
    title: 'Complejo Deportivo',
    desc: 'MÃ¡s infraestructura deportiva para formar campeones.',
    linkClass: 'teal',
  },
  {
    img: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=600&q=80',
    badge: 'En EjecuciÃ³n', badgeClass: 'teal',
    icon: <DigitalIcon />, iconClass: 'teal',
    title: 'DigitalizaciÃ³n Municipal',
    desc: 'TrÃ¡mites en lÃ­nea y servicios digitales para todos los vecinos.',
    linkClass: 'teal',
  },
  {
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80',
    badge: 'Finalizada', badgeClass: 'red',
    icon: <HomeIcon />, iconClass: 'red',
    title: 'Programa de Vivienda',
    desc: 'Nuevas viviendas sociales para familias que mÃ¡s lo necesitan.',
    linkClass: 'red',
  },
]

function getVisible() {
  if (window.innerWidth < 768) return 1
  if (window.innerWidth < 1024) return 2
  return 4
}

export default function Avances() {
  const [idx, setIdx] = useState(0)
  const trackRef = useRef(null)
  const timerRef = useRef(null)

  const maxIdx = useCallback(() => projects.length - getVisible(), [])

  const update = useCallback((newIdx) => {
    const vis = getVisible()
    const track = trackRef.current
    if (!track) return
    const gap = 16
    const totalW = track.parentElement.offsetWidth
    const cardW = (totalW - (vis - 1) * gap) / vis
    Array.from(track.children).forEach(c => { c.style.minWidth = cardW + 'px' })
    track.style.transform = `translateX(-${newIdx * (cardW + gap)}px)`
  }, [])

  const next = useCallback(() => {
    setIdx(i => i < maxIdx() ? i + 1 : 0)
  }, [maxIdx])

  const prev = useCallback(() => {
    setIdx(i => i > 0 ? i - 1 : maxIdx())
  }, [maxIdx])

  useEffect(() => {
    update(idx)
    const onResize = () => update(idx)
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [update, idx])

  useEffect(() => {
    timerRef.current = setInterval(next, 4000)
    return () => clearInterval(timerRef.current)
  }, [next])

  return (
    <section id="avances" className={styles.section}>
      <h2 className="section-title reveal">Avances Destacados</h2>
      <div className="section-divider reveal" />

      <div className={styles.carouselWrapper}>
        <div className={styles.track} ref={trackRef}>
          {projects.map((p, i) => (
            <div key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${(i % 4) * 0.1}s` }}>
              <div className={styles.cardImg}>
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className={`${styles.badge} ${styles[p.badgeClass]}`}>{p.badge}</span>
              </div>
              <div className={`${styles.iconWrap} ${styles['icon_' + p.iconClass]}`}>
                {p.icon}
              </div>
              <div className={styles.cardBody}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#" className={`${styles.link} ${styles['link_' + p.linkClass]}`}>
                  Ver MÃ¡s
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.btn} onClick={prev} aria-label="Anterior">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
        </button>
        <button className={styles.btn} onClick={next} aria-label="Siguiente">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </section>
  )
}