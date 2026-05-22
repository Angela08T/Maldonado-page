import styles from './Gestion.module.css'

const cards = [
  {
    color: 'red',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Seguridad Ciudadana',
    desc: 'Más patrullaje, cámaras y presencia en las calles para que cada familia viva tranquila.',
    stat: '+40%', statLabel: 'cobertura de serenazgo',
  },
  {
    color: 'orange',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Desarrollo Social',
    desc: 'Programas de apoyo a familias vulnerables, adultos mayores y jóvenes en riesgo.',
    stat: '15K+', statLabel: 'familias beneficiadas',
  },
  {
    color: 'green',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 7 7 4 2 6c0 5 3 9 10 6zM12 12c0-5 5-8 10-6 0 5-3 9-10 6z"/>
      </svg>
    ),
    title: 'Medio Ambiente',
    desc: 'Un distrito más limpio, verde y sostenible con parques, áreas naturales y gestión de residuos.',
    stat: '18', statLabel: 'nuevas áreas verdes',
  },
  {
    color: 'teal',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: 'Desarrollo Económico',
    desc: 'Impulsamos el empleo local, apoyamos a emprendedores y atraemos inversión al distrito.',
    stat: '5K+', statLabel: 'empleos generados',
  },
]

export default function Gestion() {
  return (
    <section id="gestion" className={styles.section}>

      {/* Decoración de fondo */}
      <div className={styles.bgDeco1} />
      <div className={styles.bgDeco2} />

      <div className={styles.inner}>
        {/* ── Columna izquierda ── */}
        <div className={`${styles.left} reveal`}>
          <span className={styles.eyebrow}>Gestión Municipal</span>
          <h2 className={styles.titulo}>Nuestra<br />Gestión</h2>
          <p className={styles.desc}>
            Transparencia, planificación y trabajo en equipo para seguir
            construyendo el Maldonado que soñamos.
          </p>

          <div className={styles.miniStats}>
            <div className={styles.miniStat}>
              <span className={styles.miniNum}>30<span>+</span></span>
              <span className={styles.miniLabel}>Obras ejecutadas</span>
            </div>
            <div className={styles.miniStat}>
              <span className={styles.miniNum}>100<span>K+</span></span>
              <span className={styles.miniLabel}>Vecinos beneficiados</span>
            </div>
          </div>

          <a href="#" className={styles.cta}>
            Conoce Nuestra Gestión
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        {/* ── Grid de tarjetas ── */}
        <div className={styles.grid}>
          {cards.map((c, i) => (
            <div key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={`${styles.cardIcon} ${styles[c.color]}`}>{c.icon}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
              <div className={`${styles.cardStat} ${styles['stat_' + c.color]}`}>
                <strong>{c.stat}</strong> {c.statLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
