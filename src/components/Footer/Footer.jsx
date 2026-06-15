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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Logo */}
        <div className={styles.brand}>
          <div className={styles.logo}>JESÚS MALDONADO</div>
          <p className={styles.brandSub}>AVANZAMOS JUNTOS</p>
        </div>

        {/* Copyright */}
        <div className={styles.copy}>
          <p>© 2026 Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  )
}
