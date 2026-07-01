import styles from './Footer.module.css'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Logo */}
        <div className={styles.brand}>
          <div className={styles.logo}>JESÚS MALDONADO</div>
          <p className={styles.brandSub}>EL CAMBIO CONTINÚA</p>
        </div>

        {/* Copyright */}
        <div className={styles.copy}>
          <p>© 2026 Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  )
}
