import styles from './Gestion.module.css'

const cards = [
  { icon: '🛡️', cls: 'shield', title: 'Seguridad Ciudadana', desc: 'Más patrullaje, cámaras y presencia en las calles.' },
  { icon: '🤲', cls: 'social', title: 'Desarrollo Social',    desc: 'Programas y apoyos para las familias del distrito.' },
  { icon: '🌿', cls: 'leaf',   title: 'Medio Ambiente',       desc: 'Un distrito más limpio, verde y sostenible.' },
  { icon: '📊', cls: 'chart',  title: 'Desarrollo Económico', desc: 'Impulsamos el empleo y apoyamos a emprendedores.' },
]

export default function Gestion() {
  return (
    <section id="gestion" className={styles.section}>
      <div className={`${styles.left} reveal`}>
        <h2>Nuestra<br />Gestión</h2>
        <p>Transparencia, planificación y trabajo en equipo para seguir construyendo el Maldonado que soñamos.</p>
        <a href="#" className="btn-outline">
          Conoce Nuestra Gestión
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>

      <div className={styles.grid}>
        {cards.map((c, i) => (
          <div key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={`${styles.cardIcon} ${styles[c.cls]}`}>{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
