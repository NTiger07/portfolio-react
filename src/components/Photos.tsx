// Images sorted by aspect ratio (width/height):
// 1776983453106 → 1.60 (wide landscape)  → slot 1: col 1-5, row 1
// 1776983467502 → 1.50 (landscape)        → slot 5: col 4-8, row 2
// 1778238389386 → 1.19 (squarish land.)   → slot 2: col 5-8, row 1
// 1777213516234 → 0.86 (near-square port) → slot 4: col 1-4, row 2
// 1778238392265 → 0.76 (portrait)         → slot 3b (unused as separate)
// 1781225015595 → 0.75 (tall portrait)    → slot 3: col 8-13, row 1-2

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
