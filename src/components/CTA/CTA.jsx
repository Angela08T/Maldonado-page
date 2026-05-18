import { useState } from 'react'
import styles from './CTA.module.css'

const socials = [
  { label: 'Facebook',  path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', fill: true },
  { label: 'Instagram', instagram: true },
  { label: 'TikTok',    tiktok: true },
  { label: 'YouTube',   youtube: true },
]

export default function CTA() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) { setSent(true); setEmail('') }
  }

  return (
    <div id="cta" className={styles.cta}>
      <div className={`${styles.left} reveal`}>
        <svg viewBox="0 0 44 44" fill="none" width="44" height="44">
          <circle cx="22" cy="22" r="22" fill="rgba(255,255,255,0.2)"/>
          <path d="M14 22l6 6 10-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3>¡Juntos Haremos un Mejor Maldonado!</h3>
        <p>Tu participación es importante.</p>
      </div>

      <div className={`${styles.newsletter} reveal`} style={{ transitionDelay: '.1s' }}>
        <h4>Suscríbete para Recibir Noticias</h4>
        {sent ? (
          <p className={styles.thanks}>¡Gracias por suscribirte! 🎉</p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Suscribirme</button>
          </form>
        )}
      </div>

      <div className={`${styles.socialCol} reveal`} style={{ transitionDelay: '.2s' }}>
        <h4>Síguenos</h4>
        <div className={styles.icons}>
          {socials.map(s => (
            <a key={s.label} href="#" className={styles.icon} aria-label={s.label}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill={s.fill ? 'currentColor' : 'none'} stroke={s.instagram ? 'currentColor' : 'none'} strokeWidth="2">
                {s.path && <path d={s.path} />}
                {s.instagram && <>
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </>}
                {s.tiktok && <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9a8.19 8.19 0 004.79 1.52V7.1a4.85 4.85 0 01-1.02-.41z"/>}
                {s.youtube && <path fill="currentColor" d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
