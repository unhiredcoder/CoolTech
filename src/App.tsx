import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    <>
      <div className="min-h-screen bg-white font-['Poppins',sans-serif] ">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonial />
        <CTA />
        <Footer />
      </div>
    </>
  )
}

export default App