import { useState, useRef, useEffect } from 'react'
import styles from './PersoneroPage.module.css'
import logoSomosPeru from '../../assets/logo-somos-peru.png'
import { supabase } from '../../lib/supabase'

function SignaturePad({ canvasRef }) {
  const drawing = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#111'
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    const getPos = e => {
      const rect = canvas.getBoundingClientRect()
      const src = e.touches ? e.touches[0] : e
      const scaleX = canvas.width  / rect.width
      const scaleY = canvas.height / rect.height
      return {
        x: (src.clientX - rect.left) * scaleX,
        y: (src.clientY - rect.top)  * scaleY,
      }
    }
    const start = e => { e.preventDefault(); drawing.current = true; const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y) }
    const move  = e => { e.preventDefault(); if (!drawing.current) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke() }
    const stop  = ()  => { drawing.current = false }

    canvas.addEventListener('mousedown', start)
    canvas.addEventListener('mousemove', move)
    canvas.addEventListener('mouseup', stop)
    canvas.addEventListener('mouseleave', stop)
    canvas.addEventListener('touchstart', start, { passive: false })
    canvas.addEventListener('touchmove',  move,  { passive: false })
    canvas.addEventListener('touchend',   stop)
    return () => {
      canvas.removeEventListener('mousedown', start)
      canvas.removeEventListener('mousemove', move)
      canvas.removeEventListener('mouseup', stop)
      canvas.removeEventListener('mouseleave', stop)
      canvas.removeEventListener('touchstart', start)
      canvas.removeEventListener('touchmove',  move)
      canvas.removeEventListener('touchend',   stop)
    }
  }, [canvasRef])

  const clear = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const w = canvas.width
    canvas.width = w   // resetea canvas y limpia todo el contenido
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = '#111'
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
  }

  return (
    <div className={styles.signWrap}>
      <canvas ref={canvasRef} width={560} height={200} className={styles.signCanvas} />
      <button type="button" className={styles.clearBtn} onClick={clear}>Limpiar</button>
    </div>
  )
}

export default function PersoneroPage({ onBack }) {
  const [sexo, setSexo]         = useState('')
  const [huella, setHuella]     = useState(null)
  const [fields, setFields]     = useState({
    apellido_paterno:'', apellido_materno:'', nombres:'', dni:'',
    fecha_nacimiento:'', lugar_nacimiento:'', region:'', provincia:'',
    distrito:'', direccion:'', telefono:'', comuna:'', email:''
  })
  const canvasRef      = useRef(null)
  const huellaInputRef = useRef(null)

  const set = k => e => setFields(f => ({ ...f, [k]: e.target.value }))

  const handleDescargar = async () => {
    await supabase.from('personeros').insert({ ...fields, sexo })
    window.print()
  }

  const handleHuella = e => {
    const file = e.target.files[0]
    if (file) setHuella(URL.createObjectURL(file))
  }

  return (
    <div className={styles.page}>

      {/* Botones de acción — solo visibles en pantalla, ocultos al imprimir */}
      <div className={styles.actions}>
        {onBack && (
          <button className={styles.backBtn} onClick={onBack}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Volver
          </button>
        )}
        <button className={styles.downloadBtn} onClick={handleDescargar}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Descargar / Imprimir Ficha
        </button>
      </div>

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
            <div className={styles.tituloFicha}>
              FICHA DE INSCRIPCIÓN DE PERSONEROS
            </div>
          </div>
        </div>

        {/* Fecha */}
        <div className={styles.fechaRow}>
          <div className={styles.fechaGroup}>
            <span className={styles.fechaLabel}>DÍA</span>
            <input className={styles.fechaCelda} type="text" inputMode="numeric" maxLength={2} />
          </div>
          <div className={styles.fechaGroup}>
            <span className={styles.fechaLabel}>MES</span>
            <input className={styles.fechaCelda} type="text" inputMode="numeric" maxLength={2} />
          </div>
          <div className={styles.fechaGroup}>
            <span className={styles.fechaLabel}>AÑO</span>
            <input className={styles.fechaCelda} type="text" inputMode="numeric" maxLength={4} />
          </div>
        </div>

        {/* Texto declaración */}
        <p className={styles.declaracion}>
          Por medio del presente, manifiesto mi decisión de <strong>INSCRIBIRME</strong> como Personero de la organización política Partido Democrático Somos Perú comprometiéndome a cumplir con su estatuto y demás normas internas. En fe de lo cual firmo el presente documento:
        </p>

        {/* DATOS PERSONALES */}
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

        {/* DNI + Fecha de nacimiento + Sexo */}
        <div className={styles.dniRow}>
          <div className={styles.dniGroup}>
            <label>DNI</label>
            <input type="text" className={styles.inputDni} maxLength={8} value={fields.dni} onChange={set('dni')} />
          </div>
          <div className={styles.nacRow}>
            <label>Fecha de Nacimiento</label>
            <div className={styles.nacCeldas}>
              <div className={styles.fechaGroup}>
                <span className={styles.fechaLabelSm}>Día</span>
                <input className={styles.fechaCeldaSm} type="text" maxLength={2} onChange={e => setFields(f => ({ ...f, fecha_nacimiento: e.target.value + f.fecha_nacimiento.slice(2) }))} />
              </div>
              <div className={styles.fechaGroup}>
                <span className={styles.fechaLabelSm}>Mes</span>
                <input className={styles.fechaCeldaSm} type="text" maxLength={2} onChange={e => setFields(f => ({ ...f, fecha_nacimiento: f.fecha_nacimiento.slice(0,2) + '/' + e.target.value + f.fecha_nacimiento.slice(5) }))} />
              </div>
              <div className={styles.fechaGroup}>
                <span className={styles.fechaLabelSm}>Año</span>
                <input className={styles.fechaCeldaSm} type="text" maxLength={4} onChange={e => setFields(f => ({ ...f, fecha_nacimiento: f.fecha_nacimiento.slice(0,5) + '/' + e.target.value }))} />
              </div>
            </div>
          </div>
          <div className={styles.sexoGroup}>
            <label>Sexo</label>
            <div className={styles.sexoOpts}>
              <button type="button" className={`${styles.sexoBtn} ${sexo === 'F' ? styles.sexoActive : ''}`} onClick={() => setSexo('F')}>F</button>
              <button type="button" className={`${styles.sexoBtn} ${sexo === 'M' ? styles.sexoActive : ''}`} onClick={() => setSexo('M')}>M</button>
            </div>
          </div>
        </div>

        <div className={styles.campoFull}>
          <label>Lugar de Nacimiento</label>
          <input type="text" className={styles.inputFull} value={fields.lugar_nacimiento} onChange={set('lugar_nacimiento')} />
        </div>

        {/* DOMICILIO ACTUAL */}
        <h2 className={styles.seccion}>DOMICILIO ACTUAL</h2>

        <div className={styles.triRow}>
          <div className={styles.campo}>
            <label>Región</label>
            <input type="text" className={styles.inputCampo} value={fields.region} onChange={set('region')} />
          </div>
          <div className={styles.campo}>
            <label>Provincia</label>
            <input type="text" className={styles.inputCampo} value={fields.provincia} onChange={set('provincia')} />
          </div>
          <div className={styles.campo}>
            <label>Distrito</label>
            <input type="text" className={styles.inputCampo} value={fields.distrito} onChange={set('distrito')} />
          </div>
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

        {/* Firma y huella */}
        <div className={styles.firmaRow}>
          <div className={styles.firmaBox}>
            <SignaturePad canvasRef={canvasRef} />
            <span className={styles.firmaLabel}>Firma</span>
          </div>
          <div className={styles.huellaBox}>
            <label className={styles.huellaRect}>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className={styles.huellaInput}
                onChange={handleHuella}
              />
              {huella
                ? <img src={huella} alt="Huella" className={styles.huellaImg} />
                : <span className={styles.huellaPlaceholder}>Toca para subir foto</span>
              }
            </label>
            <span className={styles.firmaLabel}>Huella Digital</span>
          </div>
        </div>

      </div>
    </div>
  )
}
