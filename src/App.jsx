import { useEffect } from 'react'
import Loader    from './components/Loader/Loader'
import Navbar    from './components/Navbar/Navbar'
import Hero      from './components/Hero/Hero'
import Stats     from './components/Stats/Stats'
import Avances   from './components/Avances/Avances'
import Gestion   from './components/Gestion/Gestion'
import Noticias  from './components/Noticias/Noticias'
import Galeria   from './components/Galeria/Galeria'
import CTA       from './components/CTA/CTA'
import Footer    from './components/Footer/Footer'
import ScrollTop from './components/ScrollTop/ScrollTop'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

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

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Avances />
        <Gestion />
        <Noticias />
        <Galeria />
      </main>
      <CTA />
      <Footer />
      <ScrollTop />
    </>
  )
}
