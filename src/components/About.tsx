export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <h2 className="about-heading">
              Who<br />I am.
            </h2>
            <div className="photo-placeholder" style={{ background: 'none', display: 'block' }}>
              <img src="/favour.png" alt="Favour Olaleru" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', borderRadius: '4px' }} />
            </div>
          </div>
          <div className="about-right" style={{ paddingTop: '8px' }}>
            <p className="about-para">
              I'm a frontend engineer who can handle the backend too. I spend most of my time
              in React and Next.js: building UIs, wiring up state, getting the details right.
              But I've also built auth systems, real-time chat, AI pipelines, and payment integrations.
              So when something needs doing, I just do it.
            </p>
            <p className="about-para">
              9,000+ users on something I shipped. Top 3 in three hackathons. Right now I'm at
              CelerFi working on Web3 financial dashboards. I studied maths, which basically means
              I'm annoying about edge cases.
            </p>
            <p className="about-para" style={{ marginBottom: '40px' }}>
              Outside of work: AI stuff, anime, and a movie list I keep adding to but never clearing.
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
