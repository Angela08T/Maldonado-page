import { useEffect, useRef } from 'react'
import styles from './Stats.module.css'

const icons = {
  building: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1"/>
      <path d="M3 9h18M9 21V9M9 3v6M15 21V9M15 3v6"/>
    </svg>
  ),
  worker: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      <path d="M8 5h8"/>
    </svg>
  ),
  people: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  handshake: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
    </svg>
  ),
  chart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
}

const items = [
  { iconKey: 'building',  target: 25,  label: 'Obras\nEjecutadas',        color: 'red',    suffix: '+' },
  { iconKey: 'worker',    target: 15,  label: 'Obras en\nEjecución',      color: 'orange', suffix: '+' },
  { iconKey: 'people',    target: 100, label: 'Mil Vecinos\nBeneficiados', color: 'green',  suffix: '+' },
  { iconKey: 'handshake', target: 20,  label: 'Alianzas\nEstratégicas',   color: 'teal',   suffix: '+' },
  { iconKey: 'chart',     target: 90,  label: 'Compromiso\ncon Maldonado', color: 'teal',   suffix: '%' },
]

function animateCounter(el, target, suffix) {
  let current = 0
  const step = target / 60
  const timer = setInterval(() => {
    current = Math.min(current + step, target)
    el.textContent = Math.floor(current) + suffix
    if (current >= target) clearInterval(timer)
  }, 20)
}

export default function Stats() {
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          ref.current.querySelectorAll('[data-target]').forEach(el => {
            animateCounter(el, +el.dataset.target, el.dataset.suffix)
          })
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div id="stats" className={styles.stats} ref={ref}>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={`${styles.item} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={`${styles.icon} ${styles[item.color]}`}>
              {icons[item.iconKey]}
            </div>
            <div>
              <div className={styles.num} data-target={item.target} data-suffix={item.suffix}>0{item.suffix}</div>
              <div className={styles.label}>{item.label.split('\n').map((l, j) => <span key={j}>{l}<br/></span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}