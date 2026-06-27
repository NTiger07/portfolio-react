import React from 'react'

interface Project {
  number: string
  name: string
  desc: React.ReactNode
  tags: string[]
  links: { label: string; href: string }[]
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
    number: '01 / 03',
    name: 'AI Image-to-LaTeX System',
    desc: <span>Built an {b('Express.js')} server integrating the {b('Google Gemini API')} to perform OCR, converting images of mathematical equations into LaTeX code with {b('95% accuracy')}. Applied robust error handling to manage API failures, invalid inputs, and file processing errors.</span>,
    tags: ['JavaScript', 'Express.js', 'Google Gemini API', 'Node.js', 'Multer.js'],
    links: [{ label: 'View Repo', href: 'https://github.com/ntiger07' }],
  },
  {
    number: '02 / 03',
    name: 'Hotel Management System',
    desc: <span>A full-stack web app built with {b('React')}, {b('TypeScript')}, and {b('MongoDB')} for scheduling and managing hospital stays, with patient and doctor dashboards, appointment slot management, and real-time status updates. Deployed on {b('OnRender')}.</span>,
    tags: ['TypeScript', 'React', 'TailwindCSS', 'MUI', 'Express.js', 'MongoDB'],
    links: [
      { label: 'View Repo', href: 'https://github.com/ntiger07' },
      { label: 'Live Demo', href: '#' },
    ],
  },
  {
    number: '03 / 03',
    name: 'Recipe App',
    desc: <span>A {b('React')} web application using the {b('Edamam API')} to retrieve and display recipes from user search queries, with clean browsing by ingredients, diet, cuisine origin and meal type. Deployed to {b('Netlify')}.</span>,
    tags: ['ReactJS', 'CSS3', 'Edamam API'],
    links: [
      { label: 'View Repo', href: 'https://github.com/ntiger07' },
      { label: 'Live Site', href: '#' },
    ],
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
    desc: 'Built Bukka AI, a multi-agent Nigerian restaurant recommendation system powered by a three-agent pipeline — one agent for query understanding, one for restaurant matching, and one for personalised response generation. Placed Top 8 in a national challenge focused on real-world LLM agent applications.',
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
          
          <h2 className="section-title" style={{ marginBottom: '48px' }}>Personal Projects.</h2>
          <div className="project-list">
            {projects.map(project => (
              <div className="project-card" key={project.name}>
                <div className="proj-left">
                  <p className="proj-number">{project.number}</p>
                  <h3 className="proj-name">{project.name}</h3>
                  <p className="proj-desc">{project.desc}</p>
                  <div className="proj-tags">
                    {project.tags.map(tag => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
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
                </div>
                <div className="proj-right">
                  <span>Project screenshot</span>
                </div>
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
