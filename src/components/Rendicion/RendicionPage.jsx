import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './RendicionPage.module.css'

// Import all 79 slide images
const slides = Array.from({ length: 79 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  const exts = { 1:'jpg',2:'jpg',32:'jpg',33:'jpg',34:'jpg',35:'jpg',36:'jpg',46:'jpg',53:'jpg',79:'jpg' }
  const ext = exts[i + 1] || 'png'
  return new URL(`../../assets/rendicion/slide${n}.${ext}`, import.meta.url).href
})

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('[data-fadein]')
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity .5s ease ${i * 0.06}s, transform .5s ease ${i * 0.06}s`
      requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' })
    })
  }, [])
  return ref
}

export default function RendicionPage({ onBack }) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [thumbsVisible, setThumbsVisible] = useState(true)
  const thumbRef = useRef(null)
  const pageRef = useFadeIn()

  const total = slides.length

  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])

  // Keyboard navigation
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prev()
      if (e.key === 'Escape') setLightbox(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Scroll active thumb into view
  useEffect(() => {
    if (!thumbRef.current) return
    const active = thumbRef.current.children[current]
    if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [current])

  return (
    <div className={styles.page} ref={pageRef}>

      {/* ── Hero Banner ── */}
      <div className={styles.hero} data-fadein>
        <div className={styles.heroBg} />

        <div className={styles.heroGrid}>
          {/* ── Left column ── */}
          <div className={styles.heroLeft}>
            {onBack && (
              <button className={styles.backBtn} onClick={onBack}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Volver al inicio
              </button>
            )}
            <span className={styles.eyebrow}>Transparencia &amp; Gestión</span>
            <h1 className={styles.heroTitle}>
              Rendición de<br/>
              <span className={styles.heroAccent}>Cuentas 2026-I</span>
            </h1>
            <p className={styles.heroDesc}>
              Informe completo de la gestión municipal — obras, avances y logros
              alcanzados durante el primer semestre de 2026 en San Juan de Lurigancho.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>79</span>
                <span className={styles.heroStatLbl}>Diapositivas</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>2026-I</span>
                <span className={styles.heroStatLbl}>Período</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>100%</span>
                <span className={styles.heroStatLbl}>Transparencia</span>
              </div>
            </div>
            <button
              className={styles.heroCtaBtn}
              onClick={() => document.querySelector('[class*="viewer"]')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver presentación completa
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
              </svg>
            </button>
          </div>

          {/* ── Right column: slide stack preview ── */}
          <div className={styles.heroRight}>
            {/* Stacked slide cards */}
            <div className={styles.slideStack}>
              <div className={styles.stackCard3}>
                <img src={slides[2]} alt="slide 3" />
              </div>
              <div className={styles.stackCard2}>
                <img src={slides[1]} alt="slide 2" />
              </div>
              <div className={styles.stackCard1} onClick={() => setCurrent(0)}>
                <img src={slides[0]} alt="slide 1" />
                <div className={styles.stackBadge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  Ver ahora
                </div>
              </div>
            </div>

            {/* Mini stat cards */}
            <div className={styles.heroMiniCards}>
              <div className={styles.miniCard}>
                <span className={styles.miniCardIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.miniCardVal}>SJL</span>
                  <span className={styles.miniCardLbl}>San Juan de Lurigancho</span>
                </div>
              </div>
              <div className={styles.miniCard}>
                <span className={styles.miniCardIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.miniCardVal}>Ene–Jun 2026</span>
                  <span className={styles.miniCardLbl}>Período de gestión</span>
                </div>
              </div>
              <div className={styles.miniCard}>
                <span className={styles.miniCardIcon} style={{ background: 'rgba(214,40,40,.15)', color: '#f07070' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.miniCardVal}>Audiencia Pública</span>
                  <span className={styles.miniCardLbl}>Informe oficial 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className={styles.shape1} />
        <div className={styles.shape2} />
      </div>

      {/* ── Main Viewer ── */}
      <div className={styles.viewer} data-fadein>

        {/* Counter + controls header */}
        <div className={styles.viewerHeader}>
          <span className={styles.slideCounter}>
            <span className={styles.slideCurrent}>{current + 1}</span>
            <span className={styles.slideTotal}> / {total}</span>
          </span>
          <button
            className={styles.thumbToggle}
            onClick={() => setThumbsVisible(v => !v)}
            title={thumbsVisible ? 'Ocultar miniaturas' : 'Mostrar miniaturas'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
            </svg>
            {thumbsVisible ? 'Ocultar panel' : 'Ver panel'}
          </button>
        </div>

        <div className={`${styles.viewerBody} ${thumbsVisible ? '' : styles.noPanel}`}>

          {/* Slide display */}
          <div className={styles.slideWrap}>
            <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prev} aria-label="Anterior">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            <div className={styles.slideFrame} onClick={() => setLightbox(true)} title="Clic para ampliar">
              <img
                key={current}
                src={slides[current]}
                alt={`Diapositiva ${current + 1}`}
                className={styles.slideImg}
                draggable={false}
              />
              <div className={styles.slideOverlay}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
                Ampliar
              </div>
            </div>

            <button className={`${styles.navBtn} ${styles.navNext}`} onClick={next} aria-label="Siguiente">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

          {/* Thumbnail panel */}
          {thumbsVisible && (
            <div className={styles.thumbPanel}>
              <p className={styles.thumbTitle}>Todas las diapositivas</p>
              <div className={styles.thumbGrid} ref={thumbRef}>
                {slides.map((src, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === current ? styles.thumbActive : ''}`}
                    onClick={() => setCurrent(i)}
                    title={`Diapositiva ${i + 1}`}
                  >
                    <img src={src} alt={`Slide ${i + 1}`} loading="lazy" />
                    <span className={styles.thumbNum}>{i + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: `${((current + 1) / total) * 100}%` }} />
        </div>

        {/* Navigation dots (compact) */}
        <div className={styles.navDots}>
          <button className={styles.navDotBtn} onClick={prev}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Anterior
          </button>
          <button className={styles.navDotBtn} onClick={() => setCurrent(0)}>Inicio</button>
          <button className={styles.navDotBtn} onClick={() => setCurrent(total - 1)}>Final</button>
          <button className={styles.navDotBtn} onClick={next}>
            Siguiente
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(false)}>
          <button className={styles.lightboxClose} onClick={() => setLightbox(false)} aria-label="Cerrar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={e => { e.stopPropagation(); prev() }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <img
            src={slides[current]}
            alt={`Diapositiva ${current + 1}`}
            className={styles.lightboxImg}
            onClick={e => e.stopPropagation()}
          />
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={e => { e.stopPropagation(); next() }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          <span className={styles.lightboxCounter}>{current + 1} / {total}</span>
        </div>
      )}

    </div>
  )
}
