import { useEffect, useState } from 'react'
import styles from './AleCoworkingPage.module.css'
import noti6 from '../../assets/noti6.jpg'
import noti7 from '../../assets/noti7.jpg'
import noti8 from '../../assets/noti8.jpg'

const fotos = [noti8, noti6, noti7]

const datos = [
  { label: 'Servicio',      val: 'ALE + Coworking Municipal' },
  { label: 'Foco',          val: 'Empleo y Emprendimiento' },
  { label: 'Aliados',       val: 'MTPE, GIZ y Unión Europea' },
  { label: 'Estado',        val: 'Inaugurado', highlight: true },
]

const features = [
  {
    color: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Orientación laboral',
    desc: 'La ALE brinda orientación personalizada sobre oportunidades de empleo, especialmente para jóvenes, mujeres y personas en situación de vulnerabilidad.',
  },
  {
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Intermediación laboral',
    desc: 'Conecta a trabajadores con empresas del sector privado, facilitando el acceso al empleo formal en el distrito.',
  },
  {
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
    title: 'Capacitación y formación',
    desc: 'Información y acceso a programas de capacitación que fortalecen las competencias laborales de la población del distrito.',
  },
  {
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Vinculación con empresas',
    desc: 'Alianzas con el sector privado y la cooperación internacional para ampliar las oportunidades de inserción laboral.',
  },
  {
    color: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Coworking para emprendedores',
    desc: 'Espacio de trabajo colaborativo que promueve el intercambio de conocimientos y el fortalecimiento de capacidades empresariales.',
  },
  {
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Inclusión económica',
    desc: 'Acerca servicios que generan mayores oportunidades para la población, fortaleciendo la actividad económica local.',
  },
]

export default function AleCoworkingPage({ onBack }) {
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
        <img src={noti8} alt="Coworking Municipal SJL" className={styles.heroImg} />
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
          <span className={styles.badgeHero}>Inaugurado · Empleo y Emprendimiento</span>
          <h1 className={styles.heroTitle}>Agencia Local de Empleo<br/><span className={styles.accent}>y Coworking Municipal</span></h1>
          <p className={styles.heroSub}>Nuevos espacios para el empleo, la capacitación y el desarrollo empresarial · SJL</p>
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
            src={noti6}
            alt="Inauguración Agencia Local de Empleo"
            className={styles.sobreImgMain}
            onClick={() => setLightbox(1)}
          />
          <div className={styles.sobreTexts}>
            <h2 className={styles.sectionTitle}>Sobre la iniciativa</h2>
            <div className={styles.divider} />
            <p className={styles.infoText}>
              La Municipalidad de San Juan de Lurigancho puso en funcionamiento la <strong>Agencia Local de Empleo (ALE)</strong> y el <strong>Centro de Emprendimiento Coworking</strong>, dos nuevos espacios destinados a facilitar el acceso de la ciudadanía a oportunidades de empleo, capacitación y desarrollo empresarial.
            </p>
            <p className={styles.infoText}>
              La ALE brindará orientación e intermediación laboral, información sobre oportunidades de capacitación y vinculación con empresas, contribuyendo a mejorar las oportunidades de acceso al <strong>empleo formal</strong> especialmente para jóvenes, mujeres y personas en situación de vulnerabilidad.
            </p>
            <p className={styles.infoText}>
              Por su parte, el <strong>Centro de Emprendimiento Coworking</strong> ofrecerá un espacio de trabajo colaborativo para emprendedores y emprendedoras del distrito, promoviendo el intercambio de conocimientos, el fortalecimiento de capacidades y el acceso a herramientas para impulsar sus iniciativas económicas.
            </p>
            <p className={styles.infoText}>
              La implementación es resultado del trabajo conjunto entre la Municipalidad de SJL, el <strong>Ministerio de Trabajo y Promoción del Empleo</strong>, actores del sector privado y la cooperación internacional con el apoyo de la <strong>Unión Europea y la Cooperación Alemana GIZ</strong>.
            </p>
            <img
              src={noti7}
              alt="Asistentes en la ceremonia de inauguración"
              className={styles.sobreImgSec}
              onClick={() => setLightbox(2)}
            />
          </div>
        </div>

        {/* ── Características ── */}
        <div className={styles.featuresBlock}>
          <h2 className={styles.sectionTitle}>Servicios y beneficios</h2>
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
          <div className={`${styles.estadoIcon} ${styles.bg_teal}`}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div>
            <h3 className={styles.estadoTitle}>Inaugurado · Mayor inclusión económica para el distrito</h3>
            <p className={styles.estadoDesc}>
              Durante la ceremonia de inauguración, las autoridades destacaron la importancia de acercar servicios que contribuyan a <strong>generar mayores oportunidades</strong> para la población, fortalecer la actividad económica local y promover una mayor inclusión económica en San Juan de Lurigancho.
            </p>
          </div>
        </div>

        {/* ── Galería ── */}
        <div className={styles.galeriaBlock}>
          <h2 className={styles.sectionTitle}>Galería fotográfica</h2>
          <div className={styles.divider} />
          <div className={styles.galeriaGrid}>
            <img src={noti8} alt="Coworking Municipal"          className={`${styles.gItem} ${styles.gWide}`} onClick={() => setLightbox(0)} />
            <img src={noti6} alt="Ceremonia de inauguración"    className={styles.gItem}                       onClick={() => setLightbox(1)} />
            <img src={noti7} alt="Asistentes en la ceremonia"   className={`${styles.gItem} ${styles.gFull}`} onClick={() => setLightbox(2)} />
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
