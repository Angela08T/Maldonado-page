import { useEffect, useState } from 'react'
import Loader    from './components/Loader/Loader'
import Navbar    from './components/Navbar/Navbar'
import Hero      from './components/Hero/Hero'
import Sobre     from './components/Sobre/Sobre'
import AlamedaPage   from './components/Avances/AlamedaPage'
import MarDelSurPage from './components/Avances/MarDelSurPage'
import ChalanPage    from './components/Avances/ChalanPage'
import EcoparkPage   from './components/Avances/EcoparkPage'
import EneroPage     from './components/Avances/EneroPage'
import PlazaPage     from './components/Avances/PlazaPage'
import Gestion   from './components/Gestion/Gestion'
import CircunvalacionPage from './components/Noticias/CircunvalacionPage'
import CantoGrandePage    from './components/Noticias/CantoGrandePage'
import AleCoworkingPage  from './components/Noticias/AleCoworkingPage'
import DonacionesPage   from './components/Donaciones/DonacionesPage'
import Galeria    from './components/Galeria/Galeria'
import CTA            from './components/CTA/CTA'
import Footer         from './components/Footer/Footer'
import ScrollTop      from './components/ScrollTop/ScrollTop'
import Zona           from './components/Zona/Zona'
import WalkingCharacter from './components/WalkingCharacter/WalkingCharacter'
import WhatsApp        from './components/WhatsApp/WhatsApp'
import EventoBanner      from './components/EventoBanner/EventoBanner'
import PersoneroBanner  from './components/PersoneroBanner/PersoneroBanner'
import PersoneroPage    from './components/Personero/PersoneroPage'
import Simpatizantes  from './components/Simpatizantes/Simpatizantes'
import EventosPage    from './components/Eventos/EventosPage'
import Encuestas      from './components/Encuestas/Encuestas'
import RendicionPage  from './components/Rendicion/RendicionPage'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const [page, setPage] = useState('home')
  useScrollReveal([page])

  /* Parallax on hero background */
  useEffect(() => {
    const heroBg = document.querySelector('[class*="Hero_bg"]')
    if (!heroBg) return
    const onScroll = () => {
      if (window.scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(1) translateY(${window.scrollY * 0.25}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Scroll progress bar ── */
  useEffect(() => {
    const bar = document.querySelector('.scroll-progress-bar')
    if (!bar) return
    const update = () => {
      const pct = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight) * 100
      bar.style.width = `${Math.min(pct, 100)}%`
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [page])

  /* ── Custom cursor ── */
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return
    const dot  = document.querySelector('.cursor-dot')
    const ring = document.querySelector('.cursor-ring')
    if (!dot || !ring) return

    let mx = -200, my = -200, rx = -200, ry = -200, rafId

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      dot.style.left  = mx + 'px'
      dot.style.top   = my + 'px'
    }
    window.addEventListener('mousemove', onMove)

    const lerp = (a, b, t) => a + (b - a) * t
    const tick = () => {
      rx = lerp(rx, mx, 0.1)
      ry = lerp(ry, my, 0.1)
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      rafId = requestAnimationFrame(tick)
    }
    tick()

    const addHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        if (el.dataset.cursorBound) return
        el.dataset.cursorBound = '1'
        el.addEventListener('mouseenter', () => { dot.classList.add('hovered'); ring.classList.add('hovered') })
        el.addEventListener('mouseleave', () => { dot.classList.remove('hovered'); ring.classList.remove('hovered') })
      })
    }
    addHover()
    const mo = new MutationObserver(addHover)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      mo.disconnect()
    }
  }, [])

  /* ── Card tilt + button ripple ── */
  useEffect(() => {
    const initTilt = () => {
      document.querySelectorAll('.tilt-card').forEach(card => {
        if (card.dataset.tiltBound) return
        card.dataset.tiltBound = '1'
        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect()
          const x = (e.clientX - r.left) / r.width  - 0.5
          const y = (e.clientY - r.top)  / r.height - 0.5
          card.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) translateZ(10px)`
          card.style.transition = 'transform 0.06s linear'
        })
        card.addEventListener('mouseleave', () => {
          card.style.transform = ''
          card.style.transition = 'transform 0.55s cubic-bezier(.34,1.2,.64,1)'
        })
      })
    }

    const initRipple = () => {
      document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
        if (btn.dataset.rippleBound) return
        btn.dataset.rippleBound = '1'
        btn.addEventListener('click', e => {
          const r   = btn.getBoundingClientRect()
          const sz  = Math.max(r.width, r.height)
          const sp  = document.createElement('span')
          sp.className = 'ripple'
          sp.style.cssText = `width:${sz}px;height:${sz}px;left:${e.clientX - r.left - sz / 2}px;top:${e.clientY - r.top - sz / 2}px`
          btn.appendChild(sp)
          setTimeout(() => sp.remove(), 700)
        })
      })
    }

    initTilt()
    initRipple()
    const mo = new MutationObserver(() => { initTilt(); initRipple() })
    mo.observe(document.body, { childList: true, subtree: true })
    return () => mo.disconnect()
  }, [page])

  const goHome = () => {
    setPage('home')
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      {/* Scroll progress */}
      <div className="scroll-progress"><div className="scroll-progress-bar" /></div>
      {/* Custom cursor */}
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <Loader />
      <Navbar page={page} setPage={setPage} />
      {page === 'zona' ? (
        <Zona onBack={goHome} />
      ) : page === 'simpatizantes' ? (
        <Simpatizantes onBack={goHome} />
      ) : page === 'eventos' ? (
        <EventosPage onBack={goHome} />
      ) : page === 'encuestas' ? (
        <Encuestas onBack={goHome} />
      ) : page === 'rendicion' ? (
        <RendicionPage onBack={goHome} />
      ) : page === 'alameda' ? (
        <AlamedaPage onBack={goHome} />
      ) : page === 'mardelasur' ? (
        <MarDelSurPage onBack={goHome} />
      ) : page === 'chalan' ? (
        <ChalanPage onBack={goHome} />
      ) : page === 'ecopark' ? (
        <EcoparkPage onBack={goHome} />
      ) : page === 'enero' ? (
        <EneroPage onBack={goHome} />
      ) : page === 'plaza' ? (
        <PlazaPage onBack={goHome} />
      ) : page === 'circunvalacion' ? (
        <CircunvalacionPage onBack={goHome} />
      ) : page === 'cantogr' ? (
        <CantoGrandePage onBack={goHome} />
      ) : page === 'ale' ? (
        <AleCoworkingPage onBack={goHome} />
      ) : page === 'donaciones' ? (
        <DonacionesPage onBack={goHome} />
      ) : page === 'personero' ? (
        <PersoneroPage onBack={goHome} />
      ) : (
        <>
          <main>
            <Hero setPage={setPage} />
            <Sobre />
            <Gestion />
            <Galeria />
          </main>
          <CTA />
          <Footer />
          <ScrollTop />
        </>
      )}
      <WalkingCharacter />
      <WhatsApp />
      {page !== 'personero' && <EventoBanner setPage={setPage} />}
      {page !== 'personero' && <PersoneroBanner setPage={setPage} />}
    </>
  )
}
