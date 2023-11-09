import './App.css'
import Biography from './assets/components/Biography'
import Header from './assets/components/Header'
import Navbar from './assets/components/Navbar'
import SkillList from './assets/components/SkillList'
import ProjectList from './assets/components/ProjectList'
import Footer from './assets/components/Footer'


function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Biography/>
      <hr />
      <SkillList/>
      <hr />
      <ProjectList/>
      <Footer/>
    </>
  )
}

export default App
