import { LangProvider } from './components/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Barbers from './components/Barbers'
import Reviews from './components/Reviews'
import MapSection from './components/MapSection'
import Info from './components/Info'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <div className="grain-overlay bg-dark text-cream min-h-screen overflow-x-hidden">
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
      </div>
    </LangProvider>
  )
}
