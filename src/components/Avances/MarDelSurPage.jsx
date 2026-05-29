import { useEffect, useState } from 'react'
import styles from './MarDelSurPage.module.css'
import imgAerea from '../../assets/b.jpg'
import imgTrabajo1 from '../../assets/a.jpg'
import imgTrabajo2 from '../../assets/c.jpg'

const fotos = [imgAerea, imgTrabajo1, imgTrabajo2]

const datos = [
  { label: 'Nuevo asfalto',    val: '+13,000 m²' },
  { label: 'Longitud de vías', val: '+1.5 km' },
  { label: 'Inversión',        val: '+4 millones S/.' },
  { label: 'Estado',           val: 'En Ejecución', highlight: true },
]

const features = [
  {
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 21h20L12 2z"/><path d="M12 10v5M10 17h4"/>
      </svg>
    ),
    title: '+13,000 m² de Asfalto Nuevo',
    desc: 'Colocación de nueva carpeta asfáltica para garantizar transitabilidad segura y duradera en toda la vía.',
  },
  {
    color: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M3 6h18M3 18h18"/>
      </svg>
    ),
    title: 'Red Vial Articulada',
    desc: 'La Av. Mar del Sur conecta Circunvalación con las avenidas Central y Wiesse, integrando una red vial completa.',
  },
  {
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Beneficio para Miles de Vecinos',
    desc: 'Miles de vecinos y conductores que transitan diariamente por la zona se benefician con esta mejora vial.',
  },
  {
    color: 'red',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Seguridad Vial Mejorada',
    desc: 'Recuperación de espacios deteriorados y fin a años de abandono, mejorando condiciones de tránsito vehicular y peatonal.',
  },
  {
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l9-14 9 14H3z"/><path d="M3 17h18"/>
      </svg>
    ),
    title: '+1.5 km de Vías Renovadas',
    desc: 'Intervención integral de más de un kilómetro y medio de vías, transformando la movilidad del sector de Circunvalación.',
  },
  {
    color: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Inversión de +4 Millones de Soles',
    desc: 'Recursos municipales destinados al desarrollo vial del distrito, garantizando una ejecución de calidad para todos.',
  },
]

export default function MarDelSurPage({ onBack }) {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [])
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <img src={imgAerea} alt="Avenida Mar del Sur" className={styles.heroImg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          {onBack && (
            <button className={styles.backBtn} onClick={onBack}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Volver al inicio
            </button>
          )}
          <span className={styles.badgeHero}>En Ejecución · Mejoramiento Vial</span>
          <h1 className={styles.heroTitle}>Avenida<br/><span className={styles.accent}>Mar del Sur</span></h1>
          <p className={styles.heroSub}>Obras de renovación de Circunvalación · San Juan de Lurigancho</p>
        </div>
      </div>

      <div className={styles.container}>

        {/* ── Ficha técnica ── */}
        <div className={styles.fichaGrid}>
          {datos.map((d, i) => (
            <div key={i} className={styles.fichaItem}>
              <span className={styles.fichaLabel}>{d.label}</span>
              {d.highlight
                ? <span className={styles.fichaEstado}>{d.val}</span>
                : <span className={styles.fichaVal}>{d.val}</span>
              }
            </div>
          ))}
        </div>

        {/* ── Descripción + imagen principal ── */}
        <div className={styles.sobreGrid}>
          <img
            src={imgAerea}
            alt="Vista aérea Av. Mar del Sur"
            className={styles.sobreImgMain}
            onClick={() => setLightbox(0)}
          />
          <div className={styles.sobreTexts}>
            <h2 className={styles.sectionTitle}>Sobre la obra</h2>
            <div className={styles.divider} />
            <p className={styles.infoText}>
              La Municipalidad de San Juan de Lurigancho continúa ejecutando las obras de <strong>mejoramiento vial en la avenida Circunvalación</strong>, un megaproyecto que busca transformar la movilidad y el ornato urbano en esta importante arteria del distrito.
            </p>
            <p className={styles.infoText}>
              El proyecto comprende la intervención de toda la <strong>avenida Mar del Sur</strong>, vía que conecta Circunvalación con las avenidas Central y Wiesse, generando una red vial articulada en beneficio de miles de vecinos y conductores que transitan diariamente por la zona.
            </p>
            <p className={styles.infoText}>
              La obra contempla la colocación de más de <strong>13 mil metros cuadrados de nuevo asfalto</strong> y la intervención de más de <strong>1.5 kilómetros de vías</strong>, con una inversión que supera los <strong>4 millones de soles</strong>.
            </p>
            <p className={styles.infoText}>
              Los trabajos recuperarán espacios deteriorados y pondrán fin a años de abandono, mejorando significativamente las condiciones de tránsito vehicular y peatonal.
            </p>
            <img
              src={imgTrabajo2}
              alt="Trabajos de asfaltado"
              className={styles.sobreImgSec}
              onClick={() => setLightbox(2)}
            />
          </div>
        </div>

        {/* ── Características ── */}
        <div className={styles.featuresBlock}>
          <h2 className={styles.sectionTitle}>Alcance del proyecto</h2>
          <div className={styles.divider} />
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={`${styles.featureCard} ${styles['border_' + f.color]}`}>
                <div className={`${styles.featureIconWrap} ${styles['bg_' + f.color]}`}>
                  {f.icon}
                </div>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Estado de la obra ── */}
        <div className={styles.estadoBlock}>
          <div className={`${styles.estadoIcon} ${styles.bg_orange}`}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div>
            <h3 className={styles.estadoTitle}>Obra en ejecución activa</h3>
            <p className={styles.estadoDesc}>
              La Municipalidad de San Juan de Lurigancho avanza en la intervención de más de <strong>1.5 km de vías</strong>. Los trabajos buscan recuperar espacios deteriorados y poner fin a años de abandono, mejorando significativamente las condiciones de tránsito vehicular y peatonal para miles de vecinos del distrito.
            </p>
          </div>
        </div>

        {/* ── Galería ── */}
        <div className={styles.galeriaBlock}>
          <h2 className={styles.sectionTitle}>Galería fotográfica</h2>
          <div className={styles.divider} />
          <div className={styles.galeriaGrid}>
            <img src={imgAerea}    alt="Vista aérea"        className={`${styles.gItem} ${styles.gWide}`} onClick={() => setLightbox(0)} />
            <img src={imgTrabajo1} alt="Trabajos de asfalto" className={styles.gItem}                      onClick={() => setLightbox(1)} />
            <img src={imgTrabajo2} alt="Compactación"        className={`${styles.gItem} ${styles.gFull}`} onClick={() => setLightbox(2)} />
          </div>
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <img src={fotos[lightbox]} alt="Foto ampliada" className={styles.lightboxImg} onClick={e => e.stopPropagation()} />
          <div className={styles.lightboxNav}>
            <button onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + fotos.length) % fotos.length) }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <span>{lightbox + 1} / {fotos.length}</span>
            <button onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % fotos.length) }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
