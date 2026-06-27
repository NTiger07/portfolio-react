const photoCaptions = [
  'Photo — at work / building',
  'Photo — candid',
  'Photo — portrait / favourite shot',
  'Photo — city / Lagos',
  'Photo — lifestyle / hobbies',
]

export default function Photos() {
  return (
    <section id="photos">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '48px' }}>A glimpse.</h2>
        <div className="photo-grid">
          {photoCaptions.map(caption => (
            <div className="photo-cell" key={caption}>
              <span>{caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
