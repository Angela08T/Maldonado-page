import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Inicio',               href: '#hero' },
  { label: 'Nuestras Prioridades', href: '#gestion' },
  { label: 'Contacto',             href: '#cta' },
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

