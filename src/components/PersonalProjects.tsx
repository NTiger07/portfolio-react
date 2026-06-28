import React from 'react'

interface Project {
  name: string
  desc: React.ReactNode
  tags: string[]
  links: { label: string; href: string }[]
  image: string
}

interface Achievement {
  placement: string
  title: string
  desc: string
}

const b = (text: string): React.ReactNode => (
  <strong style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{text}</strong>
)

const projects: Project[] = [
  {
    name: 'CraftID',
    desc: <span>An income identity engine that turns everyday client payments into {b('verified, bank-grade proof of income')} for Nigeria's 15M+ invisible artisans, built at the {b('Enyata × Interswitch Buildathon')}. Built on {b('Next.js')} and {b('TypeScript')}, backed by {b('Supabase (PostgreSQL)')}. Artisans create invoices with shareable {b('Interswitch WebPAY')} checkout links and QR codes; confirmed payments build a {b('CraftScore')} and generate a verifiable income claim PDF with embedded QR for bank verification. Placed {b('Top 10 of 500+')}.</span>,
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase', 'Interswitch', 'pdfmake', 'Vercel'],
    links: [{ label: 'Live Demo', href: 'https://craft-id-ecru.vercel.app/' }],
    image: '/craft.png',
  },
  {
    name: 'Bukka AI',
    desc: <span>Two {b('FastAPI')} AI agents built on the {b('Yelp Open Dataset')} with deep Nigerian cultural localisation, developed for the {b('DSN × Bluechip LLM Agent Challenge')}. {b('Task A')} generates realistic Nigerian-voice restaurant reviews using {b('Claude (Anthropic)')} with regional personas (Yoruba, Igbo, Hausa, Edo). {b('Task B')} runs a three-agent recommendation pipeline — preference analysis, domain translation, and personalised ranking — backed by 174 real reviews scraped from {b('Chowdeck')}. Placed {b('Top 8')} nationally.</span>,
    tags: ['Python', 'FastAPI', 'Claude AI', 'Multi-agent', 'NLP', 'Yelp Dataset', 'Vercel'],
    links: [{ label: 'Live Demo', href: 'https://bukkaai.vercel.app/' }],
    image: '/bukka.png',
  },
  {
    name: 'AI Image-to-LaTeX System',
    desc: <span>Built an {b('Express.js')} server integrating the {b('Google Gemini API')} to perform OCR, converting images of mathematical equations into LaTeX code with {b('95% accuracy')}. Used {b('Multer.js')} for file upload handling and applied robust error handling to manage API failures, invalid inputs, and file processing errors cleanly across all edge cases.</span>,
    tags: ['JavaScript', 'Express.js', 'Google Gemini API', 'Node.js', 'Multer.js'],
    links: [{ label: 'View Repo', href: 'https://github.com/NTiger07/gemini-latex' }],
    image: '/latex.png',
  },
  {
    name: 'Hotel Management System',
    desc: <span>A full-stack web app built with {b('React')}, {b('TypeScript')}, and {b('MongoDB')} for scheduling and managing hospital stays, with patient and doctor dashboards, appointment slot management, and real-time status updates. {b('Express.js')} powers the REST API backend, styled with {b('TailwindCSS')} and {b('Material UI')}. Deployed on {b('Render')}.</span>,
    tags: ['TypeScript', 'React', 'TailwindCSS', 'MUI', 'Express.js', 'MongoDB'],
    links: [
      { label: 'View Repo', href: 'https://github.com/NTiger07/hotel-src' },
      { label: 'Live Demo', href: 'https://hotelms.netlify.app/' },
    ],
    image: '/hotel.png',
  },
  {
    name: 'RiskGuard AI',
    desc: <span>An early-warning and decision-support system for operational telecom risk, built for {b('MTN Nigeria')} at the {b('Microsoft AI Skills Hackathon')}. Built with {b('FastAPI')} on the backend and {b('React + TypeScript')} on the frontend, the system detects emerging incidents in Lagos LGAs, explains them via grounded {b('AI agents')}, presents mitigation options for operator approval, tracks recovery, and generates an {b('NCC-ready evidence pack')}. Placed {b('3rd')} out of all competing teams.</span>,
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Vite', 'AI Agents', 'Microsoft Azure'],
    links: [],
    image: '',
  },
]

const achievements: Achievement[] = [
  {
    placement: '🥉 3rd Place',
    title: 'Microsoft AI Skills Hackathon',
    desc: 'Built and pitched RiskGuard AI, a real-time telecom risk intelligence platform designed for MTN Nigeria. The platform leverages AI to detect and surface risk signals across telecom operations, enabling faster, data-driven decision making. Placed 3rd out of competing teams at the Microsoft-organised event.',
  },
  {
    placement: '🏆 Top 8',
    title: 'DSN × Bluechip LLM Agent Challenge',
    desc: 'Built Bukka AI, a multi-agent Nigerian restaurant recommendation system powered by a three-agent pipeline: one agent for query understanding, one for restaurant matching, and one for personalised response generation. Placed Top 8 in a national challenge focused on real-world LLM agent applications.',
  },
  {
    placement: '🏆 Top 10 of 500+',
    title: 'Enyata × Interswitch Buildathon',
    desc: 'Built and pitched CraftID, a financial inclusion platform that converts informal artisans\' transaction and payment history into verifiable credit profiles, enabling access to formal financial services. Finished Top 10 out of 500+ participants at the Enyata and Interswitch-backed buildathon.',
  },
]

export default function PersonalProjects() {
  return (
    <>
      <section id="projects">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '48px' }}>Projects.</h2>
          <div className="project-list">
            {projects.map((project, idx) => (
              <div className={`project-card${!project.image ? ' project-card--no-image' : ''}`} key={project.name}>
                <div className="proj-left">
                  <p className="proj-number">{String(idx + 1).padStart(2, '0')}</p>
                  <h3 className="proj-name">{project.name}</h3>
                  <p className="proj-desc">{project.desc}</p>
                  <div className="proj-tags">
                    {project.tags.map(tag => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.links.length > 0 && (
                    <div className="proj-links">
                      {project.links.map(link => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="proj-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {project.image && (
                  <div className="proj-right">
                    <img src={project.image} alt={project.name} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '48px' }}>Achievements.</h2>
          <div className="achievement-list">
            {achievements.map(ach => (
              <div className="achievement-card" key={ach.title}>
                <span className="achievement-placement">{ach.placement}</span>
                <div className="achievement-body">
                  <p className="achievement-title">{ach.title}</p>
                  <p className="achievement-desc">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
