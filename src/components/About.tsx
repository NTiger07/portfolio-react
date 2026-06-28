export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <h2 className="about-heading">
              Who<br />I am.
            </h2>
            <div className="photo-placeholder">
              <span>Portrait photo</span>
            </div>
          </div>
          <div className="about-right" style={{ paddingTop: '8px' }}>
            <p className="about-para">
              I'm Favour, a fullstack engineer and Mathematics student at the University of Lagos.
              I specialize in building backend systems that handle real load, including auth, real-time infra,
              and APIs, and integrating AI to make products smarter: from LLM-powered pipelines and
              multi-agent systems to AI-assisted features shipped in production.
            </p>
            <p className="about-para">
              I've shipped production systems serving 9,000+ users, placed in three competitive
              hackathons, and I'm currently engineering at CelerFi, a multi-chain DeFi protocol.
              My mathematics background shapes how I think about problems: precisely, structurally,
              and from first principles.
            </p>
            <p className="about-para" style={{ marginBottom: '40px' }}>
              When I'm not building, I'm deep in AI research, anime, or a game I'll probably never finish.
            </p>
            <div className="socials">
              <a href="https://linkedin.com/in/favolaleru" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/ntiger07" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://x.com/codedbyfavour" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
              <a href="mailto:falaleru@gmail.com" className="social-link">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
