import { useState, useEffect, useRef } from 'react'
import styles from './Zona.module.css'

const zonas = [
  {
    id: '01', color: 'red', nombre: 'Zona Norte',
    barrios: 'Zárate, Piedra Liza, Mangomarca',
    vecinos: '42,000',
    descripcion: 'Liderando proyectos de agua potable, pistas y veredas para miles de familias.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
  },
  {
    id: '02', color: 'orange', nombre: 'Zona Sur',
    barrios: 'Canto Grande, Bayóvar, Santa Rosa',
    vecinos: '58,000',
    descripcion: 'Con el mayor número de vecinos, impulsando parques, seguridad y educación.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: '03', color: 'green', nombre: 'Zona Centro',
    barrios: 'Campoy, Caja de Agua, Azcarrunz',
    vecinos: '35,000',
    descripcion: 'El corazón del distrito, conectando comercio, cultura y servicios vecinales.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
  {
    id: '04', color: 'teal', nombre: 'Zona Este',
    barrios: 'Huáscar, José Carlos Mariátegui, Canto Rey',
    vecinos: '61,000',
    descripcion: 'La zona de mayor crecimiento, con nuevas obras de infraestructura y áreas verdes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
]

const beneficios = [
  {
    color: 'red',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    titulo: 'Voz en tu barrio',
    texto: 'Participa en asambleas vecinales y propón mejoras directamente a la municipalidad.',
  },
  {
    color: 'orange',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    titulo: 'Información prioritaria',
    texto: 'Recibe alertas sobre obras, eventos y programas sociales antes que nadie en tu zona.',
  },
  {
    color: 'green',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    titulo: 'Seguimiento de obras',
    texto: 'Accede al estado en tiempo real de los proyectos de tu barrio y reporta incidencias.',
  },
  {
    color: 'teal',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    titulo: 'Eventos exclusivos',
    texto: 'Invitaciones a cabildos abiertos, talleres gratuitos y actividades culturales.',
  },
  {
    color: 'red',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>,
    titulo: 'Presupuesto participativo',
    texto: 'Vota por los proyectos que más necesita tu barrio y decide cómo se invierte.',
  },
  {
    color: 'orange',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    titulo: 'Capacitaciones gratuitas',
    texto: 'Talleres de emprendimiento, habilidades digitales y liderazgo comunitario.',
  },
]

const stats = [
  { valor: '196,000', label: 'Vecinos registrados', color: '#00a79d' },
  { valor: '4',       label: 'Zonas activas',        color: '#f7941d' },
  { valor: '120+',    label: 'Obras en ejecución',   color: '#39b54a' },
  { valor: '98%',     label: 'Satisfacción vecinal', color: '#e8192c' },
]

/* Animate elements in on mount without IntersectionObserver clash */
function useFadeIn(deps = []) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('[data-fadein]')
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(22px)'
      el.style.transition = `opacity .55s ease ${i * 0.07}s, transform .55s ease ${i * 0.07}s`
      requestAnimationFrame(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}

export default function Zona({ onBack }) {
  const [zonaSeleccionada, setZonaSeleccionada] = useState('')
  const [nombre, setNombre]     = useState('')
  const [email, setEmail]       = useState('')
  const [telefono, setTelefono] = useState('')
  const [enviado, setEnviado]   = useState(false)

  const pageRef = useFadeIn([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre && email && zonaSeleccionada) setEnviado(true)
  }

  return (
    <div className={styles.page} ref={pageRef}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        {/* decorative shapes */}
        <div className={styles.shapeRing1} />
        <div className={styles.shapeRing2} />
        <div className={styles.shapeDot1} />
        <div className={styles.shapeDot2} />
        <div className={styles.shapeDot3} />
        <div className={styles.shapeBar} />

        <div className={styles.heroGrid}>
          {/* ── left column ── */}
          <div className={styles.heroLeft} data-fadein>
            {onBack && (
              <button className={styles.backBtn} onClick={onBack}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Volver al inicio
              </button>
            )}
            <span className={styles.eyebrow}>Participación Ciudadana</span>
            <h1 className={styles.heroTitle}>
              Únete a tu<br/>
              <span className={styles.heroAccent}>Zona</span>
            </h1>
            <p className={styles.heroDesc}>
              San Juan de Lurigancho tiene 4 zonas activas. Regístrate, forma parte
              de las decisiones de tu barrio y construye con nosotros el distrito que todos merecemos.
            </p>
            <div className={styles.heroCta}>
              <a href="#zonas-grid" className={styles.heroBtnPrimary}>
                Elegir mi zona
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
                </svg>
              </a>
              <a href="#beneficios" className={styles.heroBtnSecondary}>Ver beneficios</a>
            </div>
          </div>

          {/* ── right column: stat cards ── */}
          <div className={styles.heroRight} data-fadein>
            <div className={styles.statGrid}>
              {stats.map((s, i) => (
                <div key={i} className={`${styles.statCard} ${styles[`sc${i}`]}`}>
                  <span className={styles.statCardVal} style={{ color: s.color }}>{s.valor}</span>
                  <span className={styles.statCardLbl}>{s.label}</span>
                  <div className={styles.statCardAccent} style={{ background: s.color }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Beneficios ── */}
      <div id="beneficios" className={styles.beneficiosSection}>
        <div className={styles.sectionHeader} data-fadein>
          <span className={styles.tag}>¿Por qué unirte?</span>
          <h2 className={styles.sectionTitle}>Beneficios de ser parte</h2>
          <div className={styles.divider} />
          <p className={styles.sectionDesc}>
            Más de 196,000 vecinos ya forman parte de la red de participación ciudadana.
          </p>
        </div>
        <div className={styles.beneficiosGrid}>
          {beneficios.map((b, i) => (
            <div key={i} className={`${styles.beneficioCard} ${styles[`bc_${b.color}`]}`} data-fadein>
              <span className={`${styles.beneficioNum} ${styles[`bn_${b.color}`]}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className={`${styles.beneficioIcon} ${styles[`bi_${b.color}`]}`}>{b.icon}</div>
              <div className={styles.beneficioBody}>
                <h4 className={styles.beneficioTitulo}>{b.titulo}</h4>
                <p className={styles.beneficioTexto}>{b.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Zonas ── */}
      <div id="zonas-grid" className={styles.zonasSection}>
        <div className={styles.sectionHeader} data-fadein>
          <span className={styles.tag}>Nuestras zonas</span>
          <h2 className={styles.sectionTitle}>Selecciona tu zona</h2>
          <div className={styles.divider} />
          <p className={styles.sectionDesc}>Haz clic en la zona donde vives para seleccionarla.</p>
        </div>
        <div className={styles.zonas} data-fadein>
          {zonas.map(z => {
            const sel = zonaSeleccionada === z.nombre
            return (
              <div
                key={z.id}
                className={`${styles.zonaCard} ${styles[`zc_${z.color}`]} ${sel ? styles.selected : ''}`}
                onClick={() => setZonaSeleccionada(z.nombre)}
              >
                {/* top row */}
                <div className={styles.zonaTop}>
                  <span className={styles.zonaId}>{z.id}</span>
                  <div className={styles.zonaIconWrap}>{z.icon}</div>
                </div>
                {/* name */}
                <h3 className={styles.zonaNombre}>{z.nombre}</h3>
                {/* barrios as chips */}
                <div className={styles.zonaChips}>
                  {z.barrios.split(', ').map(b => (
                    <span key={b} className={styles.zonaChip}>{b}</span>
                  ))}
                </div>
                {/* footer */}
                <div className={styles.zonaFooter}>
                  <div className={styles.zonaVecinos}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                    </svg>
                    {z.vecinos}
                  </div>
                  <span className={styles.zonaSelectLabel}>
                    {sel ? (
                      <>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Seleccionada
                      </>
                    ) : 'Seleccionar →'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Formulario ── */}
      <div className={styles.formSection}>
        <div className={styles.formWrap} data-fadein>
          {enviado ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3>¡Bienvenido a la comunidad!</h3>
              <p>Te registramos en <strong>{zonaSeleccionada}</strong>. Pronto recibirás información sobre eventos y obras en tu barrio.</p>
              <button className={styles.successBtn} onClick={() => { setEnviado(false); setNombre(''); setEmail(''); setTelefono('') }}>
                Registrar otro vecino
              </button>
            </div>
          ) : (
            <div className={styles.formLayout}>
              <div className={styles.formInfo}>
                <span className={styles.tag}>Registro gratuito</span>
                <h3 className={styles.formTitulo}>Completa tu registro</h3>
                <p className={styles.formSub}>
                  {zonaSeleccionada
                    ? `Registrándose en: ${zonaSeleccionada}`
                    : 'Selecciona tu zona arriba y completa el formulario'}
                </p>
                <ul className={styles.checkList}>
                  {['Sin costo, 100% gratuito', 'Solo tarda 2 minutos', 'Cancela cuando quieras'].map((t, i) => (
                    <li key={i}>
                      <span className={styles.checkListIcon}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Nombre completo</label>
                    <input type="text" placeholder="Jesús García" value={nombre} onChange={e => setNombre(e.target.value)} required />
                  </div>
                  <div className={styles.field}>
                    <label>Correo electrónico</label>
                    <input type="email" placeholder="correo@ejemplo.com" value={email} onChange={e => setEmail(e.target.value)} required />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Teléfono (opcional)</label>
                    <input type="tel" placeholder="+51 999 000 000" value={telefono} onChange={e => setTelefono(e.target.value)} />
                  </div>
                  <div className={styles.field}>
                    <label>Tu zona</label>
                    <select value={zonaSeleccionada} onChange={e => setZonaSeleccionada(e.target.value)} required>
                      <option value="">Selecciona una zona</option>
                      {zonas.map(z => <option key={z.id} value={z.nombre}>{z.nombre}</option>)}
                    </select>
                  </div>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Unirme a mi zona
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
