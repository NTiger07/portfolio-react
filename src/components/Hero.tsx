export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <h1 className="hero-name" style={{ fontSize: 'clamp(88px, 12vw, 160px)' }}>
          Favour Olaleru.
        </h1>
        <p className="hero-role">Fullstack Developer.</p>
        <p className="hero-bio">
          I build clean, user-friendly interfaces and scalable, well-structured
          systems — frontend to backend. Currently engineering at CelerFi Inc.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/Favour Olaleru Resume.pdf" className="btn-ghost" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </div>
      <div className="hero-deco" aria-hidden="true">FO</div>
    </section>
  )
}
