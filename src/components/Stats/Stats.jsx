import styles from './Stats.module.css'

export default function Stats() {
  return (
    <div id="stats" className={styles.stats}>
      <div className={styles.socialRow}>
        <div className={styles.socialHeading}>
          <span className={styles.socialHeadingLine} />
          <span className={styles.socialHeadingText}>Síguenos en redes sociales</span>
          <span className={styles.socialHeadingLine} />
        </div>
        <div className={styles.socialIcons}>
          {[
            { label: 'Facebook',  handle: '@jesusmaldonadoperu',  color: '#1877F2', glow: 'rgba(24,119,242,.45)',  href: 'https://www.facebook.com/jesusmaldonadoperu/?locale=es_LA',            icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="currentColor"/> },
            { label: 'Instagram', handle: '@jesus_maldonado_sjl', color: '#E1306C', glow: 'rgba(225,48,108,.45)', href: 'https://www.instagram.com/jesus_maldonado_sjl?igsh=MjRwb2J2bmVmZ2t5', icon: <><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></> },
            { label: 'TikTok',    handle: '@jesusmaldonadosjl',   color: '#EE1D52', glow: 'rgba(238,29,82,.45)',   href: 'https://www.tiktok.com/@jesusmaldonadosjl?_r=1&_t=ZS-97ErrWlhxqr',    icon: <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9a8.19 8.19 0 004.79 1.52V7.1a4.85 4.85 0 01-1.02-.41z"/> },
            { label: 'YouTube',   handle: '@jesussinfiltro',      color: '#FF0000', glow: 'rgba(255,0,0,.45)',     href: 'https://youtube.com/@jesussinfiltro?si=kxQhFhhlYPZxSYYo',             icon: <path fill="currentColor" d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/> },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <div className={styles.socialCircle} style={{ background: s.color, boxShadow: `0 6px 24px ${s.glow}` }}>
                <svg width="30" height="30" viewBox="0 0 24 24">{s.icon}</svg>
              </div>
              <span className={styles.socialName}>{s.label}</span>
              <span className={styles.socialHandle}>{s.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
