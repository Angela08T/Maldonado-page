import { useState, useEffect } from 'react'
import styles from './DonacionesPage.module.css'
import yapeLogo from '../../assets/yape.png'
import plinLogo from '../../assets/plin.png'

const MONTOS = [3, 5, 10]

const impactos = [
  { monto: 'S/ 3',  texto: 'Ayuda a imprimir material informativo para un vecino.' },
  { monto: 'S/ 5',  texto: 'Contribuye al transporte de voluntarios en el distrito.' },
  { monto: 'S/ 10', texto: 'Financia un kit de campaña para un promotor de zona.' },
  { monto: 'Más',   texto: 'Tu aporte extra multiplica el alcance del movimiento.' },
]

export default function DonacionesPage({ onBack }) {
  const [monto, setMonto]       = useState(5)
  const [custom, setCustom]     = useState('')
  const [metodo, setMetodo]     = useState('yape')
  const [card, setCard]         = useState({ num: '', nombre: '', exp: '', cvv: '' })
  const [pagado, setPagado]     = useState(false)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  const montoFinal = monto === 'otro' ? (parseFloat(custom) || 0) : monto

  const formatCard = v => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()
  const formatExp  = v => v.replace(/\D/g, '').slice(0, 4).replace(/^(\d{2})(\d)/, '$1/$2')

  const handlePago = e => {
    e.preventDefault()
    if (montoFinal < 1) return
    setPagado(true)
  }

  if (pagado) return (
    <div className={styles.page}>
      <div className={styles.successPage}>
        <div className={styles.successIcon}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2>¡Gracias por tu apoyo!</h2>
        <p>Tu aporte de <strong>S/ {montoFinal.toFixed(2)}</strong> es un paso más hacia el cambio que SJL necesita.</p>
        <button className={styles.backHome} onClick={onBack}>Volver al inicio</button>
      </div>
    </div>
  )

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
          <span className={styles.eyebrow}>Movimiento ciudadano</span>
          <h1 className={styles.heroTitle}>Apoya a<br/><span className={styles.accent}>la Causa</span></h1>
          <p className={styles.heroSub}>Cada sol aportado fortalece el movimiento que está transformando San Juan de Lurigancho</p>
        </div>
      </div>

      <div className={styles.container}>

        {/* ── Tarjeta principal ── */}
        <div className={styles.donacionGrid}>

          {/* Columna izquierda: selector de monto + método */}
          <div className={styles.donacionCard}>

            {/* Monto */}
            <div className={styles.montoSection}>
              <h3 className={styles.cardTitle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                </svg>
                Elige tu aporte
              </h3>
              <div className={styles.montoPills}>
                {MONTOS.map(m => (
                  <button
                    key={m}
                    className={`${styles.pill} ${monto === m ? styles.pillActive : ''}`}
                    onClick={() => { setMonto(m); setCustom('') }}
                  >
                    S/ {m}
                  </button>
                ))}
                <button
                  className={`${styles.pill} ${monto === 'otro' ? styles.pillActive : ''}`}
                  onClick={() => setMonto('otro')}
                >
                  Otro monto
                </button>
              </div>
              {monto === 'otro' && (
                <div className={styles.customWrap}>
                  <span className={styles.customPrefix}>S/</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Ingresa el monto"
                    className={styles.customInput}
                    value={custom}
                    onChange={e => setCustom(e.target.value)}
                    autoFocus
                  />
                </div>
              )}
              {montoFinal > 0 && (
                <p className={styles.montoResumen}>
                  Aportarás <strong>S/ {montoFinal.toFixed(2)}</strong> a la causa
                </p>
              )}
            </div>

            {/* Método de pago */}
            <div className={styles.metodoSection}>
              <h3 className={styles.cardTitle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
                Método de pago
              </h3>
              <div className={styles.tabs}>
                {['yape', 'plin', 'tarjeta'].map(t => (
                  <button
                    key={t}
                    className={`${styles.tab} ${styles['tab_' + t]} ${metodo === t ? styles.tabActive + ' ' + styles['tabActive_' + t] : ''}`}
                    onClick={() => setMetodo(t)}
                  >
                    {t === 'yape'    && <img src={yapeLogo} alt="Yape" className={styles.tabLogo} />}
                    {t === 'plin'    && <img src={plinLogo} alt="Plin" className={styles.tabLogo} />}
                    {t === 'tarjeta' && <CardIcon />}
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>

              {/* Yape */}
              {metodo === 'yape' && (
                <div className={styles.qrPanel}>
                  <div className={`${styles.qrBox} ${styles.qrYape}`}>
                    <img src={yapeLogo} alt="Yape" className={styles.qrLogoAbove} />
                    <QrSvg color="#6B21A8" />
                    <p className={styles.qrScanLabel}>Escanea con Yape</p>
                  </div>
                  <div className={styles.qrInfo}>
                    <p className={styles.qrStep}><strong>1.</strong> Abre tu app <strong>Yape</strong> y toca el ícono de QR</p>
                    <p className={styles.qrStep}><strong>2.</strong> Escanea el código o busca por número:</p>
                    <div className={styles.phoneChip}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-.85a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                      +51 999 999 999
                    </div>
                    <p className={styles.qrStep}><strong>3.</strong> Ingresa <strong>S/ {montoFinal > 0 ? montoFinal.toFixed(2) : '—'}</strong>, agrega un mensaje y confirma desde tu app</p>
                    <div className={styles.qrNote}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      El pago se completa directamente en tu app. No se requiere ninguna acción adicional aquí.
                    </div>
                  </div>
                </div>
              )}

              {/* Plin */}
              {metodo === 'plin' && (
                <div className={styles.qrPanel}>
                  <div className={`${styles.qrBox} ${styles.qrPlin}`}>
                    <img src={plinLogo} alt="Plin" className={styles.qrLogoAbove} />
                    <QrSvg color="#0284C7" />
                    <p className={styles.qrScanLabel}>Escanea con Plin</p>
                  </div>
                  <div className={styles.qrInfo}>
                    <p className={styles.qrStep}><strong>1.</strong> Abre tu app <strong>Plin</strong> y toca el ícono de QR</p>
                    <p className={styles.qrStep}><strong>2.</strong> Escanea el código o busca por número:</p>
                    <div className={styles.phoneChip}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-.85a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                      +51 999 999 999
                    </div>
                    <p className={styles.qrStep}><strong>3.</strong> Ingresa <strong>S/ {montoFinal > 0 ? montoFinal.toFixed(2) : '—'}</strong>, agrega un mensaje y confirma desde tu app</p>
                    <div className={styles.qrNote}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      El pago se completa directamente en tu app. No se requiere ninguna acción adicional aquí.
                    </div>
                  </div>
                </div>
              )}

              {/* Tarjeta */}
              {metodo === 'tarjeta' && (
                <form className={styles.cardForm} onSubmit={handlePago}>
                  <div className={styles.bancosRow}>
                    <BcpLogo />
                    <InterbankLogo />
                    <BbvaLogo />
                    <ScotiabankLogo />
                    <span className={styles.etcBadge}>+ más</span>
                  </div>
                  <div className={styles.field}>
                    <label>Número de tarjeta</label>
                    <input
                      type="text" inputMode="numeric" placeholder="0000 0000 0000 0000"
                      value={card.num}
                      onChange={e => setCard(c => ({ ...c, num: formatCard(e.target.value) }))}
                      maxLength={19} required
                    />
                  </div>
                  <div className={styles.field}>
                    <label>Nombre en la tarjeta</label>
                    <input
                      type="text" placeholder="JESÚS MALDONADO"
                      value={card.nombre}
                      onChange={e => setCard(c => ({ ...c, nombre: e.target.value.toUpperCase() }))}
                      required
                    />
                  </div>
                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label>Vencimiento</label>
                      <input
                        type="text" inputMode="numeric" placeholder="MM/AA"
                        value={card.exp}
                        onChange={e => setCard(c => ({ ...c, exp: formatExp(e.target.value) }))}
                        maxLength={5} required
                      />
                    </div>
                    <div className={styles.field}>
                      <label>CVV</label>
                      <input
                        type="password" inputMode="numeric" placeholder="•••"
                        value={card.cvv}
                        onChange={e => setCard(c => ({ ...c, cvv: e.target.value.replace(/\D/g,'').slice(0,4) }))}
                        maxLength={4} required
                      />
                    </div>
                  </div>
                  <button type="submit" className={`${styles.pagarBtn} ${styles.pagarCard}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Pagar S/ {montoFinal > 0 ? montoFinal.toFixed(2) : '—'} con tarjeta
                  </button>
                  <p className={styles.seguro}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    Pago 100% seguro · Datos encriptados
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Columna derecha: impacto */}
          <div className={styles.impactoCol}>
            <h3 className={styles.impactoTitle}>¿Qué logra tu aporte?</h3>
            <div className={styles.impactoList}>
              {impactos.map((imp, i) => (
                <div key={i} className={styles.impactoItem}>
                  <span className={styles.impactoBadge}>{imp.monto}</span>
                  <p>{imp.texto}</p>
                </div>
              ))}
            </div>
            <div className={styles.impactoQuote}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
              </svg>
              <p>"Cada aporte, por pequeño que sea, es un voto de confianza en el SJL que queremos construir juntos."</p>
              <span>— Jesús Maldonado</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

/* ── Íconos ── */
function CardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  )
}

/* ── Logos de bancos ── */
function BcpLogo() {
  return (
    <svg width="44" height="24" viewBox="0 0 44 24" fill="none">
      <rect width="44" height="24" rx="4" fill="#003087"/>
      <text x="22" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" fontFamily="Arial" letterSpacing="1">BCP</text>
    </svg>
  )
}
function InterbankLogo() {
  return (
    <svg width="44" height="24" viewBox="0 0 44 24" fill="none">
      <rect width="44" height="24" rx="4" fill="#E8621A"/>
      <text x="22" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="900" fontFamily="Arial" letterSpacing=".5">INTER</text>
    </svg>
  )
}
function BbvaLogo() {
  return (
    <svg width="44" height="24" viewBox="0 0 44 24" fill="none">
      <rect width="44" height="24" rx="4" fill="#004B98"/>
      <text x="22" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="900" fontFamily="Arial" letterSpacing="1">BBVA</text>
    </svg>
  )
}
function ScotiabankLogo() {
  return (
    <svg width="44" height="24" viewBox="0 0 44 24" fill="none">
      <rect width="44" height="24" rx="4" fill="#ED1C24"/>
      <text x="22" y="16" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="900" fontFamily="Arial" letterSpacing=".3">SCOTIA</text>
    </svg>
  )
}

function QrSvg({ color }) {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      {/* Esquinas QR */}
      <rect x="8"  y="8"  width="36" height="36" rx="4" fill={color} opacity=".15"/>
      <rect x="14" y="14" width="24" height="24" rx="2" fill={color} opacity=".3"/>
      <rect x="20" y="20" width="12" height="12" rx="1" fill={color}/>

      <rect x="66" y="8"  width="36" height="36" rx="4" fill={color} opacity=".15"/>
      <rect x="72" y="14" width="24" height="24" rx="2" fill={color} opacity=".3"/>
      <rect x="78" y="20" width="12" height="12" rx="1" fill={color}/>

      <rect x="8"  y="66" width="36" height="36" rx="4" fill={color} opacity=".15"/>
      <rect x="14" y="72" width="24" height="24" rx="2" fill={color} opacity=".3"/>
      <rect x="20" y="78" width="12" height="12" rx="1" fill={color}/>

      {/* Módulos centrales simulados */}
      {[52,58,64,52,64,52,58].map((x, i) => (
        <rect key={i} x={x} y={52 + i * 4} width="4" height="3" rx="1" fill={color} opacity=".6"/>
      ))}
      {[8,16,24,32,40,52,60,68,76,84,92].map((x, i) => (
        <rect key={i} x={x} y={50} width="4" height="4" rx="1" fill={color} opacity={i % 2 === 0 ? '.5' : '.2'}/>
      ))}
    </svg>
  )
}
