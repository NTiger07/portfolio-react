import React from 'react'

interface ExperienceItem {
  company: string
  period: string
  role: string
  bullets: React.ReactNode[]
}

const b = (text: string): React.ReactNode => (
  <strong style={{ color: 'var(--text)', fontWeight: 500 }}>{text}</strong>
)

const experiences: ExperienceItem[] = [
  {
    company: 'Dailymanna.app',
    period: 'Feb 2026 — May 2026',
    role: 'Fullstack Engineer, Contract',
    bullets: [
      <span>Designed and implemented a secure, multi-platform OAuth authentication using direct ID token verification and custom rate limiting in {b('Express.js')}, enabling seamless access for over {b('9,000 active users')}.</span>,
      <span>Integrated robust payment processing using {b('Paystack')}, enabling secure in-app payments and revenue generation across the platform.</span>,
      <span>Engineered a timezone-aware gamification engine with {b('MongoDB')} to dynamically compute user streaks and reward points based on engagement, significantly improving daily active usage.</span>,
      <span>Engineered a robust cron scheduling system using {b('Node.js')} and {b('GitHub Actions')} to reliably automate daily AI content generation using {b('Claude via OpenRouter')}.</span>,
      <span>Maintained detailed API documentation via {b('Postman')} and Markdown, utilizing custom {b('Node.js')} testing scripts to rapidly validate AI integrations and gamification logic.</span>,
    ],
  },
  {
    company: 'Nextvibeco',
    period: 'Jan 2026 — Feb 2026',
    role: 'Fullstack Engineer, Contract',
    bullets: [
      <span>Engineered a real-time chat and gamification engine handling {b('1,000+ concurrent users')} with {b('<50ms latency')} using {b('Socket.io')}, {b('Express')}, and {b('Redis')}.</span>,
      <span>Architected an automated RSVP pipeline, eliminating {b('6+ hours')} of manual effort per event via background queues in {b('Redis')} and {b('MongoDB')}.</span>,
      <span>Enhanced a custom photo watermarking feature processing {b('10+ high-res images')} in {b('<2s')}, utilizing {b('Cloudinary')} and {b('MinIO')} for asset storage.</span>,
      <span>Orchestrated backend containerization, slashing developer setup time by {b('40%')} through isolated {b('Docker')} environments and {b('Husky')} pre-commit hooks.</span>,
      <span>Spearheaded the transition to an investor-ready platform, reducing event configuration time by {b('60%')} by integrating {b('OpenAI APIs')}.</span>,
    ],
  },
  {
    company: 'MerryText',
    period: 'Nov 2025',
    role: 'Fullstack Engineer, Contract',
    bullets: [
      <span>Built a RESTful API with {b('Node.js')} and {b('Express.js')} powering a festive messaging platform, enabling users to create, share, and track personalized greeting messages with unique shareable URLs.</span>,
      <span>Integrated {b('Stripe Checkout')} for a virtual MerryCoin economy, handling checkout session creation, webhook signature verification, and atomic coin balance updates on payment confirmation.</span>,
      <span>Engineered a full gamification engine with XP leveling (sqrt-based formula), achievement tracking with embedded {b('MongoDB')} subdocuments, streak counters, and a leaderboard API sortable by XP, level, or coins.</span>,
      <span>Integrated {b('Google Gemini AI')} for two template features: an AI Roast Generator and prompt-based message generation, with per-user rate limiting at {b('10 requests/min')} via {b('express-rate-limit')}.</span>,
    ],
  },
  {
    company: 'CelerFi Inc.',
    period: 'Aug 2025 — Present',
    role: 'Frontend Engineer',
    bullets: [
      <span>Constructed responsive B2B Web3 financial dashboards using {b('Next.js')} and {b('TypeScript')}, accelerating pre-beta client demonstrations by {b('40%')} through production-ready interface delivery.</span>,
      <span>Designed high-conversion landing page sections showcasing smart infrastructure, achieving a {b('95+ Lighthouse performance score')} via optimized SSR in {b('Next.js')}.</span>,
      <span>Developed fluid UI transitions for complex financial data visualizations by integrating {b('Framer Motion')}, improving prototype engagement metrics by {b('25%')}.</span>,
      <span>Pioneered a scalable component library with {b('TailwindCSS')} and {b('RadixUI')} during the initial build phase, reducing ongoing front-end development time by {b('35%')}.</span>,
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
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
