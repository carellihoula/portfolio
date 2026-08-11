import { LangProvider } from './i18n/LangContext'
import { Corners } from './components/Corners'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <LangProvider>
      <Corners />
      <Header />
      <Contact />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Footer />
    </LangProvider>
  )
}

export default App
