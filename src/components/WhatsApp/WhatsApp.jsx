import { useState, useEffect, useRef } from 'react'
import styles from './WhatsApp.module.css'
import { supabase } from '../../lib/supabase'

const WA_URL = 'https://wa.me/51900813888?text=Hola%2C%20me%20gustar%C3%ADa%20unirme.'

const PREGUNTAS = [
  '¡Hola! 👋 ¿Cuál es tu nombre?',
  'Gracias, ¿cuál es tu apellido materno?',
  '¿Y tu apellido paterno?',
  'Perfecto, ¿cuál es tu número de teléfono?',
  '¿En qué te gustaría participar?',
]

const PLACEHOLDERS = ['Tu nombre…', 'Apellido materno…', 'Apellido paterno…', 'Tu teléfono…']

const CAMPOS = ['nombre', 'apellidoMaterno', 'apellidoPaterno', 'telefono']

export default function WhatsApp() {
  const [open, setOpen]           = useState(false)
  const [visible, setVisible]     = useState(false)
  const [messages, setMessages]   = useState([])
  const [input, setInput]         = useState('')
  const [step, setStep]           = useState(0)
  const [done, setDone]           = useState(false)
  const popupRef    = useRef(null)
  const bottomRef   = useRef(null)
  const inputRef    = useRef(null)
  const dataRef     = useRef({})

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (open && messages.length === 0) {
      const t = setTimeout(() => {
        setMessages([{ from: 'bot', text: PREGUNTAS[0] }])
      }, 350)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open && step < 4 && !done) {
      const t = setTimeout(() => inputRef.current?.focus(), 400)
      return () => clearTimeout(t)
    }
  }, [open, step, done])

  useEffect(() => {
    if (!open) return
    const handler = e => {
      if (popupRef.current && !popupRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const addBotMsg = (text, delay = 700) => {
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text }])
    }, delay)
  }

  const handleSend = () => {
    const text = input.trim()
    if (!text || step >= 4 || done) return

    setInput('')
    setMessages(prev => [...prev, { from: 'user', text }])

    const campo = CAMPOS[step]
    dataRef.current = { ...dataRef.current, [campo]: text }

    const nextStep = step + 1
    setStep(nextStep)
    addBotMsg(PREGUNTAS[nextStep])
  }

  const handleOption = (tipo) => {
    if (done) return
    setDone(true)

    setMessages(prev => [
      ...prev,
      { from: 'user', text: tipo === 'simpatizante' ? '🤝 Quiero ser Simpatizante' : '📋 Quiero ser Personero' },
    ])

    addBotMsg('¡Perfecto! 🎉 Te redirigimos a WhatsApp ahora mismo…', 400)

    const d = dataRef.current
    supabase.from('contactos_chat').insert([{
      nombre:           d.nombre,
      apellido_materno: d.apellidoMaterno,
      apellido_paterno: d.apellidoPaterno,
      telefono:         d.telefono,
      tipo,
    }]).then(({ error }) => {
      if (error) console.error('Supabase:', error)
    })

    setTimeout(() => {
      setOpen(false)
      window.open(WA_URL, '_blank', 'noopener')
    }, 1400)
  }

  const handleKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() }
  }

  if (!visible) return null

  return (
    <div className={styles.wrapper} ref={popupRef}>

      {/* ── Botón flotante (FAB) ── */}
      <button
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Chat"
      >
        {open ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="white" width="56" height="56">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.12 1.533 5.849L0 24l6.301-1.513A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.989-1.364l-.358-.213-3.741.898.944-3.65-.233-.374A9.771 9.771 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
          </svg>
        )}
        {!open && <span className={styles.pulse} />}
      </button>

      {/* ── Popup emergente ── */}
      <div className={`${styles.popup} ${open ? styles.popupOpen : ''}`}>

        <div className={styles.popupHead}>
          <div className={styles.avatar}>
            <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
          </div>
          <div className={styles.headInfo}>
            <p className={styles.headName}>Jesus Maldonado</p>
            <p className={styles.headStatus}><span className={styles.dot} /> En línea</p>
          </div>
          <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Cerrar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className={styles.popupBody}>
          {messages.map((msg, i) => (
            <div key={i} className={msg.from === 'bot' ? styles.botBubble : styles.userBubble}>
              {msg.text}
            </div>
          ))}

          {step === 4 && !done && (
            <div className={styles.options}>
              <button className={styles.optionBtn} onClick={() => handleOption('simpatizante')}>
                🤝 Quiero ser Simpatizante
              </button>
              <button className={styles.optionBtn} onClick={() => handleOption('personero')}>
                📋 Quiero ser Personero
              </button>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {step < 4 && !done && (
          <div className={styles.popupFoot}>
            <div className={styles.inputRow}>
              <input
                ref={inputRef}
                className={styles.chatInput}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder={PLACEHOLDERS[step]}
              />
              <button
                className={styles.sendBtn}
                onClick={handleSend}
                disabled={!input.trim()}
                aria-label="Enviar"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  )
}
