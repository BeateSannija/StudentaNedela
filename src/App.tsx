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
import { useEffect, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <main>
      <NavbarSection isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection isDark={isDark} />

      <BackpackSection />
      <SectionDivider />

      <JourneySection />
      <SectionDivider />

      <ScheduleSection />
      <SectionDivider />

      <FoodSection isDark={isDark}/>
      <SectionDivider />

      <SoundtrackSection />
      <SectionDivider />

      <RelaxSection />
      <Footer />
    </main>
  );
}

export default App;
