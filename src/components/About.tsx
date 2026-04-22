export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="sec-label">01 — About</div>
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
              I'm a fullstack developer with a solid grasp of both frontend and backend tech.
              I create clean, user-friendly interfaces and build scalable, well-structured
              systems that support smooth, reliable performance.
            </p>
            <p className="about-para">
              I use these tools to create seamless user experiences, integrate third-party APIs,
              manage data efficiently, and ensure smooth interaction between the client and server.
              My goal is to write clean, readable code that is efficient, maintainable, and
              aligned with both user and business goals.
            </p>
            <p className="about-para">
              In my spare time, I research the newest advancements in AI — most especially as it
              helps developers — and I also like anime, games, and music.
            </p>
            <p className="about-para" style={{ marginBottom: '40px' }}>
              Currently studying{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Pure Mathematics</strong>{' '}
              at the University of Lagos, graduating August 2026.
            </p>
            <div className="socials">
              <a href="https://linkedin.com/in/favolaleru" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/ntiger07" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="mailto:falaleru@gmail.com" className="social-link">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
