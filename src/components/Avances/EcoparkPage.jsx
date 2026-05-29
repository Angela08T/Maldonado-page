import { useEffect, useState } from 'react'
import styles from './EcoparkPage.module.css'
import img1    from '../../assets/eco1.jpg'
import img2    from '../../assets/eco2.jpg'
import img3    from '../../assets/eco3.jpg'
import img4  from '../../assets/eco4.jpg'
import img5  from '../../assets/eco5.jpg'
import img6  from '../../assets/eco6.jpg'
import img7  from '../../assets/eco7.jpg'
import img8  from '../../assets/eco8.jpg'
import img9  from '../../assets/eco9.jpg'
import img10 from '../../assets/eco10.jpg'
import img11 from '../../assets/eco11.jpg'

const fotos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V2M2 12h20"/><path d="M7 7c0 2.8 5 8 5 8s5-5.2 5-8a5 5 0 00-10 0z"/>
      </svg>
    ),
    color: 'green',
    title: 'Pulmón Verde Comunitario',
    desc: 'Un espacio de aprendizaje y encuentro que transforma lo que antes era abandono en naturaleza viva para toda la familia.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20"/>
      </svg>
    ),
    color: 'teal',
    title: 'Referente Ambiental y Turístico',
    desc: 'Atrae a miles de visitantes y siembra conciencia sobre el cuidado del planeta de manera lúdica e interactiva.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    color: 'orange',
    title: 'Animales del Ecopark',
    desc: 'Caballos, ovejas, pavos reales, llamas y vacas conviven en el parque, acercando a los niños al mundo animal.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    color: 'green',
    title: 'Encuentro Familiar',
    desc: 'Espacio diseñado para la convivencia comunitaria, donde grandes y pequeños disfrutan juntos de la naturaleza.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/>
        <path d="M9 6V4h6v2"/>
      </svg>
    ),
    color: 'teal',
    title: 'Entrada Ecológica',
    desc: 'El ingreso es con una botella de plástico o cualquier material reciclable, fomentando el reciclaje desde la acción.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    color: 'orange',
    title: 'Abierto Todos los Días',
    desc: 'De lunes a domingo, incluidos feriados, de 9:00 a.m. a 4:00 p.m. ¡Sin excusas para visitar el Ecopark!',
  },
]

export default function EcoparkPage({ onBack }) {
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
        <img src={fotos[0]} alt="Ecopark Motupe" className={styles.heroImg} />
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
          <span className={styles.badgeHero}>Inaugurado · Motupe</span>
          <h1 className={styles.heroTitle}>Primer<br/><span className={styles.accent}>EcoPark SJL</span></h1>
          <p className={styles.heroSub}>Motupe · San Juan de Lurigancho</p>
        </div>
      </div>

      <div className={styles.container}>

        <div className={styles.fichaGrid}>
          {[
            { label: 'Ubicación',    val: 'Motupe, SJL' },
            { label: 'Horario',      val: '9:00 am – 4:00 pm' },
            { label: 'Días',         val: 'Lun – Dom + Feriados' },
            { label: 'Estado',       val: 'Inaugurado', highlight: true },
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
          <img src={fotos[9]} alt="Ecopark vista principal" className={styles.sobreImgMain} onClick={() => setLightbox(9)} />
          <div className={styles.sobreTexts}>
            <h2 className={styles.sectionTitle}>Sobre el Ecopark</h2>
            <div className={styles.divider} />
            <p className={styles.infoText}>
              Este espacio, que antes fue sinónimo de <strong>abandono y ruinas</strong>, ha sido transformado en un verdadero pulmón verde de aprendizaje y encuentro comunitario. Hoy, el Ecopark se consolida como un <strong>referente ambiental y turístico</strong> que atrae a miles de visitantes, sembrando conciencia sobre el cuidado del planeta de manera lúdica e interactiva.
            </p>
            <p className={styles.infoText}>
              Ya estrenamos nuestro primer EcoPark, ubicado en <strong>Motupe</strong>, con la presencia del alcalde Jesús Maldonado y miles de vecinos. Nace un nuevo espacio de reunión familiar y de concientización ambiental donde conviven caballos, ovejas, pavos reales, llamas y vacas.
            </p>
            <p className={styles.infoText}>
              Con esta celebración, queda clara la visión de una gestión que prioriza la <strong>regeneración urbana y el bienestar social</strong>. El Ecopark se erige como un legado vivo que inspira y educa, asegurando que la conexión con la naturaleza y la alegría familiar sigan creciendo en los años venideros.
            </p>
            <img src={fotos[2]} alt="Visitantes en el Ecopark" className={styles.sobreImgSec} onClick={() => setLightbox(2)} />
          </div>
        </div>

        <div className={styles.entradaBanner}>
          <div className={styles.entradaIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6V4h6v2"/><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
            </svg>
          </div>
          <div>
            <h3 className={styles.entradaTitle}>¿Cómo ingresar al Ecopark?</h3>
            <p className={styles.entradaDesc}>
              La entrada es <strong>una botella de plástico o cualquier material reciclable</strong>. Todos los vecinos pueden visitarlo de <strong>lunes a domingo</strong> (incluido feriados), de <strong>9:00 a.m. a 4:00 p.m.</strong> ¡Te esperamos!
            </p>
          </div>
        </div>

        <div className={styles.featuresBlock}>
          <h2 className={styles.sectionTitle}>¿Qué encontrarás en el Ecopark?</h2>
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

        <div className={styles.galeriaBlock}>
          <h2 className={styles.sectionTitle}>Galería fotográfica</h2>
          <div className={styles.divider} />
          <div className={styles.galeriaGrid}>
            <img src={fotos[3]}  alt="Ecopark 4"  className={`${styles.gItem} ${styles.gWide}`}  onClick={() => setLightbox(3)} />
            <img src={fotos[4]}  alt="Ecopark 5"  className={styles.gItem}                        onClick={() => setLightbox(4)} />
            <img src={fotos[5]}  alt="Ecopark 6"  className={styles.gItem}                        onClick={() => setLightbox(5)} />
            <img src={fotos[6]}  alt="Ecopark 7"  className={styles.gItem}                        onClick={() => setLightbox(6)} />
            <img src={fotos[7]}  alt="Ecopark 8"  className={styles.gItem}                        onClick={() => setLightbox(7)} />
            <img src={fotos[8]}  alt="Ecopark 9"  className={`${styles.gItem} ${styles.gWide}`}  onClick={() => setLightbox(8)} />
            <img src={fotos[9]}  alt="Ecopark 10" className={styles.gItem}                        onClick={() => setLightbox(9)} />
            <img src={fotos[10]} alt="Ecopark 11" className={`${styles.gItem} ${styles.gFull}`}  onClick={() => setLightbox(10)} />
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
