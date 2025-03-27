import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {

  return (
    <div className="min-h-[100vh] w-[100vw] bg-[#0B0B22] text-white">
      <Header />
      <Hero />
      <Projects />
    </div>
  )
}

export default App
