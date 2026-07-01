import { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './CTA.module.css'

function IconShare() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  )
}
function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}
function IconWa() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
function IconFb() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )
}
function IconTg() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.668l-2.967-.924c-.643-.204-.657-.643.136-.953l11.57-4.46c.537-.194 1.006.131.965.89z"/>
    </svg>
  )
}
function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
function IconCopy() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
    </svg>
  )
}

export default function CTA() {
  const [open, setOpen]     = useState(false)
  const [copied, setCopied] = useState(false)

  const shareText = '¡Conoce la propuesta de Jesús Maldonado para San Juan de Lurigancho!'
  const pageUrl   = typeof window !== 'undefined' ? window.location.href : ''

  function copyLink() {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
    setOpen(false)
  }

  const url  = encodeURIComponent(pageUrl)
  const txt  = encodeURIComponent(shareText + ' ')

  const items = [
    { label: 'WhatsApp',    color: '#25D366', Icon: IconWa, href: `https://api.whatsapp.com/send?text=${txt}${url}` },
    { label: 'Facebook',    color: '#1877F2', Icon: IconFb, href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { label: 'Telegram',    color: '#0088CC', Icon: IconTg, href: `https://t.me/share/url?url=${url}&text=${txt}` },
    { label: 'X / Twitter', color: '#000',    Icon: IconX,  href: `https://twitter.com/intent/tweet?text=${txt}&url=${url}` },
  ]

  /* Portal: backdrop + popup se montan directamente en document.body */
  const modal = open ? createPortal(
    <>
      <div className={styles.backdrop} onClick={() => setOpen(false)} />
      <div className={styles.sharePopup}>
        <p className={styles.popupTitle}>Compartir en</p>
        {items.map(({ label, color, Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareItem}
            onClick={() => setOpen(false)}
          >
            <span className={styles.shareItemIcon} style={{ background: color }}><Icon /></span>
            {label}
          </a>
        ))}
        <button className={styles.shareItem} onClick={copyLink}>
          <span className={styles.shareItemIcon} style={{ background: copied ? '#16a34a' : '#555' }}>
            <IconCopy />
          </span>
          {copied ? '¡Enlace copiado!' : 'Copiar enlace'}
        </button>
      </div>
    </>,
    document.body
  ) : null

  return (
    <div id="cta" className={styles.bar}>

      {/* Panel rojo */}
      <div className={styles.panelRed}>
        <svg className={styles.panelIcon} width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87"/>
          <path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
        <p className={styles.panelText}>
          <strong>EL CAMBIO CONTINÚA</strong>
        </p>
      </div>

      {/* Panel azul – compartir */}
      <div className={styles.panelTeal}>
        <span className={styles.deco1} />
        <span className={styles.deco2} />

        <div className={styles.shareWrap}>
          <p className={styles.shareLabel}>¿Te gustó lo que ves?</p>
          <p className={styles.shareTitle}>COMPARTE<br/>ESTA PROPUESTA</p>

          <button
            className={styles.shareBtn}
            onPointerDown={(e) => { e.stopPropagation(); setOpen(true); }}
            onClick={() => setOpen(true)}
            aria-label="Compartir página"
          >
            <IconShare />
            <span>Compartir ahora</span>
            <span className={`${styles.shareBtnArrow} ${open ? styles.arrowUp : ''}`}>
              <IconArrow />
            </span>
          </button>
        </div>
      </div>

      {modal}
    </div>
  )
}
