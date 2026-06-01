import styles from './Footer.module.css'

const navLinks = [
  { label: 'INICIO' },
  { label: 'QUIÉN SOY' },
  { label: 'PROPUESTAS' },
  { label: 'ZONAS' },
  { label: 'MULTIMEDIA' },
  { label: 'PARTICIPA' },
  { label: 'NOTICIAS' },
]

const logoLetters = [
  { char: 'J', color: '#D62828' },
  { char: 'E', color: '#0057B8' },
  { char: 'S', color: '#F04444' },
  { char: 'Ú', color: '#2B7FE0' },
  { char: 'S', color: '#A01E1E' },
  { char: ' ', color: '#003D82' },
  { char: 'M', color: '#D62828' },
  { char: 'A', color: '#0057B8' },
  { char: 'L', color: '#F04444' },
  { char: 'D', color: '#2B7FE0' },
  { char: 'O', color: '#A01E1E' },
  { char: 'N', color: '#003D82' },
  { char: 'A', color: '#D62828' },
  { char: 'D', color: '#0057B8' },
  { char: 'O', color: '#003D82' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Logo */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            {logoLetters.map((l, i) => (
              <span key={i} style={{ color: l.color }}>{l.char}</span>
            ))}
          </div>
          <p className={styles.brandSub}>AVANZAMOS JUNTOS</p>
        </div>

        {/* Nav */}
        <nav className={styles.nav}>
          {navLinks.map((l, i) => (
            <a key={i} href="#" className={styles.navLink}>{l.label}</a>
          ))}
        </nav>

        {/* Copyright */}
        <div className={styles.copy}>
          <p>© 2026 Todos los derechos reservados</p>
          <p className={styles.copyHeart}>
            Hecho con <span className={styles.heart}>♥</span> por Maldonado
          </p>
        </div>

      </div>
    </footer>
  )
}
