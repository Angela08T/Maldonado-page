import { useEffect, useState } from 'react'
import styles from './EneroPage.module.css'
import img1 from '../../assets/enero1.jpg'
import img2 from '../../assets/enero2.jpg'
import img3 from '../../assets/enero3.jpg'
import img4 from '../../assets/enero4.jpg'
import img5 from '../../assets/enero5.jpg'

const fotos = [img1, img2, img3, img4, img5]

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/>
      </svg>
    ),
    color: 'orange',
    title: '+50,000 m² de Nueva Pista',
    desc: 'Más de 50 mil metros cuadrados de pista renovada que eliminan definitivamente los huecos y problemas de transitabilidad.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 21h20L12 2z"/><path d="M12 10v5M10 17h4"/>
      </svg>
    ),
    color: 'red',
    title: 'Sardinel y Reductores de Velocidad',
    desc: 'Instalación de sardinel y reductores de velocidad modernos para mayor seguridad vial de conductores y peatones.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    color: 'orange',
    title: 'Señalización Termoplástica',
    desc: 'Sistema moderno de señalización vial con pintura termoplástica de alta durabilidad para un tránsito ordenado y seguro.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V2M2 12h20"/><path d="M7 7c0 2.8 5 8 5 8s5-5.2 5-8a5 5 0 00-10 0z"/>
      </svg>
    ),
    color: 'green',
    title: 'Áreas Verdes con Grass Natural',
    desc: 'Próximamente se completará el embellecimiento con grass natural, creando un entorno urbano armónico y agradable.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: 'red',
    title: 'Patrimonio Histórico del Distrito',
    desc: 'La vía lleva la fecha de fundación de SJL, reconociendo su significado histórico y simbólico para la identidad del distrito.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    color: 'green',
    title: 'Transformación Urbana Integral',
    desc: 'Una gestión eficiente que demuestra que es posible lograr un SJL moderno, ordenado y preparado para seguir creciendo.',
  },
]

export default function EneroPage({ onBack }) {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className={styles.page}>

      <div className={styles.hero}>
        <img src={fotos[4]} alt="Avenida 13 de Enero" className={styles.heroImg} />
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
          <span className={styles.badgeHero}>Obra Finalizada</span>
          <h1 className={styles.heroTitle}>Av. 13 de<br/><span className={styles.accent}>Enero</span></h1>
          <p className={styles.heroSub}>San Juan de Lurigancho</p>
        </div>
      </div>

      <div className={styles.container}>

        <div className={styles.fichaGrid}>
          {[
            { label: 'Superficie',    val: '+50,000 m²' },
            { label: 'Tipo de obra',  val: 'Renovación Vial' },
            { label: 'Distrito',      val: 'San Juan de Lurigancho' },
            { label: 'Estado',        val: 'Finalizado', highlight: true },
          ].map((f, i) => (
            <div key={i} className={styles.fichaItem}>
              <span className={styles.fichaLabel}>{f.label}</span>
              {f.highlight
                ? <span className={styles.fichaEstado}>{f.val}</span>
                : <span className={styles.fichaVal}>{f.val}</span>
              }
            </div>
          ))}
        </div>

        <div className={styles.sobreGrid}>
          <img src={fotos[4]} alt="Avenida 13 de Enero renovada" className={styles.sobreImgMain} onClick={() => setLightbox(4)} />
          <div className={styles.sobreTexts}>
            <h2 className={styles.sectionTitle}>Sobre la obra</h2>
            <div className={styles.divider} />
            <p className={styles.infoText}>
              La Municipalidad de San Juan de Lurigancho transformó radicalmente la <strong>avenida 13 de Enero</strong>, una de las vías más importantes del distrito, que hoy luce más de <strong>50 mil metros cuadrados de nueva pista</strong> que han eliminado definitivamente los huecos y problemas de transitabilidad que afectaban a conductores y peatones.
            </p>
            <p className={styles.infoText}>
              La obra integral incluye la instalación de <strong>sardinel, reductores de velocidad</strong> y un moderno sistema de <strong>señalización vial con pintura termoplástica</strong> de alta durabilidad. Como broche final, en los próximos días se completará el embellecimiento de la vía con la colocación de <strong>grass natural</strong>, creando un entorno urbano armónico y agradable.
            </p>
            <p className={styles.infoText}>
              Con esta intervención, la gestión municipal rinde homenaje a la avenida que lleva la <strong>fecha de fundación del distrito</strong>, reconociendo su significado histórico y simbólico para la identidad de San Juan de Lurigancho. La vía no solo ha recuperado su funcionalidad, sino que se ha convertido en un espacio digno que refleja el progreso del distrito.
            </p>
            <img src={fotos[0]} alt="Trabajos en Av. 13 de Enero" className={styles.sobreImgSec} onClick={() => setLightbox(0)} />
          </div>
        </div>

        <div className={styles.featuresBlock}>
          <h2 className={styles.sectionTitle}>¿Qué incluye la obra?</h2>
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

        <div className={styles.estadoBlock}>
          <div className={`${styles.estadoIcon} ${styles.bg_orange}`}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div>
            <h3 className={styles.estadoTitle}>Un SJL moderno y preparado para crecer</h3>
            <p className={styles.estadoDesc}>
              Esta obra se enmarca en el compromiso de la municipalidad de transformar las principales vías del distrito, demostrando que con una <strong>gestión eficiente y transparente</strong> es posible lograr un San Juan de Lurigancho moderno, ordenado y preparado para seguir creciendo. Cada viaje por la renovada avenida 13 de Enero será <strong>testimonio del cambio</strong> que vive el distrito.
            </p>
          </div>
        </div>

        <div className={styles.galeriaBlock}>
          <h2 className={styles.sectionTitle}>Galería fotográfica</h2>
          <div className={styles.divider} />
          <div className={styles.galeriaGrid}>
            <img src={fotos[1]} alt="Av. 13 de Enero 2" className={`${styles.gItem} ${styles.gWide}`} onClick={() => setLightbox(1)} />
            <img src={fotos[2]} alt="Av. 13 de Enero 3" className={styles.gItem}                       onClick={() => setLightbox(2)} />
            <img src={fotos[3]} alt="Av. 13 de Enero 4" className={`${styles.gItem} ${styles.gFull}`} onClick={() => setLightbox(3)} />
          </div>
        </div>

      </div>

      {lightbox !== null && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <img
            src={fotos[lightbox]}
            alt="Foto ampliada"
            className={styles.lightboxImg}
            onClick={e => e.stopPropagation()}
          />
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
