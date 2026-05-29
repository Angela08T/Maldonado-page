import styles from './Sobre.module.css'
import jesusImg from '../../assets/jesus.png'

const stats = [
  {
    color: 'red',
    valor: '30+',
    label: 'espacios recuperados',
    sub: 'operativos y recuperación de vías y zonas públicas',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    color: 'orange',
    valor: '80',
    label: 'obras y proyectos ejecutados',
    sub: 'parques, vías, áreas verdes y espacios deportivos',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M6 20V10l6-6 6 6v10"/><path d="M10 20v-6h4v6"/>
      </svg>
    ),
  },
  {
    color: 'green',
    valor: '1000+',
    label: 'Vecinos Beneficiados',
    sub: 'impactados por obras y mejoras urbanas',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    color: 'teal',
    valor: '15+',
    label: 'alianzas estratégicas',
    sub: 'trabajo conjunto con instituciones públicas y privadas',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
]

const valores = [
  {
    color: 'red',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    titulo: 'Transparencia',
    desc: 'Gestión honesta y abierta, donde cada vecino conoce el destino de los recursos públicos.',
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
    titulo: 'Compromiso',
    desc: 'Trabajo diario junto a las familias, priorizando las necesidades reales de cada barrio.',
  },
  {
    color: 'green',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    titulo: 'Desarrollo',
    desc: 'Inversión en infraestructura, educación y economía para un distrito moderno y competitivo.',
  },
  {
    color: 'teal',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    titulo: 'Inclusión',
    desc: 'Un distrito donde nadie se queda atrás, con igualdad de oportunidades para todos.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className={styles.section}>

      {/* ── Main grid ── */}
      <div className={styles.main}>

        {/* Columna izquierda: foto */}
        <div className={`${styles.imgCol} reveal`}>
          <div className={styles.imgFrame}>
            <div className={styles.circulo} />
            <img src={jesusImg} alt="Jesús Maldonado" className={styles.foto} />
          </div>
          <div className={styles.nameTag}>
            <span className={styles.nameTagNombre}>Jesús Maldonado</span>
            <span className={styles.nameTagCargo}>Alcalde de San Juan de Lurigancho</span>
            <div className={styles.nameTagLine} />
          </div>
        </div>

        {/* Columna derecha: contenido */}
        <div className={styles.bioCol}>
          <span className={`${styles.eyebrow} reveal`}>Sobre Jesús Maldonado</span>
          <h2 className={`${styles.titulo} reveal`}>
            Una gestión enfocada en seguridad, orden y obras para SJL
          </h2>
          <p className={`${styles.intro} reveal`}>
            Desde 2023, la gestión de Jesús Maldonado viene impulsando la recuperación de espacios
            públicos, obras viales, parques, seguridad ciudadana y proyectos urbanos en distintos
            sectores de San Juan de Lurigancho.
            <br /><br />
            Entre las principales acciones destacan la recuperación de la Av. Canto Grande,
            remodelación de parques, nuevas áreas verdes, coordinación con la PNP y ejecución
            de proyectos que benefician a miles de vecinos del distrito.
          </p>

          {/* Quote */}
          <div className={`${styles.quoteBlock} reveal`}>
            <span className={styles.quoteMarks}>"</span>
            <p className={styles.quoteText}>
              No podemos normalizar el abandono ni la delincuencia. SJL merece vivir con orden, obras y seguridad.
            </p>
            <span className={styles.quoteAuthor}>– Jesús Maldonado</span>
          </div>

          {/* Stats */}
          <div className={`${styles.stats} reveal`}>
            {stats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <div className={`${styles.statIcon} ${styles['ic_' + s.color]}`}>{s.icon}</div>
                <div className={styles.statBody}>
                  <span className={`${styles.statValor} ${styles['txt_' + s.color]}`}>{s.valor}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                  <span className={styles.statSub}>{s.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Botones */}
          <div className={`${styles.btns} reveal`}>
            <a href="#avances" className={styles.btnPrimary}>
              Ver Avances
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#gestion" className={styles.btnSecondary}>
              Conocer Propuestas
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Valores ── */}
      <div className={styles.valores}>
        {valores.map((v, i) => (
          <div key={i} className={`${styles.valorCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={`${styles.valorIcon} ${styles['ic_' + v.color]}`}>{v.icon}</div>
            <div>
              <h3 className={`${styles.valorTitulo} ${styles['txt_' + v.color]}`}>{v.titulo}</h3>
              <p className={styles.valorDesc}>{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
