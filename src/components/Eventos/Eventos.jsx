import styles from './Eventos.module.css'
import { eventos } from './eventosData'

const colorMap = {
  red:    { bg: 'rgba(232,25,44,.08)',  text: 'var(--red)',    border: 'rgba(232,25,44,.2)' },
  orange: { bg: 'rgba(247,148,29,.08)', text: 'var(--orange)', border: 'rgba(247,148,29,.2)' },
  green:  { bg: 'rgba(57,181,74,.08)',  text: 'var(--green)',  border: 'rgba(57,181,74,.2)' },
  teal:   { bg: 'rgba(0,167,157,.08)',  text: 'var(--teal)',   border: 'rgba(0,167,157,.2)' },
}

export default function Eventos({ onVerTodos }) {
  const preview = eventos.slice(0, 3)

  return (
    <section className={styles.section}>
      {/* header row */}
      <div className={styles.topRow}>
        <div>
          <span className={styles.eyebrow}>Agenda</span>
          <h2 className={styles.titulo}>Próximos Eventos</h2>
        </div>
        <button className={styles.verTodosBtn} onClick={onVerTodos}>
          Ver todos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>

      {/* event cards */}
      <div className={styles.grid}>
        {preview.map((ev, i) => {
          const c = colorMap[ev.color]
          return (
            <div key={ev.id} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              {/* date block */}
              <div className={styles.dateBlock} style={{ background: c.bg, borderColor: c.border }}>
                <span className={styles.dia} style={{ color: c.text }}>{ev.dia}</span>
                <span className={styles.mes} style={{ color: c.text }}>{ev.mes}</span>
              </div>

              {/* content */}
              <div className={styles.content}>
                <span className={styles.zona}>{ev.zona}</span>
                <h3 className={styles.nombre}>{ev.titulo}</h3>
                <div className={styles.meta}>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {ev.hora}
                  </span>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {ev.lugar}
                  </span>
                </div>
                <button className={styles.interesaBtn} style={{ color: c.text, borderColor: c.border, background: c.bg }}>
                  Me interesa
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* mobile ver más */}
      <div className={styles.verMasWrap}>
        <button className={styles.verMasBtn} onClick={onVerTodos}>
          Ver todos los eventos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
