import styles from './Gestion.module.css'

const programas = [
  {
    num: '01', color: 'red',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>
      </svg>
    ),
    title: 'MACROCENTRAL DE VIGILANCIA INTELIGENTE',
    desc: '500 cámaras con IA en las 8 zonas de mayor criminalidad, enlace directo a comisarías.',
  },
  {
    num: '02', color: 'red',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: 'PLAN "SJL SIN ZONAS ROJAS"',
    desc: 'Intervención en los 15 puntos más peligrosos. Serenazgo, PNP y Ministerio Público juntos.',
  },
  {
    num: '03', color: 'blue',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/><path d="M9 7h6"/>
      </svg>
    ),
    title: 'APP "CHAPA CHOROS"',
    desc: 'Botón de pánico para cada vecino. Respuesta en menos de 5 minutos con coordinación serenazgo.',
  },
  {
    num: '04', color: 'green',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/>
        <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
      </svg>
    ),
    title: 'PROGRAMA "RESCATA JOVEN"',
    desc: 'Centros de formación en 10 zonas. Deporte, oficio y empleo como alternativa a las pandillas.',
  },
  {
    num: '05', color: 'blue',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'SERENAZGO CON MÉRITO',
    desc: 'Más plazas, mejor sueldo y capacitación certificada. Un serenazgo que la delincuencia respete.',
  },
  {
    num: '06', color: 'teal',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'RECUPERACIÓN DE ESPACIOS PÚBLICOS',
    desc: 'Parques oscuros e iluminados, activados y devueltos a las familias del distrito.',
  },
]

const metas = [
  {
    accion: 'INSTALAR', num: '500', cosa: 'CÁMARAS MÁS',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
  },
  {
    accion: 'CONTRATAR', num: '600', cosa: 'SERENOS MÁS',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4"/>
        <path d="M6 21v-2a6 6 0 0112 0v2"/>
        <path d="M9 5h6"/>
      </svg>
    ),
  },
  {
    accion: 'ADQUIRIR', num: '100', cosa: 'CAMIONETAS MÁS',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="2"/>
        <circle cx="12" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
      </svg>
    ),
  },
  {
    accion: 'COLOCAR', num: '2000', cosa: 'LUCES LED MÁS',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26A7 7 0 0112 2z"/>
      </svg>
    ),
  },
]

export default function Gestion() {
  return (
    <section id="gestion" className={styles.section}>

      {/* ── Encabezado ── */}
      <div className={`${styles.header} reveal`}>
        <span className={styles.eyebrow}>Propuestas 2026 – 2030</span>
        <h2 className={styles.titulo}>
          NUESTRAS <span>PRIORIDADES</span>
        </h2>
        <div className={styles.titleLine} />
        <p className={styles.subtitulo}>
          Seguridad real, jóvenes con futuro y espacios devueltos a las familias.
        </p>
      </div>

      {/* ── Grid programas ── */}
      <div className={styles.grid}>
        {programas.map((p, i) => (
          <div
            key={i}
            className={`${styles.card} ${styles['border_' + p.color]} reveal`}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <span className={styles.cardNum}>{p.num}</span>
            <div className={`${styles.cardIcon} ${styles['ic_' + p.color]}`}>{p.icon}</div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── ¡AHORA NOS TOCA! ── */}
      <div className={`${styles.metasSection} reveal`}>

        <div className={styles.metasTitleWrap}>
          <h3 className={styles.metasTitulo}>
            <span className={styles.bang}>¡</span>AHORA NOS{' '}
            <span className={styles.tituloRed}>TOCA</span>
            <span className={styles.bang}>!</span>
          </h3>
        </div>

        <div className={styles.metasStars}>
          <span className={styles.starBlue}>★</span>
          <span className={styles.starRed}>★</span>
          <span className={styles.starBlue}>★</span>
        </div>

        {/* 5 tarjetas stat */}
        <div className={styles.metasGrid}>
          {metas.map((m, i) => (
            <div
              key={i}
              className={`${styles.metaCard} reveal`}
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              <div className={styles.metaIcon}>{m.icon}</div>
              <span className={styles.metaAccion}>{m.accion}</span>
              <span className={styles.metaNum}>{m.num}</span>
              <span className={styles.metaCosa}>{m.cosa}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
