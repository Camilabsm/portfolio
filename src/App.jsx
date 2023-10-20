import "./App.css"
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'
// import ProjectCarroussel from './components/ProjectCarroussel'
import GlobalStyles from './components/GlobalStyles'

function App() {
  
  return (
    <>
      <GlobalStyles/>
      <div className="portfolio">
        <Header />
        <Home /> 
        <AboutMe /> 
        <ContactMe /> 
        <Footer/> 
      </div>  
    </>
  )
}

export default App
