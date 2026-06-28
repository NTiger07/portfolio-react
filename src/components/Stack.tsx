const stackGroups = [
  {
    name: 'Languages',
    accent: '#B8995C',
    reverse: false,
    static: true,
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java'],
  },
  {
    name: 'Frontend',
    accent: '#7C9EE8',
    reverse: true,
    skills: ['React', 'Next.js', 'Framer Motion', 'TailwindCSS', 'RadixUI', 'Redux', 'Material UI', 'React', 'Next.js', 'Framer Motion', 'TailwindCSS', 'RadixUI', 'Redux', 'Material UI'],
  },
  {
    name: 'Backend & DB',
    accent: '#6ECFA0',
    reverse: false,
    skills: ['Node.js', 'Express.js', 'Socket.io', 'PostgreSQL', 'MongoDB', 'Redis', 'REST API', 'Node.js', 'Express.js', 'Socket.io', 'PostgreSQL', 'MongoDB', 'Redis', 'REST API'],
  },
  {
    name: 'Infra & Tools',
    accent: '#C47EE8',
    reverse: true,
    skills: ['Docker', 'GitHub Actions', 'Firebase', 'Supabase', 'Cloudinary', 'MinIO', 'Netlify', 'Docker', 'GitHub Actions', 'Firebase', 'Supabase', 'Cloudinary', 'MinIO', 'Netlify'],
  },
]

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '48px' }}>Stack.</h2>

        <div className="marquee-board">
          {stackGroups.map(group => (
            <div className="marquee-row" key={group.name}>
              {/* Fixed label */}
              <div
                className="marquee-label"
                style={{ color: group.accent }}
              >
                {group.name}
              </div>

              {/* Scrolling track */}
              <div className="marquee-track">
                <div
                  className="marquee-content"
                  style={{
                    animationDirection: group.reverse ? 'reverse' : 'normal',
                    ...(group.static ? { animation: 'none' } : {}),
                  }}
                >
                  {group.skills.map((skill, i) => (
                    <span key={`${skill}-${i}`} className="marquee-item" style={{ '--m-accent': group.accent } as React.CSSProperties}>
                      {skill}
                      <span className="marquee-sep" style={{ color: group.accent }}>✦</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
