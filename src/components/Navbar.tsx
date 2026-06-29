import { useEffect, useRef, useState } from 'react'

const sections = ['about', 'experience', 'projects', 'achievements', 'stack', 'photos', 'contact']

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY
          setHidden(y > lastY.current && y > 80)
          lastY.current = y
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.35 }
      )
      io.observe(el)
      observers.push(io)
    })
    return () => observers.forEach(io => io.disconnect())
  }, [])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className={`nav-wrap${hidden ? ' hidden' : ''}`} id="nav-wrap">
        {/* Desktop nav */}
        <nav className="nav-desktop">
          <a href="#hero" className="nav-logo">Favour Olaleru</a>
          {sections.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link${active === id ? ' active' : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile nav */}
        <nav className="nav-mobile">
          <span className="nav-mobile-logo">
            {active ? active.charAt(0).toUpperCase() + active.slice(1) : 'Home'}
          </span>
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="nav-mobile-menu" onClick={() => setMenuOpen(false)}>
          <div className="nav-mobile-menu-inner" onClick={e => e.stopPropagation()}>
            {sections.map(id => (
              <button
                key={id}
                className={`nav-mobile-item${active === id ? ' active' : ''}`}
                onClick={() => handleNavClick(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
