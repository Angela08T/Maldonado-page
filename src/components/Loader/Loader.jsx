import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`${styles.loader} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.logo}>
        <span style={{ color: 'var(--red)' }}>M</span>
        <span style={{ color: 'var(--orange)' }}>A</span>
        <span style={{ color: 'var(--yellow)' }}>L</span>
        <span style={{ color: 'var(--green)' }}>D</span>
        <span style={{ color: 'var(--teal)' }}>O</span>
        <span style={{ color: '#fff' }}>NADO</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.barFill} />
      </div>
    </div>
  )
}
