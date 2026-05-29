import { useEffect, useRef } from 'react'
import styles from './Avances.module.css'
import alamedaImg from '../../assets/Alameda Coronel Althaus.jpeg'
import marDelSurImg from '../../assets/b.jpg'
import chalanImg from '../../assets/chalan1.jpg'
import ecoparkImg from '../../assets/eco1.jpg'
import eneroImg   from '../../assets/enero1.jpg'
import plazaImg   from '../../assets/plaza1.jpg'

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
    img: eneroImg,
    badge: 'Finalizada', badgeClass: 'orange',
    icon: <RoadIcon />, iconClass: 'orange',
    title: 'La Renovada Av. 13 de Enero',
    desc: '¡Avenida 13 de Enero es el nuevo orgullo de San Juan de Lurigancho!',
    linkClass: 'orange',
    page: 'enero',
  },
  {
    img: plazaImg,
    badge: 'En Ejecución', badgeClass: 'orange',
    icon: <RoadIcon />, iconClass: 'orange',
    title: 'Futura Plaza de Armas Mariscal Cáceres',
    desc: '¡Día histórico para San Juan de Lurigancho!: colocamos primera piedra de Plaza de Armas de Mariscal.',
    linkClass: 'orange',
    page: 'plaza',
  },
  {
    img: chalanImg,
    badge: 'En Ejecución', badgeClass: 'green',
    icon: <BuildingIcon />, iconClass: 'green',
    title: 'Parque Chalán',
    desc: 'El renovado parque El Chalán ubicado en Campoy.',
    linkClass: 'green',
    page: 'chalan',
  },
  {
    img: marDelSurImg,
    badge: 'En Ejecución', badgeClass: 'orange',
    icon: <RoadIcon />, iconClass: 'orange',
    title: 'Avenida Mar del Sur',
    desc: 'Vía incluida en las obras de renovación de Circunvalación.',
    linkClass: 'orange',
    page: 'mardelasur',
  },
  {
    img: alamedaImg,
    badge: 'Finalizado', badgeClass: 'red',
    icon: <DigitalIcon />, iconClass: 'teal',
    title: 'Parque Alameda Coronel Althaus',
    desc: 'Ubicado en el sector de Mariscal Cáceres.',
    linkClass: 'teal',
    page: 'alameda',
  },
  {
    img: ecoparkImg,
    badge: 'Inaugurado', badgeClass: 'green',
    icon: <HomeIcon />, iconClass: 'green',
    title: 'Ecopark',
    desc: 'Un referente ambiental y turístico que atrae a miles de visitantes.',
    linkClass: 'green',
    page: 'ecopark',
  },
]

// Triplicar para que el loop nunca deje huecos en pantallas anchas
const marqueeItems = [...projects, ...projects, ...projects]

export default function Avances({ setPage }) {
  const trackRef = useRef(null)

  useEffect(() => {
    const setup = () => {
      const track = trackRef.current
      if (!track) return
      const gap = 16
      const vis = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4
      const cardW = (track.parentElement.offsetWidth - (vis - 1) * gap) / vis

      Array.from(track.children).forEach(c => {
        c.style.width = cardW + 'px'
        c.style.minWidth = cardW + 'px'
      })

      // Desplazamiento exacto de un set completo de tarjetas para el loop sin salto
      const oneSetW = projects.length * (cardW + gap)
      track.style.setProperty('--shift', `-${oneSetW}px`)

      // Velocidad constante: ~80px por segundo
      const dur = Math.round(oneSetW / 80)
      track.style.setProperty('--dur', `${dur}s`)
    }

    setup()
    window.addEventListener('resize', setup, { passive: true })
    return () => window.removeEventListener('resize', setup)
  }, [])

  return (
    <section id="avances" className={styles.section}>
      <h2 className="section-title reveal">Avances Destacados</h2>
      <div className="section-divider reveal" />

      <div className={styles.carouselWrapper}>
        <div className={styles.track} ref={trackRef}>
          {marqueeItems.map((p, i) => (
            <div key={i} className={`${styles.card} tilt-card`}>
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
                {p.page ? (
                  <button
                    className={`${styles.link} ${styles['link_' + p.linkClass]}`}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    onClick={() => { setPage && setPage(p.page); window.scrollTo({ top: 0 }) }}
                  >
                    Ver Más
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                ) : (
                  <a href={p.link || '#'} className={`${styles.link} ${styles['link_' + p.linkClass]}`}>
                    Ver Más
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
