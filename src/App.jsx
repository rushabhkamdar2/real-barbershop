import { LangProvider } from './components/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Barbers from './components/Barbers'
import Reviews from './components/Reviews'
import MapSection from './components/MapSection'
import Info from './components/Info'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <LangProvider>
      <div className="grain-overlay bg-dark text-cream min-h-screen overflow-x-hidden pb-16 md:pb-0">
        <Navbar />
        <Hero />
        <Divider />
        <Barbers />
        <Divider />
        <Reviews />
        <Divider />
        <MapSection />
        <Info />
        <Footer />
        <FloatingCTA />
      </div>
    </LangProvider>
  )
}
