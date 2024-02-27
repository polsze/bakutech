import Clients from "./components/Clients"
import Company from "./components/Company"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { Navigation } from "./components/Navigation"
import Services from "./components/Services"

function App() {

  return (
    <>
      <div className="container">
      <Navigation></Navigation>
      <Hero></Hero>
      <Company></Company>
      <Services></Services>
      <Clients></Clients>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      </>
  )
}

export default App

