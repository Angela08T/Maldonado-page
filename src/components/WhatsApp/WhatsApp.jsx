import { useState, useEffect, useRef } from 'react'
import styles from './WhatsApp.module.css'

const PHONE   = '51999999999'
const MESSAGE = 'Hola, me comunico desde el sitio web de Jesús Maldonado.'

export default function WhatsApp() {
  const [open, setOpen]       = useState(false)
  const [visible, setVisible] = useState(false)
  const popupRef              = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = e => {
      if (popupRef.current && !popupRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const handleChat = () => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`
    window.open(url, '_blank', 'noopener')
  }

  if (!visible) return null

  return (
    <div className={styles.wrapper} ref={popupRef}>

      {/* ── Botón flotante ── */}
      <button
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="WhatsApp"
      >
        {open ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="white" width="34" height="34">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.12 1.533 5.849L0 24l6.301-1.513A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.989-1.364l-.358-.213-3.741.898.944-3.65-.233-.374A9.771 9.771 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
          </svg>
        )}
        {!open && <span className={styles.pulse} />}
      </button>

      {/* ── Popup emergente (se abre hacia abajo) ── */}
      <div className={`${styles.popup} ${open ? styles.popupOpen : ''}`}>

        <div className={styles.popupHead}>
          <div className={styles.avatar}>
            <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
          </div>
          <div className={styles.headInfo}>
            <p className={styles.headName}>Municipalidad SJL</p>
            <p className={styles.headStatus}>
              <span className={styles.dot} /> En línea
            </p>
          </div>
          <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Cerrar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className={styles.popupBody}>
          <div className={styles.bubble}>
            <p>¡Hola! 👋</p>
            <p>¿En qué podemos ayudarte? Escríbenos y te responderemos a la brevedad.</p>
            <span className={styles.time}>ahora</span>
          </div>
        </div>

        <div className={styles.popupFoot}>
          <button className={styles.chatBtn} onClick={handleChat}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.12 1.533 5.849L0 24l6.301-1.513A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.989-1.364l-.358-.213-3.741.898.944-3.65-.233-.374A9.771 9.771 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            Iniciar chat en WhatsApp
          </button>
        </div>

      </div>

    </div>
  )
}
