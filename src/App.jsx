import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import AnimationEngine from './components/AnimationEngine'
import Home from './pages/Home'
import About from './pages/About'
import HajjPackages from './pages/HajjPackages'
import UmrahPackages from './pages/UmrahPackages'
import UmrahIndia from './pages/UmrahIndia'
import UmrahUAE from './pages/UmrahUAE'
import TailorMade from './pages/TailorMade'
import ZiyaratTours from './pages/ZiyaratTours'
import NikkahMasjids from './pages/NikkahMasjids'
import Contact from './pages/Contact'
import Visa from './pages/Visa'

function AppContent() {
  const location = useLocation()
  const isUmrahListingsPage = location.pathname === '/umrah-packages'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <AnimationEngine />
      {!isUmrahListingsPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hajj-packages" element={<HajjPackages />} />
        <Route path="/umrah-packages" element={<UmrahPackages />} />
        <Route path="/umrah-india" element={<UmrahIndia />} />
        <Route path="/umrah-uae" element={<UmrahUAE />} />
        <Route path="/tailor-made" element={<TailorMade />} />
        <Route path="/customizedumrah" element={<TailorMade />} />
        <Route path="/ziyarat-tours" element={<ZiyaratTours />} />
        <Route path="/nikkah-masjids" element={<NikkahMasjids />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visa" element={<Visa />} />
      </Routes>
      {!isUmrahListingsPage && <Footer />}
      {!isUmrahListingsPage && <WhatsAppButton />}
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
