import { useState, useEffect, useRef } from 'react'
import styles from './EventosPage.module.css'
import { eventos, eventoDate } from './eventosData'
import Countdown from './Countdown'

const colorMap = {
  red:    { solid: '#e8192c', light: 'rgba(232,25,44,.08)',  mid: 'rgba(232,25,44,.15)', text: 'var(--red)' },
  orange: { solid: '#f7941d', light: 'rgba(247,148,29,.08)', mid: 'rgba(247,148,29,.15)', text: 'var(--orange)' },
  green:  { solid: '#39b54a', light: 'rgba(57,181,74,.08)',  mid: 'rgba(57,181,74,.15)',  text: 'var(--green)' },
  teal:   { solid: '#00a79d', light: 'rgba(0,167,157,.08)',  mid: 'rgba(0,167,157,.15)',  text: 'var(--teal)' },
}

const meses = ['Todos', 'MAY', 'JUN', 'JUL']

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('[data-fadein]')
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(18px)'
      el.style.transition = `opacity .5s ease ${i * 0.06}s, transform .5s ease ${i * 0.06}s`
      requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' })
    })
  }, [])
  return ref
}

export default function EventosPage({ onBack }) {
  const [filtro, setFiltro]           = useState('Todos')
  const [interesados, setInteresados] = useState(new Set())
  const pageRef = useFadeIn()

  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  const lista = filtro === 'Todos' ? eventos : eventos.filter(e => e.mes === filtro)

  const toggle = (id) =>
    setInteresados(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const nextEvento = eventos[0]
  const nextC = colorMap[nextEvento.color]

  return (
    <div className={styles.page} ref={pageRef}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroShape1} />
        <div className={styles.heroShape2} />
        <div className={styles.heroShape3} />

        <div className={styles.heroGrid}>
          {/* left */}
          <div className={styles.heroLeft} data-fadein>
            {onBack && (
              <button className={styles.backBtn} onClick={onBack}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Volver al inicio
              </button>
            )}
            <span className={styles.eyebrow}>Agenda 2026</span>
            <h1 className={styles.heroTitle}>
              Próximos<br/>
              <span className={styles.heroAccent}>Eventos</span>
            </h1>
            <p className={styles.heroDesc}>
              Participa en las actividades del movimiento. Caminatas, conversatorios,
              ferias, talleres y más para toda la familia de San Juan de Lurigancho.
            </p>
            <div className={styles.heroBadges}>
              <span className={styles.badge} style={{ color: 'var(--red)', background: 'rgba(232,25,44,.08)', borderColor: 'rgba(232,25,44,.2)' }}>
                {eventos.length} eventos
              </span>
              <span className={styles.badge} style={{ color: 'var(--green)', background: 'rgba(57,181,74,.08)', borderColor: 'rgba(57,181,74,.2)' }}>
                Entrada libre
              </span>
              <span className={styles.badge} style={{ color: 'var(--teal)', background: 'rgba(0,167,157,.08)', borderColor: 'rgba(0,167,157,.2)' }}>
                4 zonas
              </span>
            </div>
          </div>

          {/* right: próximo evento destacado */}
          <div className={styles.heroRight} data-fadein>
            <div className={styles.featuredCard} style={{ borderColor: nextC.solid }}>
              <div className={styles.featuredTop} style={{ background: nextC.light }}>
                <div className={styles.featuredPróximo}>Próximo evento</div>
                <div className={styles.featuredDate} style={{ background: nextC.solid }}>
                  <span className={styles.featuredDia}>{nextEvento.dia}</span>
                  <span className={styles.featuredMes}>{nextEvento.mes}</span>
                </div>
              </div>
              <div className={styles.featuredBody}>
                <span className={styles.featuredZona} style={{ color: nextC.solid }}>{nextEvento.zona}</span>
                <h3 className={styles.featuredTitulo}>{nextEvento.titulo}</h3>
                <div className={styles.featuredMeta}>
                  <span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {nextEvento.hora}
                  </span>
                  <span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {nextEvento.lugar}
                  </span>
                </div>
                <Countdown date={eventoDate(nextEvento)} color={nextC.solid} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filtros ── */}
      <div className={styles.filtrosBar} data-fadein>
        <span className={styles.filtrosLabel}>Filtrar:</span>
        <div className={styles.filtrosBtns}>
          {meses.map(m => (
            <button
              key={m}
              className={`${styles.filtroBtn} ${filtro === m ? styles.filtroBtnActive : ''}`}
              onClick={() => setFiltro(m)}
            >
              {m}
            </button>
          ))}
        </div>
        <span className={styles.filtrosCount}>{lista.length} eventos</span>
      </div>

      {/* ── Grid ── */}
      <div className={styles.gridWrap}>
        {lista.length === 0 ? (
          <div className={styles.empty}>No hay eventos programados para este mes.</div>
        ) : (
          <div className={styles.grid}>
            {lista.map((ev) => {
              const c = colorMap[ev.color]
              const sel = interesados.has(ev.id)
              return (
                <div key={ev.id} className={styles.card} data-fadein>
                  {/* header strip */}
                  <div className={styles.cardHeader} style={{ background: `linear-gradient(135deg, ${c.mid}, ${c.light})` }}>
                    <div className={styles.cardDecCircle} style={{ background: c.solid }} />
                    <div className={styles.cardDecCircle2} style={{ background: c.solid }} />
                    <div className={styles.cardDateBadge} style={{ background: c.solid }}>
                      <span className={styles.badgeDia}>{ev.dia}</span>
                      <span className={styles.badgeMes}>{ev.mes}</span>
                    </div>
                    <span className={styles.cardZona} style={{ color: c.solid, background: 'rgba(255,255,255,.7)', borderColor: c.solid }}>
                      {ev.zona}
                    </span>
                  </div>

                  {/* body */}
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitulo}>{ev.titulo}</h3>
                    <p className={styles.cardDesc}>{ev.desc}</p>

                    <div className={styles.cardMeta}>
                      <span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {ev.hora}
                      </span>
                      <span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {ev.lugar}
                      </span>
                      {ev.cupos && (
                        <span>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                          </svg>
                          {ev.cupos.toLocaleString()} cupos
                        </span>
                      )}
                    </div>

                    {/* countdown */}
                    <Countdown date={eventoDate(ev)} color={c.solid} />

                    <button
                      className={`${styles.interesaBtn} ${sel ? styles.interesaBtnSel : ''}`}
                      style={sel
                        ? { background: c.solid, borderColor: c.solid, color: '#fff' }
                        : { color: c.solid, borderColor: c.solid, background: c.light }
                      }
                      onClick={() => toggle(ev.id)}
                    >
                      {sel ? (
                        <>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Apuntado
                        </>
                      ) : 'Me interesa'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

    </div>
  )
}
