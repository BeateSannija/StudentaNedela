import { HeroSection } from "./components/HeroSection";
import { BackpackSection } from "./components/BackpackSection";
import { JourneySection } from "./components/JourneySection";
import { ScheduleSection } from "./components/ScheduleSection";
import { RelaxSection } from "./components/RelaxSection";
import { Footer } from "./components/Footer";
import { FoodSection } from "./components/FoodSection";
import { SoundtrackSection } from "./components/SoundtrackSection";
import { NavbarSection } from "./components/Navbar";
import SectionDivider from "./components/SectionDivider";

function App() {
  return (
    <main>
      <NavbarSection />
      <HeroSection />

      <BackpackSection />
      <SectionDivider />

      <JourneySection />
      <SectionDivider />

      <ScheduleSection />
      <SectionDivider />

      <FoodSection />
      <SectionDivider />

      <SoundtrackSection />
      <SectionDivider />
      
      <RelaxSection />

      <Footer />
    </main>
  );
}

export default App;
