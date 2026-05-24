import { HeroSection } from './components/HeroSection'
import { BackpackSection } from './components/BackpackSection'
import { JourneySection } from './components/JourneySection'
import { ScheduleSection } from './components/ScheduleSection'
import { RelaxSection } from './components/RelaxSection'
import { Footer } from './components/Footer'
import { FoodSection } from './components/FoodSection'
import { SoundtrackSection } from './components/SoundtrackSection'

function App() {
  return (
    <main>
      <HeroSection />
      <BackpackSection />
      <JourneySection />
      <ScheduleSection />
      <FoodSection />
      <SoundtrackSection />
      <RelaxSection />
      <Footer />
    </main>
  )
}

export default App