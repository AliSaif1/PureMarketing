import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import SocialBar from "./components/SocialBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ServicesRoutes from "./routes/ServicesRoutes"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Portfolio from "./pages/Portfolio"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-secondary-50">
        {/* Sticky header section */}
        <div className="sticky top-0 z-50 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4">
            <SocialBar />
            <Navbar />
          </div>
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Services modular route */}
            <Route path="/services/*" element={<ServicesRoutes />} />
            <Route path="/portfolio" element={< Portfolio/>} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}