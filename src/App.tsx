import Navbar from './components/navbar'
import HeroSection from './components/heroSection'
import Submenu from './components/submenu'
import HeroCarousel from './components/carousel/hero/heroCarousel'
import FeatureCarousel from './components/carousel/feature/featureCarousel'
import Footer from './components/footer'
import Banners from './components/banners'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Submenu />
      <HeroSection />
      <HeroCarousel />
      <FeatureCarousel />
      <Banners />
      <Footer />
    </>
  )
}

export default App