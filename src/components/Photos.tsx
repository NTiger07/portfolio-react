const photos = [
  { src: '/1778238392265.jpeg', alt: 'Candid moment' },
  { src: '/1778238389386.jpeg', alt: 'At work' },
  { src: '/1781225015595.jpeg', alt: 'Portrait' },
  { src: '/1777213516234.jpeg', alt: 'City vibes' },
  { src: '/1776983467502.jpeg', alt: 'Lifestyle' },
]

export default function Photos() {
  return (
    <section id="photos">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '48px' }}>A glimpse.</h2>
        <div className="photo-grid">
          {photos.map(photo => (
            <div className="photo-cell" key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
