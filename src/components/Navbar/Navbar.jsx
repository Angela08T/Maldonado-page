import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Inicio',               href: '#hero' },
  { label: 'Nuestras Prioridades', href: '#gestion' },
]

const socialLinks = [
  {
    label: 'Facebook', color: '#1877F2',
    href: 'https://www.facebook.com/jesusmaldonadoperu/?locale=es_LA',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram', color: '#E1306C',
    href: 'https://www.instagram.com/jesus_maldonado_sjl?igsh=MjRwb2J2bmVmZ2t5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'TikTok', color: '#010101',
    href: 'https://www.tiktok.com/@jesusmaldonadosjl?_r=1&_t=ZS-97ErrWlhxqr',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube', color: '#FF0000',
    href: 'https://youtube.com/@jesussinfiltro?si=kxQhFhhlYPZxSYYo',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
]

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`) })
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const textColor = 'var(--dark)'
  const barColor  = 'var(--dark)'

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>

        {/* Logo — oculto en móvil */}
        <a href="#hero" className={styles.logo}>
          <div className={styles.logoName}>
            <span className={styles.logoFirst}>Jesús</span>
            <span className={styles.logoLast}>Maldonado</span>
          </div>
          <span className={styles.logoSub}>El Cambio Continúa</span>
        </a>

        {/* Redes sociales — solo móvil */}
        <div className={styles.mobileSocial}>
          {socialLinks.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialIcon}
              aria-label={s.label}
              style={{ color: s.color }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href || l.page}>
              {l.page ? (
                <button
                  className={styles.linkBtn}
                  onClick={() => { setActive(''); setPage(l.page); window.scrollTo({ top: 0 }) }}
                >
                  {l.label}
                </button>
              ) : (
                <a
                  href={l.href}
                  className={page === 'home' && active === l.href ? styles.activeLink : ''}
                  style={{ color: page === 'home' && active === l.href ? 'var(--red)' : textColor }}
                  onClick={() => {
                    setActive(l.href)
                    page !== 'home' && setPage('home')
                  }}
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <button
              className={`${styles.encuestasBtn} ${page === 'encuestas' ? styles.encuestasBtnActive : ''}`}
              onClick={() => { setActive(''); setPage('encuestas'); window.scrollTo({ top: 0 }) }}
            >
              Encuestas
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menú"
        >
          <span style={{ background: barColor }} />
          <span style={{ background: barColor }} />
          <span style={{ background: barColor }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.menuOpen : ''}`}>
        {links.map(l => l.page ? (
          <button
            key={l.page}
            className={styles.linkBtnMobile}
            onClick={() => { setOpen(false); setActive(''); setPage(l.page); window.scrollTo({ top: 0 }) }}
          >
            {l.label}
          </button>
        ) : (
          <a
            key={l.href}
            href={l.href}
            onClick={() => { setOpen(false); setActive(l.href); page !== 'home' && setPage('home') }}
          >
            {l.label}
          </a>
        ))}
        <button
          className={styles.encuestasBtnMobile}
          onClick={() => { setOpen(false); setActive(''); setPage('encuestas'); window.scrollTo({ top: 0 }) }}
        >
          Encuestas
        </button>
      </div>
    </>
  )
}

