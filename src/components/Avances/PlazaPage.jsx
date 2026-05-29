import { useEffect, useState } from 'react'
import styles from './PlazaPage.module.css'
import img1  from '../../assets/plaza1.jpg'
import img2  from '../../assets/plaza2.jpg'
import img3  from '../../assets/plaza3.jpg'
import img4  from '../../assets/plaza4.jpg'
import video from '../../assets/plazaa.mp4'

const fotos = [img1, img2, img3, img4]

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/>
      </svg>
    ),
    color: 'orange',
    title: '+10,000 m² de Infraestructura',
    desc: 'Más de diez mil metros cuadrados de infraestructura moderna para transformar la fisonomía de Mariscal Cáceres.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 21h20L12 2z"/><path d="M12 10v5M10 17h4"/>
      </svg>
    ),
    color: 'red',
    title: 'Veredas, Adoquinado y Asfalto',
    desc: 'Renovación integral de la superficie con veredas, adoquinado y asfalto de alta calidad para el tránsito peatonal y vehicular.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: 'orange',
    title: 'Muro de Contención, Graderías y Rampas',
    desc: 'Estructuras de contención, graderías y rampas de accesibilidad universal para garantizar la seguridad y comodidad de todos.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: 'red',
    title: 'Monumento al Mariscal Cáceres',
    desc: 'Un monumento en honor al héroe nacional que da nombre al sector, símbolo del orgullo e identidad del distrito.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V2M2 12h20"/><path d="M7 7c0 2.8 5 8 5 8s5-5.2 5-8a5 5 0 00-10 0z"/>
      </svg>
    ),
    color: 'green',
    title: '4,500 m² de Áreas Verdes',
    desc: 'Grass natural, arbustos y árboles que convertirán la plaza en un verdadero pulmón verde para toda la comunidad.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    color: 'green',
    title: 'Inversión de +8.5 Millones de Soles',
    desc: 'Una inversión histórica superior a los ocho millones y medio de soles al servicio de la comunidad de Mariscal Cáceres.',
  },
]

export default function PlazaPage({ onBack }) {
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
        <img src={fotos[0]} alt="Plaza de Armas Mariscal Cáceres" className={styles.heroImg} />
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
          <span className={styles.badgeHero}>Primera Piedra · En Ejecución</span>
          <h1 className={styles.heroTitle}>Plaza de Armas<br/><span className={styles.accent}>Mariscal Cáceres</span></h1>
          <p className={styles.heroSub}>40 años de espera · San Juan de Lurigancho</p>
        </div>
      </div>

      <div className={styles.container}>

        <div className={styles.fichaGrid}>
          {[
            { label: 'Área total',    val: '+10,000 m²' },
            { label: 'Áreas verdes',  val: '+4,500 m²' },
            { label: 'Inversión',     val: '+S/ 8.5 millones' },
            { label: 'Estado',        val: 'En Ejecución', highlight: true },
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
          <img src={fotos[1]} alt="Primera piedra Plaza de Armas" className={styles.sobreImgMain} onClick={() => setLightbox(1)} />
          <div className={styles.sobreTexts}>
            <h2 className={styles.sectionTitle}>Un hito histórico para SJL</h2>
            <div className={styles.divider} />
            <p className={styles.infoText}>
              Colocamos la primera piedra de la <strong>futura Plaza de Armas de Mariscal Cáceres</strong>, una obra esperada por más de 40 años y que, tras promesas vacías y autoridades sin liderazgo, ahora será realidad con una gestión municipal que ya demostró capacidad y amor por el distrito.
            </p>
            <p className={styles.infoText}>
              Después de cuatro décadas de espera, los vecinos de Mariscal Cáceres fueron protagonistas de una <strong>jornada histórica</strong>. La colocación de la primera piedra marca el inicio de un proyecto que cambiará la fisonomía de esta parte del distrito más poblado de Lima.
            </p>
            <p className={styles.infoText}>
              La mega obra contempla <strong>más de 10 mil metros cuadrados</strong> de infraestructura moderna, que incluye veredas, adoquinado, asfalto, muro de contención, graderías y rampas. También se levantará un <strong>monumento en honor al héroe nacional Mariscal Cáceres</strong>, junto con banquetas, macetones y tachos de basura.
            </p>
            <p className={styles.infoText}>
              Cerca de <strong>4,500 metros cuadrados de áreas verdes</strong>, con grass natural, arbustos y árboles, convertirán este espacio en un verdadero pulmón para el vecindario. Todo ello con una <strong>inversión superior a los 8 millones y medio de soles</strong>.
            </p>
          </div>
        </div>

        {/* ── Video ── */}
        <div className={styles.videoBlock}>
          <h2 className={styles.sectionTitle}>El momento histórico</h2>
          <div className={styles.divider} />
          <div className={styles.videoWrap}>
            <video
              src={video}
              className={styles.video}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
          <p className={styles.videoCaption}>
            Colocación de la primera piedra de la Plaza de Armas de Mariscal Cáceres · ¡La Plaza de Armas de Mariscal Cáceres se hace porque se hace!
          </p>
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

        {/* ── Cita destacada ── */}
        <div className={styles.quoteBlock}>
          <span className={styles.quoteIcon}>🏛️</span>
          <p className={styles.quoteText}>
            ¡La Plaza de Armas de Mariscal Cáceres<br/>se hace porque se hace!
          </p>
        </div>

        <div className={styles.galeriaBlock}>
          <h2 className={styles.sectionTitle}>Galería fotográfica</h2>
          <div className={styles.divider} />
          <div className={styles.galeriaGrid}>
            <img src={fotos[2]} alt="Plaza 3" className={`${styles.gItem} ${styles.gWide}`} onClick={() => setLightbox(2)} />
            <img src={fotos[3]} alt="Plaza 4" className={styles.gItem}                      onClick={() => setLightbox(3)} />
            <img src={fotos[0]} alt="Plaza 1" className={`${styles.gItem} ${styles.gFull}`} onClick={() => setLightbox(0)} />
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
