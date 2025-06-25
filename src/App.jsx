import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import SocialBar from "./components/SocialBar"
import Home from "./pages/Home"
import About from "./pages/About"
// import Services from "./pages/Services"
// import Contact from "./pages/Contact"
// import Portfolio from "./pages/Portfolio"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4">
          <SocialBar />
          <Navbar />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}