import Footer from './components/layout/Footer'

import BrandSection from './components/sections/BrandSection'
import ContactSection from './components/sections/ContactSection'
import HeroSection from './components/sections/HeroSection'
import MethodologySection from './components/sections/MethodologySection'
import ProductsSection from './components/sections/ProductsSection'
import SocialProofSection from './components/sections/SocialProofSection'
import WhyNexoSection from './components/sections/WhyNexoSection'

function App() {
  return (
    <main>
      <HeroSection />

      <ProductsSection />

      <BrandSection />

      <MethodologySection />

      <WhyNexoSection />

      <SocialProofSection />

      <ContactSection />

      <Footer />
    </main>
  )
}

export default App