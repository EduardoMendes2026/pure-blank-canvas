import Header from './components/layout/Header'
import Loader from './components/ui/Loader'
import HeroSection from './components/sections/HeroSection'
import VitrineSection from './components/sections/VitrineSection'
import RoastingSection from './components/sections/RoastingSection'
import EssenceSection from './components/sections/EssenceSection'
import TorraInfoSection from './components/sections/TorraInfoSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'
import FloatingBean from './components/cinematic/FloatingBean'

function App() {
 return (
 <>
 <Loader />
 <Header />
 <main>
 <HeroSection />
 <FloatingBean />
 <VitrineSection />
 <RoastingSection />
 <EssenceSection />
 <TorraInfoSection />
 <ContactSection />
 </main>
 <Footer />
 </>
 )
}

export default App