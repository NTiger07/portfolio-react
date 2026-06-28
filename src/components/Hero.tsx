export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <h1 className="hero-name" style={{ fontSize: 'clamp(88px, 12vw, 160px)' }}>
          Favour Olaleru.
        </h1>
        <p className="hero-role">Fullstack Engineer.</p>
        <p className="hero-bio">
          Software engineer passionate about scalable systems, AI-powered products,
          and shipping things that actually work. Currently building multi-chain DeFi
          infrastructure at CelerFi.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/Favour_Olaleru_Resume.pdf" className="btn-ghost" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </div>
      <div className="hero-deco" aria-hidden="true">FO</div>
    </section>
  )
}
