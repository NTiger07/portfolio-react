interface ExperienceItem {
  company: string
  period: string
  role: string
  bullets: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: 'CelerFi Inc.',
    period: 'Aug 2025 — Present',
    role: 'Frontend Engineer',
    bullets: [
      'Constructed responsive B2B Web3 financial dashboards using Next.js and TypeScript, accelerating pre-beta client demonstrations by 40% through production-ready interface delivery.',
      'Designed high-conversion landing page sections showcasing smart infrastructure, achieving a 95+ Lighthouse performance score via optimized SSR in Next.js.',
      'Developed fluid UI transitions for complex financial data visualizations by integrating Framer Motion, improving prototype engagement metrics by 25%.',
      'Pioneered a scalable component library with TailwindCSS and RadixUI during the initial build phase, reducing ongoing front-end development time by 35%.',
    ],
  },
  {
    company: 'Nextvibeco',
    period: 'Jan 2026 — Feb 2026',
    role: 'Fullstack Engineer — Contract',
    bullets: [
      'Engineered a real-time chat and gamification engine handling 1,000+ concurrent users with <50ms latency using Socket.io, Express, and Redis.',
      'Architected an automated RSVP pipeline, eliminating 6+ hours of manual effort per event via background queues in Redis and MongoDB.',
      'Enhanced a custom photo watermarking feature processing 10+ high-res images in <2s, utilizing Cloudinary and MinIO for asset storage.',
      'Orchestrated backend containerization, slashing developer setup time by 40% through isolated Docker environments and Husky pre-commit hooks.',
      'Spearheaded the transition to an investor-ready platform, reducing event configuration time by 60% by integrating OpenAI APIs.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="sec-label">02 — Experience</div>
        <h2 className="section-title" style={{ marginBottom: '56px' }}>Experience.</h2>
        <div className="exp-list">
          {experiences.map(exp => (
            <div className="exp-item" key={exp.company}>
              <div className="exp-meta">
                <p className="exp-company">{exp.company}</p>
                <p className="exp-period">{exp.period}</p>
              </div>
              <div className="exp-content">
                <p className="exp-role">{exp.role}</p>
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
