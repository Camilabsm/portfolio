import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import ProjectCarroussel from './components/ProjectCarroussel'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import GlobalStyles from './components/GlobalStyles'

function App() {
  
  return (
    <>
      <GlobalStyles/>
      <div className="portfolio">
        <Header />
        <Home />
        <AboutMe />
        <ProjectCarroussel />
        <ContactMe /> 
        <Footer />       
      </div>   
    </>
  )
}

export default App
