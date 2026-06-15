import { useState, useEffect } from 'react'
import styles from './PersoneroPage.module.css'

const beneficios = [
  {
    color: 'red',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    titulo: 'Cuidas tu voto',
    texto: 'Fiscalizas el proceso de votación en tu mesa asegurando que cada voto sea contado correctamente.',
  },
  {
    color: 'blue',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    titulo: 'Representas al movimiento',
    texto: 'Eres la voz oficial de Jesús Maldonado en tu mesa de votación, garantizando transparencia.',
  },
  {
    color: 'green',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    titulo: 'Proceso transparente',
    texto: 'Tu presencia asegura que el escrutinio sea justo, evitando irregularidades en el conteo de votos.',
  },
  {
    color: 'orange',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    titulo: 'Capacitación gratuita',
    texto: 'Recibirás formación completa sobre tus funciones y derechos como personero antes del día de elecciones.',
  },
  {
    color: 'blue',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    titulo: 'Acción en el momento clave',
    texto: 'Participas activamente el día más importante del proceso democrático, cuando más se necesita tu presencia.',
  },
  {
    color: 'red',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    titulo: 'Reconocimiento ciudadano',
    texto: 'Tu labor como personero es un acto de servicio cívico que fortalece la democracia en SJL.',
  },
]

const requisitos = [
  'Ser ciudadano peruano con DNI vigente',
  'Estar inscrito en el padrón electoral del distrito',
  'Disponibilidad el día de las elecciones',
  'Asistir a la capacitación previa obligatoria',
  'Compromiso con la transparencia del proceso',
]

export default function PersoneroPage({ onBack }) {
  const [form, setForm]     = useState({ nombre: '', apellidos: '', dni: '', celular: '', zona: '' })
  const [enviado, setEnviado] = useState(false)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const { nombre, apellidos, dni, celular, zona } = form
    if (nombre && apellidos && dni && celular && zona) setEnviado(true)
  }

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          {onBack && (
            <button className={styles.backBtn} onClick={onBack}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Volver al inicio
            </button>
          )}
          <span className={styles.eyebrow}>Acción ciudadana · Elecciones</span>
          <h1 className={styles.heroTitle}>Sé Personero y<br/><span className={styles.accent}>Cuida tu Voto</span></h1>
          <p className={styles.heroSub}>Regístrate para representar a Jesús Maldonado en tu mesa de votación y garantizar un proceso electoral transparente en San Juan de Lurigancho</p>
          <div className={styles.heroPills}>
            <span className={styles.pill}>✔ Gratuito</span>
            <span className={styles.pill}>✔ Capacitación incluida</span>
            <span className={styles.pill}>✔ Acción real el día de elecciones</span>
          </div>
        </div>
      </div>

      <div className={styles.container}>

        {/* ── Grid principal ── */}
        <div className={styles.mainGrid}>

          {/* Formulario */}
          <div className={styles.formCard}>
            {enviado ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>¡Gracias, {form.nombre}!</h3>
                <p>Tu registro como personero ha sido recibido. Nos comunicaremos contigo al <strong>{form.celular}</strong> con los detalles de la capacitación.</p>
                <button className={styles.resetBtn} onClick={() => { setEnviado(false); setForm({ nombre: '', apellidos: '', dni: '', celular: '', zona: '' }) }}>
                  Registrar otro personero
                </button>
              </div>
            ) : (
              <>
                <h2 className={styles.formTitle}>Regístrate para ser Personero</h2>
                <div className={styles.formDivider} />
                <p className={styles.formDesc}>Completa el formulario y te contactaremos para coordinar tu capacitación antes del día de elecciones.</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label>Nombre</label>
                      <input type="text" placeholder="Jesús" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} required />
                    </div>
                    <div className={styles.field}>
                      <label>Apellidos</label>
                      <input type="text" placeholder="García López" value={form.apellidos} onChange={e => setForm(f => ({ ...f, apellidos: e.target.value }))} required />
                    </div>
                  </div>
                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label>DNI</label>
                      <input type="text" inputMode="numeric" placeholder="12345678" maxLength={8} value={form.dni} onChange={e => setForm(f => ({ ...f, dni: e.target.value.replace(/\D/g,'').slice(0,8) }))} required />
                    </div>
                    <div className={styles.field}>
                      <label>Celular</label>
                      <input type="tel" inputMode="numeric" placeholder="999 000 000" value={form.celular} onChange={e => setForm(f => ({ ...f, celular: e.target.value.replace(/\D/g,'').slice(0,9) }))} required />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>Zona / Sector donde votarás</label>
                    <select value={form.zona} onChange={e => setForm(f => ({ ...f, zona: e.target.value }))} required>
                      <option value="">Selecciona tu zona</option>
                      <option>Zona Norte – Canto Grande</option>
                      <option>Zona Sur – Bayóvar / Canto Rey</option>
                      <option>Zona Centro – Zárate / Campoy</option>
                      <option>Zona Este – Huáscar / Mariscal Cáceres</option>
                      <option>Zona Oeste – Mangomarca / El Agustino</option>
                    </select>
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Quiero ser personero
                  </button>
                  <p className={styles.privacidad}>Tus datos solo se usarán para coordinar tu participación como personero.</p>
                </form>
              </>
            )}
          </div>

          {/* Requisitos */}
          <div className={styles.requisitosCard}>
            <h3 className={styles.reqTitle}>Requisitos</h3>
            <div className={styles.reqDivider} />
            <ul className={styles.reqList}>
              {requisitos.map((r, i) => (
                <li key={i} className={styles.reqItem}>
                  <span className={styles.reqCheck}>✔</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className={styles.reqAlert}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <p>Los personeros acreditados reciben un código oficial del movimiento para presentar el día de las elecciones.</p>
            </div>
          </div>
        </div>

        {/* ── Beneficios ── */}
        <div className={styles.beneficiosBlock}>
          <h2 className={styles.sectionTitle}>¿Por qué ser personero?</h2>
          <div className={styles.sectionDivider} />
          <div className={styles.beneficiosGrid}>
            {beneficios.map((b, i) => (
              <div key={i} className={`${styles.benCard} ${styles['border_' + b.color]}`}>
                <div className={`${styles.benIcon} ${styles['bg_' + b.color]}`}>{b.icon}</div>
                <div>
                  <h4 className={styles.benTitulo}>{b.titulo}</h4>
                  <p className={styles.benTexto}>{b.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA final ── */}
        <div className={styles.ctaFinal}>
          <div className={styles.ctaIcon}>⚡</div>
          <h3>El voto es tuyo — protégelo</h3>
          <p>Cada personero en cada mesa es un paso más hacia una victoria limpia y legítima para San Juan de Lurigancho.</p>
        </div>

      </div>
    </div>
  )
}
