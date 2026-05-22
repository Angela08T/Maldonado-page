import { useEffect, useRef, useState } from 'react'
import styles from './WalkingCharacter.module.css'
import gif1 from '../../assets/funkojesus.gif'
import gif2 from '../../assets/jesusfunk2.gif'

const CHAR_WIDTH  = 100
const SPEED       = 1.8
const BOUNCE_HALF_PERIOD = 28
const BOUNCE_AMP  = 5
const SWITCH_INTERVAL = 10000 // ms entre cambios de personaje

export default function WalkingCharacter() {
  const [x, setX]           = useState(120)
  const [y, setY]           = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [gifIndex, setGifIndex] = useState(0)
  const [visible, setVisible]   = useState(true)
  const [bubble, setBubble]     = useState(false)
  const bubbleTimer = useRef(null)

  const dirRef = useRef(1)
  const posRef = useRef(120)
  const rafRef = useRef(null)

  // Movimiento horizontal + contra-rebote
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

      const phase = (posRef.current % (BOUNCE_HALF_PERIOD * 2)) / BOUNCE_HALF_PERIOD * Math.PI
      setY(Math.abs(Math.sin(phase)) * BOUNCE_AMP)

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  // Alternancia con fade entre personajes
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setGifIndex(i => (i + 1) % 2)
        setVisible(true)
      }, 400)
    }, SWITCH_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  const gifs = [gif1, gif2]

  const handleClick = () => {
    clearTimeout(bubbleTimer.current)
    setBubble(true)
    bubbleTimer.current = setTimeout(() => setBubble(false), 2200)
  }

  return (
    <div
      className={styles.wrapper}
      style={{ left: `${x}px`, transform: `translateY(${y}px)` }}
    >
      <div
        className={styles.character}
        style={{
          transform: `scaleX(${flipped ? -1 : 1})`,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s ease',
          position: 'relative',
        }}
        onClick={handleClick}
      >
        <div
          className={`${styles.bubble} ${bubble ? styles.bubbleVisible : ''}`}
          style={{ transform: `translateX(-50%) scaleX(${flipped ? -1 : 1})` }}
        >
          Palabra de Maldonado
        </div>
        <img src={gifs[gifIndex]} alt="Jesús Maldonado" className={styles.img} />
      </div>
      <div className={styles.shadow} />
    </div>
  )
}
