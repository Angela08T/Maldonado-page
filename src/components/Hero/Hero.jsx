import styles from './Hero.module.css'
import heroImg from '../../assets/hero.png'

const PARTICLES = [
  { size: 6,  left: '10%', delay: '0s',   dur: '6s',  color: 'rgba(232,25,44,.5)',   bottom: '15%' },
  { size: 4,  left: '20%', delay: '1.5s', dur: '8s',  color: 'rgba(247,148,29,.5)',  bottom: '10%' },
  { size: 8,  left: '35%', delay: '3s',   dur: '7s',  color: 'rgba(57,181,74,.4)',   bottom: '20%' },
  { size: 5,  left: '50%', delay: '0.8s', dur: '9s',  color: 'rgba(0,167,157,.4)',   bottom: '8%'  },
  { size: 7,  left: '65%', delay: '2.2s', dur: '6.5s',color: 'rgba(232,25,44,.35)',  bottom: '18%' },
  { size: 4,  left: '78%', delay: '4s',   dur: '8.5s',color: 'rgba(247,148,29,.4)',  bottom: '12%' },
  { size: 6,  left: '88%', delay: '1s',   dur: '7.5s',color: 'rgba(108,99,255,.4)',  bottom: '22%' },
]

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
        <div className={styles.badge}>
          UN DISTRITO QUE AVANZA
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
        <h1 className={styles.titleMain}>JESÚS</h1>
        <h1 className={styles.titleSub}>MALDONADO</h1>
        <p className={styles.desc}>
          Trabajamos cada día para construir un distrito<br />
          moderno, seguro y con más oportunidades<br />
          para todos.
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
    </section>
  )
}