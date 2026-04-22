interface Project {
  number: string
  name: string
  desc: string
  tags: string[]
  links: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    number: '01 / 03',
    name: 'Hotel Management System',
    desc: 'A full-stack web app for scheduling and managing hospital stays, with patient and doctor dashboards, appointment slot management, and real-time status updates. Deployed on OnRender.',
    tags: ['TypeScript', 'React', 'TailwindCSS', 'MUI', 'ExpressJS', 'MongoDB'],
    links: [
      { label: 'View Repo', href: 'https://github.com/ntiger07' },
      { label: 'Live Demo', href: '#' },
    ],
  },
  {
    number: '02 / 03',
    name: 'AI Image-to-LaTeX',
    desc: 'Backend application built with Express.js that converts mathematical expressions in images into LaTeX code via Google Gemini AI, achieving 95% accuracy. Supports up to 5 concurrent image uploads via Multer.js.',
    tags: ['JavaScript', 'ExpressJS', 'Google Gemini AI', 'Multer.js', 'Node.js'],
    links: [{ label: 'View Repo', href: 'https://github.com/ntiger07' }],
  },
  {
    number: '03 / 03',
    name: 'Recipe App',
    desc: 'A React web application using the Edamam API to retrieve and display recipes from user search queries, with clean browsing by ingredients, diet, cuisine origin and meal type. Deployed to Netlify.',
    tags: ['ReactJS', 'CSS3', 'Edamam API'],
    links: [
      { label: 'View Repo', href: 'https://github.com/ntiger07' },
      { label: 'Live Site', href: '#' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="sec-label" style={{ marginBottom: 0 }}>03 — Projects</div>
          <span className="project-count">{projects.length} projects</span>
        </div>
        <h2 className="section-title" style={{ marginBottom: '48px' }}>Projects.</h2>
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
  )
}
