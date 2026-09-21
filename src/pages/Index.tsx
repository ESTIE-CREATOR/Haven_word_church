import { useState } from "react";
import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import LatestMessagesSection from "@/components/LatestMessagesSection";
import TelegramPrayerSection from "@/components/TelegramPrayerSection";
import LeadershipSection from "@/components/LeadershipSection";
import IntroAnimation from "@/components/IntroAnimation";
import { shouldPlayIntro } from "@/lib/intro";

const Index = () => {
  // The hero waits for the intro to start lifting before it animates in
  const [heroReady, setHeroReady] = useState(() => !shouldPlayIntro());

  return (
    <>
      <IntroAnimation onReveal={() => setHeroReady(true)} />
      <div className="min-h-screen flex flex-col overflow-x-clip max-w-full">
        <TubelightHeader />
        <main className="flex-grow">
          <Hero play={heroReady} />
          <MarqueeStrip />
          <WelcomeSection />
          <ServicesSection />
          <LatestMessagesSection />
          <TelegramPrayerSection />
          <LeadershipSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
