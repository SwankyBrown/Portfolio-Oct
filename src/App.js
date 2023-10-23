import NavBar from "./components/NavBar"
import Intro from "./components/intro/Intro"
import Skills from "./components/Skills/Skills"
import Works from "./components/Works/Works"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App