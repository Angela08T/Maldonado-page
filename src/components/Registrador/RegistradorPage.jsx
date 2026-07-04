import { useState, useRef, useEffect } from 'react'
import styles from './RegistradorPage.module.css'
import logoSomosPeru from '../../assets/logo-somos-peru.png'
import { supabase } from '../../lib/supabase'

function SignaturePad({ canvasRef }) {
  const drawing = useRef(false)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#111'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.lineJoin = 'round'
    const getPos = e => {
      const rect = canvas.getBoundingClientRect()
      const src = e.touches ? e.touches[0] : e
      return { x: (src.clientX - rect.left) * (canvas.width / rect.width), y: (src.clientY - rect.top) * (canvas.height / rect.height) }
    }
    const start = e => { e.preventDefault(); drawing.current = true; const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y) }
    const move  = e => { e.preventDefault(); if (!drawing.current) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke() }
    const stop  = () => { drawing.current = false }
    canvas.addEventListener('mousedown', start); canvas.addEventListener('mousemove', move)
    canvas.addEventListener('mouseup', stop);    canvas.addEventListener('mouseleave', stop)
    canvas.addEventListener('touchstart', start, { passive: false })
    canvas.addEventListener('touchmove',  move,  { passive: false })
    canvas.addEventListener('touchend',   stop)
    return () => {
      canvas.removeEventListener('mousedown', start); canvas.removeEventListener('mousemove', move)
      canvas.removeEventListener('mouseup', stop);    canvas.removeEventListener('mouseleave', stop)
      canvas.removeEventListener('touchstart', start); canvas.removeEventListener('touchmove', move); canvas.removeEventListener('touchend', stop)
    }
  }, [canvasRef])
  const clear = () => {
    const canvas = canvasRef.current; if (!canvas) return
    canvas.width = canvas.width
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#111'; ctx.lineWidth = 2; ctx.lineCap = 'round'; ctx.lineJoin = 'round'
  }
  return (
    <div className={styles.signWrap}>
      <canvas ref={canvasRef} width={560} height={200} className={styles.signCanvas} />
      <button type="button" className={styles.clearBtn} onClick={clear}>Limpiar</button>
    </div>
  )
}

const EMPTY_FIELDS = {
  apellido_paterno:'', apellido_materno:'', nombres:'', dni:'',
  fnac_dia:'', fnac_mes:'', fnac_anio:'',
  lugar_nacimiento:'', region:'', provincia:'',
  distrito:'', direccion:'', telefono:'', comuna:'', email:''
}

export default function RegistradorPage({ onBack }) {
  const [step, setStep]             = useState(1)
  const [registrador, setRegistrador] = useState({ nombres: '', apellidos: '' })
  const [regError, setRegError]     = useState('')
  const [sexo, setSexo]             = useState('')
  const [huella, setHuella]         = useState(null)
  const [fields, setFields]         = useState(EMPTY_FIELDS)
  const [saving, setSaving]         = useState(false)
  const [showPopup, setShowPopup]   = useState(false)
  const [saveError, setSaveError]   = useState('')
  const canvasRef = useRef(null)

  const nombresRef   = useRef(null)
  const apellidosRef = useRef(null)

  const set = k => e => setFields(f => ({ ...f, [k]: e.target.value }))

  const handleContinuar = () => {
    const nombres   = (nombresRef.current?.value   || '').trim()
    const apellidos = (apellidosRef.current?.value || '').trim()
    if (!nombres || !apellidos) {
      setRegError('Ingresa tu nombre y apellido completos.')
      return
    }
    setRegistrador({ nombres, apellidos })
    setRegError('')
    setStep(2)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const handleGuardar = async () => {
    setSaving(true); setSaveError('')
    const fecha_nacimiento = [fields.fnac_dia, fields.fnac_mes, fields.fnac_anio].filter(Boolean).join('/')
    const { error } = await supabase.from('personeros').insert({
      apellido_paterno: fields.apellido_paterno,
      apellido_materno: fields.apellido_materno,
      nombres:          fields.nombres,
      dni:              fields.dni,
      fecha_nacimiento,
      lugar_nacimiento: fields.lugar_nacimiento,
      region:           fields.region,
      provincia:        fields.provincia,
      distrito:         fields.distrito,
      direccion:        fields.direccion,
      telefono:         fields.telefono,
      comuna:           fields.comuna,
      email:            fields.email,
      sexo,
      tipo_registro:         'registrador',
      registrador_nombres:   registrador.nombres.trim(),
      registrador_apellidos: registrador.apellidos.trim(),
    })
    setSaving(false)
    if (error) { setSaveError('Error al enviar. Verifica tu conexión e intenta nuevamente.'); return }
    setShowPopup(true)
  }

  const handleOtro = () => {
    setFields(EMPTY_FIELDS); setSexo(''); setHuella(null)
    setShowPopup(false); setSaveError('')
    if (canvasRef.current) { canvasRef.current.width = canvasRef.current.width }
    window.scrollTo({ top: 0 })
  }

  return (
    <div className={styles.page}>

    {/* ── PASO 1 ── */}
    {step === 1 && (
      <div className={styles.stepCard}>
        <div className={styles.stepHeader}>
          <img src={logoSomosPeru} alt="Somos Perú" className={styles.stepLogo} />
          <h1 className={styles.stepTitle}>REGISTRO DE PERSONEROS</h1>
          <p className={styles.stepSub}>Sistema para Registradores Autorizados</p>
        </div>
        <div className={styles.stepBody}>
          <div className={styles.stepBadge}>PASO 1 DE 2</div>
          <h2 className={styles.stepQ}>Identifícate como Registrador</h2>
          <p className={styles.stepDesc}>
            Antes de registrar a un personero, ingresa tus propios datos como registrador autorizado del partido.
          </p>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Nombres del Registrador <span className={styles.req}>*</span></label>
            <input
              ref={nombresRef}
              type="text"
              className={styles.input}
              placeholder="Ej: Juan Carlos"
              autoComplete="off"
              onKeyDown={e => e.key === 'Enter' && handleContinuar()}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Apellidos del Registrador <span className={styles.req}>*</span></label>
            <input
              ref={apellidosRef}
              type="text"
              className={styles.input}
              placeholder="Ej: García López"
              autoComplete="off"
              onKeyDown={e => e.key === 'Enter' && handleContinuar()}
            />
          </div>
          {regError && <p className={styles.errorMsg}>{regError}</p>}
          <button className={styles.btnContinuar} onClick={handleContinuar} type="button">
            Continuar al formulario
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          {onBack && (
            <button className={styles.btnBackStep1} onClick={onBack} type="button">
              ← Volver al inicio
            </button>
          )}
        </div>
      </div>
    )}

    {/* ── PASO 2 ── */}
    {step === 2 && (<>

      {/* Banner del registrador — oculto al imprimir */}
      <div className={styles.registradorBanner}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
        Registrando como: <strong>{registrador.nombres} {registrador.apellidos}</strong>
        <button className={styles.cambiarBtn} onClick={() => { setStep(1); window.scrollTo({ top: 0 }) }}>
          Cambiar
        </button>
      </div>

      {/* Acciones — ocultas al imprimir */}
      <div className={styles.actions}>
        {onBack && (
          <button className={styles.backBtn} onClick={onBack}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Volver
          </button>
        )}

        <button className={`${styles.downloadBtn} ${styles.downloadBtnTop}`} onClick={handleGuardar} disabled={saving}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {saving ? 'Enviando...' : 'Enviar / Descargar'}
        </button>
      </div>

      {saveError && <div className={styles.errorBanner}>{saveError}</div>}

      {/* Popup de éxito */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupCard}>
            <div className={styles.popupCheck}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3 className={styles.popupTitle}>¡Registro Exitoso!</h3>
            <p className={styles.popupMsg}>Los datos del personero han sido guardados correctamente en el sistema.</p>
            <button className={styles.popupPrintBtn} onClick={() => window.print()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Descargar / Imprimir PDF
            </button>
            <button className={styles.popupCloseBtn} onClick={handleOtro}>
              Registrar otro personero
            </button>
          </div>
        </div>
      )}

      {/* ── Ficha oficial ── */}
      <div className={styles.ficha}>

        {/* Encabezado */}
        <div className={styles.header}>
          <div className={styles.logoBox}>
            <img src={logoSomosPeru} alt="Somos Perú" className={styles.logoImg} />
          </div>
          <div className={styles.headerTexts}>
            <p className={styles.partido}>PARTIDO DEMOCRÁTICO</p>
            <p className={styles.somosGrande}>SOMOS PERÚ</p>
            <div className={styles.tituloFicha}>FICHA DE INSCRIPCIÓN DE PERSONEROS</div>
          </div>
        </div>

        {/* Fecha */}
        <div className={styles.fechaRow}>
          {[['DÍA',2],['MES',2],['AÑO',4]].map(([lbl, max]) => (
            <div className={styles.fechaGroup} key={lbl}>
              <span className={styles.fechaLabel}>{lbl}</span>
              <input className={styles.fechaCelda} type="text" inputMode="numeric" maxLength={max} />
            </div>
          ))}
        </div>

        <p className={styles.declaracion}>
          Por medio del presente, manifiesto mi decisión de <strong>INSCRIBIRME</strong> como Personero de la organización política Partido Democrático Somos Perú comprometiéndome a cumplir con su estatuto y demás normas internas. En fe de lo cual firmo el presente documento:
        </p>

        <h2 className={styles.seccion}>DATOS PERSONALES</h2>

        <div className={styles.campoFull}>
          <label>Apellido Paterno:</label>
          <input type="text" className={styles.inputFull} value={fields.apellido_paterno} onChange={set('apellido_paterno')} />
        </div>
        <div className={styles.campoFull}>
          <label>Apellido Materno:</label>
          <input type="text" className={styles.inputFull} value={fields.apellido_materno} onChange={set('apellido_materno')} />
        </div>
        <div className={styles.campoFull}>
          <label>Nombres:</label>
          <input type="text" className={styles.inputFull} value={fields.nombres} onChange={set('nombres')} />
        </div>

        <div className={styles.dniRow}>
          <div className={styles.dniGroup}>
            <label>DNI</label>
            <input type="text" className={styles.inputDni} maxLength={8} value={fields.dni} onChange={set('dni')} />
          </div>
          <div className={styles.nacRow}>
            <label>Fecha de Nacimiento</label>
            <div className={styles.nacCeldas}>
              {[['Día','fnac_dia',2],['Mes','fnac_mes',2],['Año','fnac_anio',4]].map(([lbl, key, max]) => (
                <div className={styles.fechaGroup} key={key}>
                  <span className={styles.fechaLabelSm}>{lbl}</span>
                  <input className={styles.fechaCeldaSm} type="text" maxLength={max} value={fields[key]} onChange={set(key)} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sexoGroup}>
            <label>Sexo</label>
            <div className={styles.sexoOpts}>
              {['F','M'].map(s => (
                <button key={s} type="button"
                  className={`${styles.sexoBtn} ${sexo === s ? styles.sexoActive : ''}`}
                  onClick={() => setSexo(s)}>{s}</button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.campoFull}>
          <label>Lugar de Nacimiento</label>
          <input type="text" className={styles.inputFull} value={fields.lugar_nacimiento} onChange={set('lugar_nacimiento')} />
        </div>

        <h2 className={styles.seccion}>DOMICILIO ACTUAL</h2>

        <div className={styles.triRow}>
          {[['Región','region'],['Provincia','provincia'],['Distrito','distrito']].map(([lbl, key]) => (
            <div className={styles.campo} key={key}>
              <label>{lbl}</label>
              <input type="text" className={styles.inputCampo} value={fields[key]} onChange={set(key)} />
            </div>
          ))}
        </div>

        <div className={styles.dirRow}>
          <div className={styles.campoDir}>
            <label>Avenida / Calle / Jirón / Urbanización / Asentamiento H. / Sector</label>
            <input type="text" className={styles.inputFull} value={fields.direccion} onChange={set('direccion')} />
          </div>
          <div className={styles.campoTel}>
            <label>Teléfono</label>
            <input type="text" className={styles.inputFull} value={fields.telefono} onChange={set('telefono')} />
          </div>
        </div>

        <div className={styles.duoRow}>
          <div className={styles.campo}>
            <label>Comuna</label>
            <input type="text" className={styles.inputCampo} value={fields.comuna} onChange={set('comuna')} />
          </div>
          <div className={styles.campoEmail}>
            <label>Correo Electrónico</label>
            <input type="email" className={styles.inputCampo} value={fields.email} onChange={set('email')} />
          </div>
        </div>

        {/* Firma y huella — */}
        <div className={styles.firmaRow}>
          <div className={styles.firmaBox}>
            <SignaturePad canvasRef={canvasRef} />
            <span className={styles.firmaLabel}>Firma</span>
          </div>
          <div className={styles.huellaBox}>
            <label className={styles.huellaRect}>
              <input type="file" accept="image/*" className={styles.huellaInput} onChange={e => { const f = e.target.files[0]; if (f) setHuella(URL.createObjectURL(f)) }} />
              {huella ? <img src={huella} alt="Huella" className={styles.huellaImg} /> : <span className={styles.huellaPlaceholder}>Toca para subir foto</span>}
            </label>
            <span className={styles.firmaLabel}>Huella Digital</span>
          </div>
        </div>

        {/* Botón al fondo — solo visible en móvil/tablet */}
        <button className={`${styles.downloadBtn} ${styles.downloadBtnBottom}`} onClick={handleGuardar} disabled={saving}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {saving ? 'Enviando...' : 'Enviar / Descargar'}
        </button>

      </div>
      </>)}

    </div>
  )
}
