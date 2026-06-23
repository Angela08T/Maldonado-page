import styles from './EventoBanner.module.css'

export default function EventoBanner({ setPage }) {
  const handleVerMas = () => {
    setPage && setPage('eventos')
    window.scrollTo({ top: 0 })
  }

  return (
    <div className={styles.banner}>
      <div className={styles.tickerWrap}>
        <div className={styles.ticker}>
          <span>✦&nbsp;&nbsp;EVENTOS DE CAMPAÑA&nbsp;&nbsp;✦</span>
        </div>
      </div>

      <button className={styles.verMas} onClick={handleVerMas}>
        Click aquí
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </button>
    </div>
  )
}
