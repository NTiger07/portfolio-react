const stackGroups = [
  {
    name: 'Languages',
    pills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
  {
    name: 'Frontend',
    pills: ['React', 'Next.js', 'TailwindCSS', 'RadixUI', 'Material UI', 'Redux', 'Framer Motion'],
  },
  {
    name: 'Backend & Database',
    pills: ['Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Redis', 'REST API'],
  },
  {
    name: 'Tools & Infrastructure',
    pills: ['Docker', 'GitHub Actions', 'Firebase', 'Supabase', 'Cloudinary', 'MinIO', 'Git', 'Postman', 'Netlify'],
  },
]

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '48px' }}>Stack.</h2>
        <div className="stack-card">
          {stackGroups.map(group => (
            <div className="stack-group" key={group.name}>
              <p className="stack-group-name">{group.name}</p>
              <div className="stack-pills">
                {group.pills.map(pill => (
                  <span className="stack-pill" key={pill}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
