import { useState, useEffect, useRef } from 'react'
import styles from './Encuestas.module.css'
import { supabase } from '../../lib/supabase'

const encuestas = [
  {
    id: 1,
    pregunta: '¿Cuál es la obra más urgente para tu barrio?',
    opciones: [
      { label: 'Pistas y veredas', votos: 312 },
      { label: 'Agua y desagüe',   votos: 289 },
      { label: 'Parques y áreas verdes', votos: 174 },
      { label: 'Alumbrado público', votos: 141 },
    ],
  },
  {
    id: 2,
    pregunta: '¿Cómo calificarías la gestión del distrito en seguridad ciudadana?',
    opciones: [
      { label: 'Excelente', votos: 198 },
      { label: 'Buena',     votos: 334 },
      { label: 'Regular',   votos: 210 },
      { label: 'Deficiente', votos: 88 },
    ],
  },
  {
    id: 3,
    pregunta: '¿Qué programa social necesita más inversión?',
    opciones: [
      { label: 'Becas educativas',      votos: 401 },
      { label: 'Empleo juvenil',         votos: 355 },
      { label: 'Adulto mayor',           votos: 270 },
      { label: 'Salud preventiva',       votos: 219 },
    ],
  },
  {
    id: 4,
    pregunta: '¿Confías en que Jesús Maldonado ganará las elecciones?',
    opciones: [
      { label: 'Sí, totalmente',    votos: 521 },
      { label: 'Probablemente sí',  votos: 198 },
      { label: 'Aún no lo decido',  votos: 97 },
      { label: 'No',                votos: 34 },
    ],
  },
]

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('[data-fadein]')
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = `opacity .55s ease ${i * 0.08}s, transform .55s ease ${i * 0.08}s`
      requestAnimationFrame(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    })
  }, [])
  return ref
}

function PollCard({ encuesta }) {
  const storageKey = `voto_enc_${encuesta.id}`
  const [voto, setVoto]       = useState(() => {
    const v = localStorage.getItem(storageKey)
    return v !== null ? parseInt(v) : null
  })
  const [opciones, setOpciones] = useState(encuesta.opciones)
  const [loading, setLoading]   = useState(true)

  /* Cargar votos reales desde Supabase al montar */
  useEffect(() => {
    supabase
      .from('encuesta_votos')
      .select('opcion_id')
      .eq('encuesta_id', encuesta.id)
      .then(({ data }) => {
        if (data && data.length > 0) {
          const counts = {}
          data.forEach(r => { counts[r.opcion_id] = (counts[r.opcion_id] || 0) + 1 })
          setOpciones(prev => prev.map((o, i) => ({
            ...o,
            votos: o.votos + (counts[i] || 0)
          })))
        }
        setLoading(false)
      })
  }, [encuesta.id])

  const total = opciones.reduce((s, o) => s + o.votos, 0)

  const votar = async (idx) => {
    if (voto !== null) return
    setVoto(idx)
    localStorage.setItem(storageKey, idx)
    setOpciones(prev => prev.map((o, i) => i === idx ? { ...o, votos: o.votos + 1 } : o))
    await supabase.from('encuesta_votos').insert({
      encuesta_id: String(encuesta.id),
      opcion_id:   String(idx)
    })
  }

  return (
    <div className={styles.pollCard} data-fadein style={{ opacity: loading ? .6 : 1, transition: 'opacity .3s' }}>
      <div className={styles.pollHeader}>
        <span className={styles.pollIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </span>
        <p className={styles.pollQ}>{encuesta.pregunta}</p>
      </div>

      <div className={styles.opciones}>
        {opciones.map((op, i) => {
          const pct = total > 0 ? Math.round((op.votos / (total)) * 100) : 0
          const esVoto = voto === i
          const voted   = voto !== null
          return (
            <button
              key={i}
              className={`${styles.opcion} ${voted ? styles.opcionVoted : ''} ${esVoto ? styles.opcionSelected : ''}`}
              onClick={() => votar(i)}
              disabled={voted}
            >
              <span className={styles.opcionLabel}>{op.label}</span>
              {voted && (
                <>
                  <span className={styles.opcionPct}>{pct}%</span>
                  <span className={styles.opcionBar} style={{ width: `${pct}%` }} />
                </>
              )}
              {esVoto && (
                <span className={styles.checkmark}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div className={styles.pollFooter}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        </svg>
        {(total + (voto !== null ? 0 : 0)).toLocaleString()} votos
        {voto !== null && <span className={styles.gracias}> · ¡Gracias por votar!</span>}
      </div>
    </div>
  )
}

export default function Encuestas({ onBack }) {
  const pageRef = useFadeIn()

  return (
    <div className={styles.page} ref={pageRef}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.shapeBg1} />
        <div className={styles.shapeBg2} />
        <div className={styles.shapeBg3} />

        <div className={styles.heroInner} data-fadein>
          {onBack && (
            <button className={styles.backBtn} onClick={onBack}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Volver al inicio
            </button>
          )}
          <span className={styles.eyebrow}>Participación ciudadana</span>
          <h1 className={styles.heroTitle}>
            Inteligencia <span className={styles.accent}>Electoral</span>
          </h1>
          <p className={styles.heroDesc}>
            Encuestas rápidas para conocer la opinión del vecino. Tu voto cuenta — juntos
            definimos las prioridades del distrito.
          </p>
          <div className={styles.heroBadges}>
            <span className={styles.badge}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Actualización semanal
            </span>
            <span className={styles.badge}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Anónimo y seguro
            </span>
            <span className={styles.badge}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              Resultados en tiempo real
            </span>
          </div>
        </div>
      </div>

      {/* ── Encuestas ── */}
      <div className={styles.section}>
        <div className={styles.sectionHeader} data-fadein>
          <span className={styles.tag}>Encuestas activas</span>
          <h2 className={styles.sectionTitle}>¿Cuál es tu opinión?</h2>
          <p className={styles.sectionDesc}>
            Selecciona una opción en cada encuesta. Los resultados se muestran al instante.
          </p>
        </div>

        <div className={styles.pollGrid}>
          {encuestas.map(enc => (
            <PollCard key={enc.id} encuesta={enc} />
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className={styles.ctaSection} data-fadein>
        <div className={styles.ctaInner}>
          <span className={styles.ctaEyebrow}>¿Tienes más ideas?</span>
          <h3 className={styles.ctaTitle}>Propón una encuesta</h3>
          <p className={styles.ctaDesc}>
            Si quieres que agreguemos una pregunta sobre tu barrio o un tema importante para el distrito, escríbenos.
          </p>
          <a href="#cta" className={styles.ctaBtn} onClick={onBack}>
            Contáctanos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  )
}
