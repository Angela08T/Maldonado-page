import styles from './Noticias.module.css'

const news = [
  {
    img: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=300&q=80',
    date: '12 Mayo, 2024',
    title: 'Jornada de Limpieza y Reforestación',
    desc: 'Vecinos y voluntarios unidos por un Maldonado más verde.',
  },
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=80',
    date: '08 Mayo, 2024',
    title: 'Avanzan Obras en la Av. Los Jardines',
    desc: 'Más de 60% de avance en la renovación de la avenida.',
  },
  {
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&q=80',
    date: '05 Mayo, 2024',
    title: 'Feria de Emprendedores de Maldonado',
    desc: 'Apoyamos el talento local y reactivamos la economía.',
  },
]

export default function Noticias() {
  return (
    <section id="noticias" className={styles.section}>
      <h2 className="section-title reveal">Noticias Recientes</h2>
      <div className="section-divider reveal" />

      <div className={styles.grid}>
        {news.map((n, i) => (
          <article key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={styles.img}>
              <img src={n.img} alt={n.title} loading="lazy" />
            </div>
            <div>
              <p className={styles.date}>{n.date}</p>
              <h3 className={styles.title}>{n.title}</h3>
              <p className={styles.desc}>{n.desc}</p>
              <a href="#" className={styles.link}>Leer Más →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
