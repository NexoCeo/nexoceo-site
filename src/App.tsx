import Footer from '@/components/layout/footer/Footer'
import NexoEloPage from '@/pages/NexoEloPage'
import LegalPage from '@/pages/LegalPage'

import BrandSection from '@/components/sections/brand-section/BrandSection'
import ContactSection from '@/components/sections/contact-section/ContactSection'
import HeroSection from '@/components/sections/hero-section/HeroSection'
import MethodologySection from '@/components/sections/methodology-section/MethodologySection'
import ProductsSection from '@/components/sections/products-section/ProductsSection'
import WhyNexoSection from '@/components/sections/why-nexo-section/WhyNexoSection'

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '')
  if (pathname === '/politica-de-privacidade') return <LegalPage type="privacidade" />
  if (pathname === '/termos-de-uso') return <LegalPage type="termos" />
  if (window.location.pathname.replace(/\/$/, '') === '/nexoelo') {
    return <NexoEloPage />
  }

  return (
    <main>
      <HeroSection />

      <ProductsSection />

      <BrandSection />

      <MethodologySection />

      <WhyNexoSection />

      <ContactSection />

      <Footer />
    </main>
  )
}

export default App