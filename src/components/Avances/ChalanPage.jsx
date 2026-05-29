import { useEffect, useState } from 'react'
import styles from './ChalanPage.module.css'
import img1 from '../../assets/chalan1.jpg'
import img2 from '../../assets/chalan2.jpg'
import img3 from '../../assets/chalan3.jpg'
import img4 from '../../assets/chalan4.jpg'
import img5 from '../../assets/chalan5.jpg'
import img6 from '../../assets/chalan6.jpg'

const fotos = [img1, img2, img3, img4, img5, img6]

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20"/>
      </svg>
    ),
    color: 'green',
    title: 'Losa Multideportiva',
    desc: 'Espacio deportivo de primer nivel para la práctica del deporte comunitario y eventos al aire libre.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/>
      </svg>
    ),
    color: 'teal',
    title: 'Campo de Grass Sintético',
    desc: 'Amplio campo con césped sintético de alta calidad para la práctica del fútbol y actividades recreativas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    color: 'orange',
    title: 'Juegos Infantiles',
    desc: 'Zona de entretenimiento segura para los más pequeños, diseñada para el juego y el desarrollo infantil.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V2M2 12h20"/><path d="M7 7c0 2.8 5 8 5 8s5-5.2 5-8a5 5 0 00-10 0z"/>
      </svg>
    ),
    color: 'green',
    title: 'Áreas Verdes',
    desc: 'Espacios naturales con vegetación que embellecen el parque y aportan oxígeno y frescor a la comunidad.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    color: 'teal',
    title: 'Iluminación LED',
    desc: 'Sistema de iluminación LED en todo el parque que garantiza la seguridad y permite el uso nocturno del espacio.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l9-14 9 14H3z"/><path d="M3 17h18"/>
      </svg>
    ),
    color: 'orange',
    title: 'Asfaltado de Calles Aledañas',
    desc: 'Mejoramiento de las calles circundantes para una mejor accesibilidad y entorno urbano renovado.',
  },
]

export default function ChalanPage({ onBack }) {
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
        <img src={fotos[0]} alt="Parque El Chalán de Campoy" className={styles.heroImg} />
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
          <span className={styles.badgeHero}>Obra Inaugurada</span>
          <h1 className={styles.heroTitle}>Parque<br/><span className={styles.accent}>El Chalán</span></h1>
          <p className={styles.heroSub}>Campoy · San Juan de Lurigancho</p>
        </div>
      </div>

      <div className={styles.container}>

        <div className={styles.fichaGrid}>
          {[
            { label: 'Ubicación',      val: 'Campoy' },
            { label: 'Distrito',       val: 'SJL' },
            { label: 'Instalaciones',  val: 'Multideportivas' },
            { label: 'Estado',         val: 'Inaugurado', highlight: true },
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
          <img src={fotos[1]} alt="Parque El Chalán" className={styles.sobreImgMain} onClick={() => setLightbox(1)} />
          <div className={styles.sobreTexts}>
            <h2 className={styles.sectionTitle}>Sobre el parque</h2>
            <div className={styles.divider} />
            <p className={styles.infoText}>
              La Municipalidad de San Juan de Lurigancho inauguró oficialmente el <strong>parque El Chalán de Campoy</strong>, un nuevo espacio público que beneficiará a cientos de vecinos de la zona. La ceremonia contó con la presencia de entusiastas residentes, quienes celebraron la entrega de esta moderna infraestructura diseñada para mejorar la calidad de vida de la comunidad.
            </p>
            <p className={styles.infoText}>
              El parque cuenta con una serie de instalaciones de primer nivel, entre las que destacan una <strong>losa multideportiva</strong>, un amplio <strong>campo de grass sintético</strong>, juegos infantiles, áreas verdes, baños públicos y un sistema de <strong>iluminación LED</strong> que garantiza la seguridad y el uso nocturno del espacio.
            </p>
            <p className={styles.infoText}>
              Como parte del proyecto, se realizó el <strong>asfaltado de las calles aledañas</strong> al parque, mejorando la accesibilidad y el entorno urbano. El uso del parque los fines de semana será <strong>exclusivo para niños, niñas, adolescentes y mujeres</strong>, y totalmente gratuito.
            </p>
            <img src={fotos[2]} alt="Instalaciones del parque" className={styles.sobreImgSec} onClick={() => setLightbox(2)} />
          </div>
        </div>

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

        <div className={styles.estadoBlock}>
          <div className={`${styles.estadoIcon} ${styles.bg_green}`}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div>
            <h3 className={styles.estadoTitle}>Un espacio para toda la comunidad</h3>
            <p className={styles.estadoDesc}>
              La alegría de los vecinos fue evidente durante la inauguración, ya que este nuevo espacio no solo renueva la zona, sino que también promueve la <strong>convivencia comunitaria, el deporte y la recreación</strong>. El parque El Chalán de Campoy se convierte así en un ejemplo de inversión pública orientada al bienestar y desarrollo social. Con esta obra, reafirmamos nuestro compromiso con la <strong>transformación urbana</strong> y la creación de espacios públicos que contribuyan a mejorar la calidad de vida de los ciudadanos.
            </p>
          </div>
        </div>

        <div className={styles.galeriaBlock}>
          <h2 className={styles.sectionTitle}>Galería fotográfica</h2>
          <div className={styles.divider} />
          <div className={styles.galeriaGrid}>
            <img src={fotos[3]} alt="Parque Chalán 4" className={`${styles.gItem} ${styles.gWide}`} onClick={() => setLightbox(3)} />
            <img src={fotos[4]} alt="Parque Chalán 5" className={styles.gItem} onClick={() => setLightbox(4)} />
            <img src={fotos[5]} alt="Parque Chalán 6" className={`${styles.gItem} ${styles.gFull}`} onClick={() => setLightbox(5)} />
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
