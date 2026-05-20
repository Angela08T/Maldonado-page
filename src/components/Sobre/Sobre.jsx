import styles from './Sobre.module.css'
import jesusImg from '../../assets/jesus.png'

const valores = [
  {
    color: 'red',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    titulo: 'Transparencia',
    desc: 'Gestión honesta y abierta, donde cada vecino conoce el destino de los recursos públicos.',
  },
  {
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    titulo: 'Compromiso',
    desc: 'Trabajo diario por las familias, priorizando las necesidades reales de cada barrio.',
  },
  {
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
      </svg>
    ),
    titulo: 'Inclusión',
    desc: 'Un distrito donde nadie se queda atrás, con igualdad de oportunidades para todos.',
  },
]

const trayectoria = [
  { anio: '2023', titulo: 'Inicio de Gestión', desc: 'Asumió la alcaldía con un plan de trabajo claro, priorizando obras y servicios para los vecinos.' },
  { anio: '2024', titulo: 'Obras en Marcha', desc: 'Se ejecutaron las primeras obras de infraestructura vial, parques y mejoras en servicios básicos.' },
  { anio: '2025', titulo: 'Expansión Social', desc: 'Ampliación de programas de salud, educación y apoyo a familias vulnerables en todo el distrito.' },
  { anio: '2026', titulo: 'Consolidación', desc: 'Culminación del plan de gobierno con más de 25 obras entregadas y 100 mil vecinos beneficiados.' },
]

const propuestas = [
  {
    color: 'red',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    titulo: 'Salud para Todos',
    desc: 'Ampliar y modernizar los centros de salud, garantizando atención médica gratuita y de calidad para cada familia del distrito.',
    meta: '12 centros de salud renovados',
  },
  {
    color: 'orange',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
    titulo: 'Educación de Calidad',
    desc: 'Dotar a todas las escuelas públicas de infraestructura moderna, conectividad y programas de formación técnica para los jóvenes.',
    meta: '30 colegios equipados con tecnología',
  },
  {
    color: 'green',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    titulo: 'Seguridad Ciudadana',
    desc: 'Implementar un sistema integral de seguridad con cámaras, serenazgo modernizado y trabajo coordinado con la Policía Nacional.',
    meta: '200 cámaras instaladas en zonas críticas',
  },
  {
    color: 'teal',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    titulo: 'Empleo y Economía',
    desc: 'Crear un fondo de apoyo a emprendedores, ferias productivas y convenios con empresas para generar puestos de trabajo locales.',
    meta: '5,000 nuevos empleos formales',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <h2 className="section-title reveal">Sobre Jesús Maldonado</h2>
      <div className="section-divider reveal" />

      {/* ── Foto + Bio ── */}
      <div className={styles.main}>
        <div className={`${styles.imgCol} reveal`}>
          <div className={styles.imgFrame}>
            <div className={styles.circulo} />
            <img src={jesusImg} alt="Jesús Maldonado" className={styles.foto} />
            <div className={styles.fotoPie} />
          </div>
          <div className={styles.nameTag}>
            <span className={styles.nameTagNombre}>Jesús Maldonado</span>
            <span className={styles.nameTagCargo}>Alcalde de San Juan de Lurigancho</span>
          </div>
        </div>

        <div className={styles.bioCol}>
          <p className={`${styles.intro} reveal`}>
            Jesús Maldonado es un líder comprometido con el progreso de su distrito,
            con años de experiencia en gestión pública y trabajo comunitario.
            Su visión es construir un distrito moderno, seguro e inclusivo donde
            cada familia tenga acceso a mejores servicios y oportunidades.
          </p>
          <blockquote className={`${styles.quote} reveal`}>
            "No trabajamos por votos, trabajamos por personas.
            El progreso de nuestro distrito se construye juntos, todos los días."
          </blockquote>
          <a href="#avances" className={`btn-primary ${styles.cta} reveal`}>
            Ver Avances
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Valores ── */}
      <div className={styles.valores}>
        {valores.map((v, i) => (
          <div key={i} className={`${styles.valorCard} ${styles['card_' + v.color]} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={`${styles.valorIcon} ${styles[v.color]}`}>{v.icon}</div>
            <h3 className={styles.valorTitulo}>{v.titulo}</h3>
            <p className={styles.valorDesc}>{v.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Trayectoria ── */}
      <div className={styles.trayectoriaWrap}>
        <h3 className={`${styles.subTitulo} reveal`}>Trayectoria</h3>
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {trayectoria.map((t, i) => (
            <div key={i} className={`${styles.timelineItem} reveal`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className={`${styles.timelineDot} ${styles[['red','orange','green','teal'][i]]}`} />
              <div className={styles.timelineAnio}>{t.anio}</div>
              <div className={`${styles.timelineCard} ${styles['card_' + ['red','orange','green','teal'][i]]}`}>
                <h4>{t.titulo}</h4>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Propuestas ── */}
      <div className={styles.propuestasWrap}>
        <h3 className={`${styles.subTitulo} reveal`}>Propuestas Principales</h3>
        <div className={styles.propuestas}>
          {propuestas.map((p, i) => (
            <div key={i} className={`${styles.propuestaCard} ${styles['card_' + p.color]} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={`${styles.propuestaIcono} ${styles[p.color]}`}>{p.icon}</div>
              <h4 className={styles.propuestaTitulo}>{p.titulo}</h4>
              <p className={styles.propuestaDesc}>{p.desc}</p>
              <div className={`${styles.propuestaMeta} ${styles['meta_' + p.color]}`}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {p.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
