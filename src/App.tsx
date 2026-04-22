import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Photos from './components/Photos'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Photos />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
