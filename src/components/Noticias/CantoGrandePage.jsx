import { useEffect, useState } from 'react'
import styles from './CantoGrandePage.module.css'
import noti5 from '../../assets/noti5.jpg'

const datos = [
  { label: 'Ubicación',     val: 'Canto Grande, 1ra. Etapa' },
  { label: 'Manzana',       val: 'E, Comuna 9' },
  { label: 'Beneficiarios', val: 'Vecinos de la zona' },
  { label: 'Estado',        val: 'Entregado', highlight: true },
]

const features = [
  {
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Habilitación Urbana de Oficio',
    desc: 'Instrumento legal que reconoce la existencia de la vivienda y las condiciones básicas del entorno, formalizando el asentamiento.',
  },
  {
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Seguridad jurídica',
    desc: 'Los vecinos obtienen respaldo legal sobre su propiedad, cerrando brechas de formalización que los mantenían en incertidumbre.',
  },
  {
    color: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Formalización de propiedad',
    desc: 'Primer paso para que las familias accedan a su título de propiedad, un derecho fundamental largamente esperado.',
  },
  {
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Acceso a servicios básicos',
    desc: 'Con la habilitación, las familias pueden acceder a servicios como agua, luz y saneamiento de manera formal y regular.',
  },
  {
    color: 'red',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Créditos y programas del hogar',
    desc: 'La formalización abre el camino para acceder a créditos hipotecarios y programas gubernamentales de mejoramiento del hogar.',
  },
  {
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Justicia social en acción',
    desc: 'Una gestión que prioriza a quienes más lo necesitan, brindando certeza y tranquilidad a familias que vivieron años en la incertidumbre.',
  },
]

export default function CantoGrandePage({ onBack }) {
  const [lightbox, setLightbox] = useState(false)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [])
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setLightbox(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <img src={noti5} alt="Entrega habilitación urbana Canto Grande" className={styles.heroImg} />
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
          <span className={styles.badgeHero}>Entregado · Formalización Urbana</span>
          <h1 className={styles.heroTitle}>Habilitación Urbana<br/><span className={styles.accent}>Canto Grande</span></h1>
          <p className={styles.heroSub}>Primera etapa, Manzana E, Comuna 9 · San Juan de Lurigancho</p>
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

        {/* ── Descripción + imagen ── */}
        <div className={styles.sobreGrid}>
          <img
            src={noti5}
            alt="Vecinos de Canto Grande reciben habilitación urbana"
            className={styles.sobreImgMain}
            onClick={() => setLightbox(true)}
          />
          <div className={styles.sobreTexts}>
            <h2 className={styles.sectionTitle}>Sobre la entrega</h2>
            <div className={styles.divider} />
            <p className={styles.infoText}>
              Entregamos <strong>habilitación urbana de oficio</strong> a vecinos de la primera etapa de Canto Grande, manzana E, comuna 9. La Municipalidad de San Juan de Lurigancho continúa trabajando para llevar <strong>seguridad jurídica</strong> a las familias del distrito, cerrando brechas de formalización.
            </p>
            <p className={styles.infoText}>
              Con este valioso documento, los vecinos están dando grandes pasos hacia la <strong>formalización de su propiedad</strong> y la obtención de su título de propiedad, un sueño largamente anhelado que por fin comienza a hacerse realidad gracias a una gestión que prioriza la justicia social.
            </p>
            <p className={styles.infoText}>
              La habilitación urbana de oficio es un instrumento clave que reconoce la existencia de la vivienda y las condiciones básicas del entorno, allanando el camino para que las familias puedan acceder a <strong>servicios básicos, créditos y programas de mejoramiento del hogar</strong>.
            </p>
            <p className={styles.infoText}>
              Con acciones como esta, la municipalidad reafirma su compromiso con la <strong>formalización de los barrios</strong>, brindando certeza y tranquilidad a quienes por años vivieron en la incertidumbre.
            </p>
          </div>
        </div>

        {/* ── Características ── */}
        <div className={styles.featuresBlock}>
          <h2 className={styles.sectionTitle}>Beneficios para los vecinos</h2>
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

        {/* ── Estado ── */}
        <div className={styles.estadoBlock}>
          <div className={`${styles.estadoIcon} ${styles.bg_green}`}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div>
            <h3 className={styles.estadoTitle}>Habilitación entregada · SJL, obras que cambian vidas</h3>
            <p className={styles.estadoDesc}>
              La Municipalidad de San Juan de Lurigancho reafirma su compromiso con la formalización de los barrios, brindando <strong>certeza y tranquilidad</strong> a quienes por años vivieron en la incertidumbre. Este es un paso decisivo hacia la consolidación urbana y la dignidad de las familias del distrito.
            </p>
          </div>
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(false)}>
          <button className={styles.lightboxClose} onClick={() => setLightbox(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <img src={noti5} alt="Foto ampliada" className={styles.lightboxImg} onClick={e => e.stopPropagation()} />
        </div>
      )}

    </div>
  )
}
