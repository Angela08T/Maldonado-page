import styles from './Footer.module.css'

const links = ['Inicio', 'Sobre Maldonado', 'Gestión', 'Avances y Obras', 'Noticias', 'Contacto']
const hrefs = ['#hero', '#gestion', '#gestion', '#avances', '#noticias', '#cta']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.logoMain}>MALDONADO</div>
        <div className={styles.logoSub}>Avanzamos Juntos</div>
      </div>
      <nav className={styles.links}>
        {links.map((l, i) => <a key={i} href={hrefs[i]}>{l}</a>)}
      </nav>
      <p className={styles.copy}>© 2024 Municipalidad de Maldonado. Todos los derechos reservados.</p>
    </footer>
  )
}
