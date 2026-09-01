import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import PersonalProjects from './components/PersonalProjects'
import Stack from './components/Stack'
import Photos from './components/Photos'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTelegramTracking } from './hooks/useTelegramTracking'

export default function App() {
  useTelegramTracking()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <Experience />
        <PersonalProjects />
        <Stack />
        <Photos />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
