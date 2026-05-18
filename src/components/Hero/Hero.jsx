import styles from './Hero.module.css'
import heroImg from '../../assets/hero.png'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.rainbow} />

      <div className={styles.content}>
        <h1 className={styles.titleMain}>MALDONADO</h1>
        <h1 className={styles.titleSub}>AVANZA CONTIGO</h1>
        <p className={styles.desc}>
          Trabajamos cada día para construir un distrito<br />
          moderno, seguro y con más oportunidades<br />
          para todos.
        </p>
        <a href="#avances" className="btn-primary">
          Conoce Más
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div className={styles.imageWrapper}>
        <img src={heroImg} alt="Maldonado" className={styles.heroImg} />
      </div>
    </section>
  )
}