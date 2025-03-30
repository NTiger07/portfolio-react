import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <div className="relative min-h-[100vh] w-[100vw] bg-[#0B0B22] text-white">
      <div className="fixed right-[-10%] bottom-[25%] rotate-90 text-[.9rem] flex items-center gap-2">falaleru@gmail.com <span className="rounded flex bg-[#fff] h-[1.5px] w-[150px]" /></div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
