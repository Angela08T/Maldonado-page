import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Inicio',            href: '#hero' },
  { label: 'Apoya a la Causa', page: 'donaciones' },
  { label: 'Gestión',           href: '#gestion' },
  { label: 'Avances y Obras',   href: '#avances' },
  { label: 'Noticias',          href: '#noticias' },
  { label: 'Contacto',          href: '#cta' },
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

  const textColor  = 'var(--dark)'
  const iconBg     = 'rgba(0,0,0,.07)'
  const barColor   = 'var(--dark)'

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>

        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          <div className={styles.logoName}>
            <span className={styles.logoFirst}>Jesús</span>
            <span className={styles.logoLast}>Maldonado</span>
          </div>
          <span className={styles.logoSub}>Avanzamos Juntos</span>
        </a>

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
                  className={active === l.href ? styles.activeLink : ''}
                  style={{ color: active === l.href ? 'var(--red)' : textColor }}
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
              className={`${styles.zonaBtn} ${page === 'zona' ? styles.zonaBtnActive : ''}`}
              onClick={() => { setActive(''); setPage('zona'); window.scrollTo({ top: 0 }) }}
            >
              Únete a tu Zona
            </button>
          </li>
          <li>
            <button
              className={`${styles.encuestasBtn} ${page === 'encuestas' ? styles.encuestasBtnActive : ''}`}
              onClick={() => { setActive(''); setPage('encuestas'); window.scrollTo({ top: 0 }) }}
            >
              Encuestas
            </button>
          </li>
          <li>
            <button
              className={`${styles.rendicionBtn} ${page === 'rendicion' ? styles.rendicionBtnActive : ''}`}
              onClick={() => { setActive(''); setPage('rendicion'); window.scrollTo({ top: 0 }) }}
            >
              Rendición de Cuentas
            </button>
          </li>
        </ul>

        {/* Social icons */}
        <div className={styles.social}>
          {[
            { label: 'Facebook', href: 'https://www.facebook.com/jesusmaldonadoperu/?locale=es_LA', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', fill: true },
            { label: 'Instagram', href: 'https://www.instagram.com/jesus_maldonado_sjl?igsh=MjRwb2J2bmVmZ2t5', instagram: true },
            { label: 'TikTok',    href: 'https://www.tiktok.com/@jesusmaldonadosjl?_r=1&_t=ZS-97ErrWlhxqr', tiktok: true },
            { label: 'YouTube',   href: 'https://youtube.com/@jesussinfiltro?si=kxQhFhhlYPZxSYYo', youtube: true },
          ].map(s => (
            <a key={s.label} href={s.href} target={s.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer" aria-label={s.label}
              style={{ background: iconBg, color: 'var(--dark)' }}
              className={styles.socialIcon}
            >
              <SocialSvg {...s} />
            </a>
          ))}
        </div>

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
          className={styles.zonaBtnMobile}
          onClick={() => { setOpen(false); setActive(''); setPage('zona'); window.scrollTo({ top: 0 }) }}
        >
          Únete a tu Zona
        </button>
        <button
          className={styles.encuestasBtnMobile}
          onClick={() => { setOpen(false); setActive(''); setPage('encuestas'); window.scrollTo({ top: 0 }) }}
        >
          Encuestas
        </button>
        <button
          className={styles.rendicionBtnMobile}
          onClick={() => { setOpen(false); setActive(''); setPage('rendicion'); window.scrollTo({ top: 0 }) }}
        >
          Rendición de Cuentas
        </button>
      </div>
    </>
  )
}

function SocialSvg({ path, fill, instagram, tiktok, youtube }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24"
      fill={fill ? 'currentColor' : 'none'}
      stroke={instagram ? 'currentColor' : 'none'}
      strokeWidth="2"
    >
      {path && <path d={path} />}
      {instagram && <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </>}
      {tiktok && <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9a8.19 8.19 0 004.79 1.52V7.1a4.85 4.85 0 01-1.02-.41z" />}
      {youtube && <path fill="currentColor" d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />}
    </svg>
  )
}
