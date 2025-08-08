import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";

// home page
import { Hero } from "./components/Hero/hero";
import { Services } from "./components/services/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";
import Mission from "./components/Mission";
import Directors from "./components/Directors";
import Achievements from "./components/Achievements";
import ContactUs from "./components/ContactUs";
import ServicesWeOffer from "./components/ServicesWeOffer";
import FaqSection from "./components/Faq";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <WhyChooseUs />
                <Testimonial />
              </>
            }
          />

          {/* About Us Dropdown Pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/about/achievements" element={<Achievements />} />
          <Route path="/about/directors" element={<Directors />} />
          <Route path="/about/overview" element={<Mission />} />
          <Route path="/about/services" element={<ServicesWeOffer />} />
          <Route path="/faq" element={<FaqSection />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
