import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import BrandStory from './pages/BrandStory.jsx'
import Speciality from './pages/Speciality.jsx'
import Shades from './pages/Shades.jsx'
import BuyNow from './pages/BuyNow.jsx'

export default function App() {
  const location = useLocation()

  return (
    <>
      <div className="grain" />
      <CursorGlow />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<BrandStory />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/shades" element={<Shades />} />
          <Route path="/buy-now" element={<BuyNow />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
