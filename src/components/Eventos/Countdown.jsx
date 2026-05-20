import { useState, useEffect } from 'react'
import styles from './Countdown.module.css'

function calcRemaining(target) {
  const diff = target - Date.now()
  if (diff <= 0) return null
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  return { d, h, m, s }
}

export default function Countdown({ date, color }) {
  const [rem, setRem] = useState(() => calcRemaining(date))

  useEffect(() => {
    const id = setInterval(() => setRem(calcRemaining(date)), 1000)
    return () => clearInterval(id)
  }, [date])

  if (!rem) {
    return <div className={styles.done} style={{ color }}>Evento realizado</div>
  }

  const units = [
    { val: rem.d, label: 'días' },
    { val: rem.h, label: 'hrs' },
    { val: rem.m, label: 'min' },
    { val: rem.s, label: 'seg' },
  ]

  return (
    <div className={styles.wrap}>
      <span className={styles.label}>Faltan</span>
      <div className={styles.units}>
        {units.map((u, i) => (
          <div key={i} className={styles.unit}>
            <span className={styles.val} style={{ color }}>{String(u.val).padStart(2, '0')}</span>
            <span className={styles.lbl}>{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
