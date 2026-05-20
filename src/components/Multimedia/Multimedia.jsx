import styles from './Multimedia.module.css'

const items = [
  {
    id: 'reels',
    label: 'REELS',
    desc: 'Videos cortos que muestran el cambio',
    cta: 'VER REELS',
    bg: 'var(--red)',
    shadow: 'rgba(232,25,44,.35)',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: 'tiktoks',
    label: 'TIKTOKS',
    desc: 'Contenido viral para todos',
    cta: 'VER TIKTOKS',
    bg: '#111827',
    shadow: 'rgba(0,0,0,.4)',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.02a8.16 8.16 0 004.77 1.52V7.1a4.85 4.85 0 01-1-.41z"/>
      </svg>
    ),
  },
  {
    id: 'clips',
    label: 'CLIPS',
    desc: 'Clips emocionales del distrito',
    cta: 'VER CLIPS',
    bg: 'var(--teal)',
    shadow: 'rgba(0,167,157,.35)',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="15" height="13" rx="2"/>
        <path d="M17 9l5-3v12l-5-3V9z" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    id: 'memes',
    label: 'MEMES',
    desc: 'Memes para compartir',
    cta: 'DESCARGAR',
    bg: 'var(--green)',
    shadow: 'rgba(57,181,74,.35)',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
        <path d="M9 14s1 1.5 3 1.5 3-1.5 3-1.5"/>
      </svg>
    ),
  },
]

export default function Multimedia() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>CENTRO MULTIMEDIA</h2>
            <p className={styles.sub}>Contenido para compartir y viralizar el cambio</p>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.card} style={{ background: item.bg, boxShadow: `0 8px 32px ${item.shadow}` }}>
              <div className={styles.iconWrap}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.label}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <button className={styles.cardBtn}>{item.cta}</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
