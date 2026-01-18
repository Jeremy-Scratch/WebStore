import Navbar from './components/navbar'
import HeroSection from './components/heroSection'
import Submenu from './components/submenu'
import HeroCarousel from './components/carousel/hero/heroCarousel'
import FeatureCarousel from './components/carousel/feature/featureCarousel'
import Footer from './components/footer'
import Banners from './components/banners'
import './App.css'
import FeatureBlock from './components/featureBlock'
import CategoryCarousel from './components/carousel/categories/categories'

function App() {

  return (
    <>
      <Navbar />
      <Submenu />
      <HeroSection />
      <HeroCarousel />
      <FeatureCarousel />
      <Banners />
      <FeatureBlock/>
      <CategoryCarousel/>
      <Footer />
    </>
  )
}

export default App