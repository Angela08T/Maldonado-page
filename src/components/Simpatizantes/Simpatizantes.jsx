import { useState, useEffect, useRef } from 'react'
import styles from './Simpatizantes.module.css'
import { supabase } from '../../lib/supabase'

const porQue = [
  {
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-.85a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    titulo: 'Avisos por WhatsApp',
    texto: 'Recibe notificaciones directas en tu celular sobre obras, eventos y programas en tu barrio.',
  },
  {
    color: 'red',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    titulo: 'Información en tiempo real',
    texto: 'Sé el primero en enterarte de avances, inauguraciones y noticias importantes del distrito.',
  },
  {
    color: 'orange',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    titulo: 'Comunidad activa',
    texto: 'Forma parte de una red de miles de vecinos comprometidos con el futuro de SJL.',
  },
  {
    color: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    titulo: 'Sin spam ni política',
    texto: 'Solo mensajes relevantes sobre gestión municipal y obras de tu distrito. Nada más.',
  },
  {
    color: 'red',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    titulo: 'Invitaciones exclusivas',
    texto: 'Accede a cabildos, talleres gratuitos y eventos especiales antes de su difusión masiva.',
  },
  {
    color: 'green',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3z"/>
        <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
      </svg>
    ),
    titulo: 'Apoya el cambio',
    texto: 'Tu registro es una muestra de respaldo a la gestión que transforma San Juan de Lurigancho.',
  },
]

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('[data-fadein]')
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity .5s ease ${i * 0.07}s, transform .5s ease ${i * 0.07}s`
      requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' })
    })
  }, [])
  return ref
}

export default function Simpatizantes({ onBack }) {
  const [nombre, setNombre]     = useState('')
  const [dni, setDni]           = useState('')
  const [telefono, setTelefono] = useState('')
  const [enviado, setEnviado]     = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')
  const pageRef = useFadeIn()

  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!nombre || !dni || !telefono) return
    setLoading(true)
    setError('')
    const { error: err } = await supabase
      .from('simpatizantes')
      .insert({ nombre, dni, telefono })
    setLoading(false)
    if (err) { setError('Hubo un error. Intenta nuevamente.'); return }
    setEnviado(true)
  }

  return (
    <div className={styles.page} ref={pageRef}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroShape1} />
        <div className={styles.heroShape2} />
        <div className={styles.heroShape3} />

        <div className={styles.heroGrid}>
          {/* izquierda */}
          <div className={styles.heroLeft} data-fadein>
            {onBack && (
              <button className={styles.backBtn} onClick={onBack}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Volver al inicio
              </button>
            )}
            <span className={styles.eyebrow}>Únete al movimiento</span>
            <h1 className={styles.heroTitle}>
              Regístrate como<br/>
              <span className={styles.heroAccent}>Simpatizante</span>
            </h1>
            <p className={styles.heroDesc}>
              Miles de vecinos ya reciben información directa sobre la gestión de
              Jesús Maldonado. Solo necesitas tu nombre y WhatsApp — es gratis y tarda menos de un minuto.
            </p>
            <div className={styles.heroPills}>
              <span className={styles.pill}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                100% gratuito
              </span>
              <span className={styles.pill}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Sin spam
              </span>
              <span className={styles.pill}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Solo WhatsApp
              </span>
            </div>
          </div>

          {/* derecha: formulario */}
          <div className={styles.heroRight} data-fadein>
            <div className={styles.formCard}>
              <div className={styles.formTop}>
                <div className={styles.waIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h3 className={styles.formTitulo}>Registro rápido</h3>
                  <p className={styles.formSub}>3 datos · menos de 1 minuto</p>
                </div>
              </div>

              {enviado ? (
                <div className={styles.success}>
                  <div className={styles.successCircle}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h4>¡Bienvenido, {nombre}!</h4>
                  <p>Te registramos correctamente. Pronto recibirás nuestros mensajes en el <strong>+51 {telefono}</strong>.</p>
                  <button className={styles.resetBtn} onClick={() => { setEnviado(false); setNombre(''); setDni(''); setTelefono('') }}>
                    Registrar otro vecino
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.field}>
                    <label>Nombre y Apellidos</label>
                    <input type="text" placeholder="Jesús García López" value={nombre} onChange={e => setNombre(e.target.value)} required />
                  </div>
                  <div className={styles.field}>
                    <label>DNI</label>
                    <input type="text" placeholder="12345678" maxLength={8} value={dni} onChange={e => setDni(e.target.value)} required />
                  </div>
                  <div className={styles.field}>
                    <label>Número de WhatsApp</label>
                    <div className={styles.phoneRow}>
                      <span className={styles.prefix}>+51</span>
                      <input type="tel" placeholder="999 000 000" value={telefono} onChange={e => setTelefono(e.target.value)} required />
                    </div>
                  </div>
                  {error && <p style={{ color:'#D62828', fontSize:'.82rem', margin:0 }}>{error}</p>}
                  <button type="submit" className={styles.submitBtn} disabled={loading}>
                    {loading ? 'Registrando...' : 'Quiero sumarme'}
                  </button>
                  <p className={styles.privacidad}>Tu número solo se usará para información del movimiento.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Por qué unirte ── */}
      <div className={styles.porQueSection}>
        <div className={styles.sectionHeader} data-fadein>
          <span className={styles.tag}>Beneficios</span>
          <h2 className={styles.sectionTitle}>¿Por qué registrarte?</h2>
          <div className={styles.divider} />
          <p className={styles.sectionDesc}>
            Más de 50,000 vecinos ya reciben información directa. Estas son las razones por las que vale la pena.
          </p>
        </div>
        <div className={styles.porQueGrid}>
          {porQue.map((p, i) => (
            <div key={i} className={`${styles.porQueCard} ${styles[`pq_${p.color}`]}`} data-fadein>
              <div className={`${styles.pqIcon} ${styles[`pqi_${p.color}`]}`}>{p.icon}</div>
              <h4 className={styles.pqTitulo}>{p.titulo}</h4>
              <p className={styles.pqTexto}>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA final ── */}
      <div className={styles.ctaFinal} data-fadein>
        <div className={styles.ctaFinalInner}>
          <span className={styles.ctaNum}>50,000+</span>
          <p className={styles.ctaText}>vecinos ya son parte del movimiento</p>
          <a href="#" className={styles.ctaWaBtn} onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Regístrate ahora
          </a>
        </div>
      </div>

    </div>
  )
}
