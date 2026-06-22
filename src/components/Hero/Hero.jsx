import styles from './Hero.module.css'
import heroImg from '../../assets/foto-maldonado.jpg'
import somosFans from '../../assets/somos-fans.jpg'

const PARTICLES = [
  { size: 6,  left: '10%', delay: '0s',   dur: '6s',  color: 'rgba(232,25,44,.5)',   bottom: '15%' },
  { size: 4,  left: '20%', delay: '1.5s', dur: '8s',  color: 'rgba(247,148,29,.5)',  bottom: '10%' },
  { size: 8,  left: '35%', delay: '3s',   dur: '7s',  color: 'rgba(57,181,74,.4)',   bottom: '20%' },
  { size: 5,  left: '50%', delay: '0.8s', dur: '9s',  color: 'rgba(0,167,157,.4)',   bottom: '8%'  },
  { size: 7,  left: '65%', delay: '2.2s', dur: '6.5s',color: 'rgba(232,25,44,.35)',  bottom: '18%' },
  { size: 4,  left: '78%', delay: '4s',   dur: '8.5s',color: 'rgba(247,148,29,.4)',  bottom: '12%' },
  { size: 6,  left: '88%', delay: '1s',   dur: '7.5s',color: 'rgba(108,99,255,.4)',  bottom: '22%' },
]

const socials = [
  { label: 'Facebook',     handle: '@jesusmaldonadoperu',  color: '#1877F2', glow: 'rgba(24,119,242,.45)',  href: 'https://www.facebook.com/jesusmaldonadoperu/?locale=es_LA' },
  { label: 'Instagram',    handle: '@jesus_maldonado_sjl', color: 'linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', glow: 'rgba(225,48,108,.45)', href: 'https://www.instagram.com/jesus_maldonado_sjl?igsh=MjRwb2J2bmVmZ2t5' },
  { label: 'TikTok',       handle: '@jesusmaldonadosjl',   color: '#010101', glow: 'rgba(0,0,0,.35)',       href: 'https://www.tiktok.com/@jesusmaldonadosjl?_r=1&_t=ZS-97ErrWlhxqr' },
  { label: 'YouTube',      handle: '@jesussinfiltro',      color: '#FF0000', glow: 'rgba(255,0,0,.45)',    href: 'https://youtube.com/@jesussinfiltro?si=kxQhFhhlYPZxSYYo' },
  { label: 'Club de Fans', handle: '@somos_fans_',         img: somosFans,                                 href: 'https://www.tiktok.com/@somos_fans_?is_from_webapp=1&sender_device=pc' },
]

const SocialIcon = ({ s }) => {
  const open = e => {
    e.preventDefault()
    e.stopPropagation()
    window.open(s.href, '_blank', 'noopener,noreferrer')
  }
  return (
  <a href={s.href} onClick={open} className={styles.socialIcon} style={{ cursor: 'pointer' }}>
    {s.img ? (
      <div className={styles.socialCircle} style={{ overflow: 'hidden', padding: 0 }}>
        <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }} />
      </div>
    ) : (
      <div className={styles.socialCircle} style={{ background: s.color, boxShadow: `0 4px 16px ${s.glow}` }}>
        {s.label === 'Facebook' && (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        )}
        {s.label === 'Instagram' && (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none"/>
          </svg>
        )}
        {s.label === 'TikTok' && (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9a8.19 8.19 0 004.79 1.52V7.1a4.85 4.85 0 01-1.02-.41z"/>
          </svg>
        )}
        {s.label === 'YouTube' && (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
            <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
          </svg>
        )}
      </div>
    )}
    <span className={styles.socialName}>{s.label}</span>
    <span className={styles.socialHandle}>{s.handle}</span>
  </a>
  )
}

export default function Hero({ setPage }) {
  return (
    <section id="hero" className={styles.hero}>
      {/* Blobs atmosféricos */}
      <div className={styles.blob} style={{ width:520, height:520, background:'radial-gradient(circle, rgba(232,25,44,.16), transparent 70%)', top:-140, left:-140, animationDuration:'9s' }} />
      <div className={styles.blob} style={{ width:420, height:420, background:'radial-gradient(circle, rgba(247,148,29,.14), transparent 70%)', bottom:-80, left:'15%', animationDuration:'11s', animationDelay:'-4s' }} />
      <div className={styles.blob} style={{ width:360, height:360, background:'radial-gradient(circle, rgba(0,167,157,.13), transparent 70%)', top:'25%', right:'56%', animationDuration:'13s', animationDelay:'-7s' }} />

      {/* Partículas flotantes */}
      <div className={styles.particles}>
        {PARTICLES.map((p, i) => (
          <span key={i} className="particle" style={{
            width: p.size, height: p.size,
            left: p.left, bottom: p.bottom,
            background: p.color,
            animationDuration: p.dur,
            animationDelay: p.delay,
          }} />
        ))}
      </div>

      <div className={styles.content}>
        <button
          className={styles.apoyaBtn}
          onClick={() => { setPage && setPage('donaciones'); window.scrollTo({ top: 0 }) }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          APOYA A LA CAUSA
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
        <h1 className={styles.titleMain}>JESÚS</h1>
        <h1 className={styles.titleSub}>MALDONADO</h1>
        <p className={styles.desc}>
          Trabajamos para construir un distrito moderno,<br />
          seguro y con más oportunidades.
        </p>
        <button
          className="btn-primary"
          onClick={() => { setPage && setPage('simpatizantes'); window.scrollTo({ top: 0 }) }}
        >
          Únete a mi equipo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      <div className={styles.imageWrapper}>
        <img src={heroImg} alt="Maldonado" className={styles.heroImg} />
      </div>

      {/* Banner redes sociales en la parte inferior del hero */}
      <div className={styles.socialBar}>
        <span className={styles.socialBarLine} />
        <span className={styles.socialBarLabel}>SÍGUENOS EN REDES SOCIALES</span>
        <span className={styles.socialBarLine} />
        <div className={styles.socialIcons}>
          {socials.map(s => <SocialIcon key={s.label} s={s} />)}
        </div>
      </div>
    </section>
  )
}
