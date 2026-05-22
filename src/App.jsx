import { useEffect, useState } from 'react'
import Loader    from './components/Loader/Loader'
import Navbar    from './components/Navbar/Navbar'
import Hero      from './components/Hero/Hero'
import Stats     from './components/Stats/Stats'
import Sobre     from './components/Sobre/Sobre'
import Avances   from './components/Avances/Avances'
import Gestion   from './components/Gestion/Gestion'
import Noticias   from './components/Noticias/Noticias'
import Multimedia from './components/Multimedia/Multimedia'
import Galeria    from './components/Galeria/Galeria'
import CTA            from './components/CTA/CTA'
import Footer         from './components/Footer/Footer'
import ScrollTop      from './components/ScrollTop/ScrollTop'
import Zona           from './components/Zona/Zona'
import WalkingCharacter from './components/WalkingCharacter/WalkingCharacter'
import Simpatizantes  from './components/Simpatizantes/Simpatizantes'
import Eventos        from './components/Eventos/Eventos'
import EventosPage    from './components/Eventos/EventosPage'
import Encuestas      from './components/Encuestas/Encuestas'
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

  const goHome = () => {
    setPage('home')
    window.scrollTo({ top: 0 })
  }

  return (
    <>
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
      ) : (
        <>
          <main>
            <Hero />
            <Stats />
            <Sobre />
            <Avances />
            <Gestion />
            <Noticias />
            <Multimedia />
            <Eventos onVerTodos={() => { setPage('eventos'); window.scrollTo({ top: 0 }) }} />
            <Galeria />
          </main>
          <CTA />
          <Footer />
          <ScrollTop />
        </>
      )}
      <WalkingCharacter />
    </>
  )
}
