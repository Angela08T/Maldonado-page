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
  { char: 'M', color: '#e8192c' },
  { char: 'A', color: '#f7941d' },
  { char: 'L', color: '#f9c123' },
  { char: 'D', color: '#8dc63f' },
  { char: 'O', color: '#39b54a' },
  { char: 'N', color: '#00a79d' },
  { char: 'A', color: '#29abe2' },
  { char: 'D', color: '#0072bc' },
  { char: 'O', color: '#662d91' },
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
