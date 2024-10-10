import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import Projects from "./components/projects/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Hobbies from "./components/Hobbies"



function App() {


  return (
    <div className="bg-slate-100 px-4 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-md shadow-lg pb-4">
        <Header/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Education/>
        <Hobbies/>

        <Contact/>
      </div>
    </div>
      
  )
}

export default App
