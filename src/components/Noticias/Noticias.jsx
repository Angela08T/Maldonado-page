import styles from './Noticias.module.css'
import noti2 from '../../assets/noti2.jpg'
import noti5 from '../../assets/noti5.jpg'
import noti8 from '../../assets/noti8.jpg'

const news = [
  {
    img: noti2,
    date: 'Junio, 2025',
    title: 'Primer tramo de la Av. Circunvalación culminó fase de asfaltado',
    desc: 'Avanza con señalización termoplástica, áreas verdes y pintura en general.',
    page: 'circunvalacion',
  },
  {
    img: noti5,
    date: 'Junio, 2025',
    title: 'Municipalidad de SJL entregó habilitación urbana a vecinos de Canto Grande',
    desc: 'Primera etapa, manzana E, comuna 9. Un paso clave hacia la formalización de la propiedad.',
    page: 'cantogr',
  },
  {
    img: noti8,
    date: 'Junio, 2025',
    title: 'SJL pone en marcha Agencia Local de Empleo y Coworking para emprendedores',
    desc: 'Nuevos espacios de orientación laboral, capacitación y desarrollo empresarial para el distrito.',
    page: 'ale',
  },
]

export default function Noticias({ setPage }) {
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
              {n.page ? (
                <button
                  className={styles.link}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onClick={() => { setPage && setPage(n.page); window.scrollTo({ top: 0 }) }}
                >
                  Leer Más →
                </button>
              ) : (
                <a href="#" className={styles.link}>Leer Más →</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
