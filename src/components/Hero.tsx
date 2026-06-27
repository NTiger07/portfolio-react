export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <h1 className="hero-name" style={{ fontSize: 'clamp(88px, 12vw, 160px)' }}>
          Favour Olaleru.
        </h1>
        <p className="hero-role">Fullstack Engineer.</p>
        <p className="hero-bio">
          I build clean, user-friendly interfaces and scalable backend systems.
          From frontend to backend, I thrive at the intersection of elegant
          design and performant engineering.
        </p>
        <div className="hero-cta">
          <a href="#experience" className="btn-primary">View Experience</a>
          <a href="/Favour_Olaleru_Resume.pdf" className="btn-ghost" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </div>
      <div className="hero-deco" aria-hidden="true">FO</div>
    </section>
  )
}
