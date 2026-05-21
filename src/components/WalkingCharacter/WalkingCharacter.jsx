import { useEffect, useRef, useState } from 'react'
import styles from './WalkingCharacter.module.css'
import walkingGif from '../../assets/funkojesus.gif'

const CHAR_WIDTH = 100
const SPEED = 1.8

export default function WalkingCharacter() {
  const [x, setX] = useState(120)
  const [flipped, setFlipped] = useState(false)
  const dirRef = useRef(1)
  const posRef = useRef(120)
  const rafRef = useRef(null)

  useEffect(() => {
    const step = () => {
      const maxX = window.innerWidth - CHAR_WIDTH
      posRef.current += SPEED * dirRef.current

      if (posRef.current >= maxX) {
        posRef.current = maxX
        dirRef.current = -1
        setFlipped(true)
      } else if (posRef.current <= 0) {
        posRef.current = 0
        dirRef.current = 1
        setFlipped(false)
      }

      setX(posRef.current)
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className={styles.wrapper} style={{ left: `${x}px` }}>
      <div
        className={styles.character}
        style={{ transform: `scaleX(${flipped ? -1 : 1})` }}
      >
        <img src={walkingGif} alt="Jesús Maldonado" className={styles.img} />
      </div>
      <div className={styles.shadow} />
    </div>
  )
}
