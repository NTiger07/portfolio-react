import { useEffect, useRef, useState } from 'react'

const sections = ['about', 'experience', 'projects', 'stack', 'contact']

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState('')
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

  return (
    <div className={`nav-wrap${hidden ? ' hidden' : ''}`} id="nav-wrap">
      <nav>
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
    </div>
  )
}
