import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { WhatsAppButton } from '@/components/common'
import { AnimationEngine } from '@/components/effects'

export default function Layout({ children }) {
  const location = useLocation()
  const isUmrahListingsPage = location.pathname === '/umrah-packages'

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <AnimationEngine />
      {!isUmrahListingsPage && <Navbar />}
      {children}
      {!isUmrahListingsPage && <Footer />}
      {!isUmrahListingsPage && <WhatsAppButton />}
    </div>
  )
}
