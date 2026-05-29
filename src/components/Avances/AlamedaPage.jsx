import { useEffect, useState } from 'react'
import styles from './AlamedaPage.module.css'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'

const fotos = [img1, img2, img3, img4, img5, img6, img7, img8]

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20"/>
      </svg>
    ),
    color: 'teal',
    title: 'Losa Multideportiva',
    desc: 'Con tribunas techadas, iluminación LED y servicios higiénicos. Escenario perfecto para el deporte y eventos comunitarios.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V2M2 12h20"/><path d="M7 7c0 2.8 5 8 5 8s5-5.2 5-8a5 5 0 00-10 0z"/>
      </svg>
    ),
    color: 'green',
    title: '+2,000 m² de Áreas Verdes',
    desc: 'Arbustos y árboles ornamentales que crean un verdadero pulmón urbano lleno de vida y color.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    color: 'orange',
    title: 'Fuentes Danzarinas',
    desc: 'Espectacular juego de piletas y fuentes públicas que embellecen el espacio y son punto de encuentro familiar.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    color: 'red',
    title: 'Juegos Infantiles',
    desc: 'Zona de juegos con piso de caucho de seguridad para el disfrute y protección de los más pequeños.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    color: 'teal',
    title: 'Mini Gimnasio al Aire Libre',
    desc: 'Equipamiento deportivo para adultos en espacios abiertos, promoviendo la salud y bienestar de la comunidad.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: 'orange',
    title: 'Pérgolas de Madera',
    desc: 'Estructuras de madera que brindan sombra y zonas de descanso confortables para toda la familia.',
  },
]

export default function AlamedaPage({ onBack }) {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className={styles.page}>

      {/* ── Hero con foto principal ── */}
      <div className={styles.hero}>
        <img src={fotos[0]} alt="Alameda Coronel Althaus" className={styles.heroImg} />
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
          <span className={styles.badgeHero}>Obra Inaugurada · Febrero 2026</span>
          <h1 className={styles.heroTitle}>Alameda<br/><span className={styles.accent}>Coronel Althaus</span></h1>
          <p className={styles.heroSub}>Sector Mariscal Cáceres · San Juan de Lurigancho</p>
        </div>
      </div>

      <div className={styles.container}>

        {/* ── Ficha técnica ── */}
        <div className={styles.fichaGrid}>
          {[
            { label: 'Superficie total', val: '+12,000 m²' },
            { label: 'Áreas verdes',     val: '+2,000 m²' },
            { label: 'Sector',           val: 'Mariscal Cáceres' },
            { label: 'Estado',           val: 'Inaugurado', highlight: true },
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

        {/* ── Descripción + foto principal ── */}
        <div className={styles.sobreGrid}>
          <img src={fotos[1]} alt="Vista principal del parque" className={styles.sobreImgMain} onClick={() => setLightbox(1)} />
          <div className={styles.sobreTexts}>
            <h2 className={styles.sectionTitle}>Sobre la obra</h2>
            <div className={styles.divider} />
            <p className={styles.infoText}>
              La Alameda Coronel Althaus abarca más de <strong>12,000 metros cuadrados</strong> de desarrollo integral, inaugurada en el barrio de Mariscal Cáceres. Transformó una zona que anteriormente era de tierra en un moderno complejo de esparcimiento familiar y deportivo.
            </p>
            <p className={styles.infoText}>
              Cuenta con una moderna <strong>losa multideportiva</strong> equipada con tribunas techadas, iluminación LED y servicios higiénicos, convirtiéndose en el escenario perfecto para el deporte y los eventos comunitarios.
            </p>
            <p className={styles.infoText}>
              Más de <strong>2,000 m² de áreas verdes</strong>, arbustos y árboles ornamentales crean un verdadero pulmón urbano. Los más pequeños disfrutan de <strong>juegos infantiles con piso de caucho de seguridad</strong>, mientras los adultos se ejercitan en el <strong>mini gimnasio al aire libre</strong>. Banquetas, barandas y fuentes danzarinas completan este espacio para grandes y chicos.
            </p>
            <img src={fotos[2]} alt="Inauguración del parque" className={styles.sobreImgSec} onClick={() => setLightbox(2)} />
          </div>
        </div>

        {/* ── Características ── */}
        <div className={styles.featuresBlock}>
          <h2 className={styles.sectionTitle}>Características del parque</h2>
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
          <div className={`${styles.estadoIcon} ${styles.bg_green}`}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div>
            <h3 className={styles.estadoTitle}>Obra finalizada e inaugurada</h3>
            <p className={styles.estadoDesc}>
              En <strong>febrero de 2026</strong>, la alameda fue inaugurada oficialmente, transformando una zona que era de tierra en un espacio moderno con <strong>iluminación LED</strong> en todas sus áreas. Diseñada como complejo de esparcimiento familiar y deportivo para toda la comunidad de Mariscal Cáceres.
            </p>
          </div>
        </div>

        {/* ── Galería ── */}
        <div className={styles.galeriaBlock}>
          <h2 className={styles.sectionTitle}>Galería fotográfica</h2>
          <div className={styles.divider} />
          <div className={styles.galeriaGrid}>
            <img src={fotos[3]} alt="Parque 4" className={`${styles.gItem} ${styles.gWide}`} onClick={() => setLightbox(3)} />
            <img src={fotos[4]} alt="Parque 5" className={styles.gItem} onClick={() => setLightbox(4)} />
            <img src={fotos[5]} alt="Parque 6" className={styles.gItem} onClick={() => setLightbox(5)} />
            <img src={fotos[6]} alt="Parque 7" className={styles.gItem} onClick={() => setLightbox(6)} />
            <img src={fotos[7]} alt="Parque 8" className={styles.gItem} onClick={() => setLightbox(7)} />
            <img src={fotos[0]} alt="Parque vista aérea" className={`${styles.gItem} ${styles.gFull}`} onClick={() => setLightbox(0)} />
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
