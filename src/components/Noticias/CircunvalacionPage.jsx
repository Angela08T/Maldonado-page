import { useEffect, useState } from 'react'
import styles from './CircunvalacionPage.module.css'
import noti1 from '../../assets/noti1.jpg'
import noti2 from '../../assets/noti2.jpg'
import noti3 from '../../assets/noti3.jpg'
import noti4 from '../../assets/noti4.jpg'

const fotos = [noti1, noti2, noti3, noti4]

const datos = [
  { label: 'Tramo',     val: 'Primer tramo' },
  { label: 'Incluye',   val: 'Av. Mar del Sur' },
  { label: 'Avance',    val: 'Señalización y áreas verdes' },
  { label: 'Estado',    val: 'En Ejecución', highlight: true },
]

const features = [
  {
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 21h20L12 2z"/><path d="M12 10v5M10 17h4"/>
      </svg>
    ),
    title: 'Asfaltado completado',
    desc: 'El primer tramo de la avenida Circunvalación culminó su fase de asfaltado con éxito, garantizando transitabilidad segura y duradera.',
  },
  {
    color: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M3 6h18M3 18h18"/>
      </svg>
    ),
    title: 'Señalización termoplástica',
    desc: 'Aplicación de señalización termoplástica de alta durabilidad para mejorar la seguridad vial en toda la intervención.',
  },
  {
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Áreas verdes y pintura',
    desc: 'Colocación de áreas verdes y pintura en general como toques finales que embellecen y ordenan el espacio urbano.',
  },
  {
    color: 'red',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Seguridad vial mejorada',
    desc: 'Mejora sustancial en la seguridad vial y el ornato, beneficiando a miles de conductores y peatones que transitan a diario por la zona.',
  },
  {
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    title: 'Incluye Av. Mar del Sur',
    desc: 'La intervención también abarca toda la avenida Mar del Sur, que conecta Circunvalación con las avenidas Central y Wiesse.',
  },
  {
    color: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Red vial articulada',
    desc: 'Una vía articulada, moderna y completamente renovada que cambiará la dinámica de movilidad en todo el sector.',
  },
]

export default function CircunvalacionPage({ onBack }) {
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
        <img src={noti2} alt="Avenida Circunvalación" className={styles.heroImg} />
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
          <span className={styles.source}>Municipalidad Distrital de San Juan de Lurigancho</span>
          <span className={styles.badgeHero}>En Ejecución · Mejoramiento Vial</span>
          <h1 className={styles.heroTitle}>Avenida<br/><span className={styles.accent}>Circunvalación</span></h1>
          <p className={styles.heroSub}>Primer tramo culminó fase de asfaltado · San Juan de Lurigancho</p>
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
            src={noti1}
            alt="Señalización vial Circunvalación"
            className={styles.sobreImgMain}
            onClick={() => setLightbox(0)}
          />
          <div className={styles.sobreTexts}>
            <h2 className={styles.sectionTitle}>Sobre la obra</h2>
            <div className={styles.divider} />
            <p className={styles.infoText}>
              Las obras en el primer tramo de la <strong>avenida Circunvalación</strong> terminaron su fase de asfaltado y ahora avanzan con la <strong>señalización termoplástica</strong>, colocación de áreas verdes y pintura en general, dando los toques finales a una de las intervenciones viales más importantes del distrito.
            </p>
            <p className={styles.infoText}>
              La transformación de esta emblemática avenida no solo ha significado un nuevo rostro para el asfalto, sino también una <strong>mejora sustancial en la seguridad vial</strong> y el ornato, beneficiando a miles de conductores y peatones que a diario transitan por la zona.
            </p>
            <p className={styles.infoText}>
              La intervención también incluye toda la <strong>avenida Mar del Sur</strong>, que conecta Circunvalación con las avenidas Central y Wiesse, generando una vía articulada, moderna y completamente renovada que cambiará la dinámica de movilidad en todo el sector.
            </p>
            <p className={styles.infoText}>
              Con estos avances, San Juan de Lurigancho consolida su proceso de <strong>transformación integral</strong>, demostrando que las obras que cambian vidas se ejecutan con planificación, calidad y un equipo comprometido con el desarrollo del distrito.
            </p>
            <img
              src={noti4}
              alt="Trabajos de señalización"
              className={styles.sobreImgSec}
              onClick={() => setLightbox(3)}
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
            <h3 className={styles.estadoTitle}>Obra en etapa final · SJL, obras que cambian vidas</h3>
            <p className={styles.estadoDesc}>
              La intervención, que también incluye toda la avenida Mar del Sur, se encuentra en su <strong>etapa final</strong> con trabajos de señalización termoplástica, colocación de áreas verdes y pintura en general. Con estos avances, San Juan de Lurigancho consolida su proceso de transformación integral.
            </p>
          </div>
        </div>

        {/* ── Galería ── */}
        <div className={styles.galeriaBlock}>
          <h2 className={styles.sectionTitle}>Galería fotográfica</h2>
          <div className={styles.divider} />
          <div className={styles.galeriaGrid}>
            <img src={noti2} alt="Vista aérea de intersección" className={`${styles.gItem} ${styles.gWide}`}  onClick={() => setLightbox(1)} />
            <img src={noti3} alt="Pintura termoplástica"       className={styles.gItem}                        onClick={() => setLightbox(2)} />
            <img src={noti1} alt="Señalización en vía"         className={styles.gItem}                        onClick={() => setLightbox(0)} />
            <img src={noti4} alt="Cuadrilla de trabajadores"   className={`${styles.gItem} ${styles.gRight}`} onClick={() => setLightbox(3)} />
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
