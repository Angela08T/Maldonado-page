import { useState } from 'react'
import styles from './Galeria.module.css'

const images = [
  { thumb: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80',  full: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1400&q=90', alt: 'Maldonado ciudad' },
  { thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',     full: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90', alt: 'Parque' },
  { thumb: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',  full: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=90', alt: 'Avenida' },
  { thumb: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',  full: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=90', alt: 'Deporte' },
  { thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',  full: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90', alt: 'Centro cultural' },
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
            className={`${styles.item} ${i === 0 ? styles.span2 : ''} ${i === 3 ? styles.spanRow : ''} reveal`}
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
