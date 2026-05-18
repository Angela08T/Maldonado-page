import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './Avances.module.css'

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    badge: 'Finalizada', badgeClass: 'green',
    icon: '🏛️', iconClass: 'red',
    title: 'Parque Miraflores',
    desc: 'Nuevo espacio público para el deporte, la recreación y la familia.',
  },
  {
    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
    badge: 'En Ejecución', badgeClass: 'orange',
    icon: '🛣️', iconClass: 'orange',
    title: 'Mejoramiento Av. Costanera',
    desc: 'Renovamos pistas, veredas e iluminación para un mejor tránsito.',
  },
  {
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    badge: 'En Ejecución', badgeClass: 'orange',
    icon: '🏛️', iconClass: 'green',
    title: 'Centro Cultural Maldonado',
    desc: 'Un nuevo espacio para la cultura, el arte y la integración.',
  },
  {
    img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: 'Próximamente', badgeClass: 'gray',
    icon: '⚽', iconClass: 'teal',
    title: 'Complejo Deportivo',
    desc: 'Más infraestructura deportiva para formar campeones.',
  },
  {
    img: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=600&q=80',
    badge: 'En Ejecución', badgeClass: 'teal',
    icon: '💻', iconClass: 'teal',
    title: 'Digitalización Municipal',
    desc: 'Trámites en línea y servicios digitales para todos los vecinos.',
  },
  {
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80',
    badge: 'Finalizada', badgeClass: 'green',
    icon: '🏠', iconClass: 'red',
    title: 'Programa de Vivienda',
    desc: 'Nuevas viviendas sociales para familias que más lo necesitan.',
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
    const cardW = track.parentElement.offsetWidth / vis
    Array.from(track.children).forEach(c => { c.style.minWidth = cardW - 12 + 'px' })
    track.style.transform = `translateX(-${newIdx * cardW}px)`
  }, [])

  const next = useCallback(() => {
    setIdx(i => {
      const max = maxIdx()
      const n = i < max ? i + 1 : 0
      update(n)
      return n
    })
  }, [maxIdx, update])

  const prev = useCallback(() => {
    setIdx(i => {
      const max = maxIdx()
      const n = i > 0 ? i - 1 : max
      update(n)
      return n
    })
  }, [maxIdx, update])

  useEffect(() => {
    update(0)
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
                <div className={`${styles.iconWrap} ${styles['icon_' + p.iconClass]}`}>{p.icon}</div>
              </div>
              <div className={styles.cardBody}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#" className="card-link">Ver Más →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.btn} onClick={prev} aria-label="Anterior">&#8592;</button>
        <button className={styles.btn} onClick={next} aria-label="Siguiente">&#8594;</button>
      </div>
    </section>
  )
}
