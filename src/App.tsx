import Footer from '@/components/layout/footer/Footer'

import BrandSection from '@/components/sections/brand-section/BrandSection'
import ContactSection from '@/components/sections/contact-section/ContactSection'
import HeroSection from '@/components/sections/hero-section/HeroSection'
import MethodologySection from '@/components/sections/methodology-section/MethodologySection'
import ProductsSection from '@/components/sections/products-section/ProductsSection'
import SocialProofSection from '@/components/sections/social-proof-section/SocialProofSection'
import WhyNexoSection from '@/components/sections/why-nexo-section/WhyNexoSection'

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