import { useState } from 'react'
import styles from './Galeria.module.css'

import g1 from '../../assets/galeria1.jpeg'
import g2 from '../../assets/galeria2.jpeg'
import g3 from '../../assets/galeria3.jpeg'
import g4 from '../../assets/galeria4.jpeg'
import g5 from '../../assets/galeria5.jpeg'
import g6 from '../../assets/galeria6.jpeg'
import g7 from '../../assets/galeria7.jpeg'
import g8 from '../../assets/galeria8.jpeg'

const images = [
  { thumb: g1, full: g1, alt: 'Galería 1' },
  { thumb: g2, full: g2, alt: 'Galería 2' },
  { thumb: g3, full: g3, alt: 'Galería 3' },
  { thumb: g4, full: g4, alt: 'Galería 4' },
  { thumb: g5, full: g5, alt: 'Galería 5' },
  { thumb: g6, full: g6, alt: 'Galería 6' },
  { thumb: g7, full: g7, alt: 'Galería 7' },
  { thumb: g8, full: g8, alt: 'Galería 8' },
]

export default function Galeria() {
  const [lightbox, setLightbox] = useState(null)

  const close = () => setLightbox(null)

  return (
    <section id="galeria" className={styles.section}>
      <h2 className="section-title reveal">Galería</h2>
      <div className="section-divider reveal" />

      <div className={styles.grid}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`${styles.item} reveal`}
            style={{ transitionDelay: `${i * 0.1}s` }}
            onClick={() => setLightbox(img)}
          >
            <img src={img.thumb} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={close}>
          <button className={styles.close} onClick={close} aria-label="Cerrar">✕</button>
          <img src={lightbox.full} alt={lightbox.alt} onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
