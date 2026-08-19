import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import {
  Home,
  About,
  HajjPackages,
  UmrahPackages,
  UmrahIndia,
  UmrahUAE,
  TailorMade,
  ZiyaratTours,
  NikkahMasjids,
  Contact,
  Visa
} from '@/pages'

export default function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  )
}
